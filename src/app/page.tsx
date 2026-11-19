import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedVendors } from "@/components/home/FeaturedVendors";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PartnerCTA } from "@/components/home/PartnerCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedVendors />
      <HowItWorks />
      <PartnerCTA />
    </main>
  );
}
