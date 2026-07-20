import Header from "../../shared/components/Header";
import PageWrapper from "../../shared/components/PageWrapper";
import Work from "../../shared/components/Work";
import CreatePlanBanner from "./components/CreatePlanBanner";
import CustomizePlan from "./components/CustomizePlan";

const Plan = () => {
  return (
    <PageWrapper>
      <Header />
      <div className="flex flex-col gap-[64px] md:gap-[80px] lg:gap-[140px]">
        <CreatePlanBanner />
        <Work />
        <CustomizePlan />
      </div>
    </PageWrapper>
  );
};

export default Plan;
