import CreatePlanBanner from "./CreatePlanBanner";
import CustomizePlan from "./CustomizePlan";
import Header from "./Header";
import Work from "./Work";

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
