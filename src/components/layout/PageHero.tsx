import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { IMAGES } from "@/lib/images";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc = IMAGES.officeModern.src,
  imageAlt = IMAGES.officeModern.alt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] pt-20">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/88 via-navy/70 to-navy/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <p className="mb-3 text-[11px] font-medium tracking-[0.26em] text-gold uppercase">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-serif text-3xl font-medium leading-snug tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            {description}
          </p>
          <div className="gold-rule mt-8 max-w-xs" />
        </FadeIn>
      </div>
    </section>
  );
}
