import PageWrapper from "../../shared/components/PageWrapper";
import CreatePlanBanner from "../components/plan/CreatePlanBanner";
import CustomizePlan from "../components/plan/CustomizePlan";
import Header from "../components/shared/Header";
import Work from "../components/shared/Work";

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
