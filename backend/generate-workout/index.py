import json
import os
import requests
import psycopg2


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


def handler(event: dict, context) -> dict:
    """Генерирует персональную тренировку с военным уклоном через OpenRouter"""

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

    prompt = f"""Составь персональную тренировку с военным уклоном.

Параметры:
- Тип: {type_label}
- Возраст: {age} лет
- Уровень подготовки: {level_label}
- Цели: {goals_str}

Структура тренировки:
1. 🔥 Разминка (5-10 минут) — 3-4 упражнения
2. 💪 Основная часть (20-30 минут) — 5-7 упражнений с военным уклоном (полоса препятствий, марш-броски, нормативы ГТО)
3. 🏁 Заминка (5 минут) — растяжка

Для каждого упражнения укажи: название, количество подходов/повторений/время.
Учитывай возраст и уровень подготовки. Пиши чётко, мотивирующе.
Ответ только на русском языке."""

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {os.environ['OPENROUTER_API_KEY']}",
            "Content-Type": "application/json",
        },
        json={
            "model": "deepseek/deepseek-r1:free",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.8,
            "max_tokens": 1000,
        },
        timeout=25,
    )
    response.raise_for_status()
    workout = response.json()["choices"][0]["message"]["content"]

    save_request(user_type, age, level, goals, workout)

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"workout": workout}, ensure_ascii=False),
    }