import { useLocation } from "react-router";
import useIsMobileScreen from "../hooks/useIsMobileScreen";

const Work = () => {
  const { isMobileScreen } = useIsMobileScreen();
  const location = useLocation();
  const isPlanPage = location.pathname === "/plan";

  const workList = [
    {
      header: "Pick your coffee",
      body: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      header: "Choose the frequency",
      body: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      header: "Receive and enjoy!",
      body: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];

  const textClass = isPlanPage ? "text-(--neutral-50)" : "text-(--neutral-900)";

  return (
    <div
      className={`${isPlanPage ? "bg-(--neutral-900)" : ""} px-[16px] py-[48px] md:px-[32px] md:py-[64px] lg:px-[80px] lg:py-[96px] `}
    >
      {!isPlanPage && (
        <div className="mb-[64px] md:mb-[80px] lg:mb-[95px] text-center md:text-start">
          <h1 className="text-preset-4 text-(--neutral-500)">How it works</h1>
        </div>
      )}

      {!isMobileScreen && (
        <div className="w-[80%] pl-[16px]">
          <div className="flex justify-between mx-[-16px]">
            {[...Array(3)].map((_, index) => {
              return (
                <div
                  className={`circle ${!isPlanPage ? "z-1 bg-(--neutral-50)" : ""}`}
                  key={index}
                />
              );
            })}
          </div>
          <div className="border-t-[1px] relative bottom-[16px] border-(--orange-200)" />
        </div>
      )}

      <div className="flex flex-col gap-[40px] md:flex-row md:gap-[32px] lg:gap-[95px]">
        {workList.map((list, index) => {
          return (
            <div
              key={list.header}
              className={`flex flex-col gap-[24px] lg:gap-[40px] text-center md:text-start ${isPlanPage ? "md:pt-[64px]" : "md:pt-[80px]"}`}
            >
              <h1 className="text-preset-1 text-(--orange-200)">
                0{index + 1}
              </h1>
              <h2 className={`text-preset-3 ${textClass}`}>{list.header}</h2>
              <p className={`text-preset-6 text-(--neutral-50) ${textClass}`}>
                {list.body}
              </p>
            </div>
          );
        })}
      </div>
      {!isPlanPage && (
        <div className="mt-[40px] md:mt-[64px] flex justify-center md:justify-start">
          <button className="w-[218px] h-[57px] bg-(--teal-600) text-preset-5 text-(--neutral-50) rounded-(--radius-6)">
            Create your plan
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
