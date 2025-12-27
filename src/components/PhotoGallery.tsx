const PhotoGallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
      alt: "Festival sfeer",
    },
    {
      src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
      alt: "Live muziek",
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
      alt: "Avondprogramma",
    },
    {
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
      alt: "Publiek",
    },
    {
      src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop",
      alt: "Rommelmarkt",
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      alt: "Festival lichten",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Sfeerbeelden
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Beelden van vorige edities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 || index === 5 ? "md:col-span-1 md:row-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
