import Content from "./Content";

import { QUESTION_LIST } from "../constants/planConst";

const TableOfContent = () => {
  return (
    <div className="flex flex-col gap-[32px] md:gap-[48px] xxl:gap-[80px] xxl:max-w-[730px]">
      {QUESTION_LIST.map((list) => {
        return (
          <Content
            key={list.id}
            id={list.id}
            question={list.question}
            options={list.options}
          />
        );
      })}
    </div>
  );
};

export default TableOfContent;
