import React, { useRef } from "react";
import QuestionDropdown from "./QuestionDropdown";
import type {
  IOrder,
  IShownSection,
  ITableOfContentOption,
} from "../interfaces/PlanInterface";
import Arrow from "../../../assets/plan/desktop/icon-arrow.svg";

interface IContent {
  id: string;
  question: string;
  options: ITableOfContentOption[];
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  shownSection: IShownSection[];
  setIsShownSection: React.Dispatch<React.SetStateAction<IShownSection[]>>;
}

const Content = ({
  id,
  question,
  options,
  setSelectedContent,
  order,
  setOrder,
  shownSection,
  setIsShownSection,
}: IContent) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const isShown = !!shownSection.find((section) => section.id === id)?.isShown;
  const isDisabled = order.preference === "Capsule" && id === "grindOption";

  const handleOrder = (orderOption: string, orderValue: string) => {
    // Grind option can't be selected with capsules as preference
    // Close grind option when capsules is preference
    if (orderOption === "preference" && orderValue === "Capsule") {
      setOrder({
        ...order,
        grindOption: null,
        [orderOption]: orderValue,
      });

      const currentShownSection = shownSection.map((section) =>
        section.id === "grindOption" ? { ...section, isShown: false } : section,
      );
      setIsShownSection(currentShownSection);

      return;
    }

    setOrder({
      ...order,
      [orderOption]: orderValue,
    });
  };

  const handleClick = () => {
    // Grind option can't be selected with capsules as preference
    if (isDisabled) return;

    const currentShownSection = shownSection.map((section) =>
      section.id === id ? { ...section, isShown: !section.isShown } : section,
    );
    setIsShownSection(currentShownSection);
    setSelectedContent(id);

    imgRef?.current?.setAttribute(
      "style",
      `transform: rotate(${isShown ? 360 : 180}deg)`,
    );
  };

  return (
    <div className="flex flex-col gap-[24px] md:gap-[32px] lg:gap-[48px]">
      <div
        onClick={() => handleClick()}
        className="flex items-baseline justify-between md:items-center"
      >
        <button>
          <h1
            id={`${id}`}
            className={`text-preset-2-mobile text-(--neutral-500) md:text-preset-2 text-start`}
          >
            {question}
          </h1>
        </button>
        {!isDisabled && <img src={Arrow} ref={imgRef} />}
      </div>

      {isShown && (
        <QuestionDropdown
          options={options}
          orderOption={id}
          order={order}
          handleOrder={handleOrder}
          id={id}
        />
      )}
    </div>
  );
};

export default Content;
