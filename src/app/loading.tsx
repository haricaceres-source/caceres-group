export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="page-progress animate-pulse" />
        <div className="flex h-12 w-12 items-center justify-center border border-gold/40 bg-navy">
          <span className="font-serif text-sm font-semibold tracking-[0.12em] text-gold">
            GC
          </span>
        </div>
        <p className="text-xs tracking-[0.22em] text-[var(--muted)] uppercase">
          Grupos Caceres
        </p>
      </div>
    </div>
  );
}
