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

      {/* Light overlay so the HD mountain stays sharp and visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/45 via-navy/12 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-black/5" />

      <div className="relative z-10 mx-auto flex h-full min-h-[100svh] max-w-6xl flex-col justify-center px-6 pt-24 pb-16 md:pt-28">
        <p className="hero-fade mb-5 text-xs font-medium tracking-[0.28em] text-gold uppercase [animation-delay:0ms]">
          Grupos Caceres
        </p>

        <h1 className="hero-fade max-w-3xl text-4xl font-semibold tracking-tight text-balance drop-shadow-md sm:text-5xl md:text-6xl lg:text-[3.75rem] [animation-delay:80ms]">
          Your Strategic Partner for Doing Business in Venezuela
        </h1>

        <p className="hero-fade mt-6 max-w-2xl text-base leading-relaxed text-white/95 drop-shadow-sm md:text-lg [animation-delay:160ms]">
          The trusted gateway for international companies seeking to enter,
          operate, license, partner, and invest in Venezuela—with local
          knowledge and disciplined execution.
        </p>

        <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
          <Button
            href="/contact"
            className="!bg-gold !text-navy hover:!bg-gold-soft"
          >
            Schedule a Consultation
          </Button>
          <Button
            href="/services"
            variant="secondary"
            className="glass-dark !border-white/30 !text-white hover:!border-gold hover:!text-gold"
          >
            Explore Our Services
          </Button>
        </div>

        <p className="hero-fade mt-14 max-w-xl text-xs tracking-[0.18em] text-white/75 uppercase [animation-delay:320ms]">
          Caracas · Market Entry Advisory
        </p>
      </div>
    </section>
  );
}
