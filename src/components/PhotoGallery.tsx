export function PhotoGallery() {
  const photos = [
    {
      src: "https://cdn.poehali.dev/projects/8b607951-b007-4370-a326-8117f0edd167/files/3df6f05f-ad57-4594-a753-10a8f59b0ec8.jpg",
      caption: "Физическая подготовка на плацу",
    },
    {
      src: "https://cdn.poehali.dev/projects/8b607951-b007-4370-a326-8117f0edd167/files/9fbd5958-2380-452b-b791-b53029815aa4.jpg",
      caption: "Полоса препятствий",
    },
    {
      src: "https://cdn.poehali.dev/projects/8b607951-b007-4370-a326-8117f0edd167/files/ef25b395-ef91-4a27-9804-d388876f0842.jpg",
      caption: "Силовые упражнения",
    },
  ]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Как это выглядит</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Военная подготовка в действии
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
