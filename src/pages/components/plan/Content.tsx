import React, { useState } from "react";
import QuestionDropdown from "./QuestionDropdown";
import type { ITableOfContentOption } from "./TableOfContent";

interface IContent {
  id: string;
  question: string;
  options: ITableOfContentOption[];
  isCapsules: boolean;
  selectedContent: string;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
}

const Content = ({
  id,
  question,
  options,
  isCapsules,
  selectedContent,
  setSelectedContent,
}: IContent) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="cursor-pointer w-full">
      <div
        className="flex mb-[32px] gap-[32px] justify-between"
        onClick={() => {
          setIsShown(!isShown);
          setSelectedContent(id);
        }}
      >
        <h1
          id={`${id}`}
          className={`${
            selectedContent === id
              ? "underline text-[#2C343E]"
              : "text-[#83888f]"
          } text-4xl font-extrabold hover:text-[#2C343E]`}
        >
          {question}
        </h1>
        <button disabled={isCapsules}>+</button>
      </div>
      {isShown && <QuestionDropdown options={options} />}
    </div>
  );
};

export default Content;
