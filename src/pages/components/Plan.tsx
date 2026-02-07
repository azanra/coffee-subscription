import CreatePlanBanner from "./plan/CreatePlanBanner";
import CustomizePlan from "./plan/CustomizePlan";
import Header from "./shared/Header";
import Work from "./shared/Work";

const Plan = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[65%]">
        <Header />
        <CreatePlanBanner />
        <Work withBtn={false} />
        <CustomizePlan />
      </div>
    </div>
  );
};

export default Plan;
