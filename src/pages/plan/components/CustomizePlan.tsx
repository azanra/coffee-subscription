import TableOfContent from "./TableOfContent";
import OrderSummary from "./OrderSummary";

import { QUESTION_LIST } from "../constants/planConst";
import OutlineHeader from "./OutlineHeader";
import {
  CustomizePlanProvider,
  useCustomizePlanContext,
} from "../hooks/useCustomizePlanContext";

const CustomizePlan = () => {
  const { selectedContent } = useCustomizePlanContext();

  return (
    <section className="flex flex-col gap-[64px] xxl:flex-row xxl:justify-around">
      <div className="xxl:w-[252px]">
        {QUESTION_LIST.map((list, index) => {
          return (
            <OutlineHeader
              key={list.id}
              number={index + 1}
              id={list.id}
              name={list.name}
              isSelected={selectedContent === list.id}
              isLast={index === QUESTION_LIST.length - 1}
            />
          );
        })}
      </div>

      <div className="flex flex-col xxl:max-w-[730px] gap-[64px] xxl:gap-[80px]">
        <TableOfContent />
        <OrderSummary />
      </div>
    </section>
  );
};

const CustomizePlanWrapper = () => {
  return (
    <CustomizePlanProvider>
      <CustomizePlan />
    </CustomizePlanProvider>
  );
};

export default CustomizePlanWrapper;
