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

  const isCapsules = order.preference === "Capsule";
  console.log({ order, selectedContent });

  return (
    <div className="flex flex-col gap-[64px] lg:flex-row lg:gap-[128px]">
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
      <div className="w-[60%]">
        {QUESTION_LIST.map((list, index) => {
          return (
            <TableOfContent
              key={list.id}
              list={list}
              isLastItem={index === QUESTION_LIST.length - 1}
              isCapsules={isCapsules}
              selectedContent={selectedContent}
              setSelectedContent={setSelectedContent}
              order={order}
              setOrder={setOrder}
            />
          );
        })}
        <OrderSummary order={order} />
      </div>
    </div>
  );
};

export default CustomizePlan;
