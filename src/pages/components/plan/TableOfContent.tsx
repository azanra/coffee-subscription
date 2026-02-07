import type React from "react";
import Content from "./Content";
import type { Order } from "./OrderSummary";

interface ITableOfContent {
  list: {
    id: string;
    question: string;
    name: string;
    options: ITableOfContentOption[];
  };
  isLastItem: boolean;
  isCapsules: boolean;
  selectedContent: string;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

export interface ITableOfContentOption {
  header: string;
  body: string;
}

const TableOfContent = ({
  list,
  isLastItem,
  isCapsules,
  selectedContent,
  setSelectedContent,
  order,
  setOrder,
}: ITableOfContent) => {
  return (
    <div className={`flex gap-[64px] ${!isLastItem && "mb-[40px]"}`}>
      <Content
        id={list.id}

        question={list.question}
        options={list.options}
        isCapsules={isCapsules}
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
};

export default TableOfContent;
