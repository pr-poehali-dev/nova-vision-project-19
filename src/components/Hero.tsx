import { Button } from "@/components/ui/button"

export function Hero() {
  const handleGetWorkout = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const benefitsSection = document.getElementById("benefits")
    benefitsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium">ИИ-тренировки для школьников</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Военная подготовка с персональным ИИ-тренером
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Получи персональную тренировку с элементами военной подготовки — за 30 секунд. Просто укажи свои параметры и ИИ составит программу именно для тебя.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleGetWorkout}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base"
              >
                Получить тренировку
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Узнать больше
              </Button>
            </div>
            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">1000+</p>
                <p className="text-muted-foreground">Тренировок создано</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">5–17</p>
                <p className="text-muted-foreground">Классы</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">30 сек</p>
                <p className="text-muted-foreground">Время генерации</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/8b607951-b007-4370-a326-8117f0edd167/files/3df6f05f-ad57-4594-a753-10a8f59b0ec8.jpg"
              alt="Военная подготовка школьников"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
