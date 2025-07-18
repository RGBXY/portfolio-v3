import ContactSection from "@/components/section/contact-section";
import ExperienceSection from "@/components/section/experience-section";
import ExpertiseSection from "@/components/section/expertise-section";
import HeroSection from "@/components/section/hero-section";
import ProjectSection from "@/components/section/project-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 w-full justify-center items-center pb-12">
      <HeroSection />
      <ExpertiseSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
