import { useRef } from "react";
import Index from "./Index";
import Content from "./Content";

interface ITableOfContent {
  number: number;
  id: string;
  options: IOptions[];
  question: string;
  top: number;
}

export interface IOptions {
  header: string;
  body: string;
}

const TableOfContent = ({
  options,
  number,
  top,
  id,
  question,
}: ITableOfContent) => {
  const questionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex gap-[64px] px-8">
      <Index number={number} id={id} questionRef={questionRef} />
      <Content
        questionRef={questionRef}
        question={question}
        top={top}
        options={options}
      />
    </div>
  );
};

export default TableOfContent;
