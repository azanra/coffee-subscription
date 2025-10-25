import { useState } from "react";
import QuestionDropdown from "./QuestionDropdown";
import type { ITableOfContentOption } from "./TableOfContent";

interface IContent {
  id: string;
  question: string;
  options: ITableOfContentOption[];
}

const Content = ({ id, question, options }: IContent) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div className="flex" onClick={() => setIsShown(!isShown)}>
        <h1 id={`${id}`}>{question}</h1>
        <button>+</button>
      </div>
      {isShown && <QuestionDropdown options={options} />}
    </div>
  );
};

export default Content;
