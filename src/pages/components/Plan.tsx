import CreatePlanBanner from "./plan/CreatePlanBanner";
import CustomizePlan from "./plan/CustomizePlan";
import Header from "./shared/Header";
import Work from "./shared/Work";

const Plan = () => {
  const order = {
    preference: "Filter",
    beanType: "Blended",
    quantity: "1000g",
    grindOption: "Cafetiére",
    deliveries: "Every week",
  };
  const emptyOrder = {
    preference: null,
    beanType: null,
    quantity: null,
    grindOption: null,
    deliveries: null,
  };
  const isCapsules = order.preference === "Capsule";

  return (
    <div className="flex justify-center">
      <div className="w-[65%]">
        <Header />
        <CreatePlanBanner />
        <Work withBtn={false} />
        <CustomizePlan isCapsules={isCapsules} order={order} />
      </div>
    </div>
  );
};

export default Plan;
