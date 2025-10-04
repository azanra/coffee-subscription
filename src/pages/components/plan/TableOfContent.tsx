import { useRef } from "react";
import Index from "./Index";
import Content from "./Content";

interface TableOfContent {
  number: number;
  id: string;
  options: Option[];
  question: string;
  top: number;
}

interface Option {
  header: string;
  body: string;
}

const TableOfContent = ({
  options,
  number,
  top,
  id,
  question,
}: TableOfContent) => {
  const questionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex gap-[64px] px-8">
      <Index number={number} id={id} questionRef={questionRef} />
      <Content questionRef={questionRef} question={question} top={top} />
    </div>
  );
};

export default TableOfContent;
