export function Testimonials() {
  const testimonials = [
    {
      name: "Артём, 16 лет",
      role: "10 класс, г. Москва",
      image: "/professional-man-headshot.png",
      quote:
        "Получил тренировку под свой уровень за минуту. Раньше не знал с чего начать, а теперь занимаюсь каждый день. Уже сдал ГТО на золотой значок!",
    },
    {
      name: "Даниил, 14 лет",
      role: "8 класс, г. Санкт-Петербург",
      image: "/professional-man-headshot.png",
      quote:
        "Круто, что тренировки именно с военным стилем. Мечтаю о военной карьере, и эта платформа помогает готовиться системно.",
    },
    {
      name: "Алексей, 17 лет",
      role: "11 класс, г. Казань",
      image: "/professional-man-headshot.png",
      quote:
        "За 2 месяца подтянулся с 5 до 15 раз. ИИ реально учитывает мой прогресс и даёт нагрузку, которая работает.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Истории успеха</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Что говорят ребята</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-xl">
                  🪖
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
