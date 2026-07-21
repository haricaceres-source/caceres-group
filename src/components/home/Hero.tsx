import { Button } from "@/components/ui/Button";
import { HERO_STATS } from "@/lib/constants";

/** Solid navy hero — institutional register, no background image. */
export function Hero() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-navy text-white">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-center px-6 pt-36 pb-28 md:pt-44 md:pb-36">
          <p className="hero-fade mb-5 text-[11px] font-medium tracking-[0.25em] text-gold uppercase [animation-delay:0ms]">
            Grupos Caceres
          </p>

          <h1 className="hero-fade max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl md:text-[2.75rem] lg:text-5xl [animation-delay:80ms]">
            Capital Access and Market Entry for Venezuela
          </h1>

          <p className="hero-fade mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-[1.05rem] [animation-delay:160ms]">
            We connect international capital and companies with vetted
            opportunities and execution partners across Venezuela&apos;s mining,
            pharmaceutical, and industrial sectors.
          </p>

          <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
            <Button href="/contact">Schedule a Consultation</Button>
            <Button
              href="/services"
              variant="secondary"
              className="!border-white/40 !text-white hover:!border-white hover:!bg-white hover:!text-navy"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      <StatsBar />
    </>
  );
}

function StatsBar() {
  return (
    <section className="border-b border-[var(--line)] bg-white dark:bg-[var(--background)]">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:grid-cols-3 md:gap-16 md:py-20">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-serif text-5xl font-medium tracking-tight text-navy md:text-6xl dark:text-white">
              {stat.value}
            </p>
            <div className="mx-auto mt-4 h-px w-10 bg-gold sm:mx-0" />
            <p className="mt-4 text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
              {stat.label}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
