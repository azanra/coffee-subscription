import type { ITableOfContentOption } from "./TableOfContent";

interface IQuestionDropdown {
  options: ITableOfContentOption[];
}

interface IQuestionList {
  option: ITableOfContentOption;
}

const QuestionDropdown = ({ options }: IQuestionDropdown) => {
  return (
    <div className="flex">
      {options.map((option) => {
        return <QuestionList option={option} key={option.header} />;
      })}
    </div>
  );
};

const QuestionList = ({ option }: IQuestionList) => {
  const { header, body } = option;
  return (
    <div>
      <h1>{header}</h1>
      <p>{body}</p>
    </div>
  );
};

export default QuestionDropdown;
