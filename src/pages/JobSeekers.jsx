
import EmployerRecruitmentSection from "../components/HireTalent/EmployerRecruitmentSection";
import Hireheader from "../components/HireTalent/Hireheader";
import CareerHeroSection from "../components/JobSeekers/CareerHeroSection";
import JobAssistanceSection from "../components/JobSeekers/JobAssistanceSection";
import Jobheader from "../components/JobSeekers/Jobheader";

export default function JobSeekers() {
    return (
        <>
        <Jobheader />
        <JobAssistanceSection/>
        <CareerHeroSection/>
        <Hireheader />
        <EmployerRecruitmentSection />
        </>
    )
}