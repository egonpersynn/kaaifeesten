import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Line-up zaterdagavond bekend",
    date: "Binnenkort",
    excerpt: "De eerste artiesten voor de zaterdagavond worden binnenkort bekendgemaakt. Blijf op de hoogte!",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Inschrijvingen rommelmarkt 2026",
    date: "1 januari 2026",
    excerpt: "Vanaf 1 januari 2026 kunnen standhouders van vorig jaar hun vaste plaats opnieuw boeken.",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Nieuwe parkeervoorzieningen",
    date: "Binnenkort",
    excerpt: "Dit jaar zijn er 9 verschillende parkings beschikbaar voor een vlotte toegang tot het evenement.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
];

const LatestNews = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Nieuws
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Latest News
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-primary text-sm font-semibold">
                  {item.date}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
