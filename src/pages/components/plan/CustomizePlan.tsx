import { useState } from "react";
import Index from "./Index";
import TableOfContent from "./TableOfContent";
import OrderSummary, { type Order } from "./OrderSummary";

interface ICustomizePlan {
  isCapsules: boolean;
  order: Order;
}

const CustomizePlan = ({ isCapsules, order }: ICustomizePlan) => {
  const [selectedContent, setSelectedContent] = useState("");

  const questionList = [
    {
      id: "preferences",
      name: "Preferences",
      question: "How do you drink your coffee ?",
      options: [
        {
          header: "Capsule",
          body: "Compatible with Nespresso systems and similar brewers",
        },
        {
          header: "Filter",
          body: "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          header: "Espresso",
          body: "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      id: "beanType",
      name: "Bean Type",
      question: "What type of coffee?",
      options: [
        {
          header: "Single origin",
          body: "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          header: "Decaf",
          body: "Just like regular coffee, except the caffeine has been removed",
        },
        {
          header: "Blended",
          body: "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      id: "quantity",
      name: "Quantity",
      question: "How much would you like",
      options: [
        {
          header: "250g",
          body: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          header: "500g",
          body: "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          header: "1000g",
          body: "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      id: "grindOption",
      name: "Grind Option",
      question: "Want us to grind them?",
      options: [
        {
          header: "Wholebean",
          body: "Best choice if you cherish the full sensory experience",
        },
        {
          header: "Filter",
          body: "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          header: "Cafetiére",
          body: "Coarse ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      id: "deliveries",
      name: "Deliveries",
      question: "How often should we deliver",
      options: [
        {
          header: "Every week",
          body: "Select quantity to view price. Includes free first-class shipping",
        },
        {
          header: "Every 2 weeks",
          body: "Select quantity to view price. Includes free priority shipping.",
        },
        {
          header: "Every month",
          body: "Select quantity to view price. Includes free priority shipping.",
        },
      ],
    },
  ];

  return (
    <div className="flex justify-around gap-[64px]">
      <div>
        {questionList.map((list, index) => {
          return (
            <Index
              key={list.id}
              number={index + 1}
              id={list.id}
              name={list.name}
              setSelectedContent={setSelectedContent}
            />
          );
        })}
      </div>
      <div className="w-[60%]">
        {questionList.map((list, index) => {
          return (
            <TableOfContent
              key={list.id}
              list={list}
              isLastItem={index === questionList.length - 1}
              isCapsules={isCapsules}
              selectedContent={selectedContent}
              setSelectedContent={setSelectedContent}
            />
          );
        })}
        <OrderSummary order={order} />
      </div>
    </div>
  );
};

export default CustomizePlan;
