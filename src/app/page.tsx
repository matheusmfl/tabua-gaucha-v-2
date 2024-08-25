'use client'
import { BenefitsSection } from "@/components/BenefitsSection";
import { CustomizeFurnitureSection } from "@/components/CustomizeFurnitureSection";
import { FAQ } from "@/components/Faq";
import { FeedbackSection } from "@/components/FeedbackSection";
import { Footer } from "@/components/Footer";
import { FormSection } from "@/components/FormSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InStockItemsSection } from "@/components/inStockItemsSection";
import { useEffect, useState } from "react";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verifica se a largura da janela é menor que 768px (padrão móvel)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Executa a verificação no carregamento e na mudança de tamanho da tela
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Site em Manutenção</h1>
        <p>A versão mobile está em desenvolvimento. Por favor, acesse via desktop.</p>
      </div>
    );
  }
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
