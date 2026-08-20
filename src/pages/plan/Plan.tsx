import Footer from "../../shared/components/Footer";
import Header from "../../shared/components/Header";
import PageWrapper from "../../shared/components/PageWrapper";
import Work from "../../shared/components/Work";
import CreatePlanBanner from "./components/CreatePlanBanner";
import CustomizePlan from "./components/CustomizePlan";

const Plan = () => {
  return (
    <PageWrapper>
      <Header />
      <main className="flex flex-col gap-[64px] md:gap-[80px] xxl:gap-[140px]">
        <CreatePlanBanner />
        <Work />
        <CustomizePlan />
        <Footer />
      </main>
    </PageWrapper>
  );
};

export default Plan;
