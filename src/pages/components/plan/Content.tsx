import React, { useState } from "react";
import QuestionDropdown from "./QuestionDropdown";
import type { ITableOfContentOption } from "./TableOfContent";
import type { Order } from "./OrderSummary";

interface IContent {
  id: string;
  question: string;
  options: ITableOfContentOption[];
  isCapsules: boolean;
  selectedContent: string;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
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

  const handleOrder = (orderOption: string, orderValue: string) => {
    setOrder({
      ...order,
      [orderOption]: orderValue,
    });
  };

  const isDisabled = isCapsules && id === "grindOption";

  return (
    <div className="cursor-pointer w-full">
      <button
        className={`${isDisabled ? "opacity-50" : ""} w-full flex mb-[40px] gap-[32px] items-center justify-between`}
        disabled={isDisabled}
        onClick={() => {
          setIsShown(!isShown);
          setSelectedContent(id);
        }}
      >
        <h1
          id={`${id}`}
          className={`${
            selectedContent === id
              ? "underline text-[#2C343E]"
              : "text-[#83888f]"
          } text-4xl text-start font-extrabold hover:text-[#2C343E]`}
        >
          {question}
        </h1>
        <div>+</div>
      </button>
      {isShown && (
        <QuestionDropdown
          orderOption={id}
          options={options}
          handleOrder={handleOrder}
        />
      )}
    </div>
  );
};

export default Content;
