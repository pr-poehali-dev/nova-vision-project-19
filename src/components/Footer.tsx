export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">М</span>
              </div>
              <span className="font-semibold">Мы — Будущее Поколение Страны</span>
            </div>
            <p className="text-sm text-background/70">ИИ-платформа персональных тренировок с военной подготовкой для школьников.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition">О платформе</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-background transition">Преимущества</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">Получить тренировку</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition">Отзывы</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#faq" className="hover:text-background transition">Вопросы и ответы</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">Контакты</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">Конфиденциальность</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Связаться</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">ВКонтакте</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">Telegram</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70 space-y-2">
          <p>&copy; 2025 Мы — Будущее Поколение Страны. Все права защищены.</p>
          <p>Разработчики: Назарова Евгения, Шапкина Мария, Чугунова Дарья, Ерохин Егор, Степанов Андрей</p>
        </div>
      </div>
    </footer>
  )
}