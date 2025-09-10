import CreatePlanBanner from "./CreatePlanBanner";
import Header from "./Header";
import Work from "./Work";

const Plan = () => {
  return (
    <div>
      <Header />
      <CreatePlanBanner />
      <Work withBtn={false} />
    </div>
  );
};

export default Plan;
