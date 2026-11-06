import HeroSection from "@/components/home/HeroSection";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import FourPillars from "@/components/home/FourPillars";
import ActiveCampaigns from "@/components/home/ActiveCampaigns";
import StudentPower from "@/components/home/StudentPower";
import FinancialTransparency from "@/components/home/FinancialTransparency";
import TestimonialsNews from "@/components/home/TestimonialsNews";
import CommunityBanner from "@/components/home/CommunityBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ImpactMetrics />
      <FourPillars />
      <ActiveCampaigns />
      <StudentPower />
      <FinancialTransparency />
      <TestimonialsNews />
      <CommunityBanner />
    </div>
  );
}
