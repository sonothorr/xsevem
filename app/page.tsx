import { Noise } from '@/components/Noise';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { AboutSection } from '@/components/AboutSection';
import { CaseStudy } from '@/components/CaseStudy';
import { FooterSection } from '@/components/FooterSection';

export default function Portfolio() {
  return (
    <main className="relative w-full bg-ds-black text-ds-white selection:bg-ds-white selection:text-ds-black">
      <Noise />
      {/* Container principal para o scroll fluido - se necessário, pode-se usar lenis no futuro */}
      <div className="w-full">
        <HeroSection />
        <StatsSection />
        <AboutSection />

        <CaseStudy
          title="SITE"
          subtitle="SITE"
          bgColor="bg-green-500"
          textColor="text-ds-white"
          index={1}
          mainImage="/nathan.webp"
          bgImage1="/nathan1.webp"
          bgImage2="/nathan1.webp"
          link="https://nathan-bay.vercel.app/"
          zIndex={130}
          topOffset={0}
        />

        <div className="-mt-[100vh] md:-mt-[100vh]">
          <CaseStudy
            title="MEDIA"
            subtitle="MEDIA/BRAND/TRAFEGO PAGO"
            bgColor="bg-ds-blue-strong"
            textColor="text-ds-white"
            index={2}
            mainImage="/pradapay.webp"
            bgImage1="/pradapay1.webp"
            bgImage2="/pradapay1.webp"
            link="https://www.instagram.com/pradapayoficial/"
            zIndex={120}
            topOffset={0}
          />
        </div>

        <div className="-mt-[100vh] md:-mt-[100vh]">
          <CaseStudy
            title="SAAS"
            subtitle="SAAS"
            bgColor="bg-ds-surface-1"
            textColor="text-ds-white"
            index={3}
            mainImage="/gestaodebanca.webp"
            bgImage1="/gestaodebanca2.webp"
            bgImage2="/gestaodebanca2.webp"
            link="https://bancaplaydolar.netlify.app/"
            zIndex={110}
            topOffset={0}
          />
        </div>

        <FooterSection />
      </div>
    </main>
  );
}
