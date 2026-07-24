import { useState } from "react";
import Index from "./Index";
import TableOfContent from "./TableOfContent";
import OrderSummary from "./OrderSummary";
import { QUESTION_LIST } from "../utils/planUtils";
import type { IOrder } from "../interfaces/PlanInterface";

const CustomizePlan = () => {
  const [order, setOrder] = useState<IOrder>({
    preference: null,
    beanType: null,
    quantity: null,
    grindOption: null,
    deliveries: null,
  });
  const [selectedContent, setSelectedContent] = useState("");

  console.log({ order, selectedContent });

  return (
    <div className="flex flex-col gap-[64px] lg:flex-row lg:justify-around">
      <div className="lg:w-[252px]">
        {QUESTION_LIST.map((list, index) => {
          return (
            <Index
              key={list.id}
              number={index + 1}
              id={list.id}
              name={list.name}
              isSelected={selectedContent === list.id}
              isLast={index === QUESTION_LIST.length - 1}
              setSelectedContent={setSelectedContent}
            />
          );
        })}
      </div>

      <div className="flex flex-col lg:max-w-[730px]">
        <TableOfContent
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
          order={order}
          setOrder={setOrder}
        />
        <OrderSummary order={order} />
      </div>
    </div>
  );
};

export default CustomizePlan;
