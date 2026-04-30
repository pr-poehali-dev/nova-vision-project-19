import json
import os
import uuid
import requests
import urllib3
import psycopg2

urllib3.disable_warnings()


def save_request(user_type, age, level, goals, workout):
    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO workout_requests (user_type, age, level, goals, workout_result) VALUES (%s, %s, %s, %s, %s)",
        (user_type, age, level, goals, workout),
    )
    conn.commit()
    cur.close()
    conn.close()


def get_gigachat_token(auth_key: str) -> str:
    """Получить access token от GigaChat"""
    response = requests.post(
        "https://ngw.devices.sberbank.ru:9443/api/v2/oauth",
        headers={
            "Authorization": f"Basic {auth_key}",
            "RqUID": str(uuid.uuid4()),
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
        },
        data="scope=GIGACHAT_API_PERS",
        verify=False,
        timeout=10,
    )
    response.raise_for_status()
    return response.json()["access_token"]


def handler(event: dict, context) -> dict:
    """Генерирует персональную тренировку с военным уклоном через GigaChat"""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    user_type = body.get("type", "student")
    age = body.get("age", "14")
    level = body.get("level", "beginner")
    goals = body.get("goals", [])

    type_label = "спортсмен" if user_type == "athlete" else "школьник"
    level_map = {"beginner": "начинающий", "medium": "средний", "advanced": "продвинутый"}
    level_label = level_map.get(level, "начинающий")
    goals_str = ", ".join(goals) if goals else "общая физическая подготовка"

    prompt = f"""Составь персональную тренировку с военным уклоном для школьника.

Параметры:
- Тип: {type_label}
- Возраст: {age} лет
- Уровень подготовки: {level_label}
- Цели: {goals_str}

Структура тренировки:
1. 🔥 Разминка (5-10 минут) — 3-4 упражнения
2. 💪 Основная часть (20-30 минут) — 5-7 упражнений с военным уклоном (полоса препятствий, марш-броски, строевые элементы, нормативы ГТО)
3. 🏁 Заминка (5 минут) — растяжка

Для каждого упражнения укажи: название, количество подходов/повторений/время.
Учитывай возраст и уровень подготовки. Пиши чётко, по-военному, мотивирующе.
Ответ только на русском языке."""

    try:
        auth_key = os.environ["GIGACHAT_API_KEY"]
        token = get_gigachat_token(auth_key)

        response = requests.post(
            "https://gigachat.devices.sberbank.ru/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json",
            },
            json={
                "model": "GigaChat",
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.7,
                "max_tokens": 1000,
            },
            verify=False,
            timeout=25,
        )
        response.raise_for_status()
        workout = response.json()["choices"][0]["message"]["content"]
    except Exception as e:
        level_label_map = {"beginner": "Начинающий", "medium": "Средний", "advanced": "Продвинутый"}
        type_ru = "спортсмена" if user_type == "athlete" else "школьника"
        workout = (
            f"🪖 Тренировка для {type_ru}, {age} лет\n\n"
            f"Уровень: {level_label_map.get(level, 'Начинающий')}\n"
            f"Цели: {goals_str}\n\n"
            f"🔥 Разминка (10 мин):\n• Бег трусцой — 3 круга\n• Прыжки на месте — 30 сек\n• Круговые вращения руками — 20 раз\n\n"
            f"💪 Основная часть (25 мин):\n• Отжимания — 3×15\n• Подтягивания — 3×8\n• Бег 100м — 5 повторений\n• Прыжки через препятствие — 3×10\n\n"
            f"🏁 Заминка (5 мин):\n• Ходьба с восстановлением дыхания\n• Растяжка мышц ног и рук"
        )

    save_request(user_type, age, level, goals, workout)

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"workout": workout}, ensure_ascii=False),
    }