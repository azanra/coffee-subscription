import { useCustomizePlanContext } from "../hooks/useCustomizePlanContext";
import type {
  IDeliveries,
  IOrder,
  ITableOfContentOption,
} from "../interfaces/PlanInterface";
import { getCurrentPrice } from "../utils/planUtils";

interface IQuestionDropdown {
  options: ITableOfContentOption[];
  orderOption: string;
  id: string;
}

type IQuestionList = Omit<IQuestionDropdown, "options"> & {
  option: ITableOfContentOption;
};

const QuestionDropdown = ({ options, orderOption, id }: IQuestionDropdown) => {
  return (
    <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px]">
      {options.map((option) => {
        return (
          <QuestionList
            key={option.header}
            option={option}
            orderOption={orderOption}
            id={id}
          />
        );
      })}
    </div>
  );
};

const QuestionList = ({ option, orderOption, id }: IQuestionList) => {
  const { order, handleOrder } = useCustomizePlanContext();

  const { header, body } = option;
  const isSelected = order[orderOption as keyof IOrder] === header;

  const bodyContent = () => {
    return id === "deliveries"
      ? getCurrentPrice(order.quantity, header as IDeliveries, body)
      : body;
  };

  return (
    <button
      onClick={() => handleOrder(orderOption, header)}
      className={`focus:outline-(--teal-600) cursor-pointer hover:bg-(--orange-200) flex-[1_1_0] flex flex-col gap-[16px] xxl:gap-[24px] p-[20px] xxl:px-[24px] xxl:py-[32px] ${isSelected ? "bg-(--teal-600)" : "bg-(--neutral-100)"} rounded-(--radius-8) text-start`}
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
    </button>
  );
};

export default QuestionDropdown;
