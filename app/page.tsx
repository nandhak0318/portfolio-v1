"use client"
import HeroSection from '@/components/HeroSection'
import ContentSection from "@/components/ContentSection"
import Cursor from '@/components/ui/Cursor'
export default function Home() {

  return (
    <>
    <Cursor/>
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <HeroSection />
        <ContentSection/>
      </div>
      </div>
    </>
  );
}
