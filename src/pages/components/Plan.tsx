import CreatePlanBanner from "./plan/CreatePlanBanner";
import CustomizePlan from "./plan/CustomizePlan";
import OrderSummary from "./plan/OrderSummary";
import Header from "./shared/Header";
import Work from "./shared/Work";

const Plan = () => {
  const order = {
    preference: "Filter",
    beanType: "Blended",
    quantity: "1000g",
    grindOption: "Wholebean",
    deliveries: "Every week",
  };
  const isCapsules = order.preference === "Capsule";

  return (
    <div>
      <Header />
      <CreatePlanBanner />
      <Work withBtn={false} />
      <CustomizePlan isCapsules={isCapsules} />
      <OrderSummary order={order} />
    </div>
  );
};

export default Plan;
