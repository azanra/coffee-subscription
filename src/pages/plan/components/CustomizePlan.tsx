import { useState } from "react";
import Index from "./Index";
import TableOfContent from "./TableOfContent";
import OrderSummary from "./OrderSummary";

import type { IOrder } from "../interfaces/PlanInterface";
import { INITIAL_ORDER, QUESTION_LIST } from "../constants/planConst";

const CustomizePlan = () => {
  const [order, setOrder] = useState<IOrder>(INITIAL_ORDER);
  const [selectedContent, setSelectedContent] = useState("");

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

      <div className="flex flex-col lg:max-w-[730px] gap-[64px] lg:gap-[80px]">
        <TableOfContent
          setSelectedContent={setSelectedContent}
          order={order}
          setOrder={setOrder}
        />
        <OrderSummary order={order} setOrder={setOrder} />
      </div>
    </div>
  );
};

export default CustomizePlan;
