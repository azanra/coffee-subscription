import type React from "react";
import Content from "./Content";

interface ITableOfContent {
  list: {
    id: string;
    question: string;
    options: ITableOfContentOption[];
  };
  isLastItem: boolean;
  isCapsules: boolean;
  selectedContent: string;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
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
      />
    </div>
  );
};

export default TableOfContent;
