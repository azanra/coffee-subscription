import type {
  IOrder,
  ITableOfContentOption,
} from "../interfaces/PlanInterface";

interface IQuestionDropdown {
  options: ITableOfContentOption[];
  orderOption: string;
  order: IOrder;
  handleOrder: (orderOption: string, orderValue: string) => void;
}

interface IQuestionList {
  option: ITableOfContentOption;
  orderOption: string;
  order: IOrder;
  handleOrder: (orderOption: string, orderValue: string) => void;
}

const QuestionDropdown = ({
  options,
  orderOption,
  handleOrder,
  order,
}: IQuestionDropdown) => {
  return (
    <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px]">
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
  const isSelected = order[orderOption as keyof IOrder] === header;
  return (
    <div
      onClick={() => handleOrder(orderOption, header)}
      className={`flex-[1_1_0] flex flex-col gap-[16px] lg:gap-[24px] p-[20px] lg:px-[24px] lg:py-[32px] ${isSelected ? "bg-(--teal-600)" : "bg-(--neutral-100)"} rounded-(--radius-8)`}
    >
      <h1
        className={`text-preset-4 ${isSelected ? "text-(--neutral-0)" : "text-(--neutral-900)"}`}
      >
        {header}
      </h1>
      <p
        className={`text-preset-6 ${isSelected ? "text-(--neutral-50)" : "text-(--neutral-900)"}`}
      >
        {body}
      </p>
    </div>
  );
};

export default QuestionDropdown;
