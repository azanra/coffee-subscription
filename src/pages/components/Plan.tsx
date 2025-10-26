import CreatePlanBanner from "./plan/CreatePlanBanner";
import CustomizePlan from "./plan/CustomizePlan";
import OrderSummary from "./plan/OrderSummary";
import Header from "./shared/Header";
import Work from "./shared/Work";

const Plan = () => {
  return (
    <div>
      <Header />
      <CreatePlanBanner />
      <Work withBtn={false} />
      <CustomizePlan />
      <OrderSummary />
    </div>
  );
};

export default Plan;
