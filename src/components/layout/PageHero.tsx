import { FadeIn } from "@/components/ui/FadeIn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Kept for call-site compatibility; page heroes are solid navy (no image). */
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-24 text-white">
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
        <FadeIn>
          <p className="mb-4 text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {description}
          </p>
          <div className="mt-10 h-px w-24 bg-gold/50" />
        </FadeIn>
      </div>
    </section>
  );
}
