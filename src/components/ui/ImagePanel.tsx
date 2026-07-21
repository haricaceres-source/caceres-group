import Image from "next/image";
import { cn } from "@/lib/utils";

type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  priority?: boolean;
};

export function ImagePanel({
  src,
  alt,
  className,
  overlay = true,
  priority = false,
}: ImagePanelProps) {
  return (
    <div
      className={cn(
        "img-duotone-wrap relative min-h-[280px] overflow-hidden rounded-none md:min-h-[360px]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="img-duotone object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-navy/35" />
      )}
    </div>
  );
}
