import Coffee from "../../../assets/home/desktop/icon-coffee-bean.svg?react";
import Gift from "../../../assets/home/desktop/icon-gift.svg?react";
import Truck from "../../../assets/home/desktop/icon-truck.svg?react";

const ChooseUs = () => {
  const chooseUsList = [
    {
      svg: <Coffee />,
      header: "Best quality",
      body: "Discover an endless variety of the world's best artisan coffee from each of our roasters.",
    },
    {
      svg: <Gift />,
      header: "Exclusive benefits",
      body: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      svg: <Truck />,
      header: "Free shipping",
      body: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed",
    },
  ];
  return (
    <div className="bg-(--neutral-900) rounded-(--radius-12) px-[16px] py-[64px] md:px-[82px]">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-[32px] md:max-w-[540px]">
          <h1 className="text-preset-2 text-(--neutral-50) text-center">
            Why choose us?
          </h1>
          <p className="text-preset-6 text-(--neutral-50) text-center opacity-[80%]">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-[24px] xxl:flex-row xxl:gap-[32px] justify-center items-center">
          {chooseUsList.map((list) => {
            return (
              <div
                key={list.header}
                className="flex justify-center items-center"
              >
                <div className="max-w-[280px] md:max-w-[573px] xxl:max-w-[348px] bg-(--teal-600) rounded-(--radius-8) px-[20px] py-[24px] md:px-[48px] md:py-[40px] flex flex-col gap-[24px] md:flex-row md:gap-[48px] xxl:flex-col xxl:px-[32px] xxl:py-[48px] xxl:h-[354px]">
                  <div className="flex items-center justify-center">
                    <div className="w-[72px] h-[72px] flex items-center justify-center">
                      {list.svg}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] md:gap-[20px] xxl:gap-[24px] text-center md:text-start xxl:text-center">
                    <h1 className="text-preset-4 text-(--neutral-50)">
                      {list.header}
                    </h1>
                    <p className="text-preset-6 text-(--neutral-50)">
                      {list.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
