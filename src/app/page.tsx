import { BenefitsSection } from "@/components/BenefitsSection";
import { CustomizeFurnitureSection } from "@/components/CustomizeFurnitureSection";
import { FAQ } from "@/components/Faq";
import { FeedbackSection } from "@/components/FeedbackSection";
import { Footer } from "@/components/Footer";
import { FormSection } from "@/components/FormSection";
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
      <FeedbackSection />
      <FAQ />
      <FormSection />
      <Footer />
    </div>
  );
}
