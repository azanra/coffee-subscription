import type {
  IDeliveries,
  IOrder,
  ITableOfContentOption,
} from "../interfaces/PlanInterface";
import { getCurrentPrice } from "../utils/planUtils";

interface IQuestionDropdown {
  options: ITableOfContentOption[];
  orderOption: string;
  order: IOrder;
  handleOrder: (orderOption: string, orderValue: string) => void;
  id: string;
}

interface IQuestionList {
  option: ITableOfContentOption;
  orderOption: string;
  order: IOrder;
  handleOrder: (orderOption: string, orderValue: string) => void;
  id: string;
}

const QuestionDropdown = ({
  options,
  orderOption,
  handleOrder,
  order,
  id,
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
            id={id}
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
  id,
}: IQuestionList) => {
  const { header, body } = option;
  const isSelected = order[orderOption as keyof IOrder] === header;

  const bodyContent = () => {
    return id === "deliveries"
      ? getCurrentPrice(order.quantity, header as IDeliveries, body)
      : body;
  };

  return (
    <div
      onClick={() => handleOrder(orderOption, header)}
      className={`cursor-pointer hover:bg-(--orange-200) flex-[1_1_0] flex flex-col gap-[16px] xxl:gap-[24px] p-[20px] xxl:px-[24px] xxl:py-[32px] ${isSelected ? "bg-(--teal-600)" : "bg-(--neutral-100)"} rounded-(--radius-8)`}
    >
      <h1
        className={`text-preset-4 ${isSelected ? "text-(--neutral-0)" : "text-(--neutral-900)"}`}
      >
        {header}
      </h1>
      <p
        className={`text-preset-6 ${isSelected ? "text-(--neutral-50)" : "text-(--neutral-900)"}`}
      >
        {bodyContent()}
      </p>
    </div>
  );
};

export default QuestionDropdown;
