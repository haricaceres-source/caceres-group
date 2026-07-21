import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

/** Full first viewport — sole El Ávila image on the site. */
export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden text-white">
      <Image
        src={IMAGES.heroAvila.src}
        alt={IMAGES.heroAvila.alt}
        fill
        priority
        quality={100}
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Restrained overlay — denser institutional register, mountain remains visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/15" />

      <div className="relative z-10 mx-auto flex h-full min-h-[100svh] max-w-6xl flex-col justify-center px-6 pt-24 pb-16 md:pt-28">
        <p className="hero-fade mb-4 text-[11px] font-medium tracking-[0.28em] text-gold uppercase [animation-delay:0ms]">
          Grupos Caceres
        </p>

        <h1 className="hero-fade max-w-3xl font-serif text-3xl font-medium leading-[1.15] tracking-tight text-balance sm:text-4xl md:text-[2.75rem] lg:text-5xl [animation-delay:80ms]">
          Your Strategic Partner for Doing Business in Venezuela
        </h1>

        <p className="hero-fade mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-[1.05rem] [animation-delay:160ms]">
          Early-stage, high-touch advisory for international companies seeking
          to enter, operate, license, partner, and invest in Venezuela—with
          local judgment and disciplined execution.
        </p>

        <div className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
          <Button
            href="/contact"
            className="!bg-gold !text-navy hover:!bg-gold-soft"
          >
            Schedule a Consultation
          </Button>
          <Button
            href="/services"
            variant="secondary"
            className="glass-dark !border-white/25 !text-white hover:!border-white/45"
          >
            Explore Our Services
          </Button>
        </div>

        <p className="hero-fade mt-12 max-w-xl text-[11px] tracking-[0.22em] text-white/65 uppercase [animation-delay:320ms]">
          Caracas · Market Entry Advisory
        </p>
      </div>
    </section>
  );
}
