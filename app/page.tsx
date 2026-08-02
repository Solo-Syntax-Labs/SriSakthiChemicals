import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import HeroSlider from "@/components/HeroSlider";
import PlantSlider from "@/components/PlantSlider";
import ProductRange from "@/components/ProductRange";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <div className="home-page">
        <HeroSlider />
        <AboutSection />
        <ProductRange />
        <PlantSlider />
        <ClientsSection />
      </div>
    </SiteShell>
  );
}
