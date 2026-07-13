import Header from "../../shared/components/Header";
import PageWrapper from "../../shared/components/PageWrapper";
import Work from "../../shared/components/Work";
import CreatePlanBanner from "./components/CreatePlanBanner";
import CustomizePlan from "./components/CustomizePlan";

const Plan = () => {
  return (
    <PageWrapper>
      <Header />
      <CreatePlanBanner />
      <Work withBtn={false} />
      <CustomizePlan />
    </PageWrapper>
  );
};

export default Plan;
