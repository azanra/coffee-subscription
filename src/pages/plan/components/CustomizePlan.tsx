import { useState } from "react";

import TableOfContent from "./TableOfContent";
import OrderSummary from "./OrderSummary";

import type { IOrder } from "../interfaces/PlanInterface";
import { INITIAL_ORDER, QUESTION_LIST } from "../constants/planConst";
import OutlineHeader from "./OutlineHeader";

const CustomizePlan = () => {
  const [order, setOrder] = useState<IOrder>(INITIAL_ORDER);
  const [selectedContent, setSelectedContent] = useState("");

  return (
    <div className="flex flex-col gap-[64px] xxl:flex-row xxl:justify-around">
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
              setSelectedContent={setSelectedContent}
            />
          );
        })}
      </div>

      <div className="flex flex-col xxl:max-w-[730px] gap-[64px] xxl:gap-[80px]">
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
