import { ArrowDownRight } from "lucide-react";

interface PageBannerProps { title: string; eyebrow: string; description?: string; image?: string }
export default function PageBanner({ title, eyebrow, description, image }: PageBannerProps) {
  return <section className="page-banner bg-primary text-primary-foreground">
    {image && <img src={image} alt="" className="banner-photo" />}
    {image && <div className="banner-shade" />}
    <div className="container relative z-10">
      <p className="eyebrow mb-8">{eyebrow}</p>
      <div className="flex items-end justify-between gap-6"><h1>{title}</h1><ArrowDownRight className="hidden md:block h-16 w-16 shrink-0" strokeWidth={1} /></div>
      {description && <p className="mt-6 text-lg max-w-xl text-primary-foreground/80">{description}</p>}
    </div>
  </section>;
}