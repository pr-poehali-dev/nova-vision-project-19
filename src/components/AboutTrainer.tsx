export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/8b607951-b007-4370-a326-8117f0edd167/files/9fbd5958-2380-452b-b791-b53029815aa4.jpg"
              alt="Военная подготовка"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О платформе</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                ИИ знает, что нужно именно тебе
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Наш искусственный интеллект анализирует твои параметры и составляет индивидуальную программу тренировок с элементами военной подготовки — подходящую для твоего возраста и уровня физической подготовки.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Каждая тренировка включает упражнения на выносливость, силу, координацию и командные навыки — всё, что формирует настоящего бойца и здоровую личность.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Программа под твои цели</p>
                  <p className="text-sm text-muted-foreground">Выносливость, сила, скорость или ловкость</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Для 5–11 классов</p>
                  <p className="text-sm text-muted-foreground">Учитывает возраст и физическое развитие</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Военный стиль подготовки</p>
                  <p className="text-sm text-muted-foreground">Полоса препятствий, строй, нормативы ГТО</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
