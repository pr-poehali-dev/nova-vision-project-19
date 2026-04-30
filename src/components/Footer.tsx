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
        <div className="border-t border-background/20 pt-8 space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white rounded-xl px-6 py-4 flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/projects/8b607951-b007-4370-a326-8117f0edd167/bucket/10d7a1e2-3ec2-42ed-93c7-b87b16292a06.png"
                alt="Факультет физической культуры и спорта"
                className="h-16 object-contain"
              />
            </div>
            <p className="text-sm text-background/70">Сайт создан при поддержке факультета физической культуры и спорта</p>
          </div>
          <div className="text-center text-sm text-background/70 space-y-2">
            <p>&copy; 2026 Мы — Будущее Поколение Страны. Все права защищены.</p>
            <p>Разработчики: Назарова Евгения, Шапкина Мария, Чугунова Дарья, Ерохин Егор, Степанов Андрей</p>
          </div>
        </div>
      </div>
    </footer>
  )
}