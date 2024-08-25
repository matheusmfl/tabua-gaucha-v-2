import { BenefitsSection } from "@/components/BenefitsSection";
import { CustomizeFurnitureSection } from "@/components/CustomizeFurnitureSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InStockItemsSection } from "@/components/inStockItemsSection";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <BenefitsSection />
      <InStockItemsSection />
      <CustomizeFurnitureSection />
    </div>
  );
}
