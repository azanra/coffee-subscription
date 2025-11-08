import type { ITableOfContentOption } from "./TableOfContent";

interface IQuestionDropdown {
  options: ITableOfContentOption[];
}

interface IQuestionList {
  option: ITableOfContentOption;
}

const QuestionDropdown = ({ options }: IQuestionDropdown) => {
  return (
    <div className="flex gap-[32px]">
      {options.map((option) => {
        return <QuestionList option={option} key={option.header} />;
      })}
    </div>
  );
};

const QuestionList = ({ option }: IQuestionList) => {
  const { header, body } = option;
  return (
    <div className="w-[220px] h-[200px] bg-[#f4f1eb] px-[16px] py-[24px] rounded-md hover:bg-[#fdd6ba]">
      <h1 className="font-bold text-xl mb-[8px]">{header}</h1>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default QuestionDropdown;
