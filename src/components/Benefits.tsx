export function Benefits() {
  const benefits = [
    {
      icon: "🤖",
      title: "ИИ-генерация за 30 секунд",
      description: "Введи параметры — и получи готовую программу тренировок мгновенно",
    },
    {
      icon: "🎯",
      title: "Под твой уровень",
      description: "Новичок, любитель или спортсмен — ИИ учтёт твою подготовку",
    },
    {
      icon: "🪖",
      title: "Военный стиль",
      description: "Полосы препятствий, марш-броски, строевая, нормативы ГТО",
    },
    {
      icon: "💪",
      title: "Развитие физических качеств",
      description: "Выносливость, сила, скорость, координация — выбирай сам",
    },
    {
      icon: "📋",
      title: "Готовый план на день",
      description: "Разминка, основная часть, заминка — всё расписано по минутам",
    },
    {
      icon: "🏅",
      title: "Подготовка к нормативам",
      description: "Тренировки, которые помогут сдать ГТО и школьный норматив по физкультуре",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему мы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для твоей подготовки
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Персональные тренировки с военным уклоном — доступно каждому школьнику
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
