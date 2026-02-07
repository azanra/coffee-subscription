import type { ITableOfContentOption } from "./TableOfContent";

interface IQuestionDropdown {
  options: ITableOfContentOption[];
  orderOption: string;
  handleOrder: (orderOption: string, orderValue: string) => void;
}

interface IQuestionList {
  option: ITableOfContentOption;
  orderOption: string;
  handleOrder: (orderOption: string, orderValue: string) => void;
}

const QuestionDropdown = ({
  options,
  orderOption,
  handleOrder,
}: IQuestionDropdown) => {
  return (
    <div className="flex gap-[32px]">
      {options.map((option) => {
        return (
          <QuestionList
            key={option.header}
            option={option}
            orderOption={orderOption}
            handleOrder={handleOrder}
          />
        );
      })}
    </div>
  );
};

const QuestionList = ({ option, orderOption, handleOrder }: IQuestionList) => {
  const { header, body } = option;
  return (
    <div
      onClick={() => handleOrder(orderOption, header)}
      className="w-[220px] h-[200px] bg-[#f4f1eb] px-[16px] py-[24px] rounded-md hover:bg-[#fdd6ba]"
    >
      <h1 className="font-bold text-xl mb-[8px]">{header}</h1>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default QuestionDropdown;
