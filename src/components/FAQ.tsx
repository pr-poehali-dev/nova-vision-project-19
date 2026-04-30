import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Для какого возраста подходит платформа?",
      answer:
        "Платформа разработана для учеников 5–11 классов (11–18 лет). ИИ учитывает возраст и адаптирует нагрузку под физические возможности школьника.",
    },
    {
      question: "Нужно ли специальное оборудование?",
      answer:
        "Большинство тренировок можно выполнять на улице или в спортивном зале без специального оборудования. Если у тебя есть турник — отлично, если нет, ИИ предложит альтернативы.",
    },
    {
      question: "Что такое военный стиль подготовки?",
      answer:
        "Это элементы, применяемые в армейской физической подготовке: марш-броски, полоса препятствий, строевые упражнения, нормативы выносливости и силы. Всё адаптировано под школьный возраст.",
    },
    {
      question: "Подходит ли платформа для начинающих?",
      answer:
        "Да! При выборе уровня 'Начинающий' ИИ составит щадящую программу, которая постепенно наращивает нагрузку. Безопасность и здоровье — наш приоритет.",
    },
    {
      question: "Можно ли использовать тренировки для подготовки к ГТО?",
      answer:
        "Конечно! Выбери цель 'Подготовка к ГТО', укажи свой возраст и уровень — и ИИ составит программу, прицельно направленную на нормативы ГТО.",
    },
    {
      question: "Как часто нужно тренироваться?",
      answer:
        "Рекомендуется 3–4 тренировки в неделю. Каждый раз можно генерировать новую программу, чтобы тело не привыкало к одним и тем же упражнениям.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
