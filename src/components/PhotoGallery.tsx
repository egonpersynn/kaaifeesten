import gallery1 from "@/assets/edities/20261004_Kaaifeesten_2026-15.jpg.asset.json";
import gallery2 from "@/assets/edities/20261003_Kaaifeesten_2026-10.jpg.asset.json";
import gallery3 from "@/assets/edities/20261003_Kaaifeesten_2026-15.jpg.asset.json";
import gallery4 from "@/assets/edities/20261004_Kaaifeesten_2026-29.jpg.asset.json";
import gallery5 from "@/assets/edities/20261004_Kaaifeesten_2026-39.jpg.asset.json";
import gallery6 from "@/assets/edities/20261004_Kaaifeesten_2026-40.jpg.asset.json";
import gallery7 from "@/assets/edities/20261004_Kaaifeesten_2026-52.jpg.asset.json";

const PhotoGallery = () => {
  const photos = [
    {
      src: gallery1.url,
      alt: "Bezoekers tussen de rommelmarktkramen in Eeklo",
    },
    {
      src: gallery2.url,
      alt: "Vrienden vieren samen de Kaaifeesten in de tent",
    },
    {
      src: gallery3.url,
      alt: "DJ achter de draaitafels in een volle feesttent",
    },
    {
      src: gallery4.url,
      alt: "Dansende bezoekers tijdens de Kaaifeesten",
    },
    {
      src: gallery5.url,
      alt: "Vriendinnen genieten van de sfeer in de feesttent",
    },
    {
      src: gallery6.url,
      alt: "Optreden voor het publiek in de feesttent",
    },
    { src: gallery7.url, alt: "Standhouders en bezoekers op de rommelmarkt" },
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
