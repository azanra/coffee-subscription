import { useState } from "react";
import QuestionDropdown from "./QuestionDropdown";
import type { IOptions } from "./TableOfContent";

interface IContent {
  questionRef: React.RefObject<HTMLDivElement | null>;
  question: string;
  top: number;
  options: IOptions[];
}

const Content = ({ questionRef, question, top, options }: IContent) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div ref={questionRef} className="relative" style={{ top: `${top}px` }}>
      <div className="flex" onClick={() => setIsShown(!isShown)}>
        <h1>{question}</h1>
        <button>+</button>
      </div>
      {isShown && <QuestionDropdown options={options} />}
    </div>
  );
};

export default Content;
