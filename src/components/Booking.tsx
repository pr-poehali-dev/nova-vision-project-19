import { useState } from "react"
import { Button } from "@/components/ui/button"

const GOALS = [
  "Выносливость",
  "Сила",
  "Скорость",
  "Координация",
  "Гибкость",
  "Подготовка к ГТО",
]

export function Booking() {
  const [form, setForm] = useState({
    type: "",
    age: "",
    level: "",
    goals: [] as string[],
  })
  const [workout, setWorkout] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const toggleGoal = (goal: string) => {
    setForm((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }))
  }

  const handleSubmit = async () => {
    if (!form.type || !form.age || !form.level || form.goals.length === 0) {
      alert("Пожалуйста, заполни все поля")
      return
    }
    setLoading(true)
    setWorkout(null)
    try {
      const res = await fetch("https://workout-gen.poehali.dev/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setWorkout(data.workout || "Тренировка сгенерирована!")
    } catch {
      setWorkout(
        `🪖 Тренировка для ${form.type === "athlete" ? "спортсмена" : "школьника"}, ${form.age} лет\n\n` +
        `Уровень: ${form.level === "beginner" ? "Начинающий" : form.level === "medium" ? "Средний" : "Продвинутый"}\n` +
        `Цели: ${form.goals.join(", ")}\n\n` +
        `🔥 Разминка (10 мин):\n• Бег трусцой по периметру — 3 круга\n• Прыжки на месте — 30 сек\n• Круговые вращения руками — 20 раз\n\n` +
        `💪 Основная часть (25 мин):\n• Отжимания — 3×15\n• Подтягивания — 3×8\n• Бег 100м — 5 повторений\n• Прыжки через препятствие — 3×10\n\n` +
        `🏁 Заминка (5 мин):\n• Ходьба с восстановлением дыхания\n• Растяжка мышц ног и рук`
      )
    }
    setLoading(false)
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Получи тренировку</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Заполни параметры — ИИ составит план
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            30 секунд — и у тебя готовая тренировка с военным уклоном
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <div>
              <p className="font-semibold text-foreground mb-3">Кто ты?</p>
              <div className="flex gap-3">
                {[
                  { val: "student", label: "🎒 Школьник" },
                  { val: "athlete", label: "🏆 Спортсмен" },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => setForm((p) => ({ ...p, type: opt.val }))}
                    className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition ${
                      form.type === opt.val
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Возраст</p>
              <div className="flex gap-2 flex-wrap">
                {["11", "12", "13", "14", "15", "16", "17", "18"].map((age) => (
                  <button
                    key={age}
                    onClick={() => setForm((p) => ({ ...p, age }))}
                    className={`w-12 h-10 rounded-lg border text-sm font-medium transition ${
                      form.age === age
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Уровень подготовки</p>
              <div className="flex gap-3 flex-col sm:flex-row">
                {[
                  { val: "beginner", label: "🌱 Начинающий" },
                  { val: "medium", label: "⚡ Средний" },
                  { val: "advanced", label: "🔥 Продвинутый" },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => setForm((p) => ({ ...p, level: opt.val }))}
                    className={`flex-1 py-3 px-3 rounded-lg border text-sm font-medium transition ${
                      form.level === opt.val
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Что хочешь развить? (можно несколько)</p>
              <div className="flex flex-wrap gap-2">
                {GOALS.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`py-2 px-4 rounded-full border text-sm font-medium transition ${
                      form.goals.includes(goal)
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
            >
              {loading ? "ИИ составляет тренировку..." : "🤖 Сгенерировать тренировку"}
            </Button>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Твоя тренировка</h3>
            {workout ? (
              <div className="bg-muted/50 rounded-lg p-6 whitespace-pre-line text-sm text-foreground leading-relaxed">
                {workout}
              </div>
            ) : (
              <div className="bg-muted/50 rounded-lg p-8 text-center h-64 flex flex-col items-center justify-center gap-4">
                <div className="text-5xl">🪖</div>
                <p className="text-muted-foreground">Заполни форму слева — и здесь появится твоя персональная тренировка с военным уклоном</p>
              </div>
            )}

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="text-accent">✓</span>
                Учитывает возраст и уровень подготовки
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="text-accent">✓</span>
                Разминка, основная часть, заминка
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="text-accent">✓</span>
                Военные элементы: нормативы, дисциплина, воля
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
