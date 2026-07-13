import type { Order } from "./OrderSummary";
import type { ITableOfContentOption } from "./TableOfContent";

interface IQuestionDropdown {
  options: ITableOfContentOption[];
  orderOption: string;
  order: Order;
  handleOrder: (orderOption: string, orderValue: string) => void;
}

interface IQuestionList {
  option: ITableOfContentOption;
  orderOption: string;
  order: Order;
  handleOrder: (orderOption: string, orderValue: string) => void;
}

const QuestionDropdown = ({
  options,
  orderOption,
  handleOrder,
  order,
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
            order={order}
          />
        );
      })}
    </div>
  );
};

const QuestionList = ({
  option,
  orderOption,
  handleOrder,
  order,
}: IQuestionList) => {
  const { header, body } = option;
  const isSelected = order[orderOption as keyof Order] === header;
  return (
    <div
      onClick={() => handleOrder(orderOption, header)}
      className={`${isSelected ? "bg-[#0e8784] text-white" : "bg-[#f4f1eb] hover:bg-[#fdd6ba]"} w-[220px] h-[200px] px-[16px] py-[24px] rounded-md `}
    >
      <h1 className="font-bold text-xl mb-[8px]">{header}</h1>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default QuestionDropdown;
