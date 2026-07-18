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
        <div className="absolute inset-0 bg-navy/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/65 to-navy/45" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-gold uppercase">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {description}
          </p>
          <div className="gold-rule mt-10 max-w-xs" />
        </FadeIn>
      </div>
    </section>
  );
}
