import QuestionDropdown from "./QuestionDropdown";
import type { ITableOfContentOption } from "../interfaces/PlanInterface";
import Arrow from "../../../assets/plan/desktop/icon-arrow.svg";
import { useCustomizePlanContext } from "../hooks/useCustomizePlanContext";

interface IContent {
  id: string;
  question: string;
  options: ITableOfContentOption[];
}

const Content = ({ id, question, options }: IContent) => {
  const { shownSection, order, handleQuestionDropdownClick } =
    useCustomizePlanContext();

  const isShown = !!shownSection.find((section) => section.id === id)?.isShown;
  const isDisabled = order.preference === "Capsule" && id === "grindOption";

  return (
    <div className=" flex flex-col gap-[24px] md:gap-[32px] xxl:gap-[48px]">
      <div className="flex items-baseline justify-between md:items-center">
        <button
          className="focus:outline-(--teal-600)"
          onClick={() => handleQuestionDropdownClick(id, isDisabled)}
        >
          <p
            id={`${id}`}
            className={` text-preset-2-mobile text-(--neutral-500) md:text-preset-2 text-start ${!isDisabled ? "cursor-pointer" : ""}`}
          >
            {question}
          </p>
        </button>
        {!isDisabled && (
          <img
            style={{ transform: `rotate(${isShown ? 360 : 180}deg)` }}
            className="cursor-pointer"
            src={Arrow}
          />
        )}
      </div>

      {isShown && (
        <QuestionDropdown options={options} orderOption={id} id={id} />
      )}
    </div>
  );
};

export default Content;
