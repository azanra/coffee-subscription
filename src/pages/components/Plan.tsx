import CreatePlanBanner from "./plan/CreatePlanBanner";
import CustomizePlan from "./plan/CustomizePlan";
import Header from "./shared/Header";
import Work from "./shared/Work";

const Plan = () => {
  return (
    <div>
      <Header />
      <CreatePlanBanner />
      <Work withBtn={false} />
      <CustomizePlan />
    </div>
  );
};

export default Plan;
