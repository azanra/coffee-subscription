import React, { useRef, useState } from "react";
import QuestionDropdown from "./QuestionDropdown";
import type {
  IOrder,
  ITableOfContentOption,
} from "../interfaces/PlanInterface";
import Arrow from "../../../assets/plan/desktop/icon-arrow.svg";

interface IContent {
  id: string;
  question: string;
  options: ITableOfContentOption[];
  isCapsules: boolean;
  selectedContent: string;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
}

const Content = ({
  id,
  question,
  options,
  isCapsules,
  selectedContent,
  setSelectedContent,
  order,
  setOrder,
}: IContent) => {
  const [isShown, setIsShown] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleOrder = (orderOption: string, orderValue: string) => {
    if (orderOption === "preference" && orderValue === "Capsule") {
      setOrder({
        ...order,
        grindOption: null,
        [orderOption]: orderValue,
      });

      return;
    }

    setOrder({
      ...order,
      [orderOption]: orderValue,
    });
  };

  const handleClick = () => {
    setIsShown(!isShown);
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
        <img src={Arrow} ref={imgRef} />
      </div>

      {isShown && (
        <QuestionDropdown
          options={options}
          orderOption={id}
          order={order}
          handleOrder={handleOrder}
        />
      )}
    </div>
  );
};

export default Content;
