import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TargetSection from "@/components/TargetSection";
import ModulesSection from "@/components/ModulesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <TargetSection />
      <ModulesSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
      <footer className="py-6 bg-section-dark text-center">
        <p className="text-primary-foreground/40 text-xs font-body">
          © 2026 Destrave seu Emagrecimento. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
