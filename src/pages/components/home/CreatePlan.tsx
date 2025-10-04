import granEspresso from "../../../assets/home/desktop/image-hero-coffeepress.jpg";

const CreatePlan = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${granEspresso})`,
      }}
    >
      <div>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule
        </p>
        <button>Create your plan</button>
      </div>
      <div></div>
    </div>
  );
};

export default CreatePlan;
