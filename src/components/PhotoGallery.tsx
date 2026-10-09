import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";

const PhotoGallery = () => {
  const photos = [
    {
      src: gallery1,
      alt: "DJ op het podium",
    },
    {
      src: gallery2,
      alt: "Bezoekers en families",
    },
    {
      src: gallery3,
      alt: "Live muziek",
    },
    {
      src: gallery5,
      alt: "Feestend publiek",
    },
    {
      src: gallery4,
      alt: "Zanger op het podium",
    },
    {
      src: gallery6,
      alt: "Seniorennamiddag",
    },
  ];

  return (
    <section className="photo-section py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Sfeerbeelden
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Dit was de Kaai.
          </h2>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
