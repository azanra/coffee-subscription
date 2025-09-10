import plan from "../../assets/plan/desktop/image-hero-blackcup.jpg";

const CreatePlanBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${plan})`,
      }}
    >
      <div>
        <h1>Create a plan</h1>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CreatePlanBanner;
