import { Link } from "react-router";

const CreatePlan = () => {
  return (
    <section className="create-plan-img px-[24px] py-[96px] md:px-[48px] xxl:px-[80px] xxl:py-[112px] rounded-(--radius-10)">
      <div className="flex flex-col gap-[32px] md:max-w-[420px] xxl:max-w-[493px] text-center md:text-start">
        <h2 className="text-preset-1-mobile md:text-preset-1-tablet xxl:text-preset-1 text-(--neutral-50)">
          Great coffee made simple.
        </h2>
        <p className="text-preset-6 text-(--neutral-50)">
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule
        </p>
      </div>
      <div className="mt-[40px] md:mt-[48px] flex items-center justify-center md:justify-start">
        <Link
          className="bg-(--teal-600) hover:bg-(--teal-300) text-(--neutral-50) px-[32px] py-[16px] rounded-(--radius-6) text-preset-5"
          to="/plan"
        >
          Create your plan
        </Link>
      </div>
    </section>
  );
};

export default CreatePlan;
