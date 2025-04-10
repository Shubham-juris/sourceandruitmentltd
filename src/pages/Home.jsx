
import ConnectCandidates from "../components/Home/ConnectCandidates";
import ContactUs from "../components/Home/ContactUs";
import FeaturedJob from "../components/Home/FeaturedJob";
import HeroSection from "../components/Home/HeroSection";
import HowWeWorkSection from "../components/Home/HowWeWorkSection";
import RecruitmentAboutSection from "../components/Home/RecruitmentAboutSection";

export default function Home() {
    return (
        <>
        <HeroSection />
        <RecruitmentAboutSection />
        <FeaturedJob />
        <ConnectCandidates />
        <HowWeWorkSection />
        <ContactUs />

        
        </>
    )
}

