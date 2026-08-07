import type React from "react";
import Content from "./Content";
import type { IOrder, IShownSection } from "../interfaces/PlanInterface";

import { useState } from "react";
import { QUESTION_LIST } from "../constants/planConst";

interface ITableOfContent {
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
}

const TableOfContent = ({
  setSelectedContent,
  order,
  setOrder,
}: ITableOfContent) => {
  const [shownSection, setIsShownSection] = useState<IShownSection[]>([
    { id: "preference", isShown: false },
    { id: "beanType", isShown: false },
    { id: "quantity", isShown: false },
    { id: "grindOption", isShown: false },
    { id: "deliveries", isShown: false },
  ]);

  return (
    <div className="flex flex-col gap-[32px] md:gap-[48px] xxl:gap-[80px] xxl:max-w-[730px]">
      {QUESTION_LIST.map((list) => {
        return (
          <Content
            key={list.id}
            id={list.id}
            question={list.question}
            options={list.options}
            setSelectedContent={setSelectedContent}
            order={order}
            setOrder={setOrder}
            shownSection={shownSection}
            setIsShownSection={setIsShownSection}
          />
        );
      })}
    </div>
  );
};

export default TableOfContent;
