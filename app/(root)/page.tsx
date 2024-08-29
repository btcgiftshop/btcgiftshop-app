import HeroSection from "@/components/HeroSection";
import Collections from "@/components/Collections";
import GiftList from "@/components/GiftList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Collections />
      <GiftList />
    </>
  );
}

export const dynamic = "force-dynamic";

