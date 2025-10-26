import CreatePlanBanner from "./plan/CreatePlanBanner";
import CustomizePlan from "./plan/CustomizePlan";
import OrderSummary from "./plan/OrderSummary";
import Header from "./shared/Header";
import Work from "./shared/Work";

const Plan = () => {
  const order = {
    preference: "Capsule",
    beanType: "Blended",
    quantity: "1000g",
    grindOption: null,
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
