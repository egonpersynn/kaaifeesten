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
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Sfeerbeelden
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Vorige Edities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;