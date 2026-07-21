import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { HomeSections } from "@/components/home/HomeSections";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Grupos Caceres | Capital & Market Entry Advisory — Venezuela",
  },
  description: SITE.description,
  alternates: {
    canonical: SITE.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSections />
    </>
  );
}
