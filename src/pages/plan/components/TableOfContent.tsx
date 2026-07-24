import type React from "react";
import Content from "./Content";
import type { IOrder } from "../interfaces/PlanInterface";
import { QUESTION_LIST } from "../utils/planUtils";

interface ITableOfContent {
  selectedContent: string;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
}

const TableOfContent = ({
  selectedContent,
  setSelectedContent,
  order,
  setOrder,
}: ITableOfContent) => {
  return (
    <div className="flex flex-col gap-[32px] md:gap-[48px] lg:gap-[80px] lg:max-w-[730px]">
      {QUESTION_LIST.map((list) => {
        return (
          <Content
            key={list.id}
            id={list.id}
            question={list.question}
            options={list.options}
            isCapsules={order.preference === "Capsule"}
            selectedContent={selectedContent}
            setSelectedContent={setSelectedContent}
            order={order}
            setOrder={setOrder}
          />
        );
      })}
    </div>
  );
};

export default TableOfContent;
