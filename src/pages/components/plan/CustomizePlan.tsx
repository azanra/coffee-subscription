import Index from "./Index";
import TableOfContent from "./TableOfContent";

interface ICustomizePlan {
  isCapsules: boolean;
}

const CustomizePlan = ({ isCapsules }: ICustomizePlan) => {
  const questionList = [
    {
      id: "preferences",
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

  const indexList = [
    {
      id: "preferences",
      name: "Preferences",
    },
    {
      id: "beanType",
      name: "Bean Type",
    },
    {
      id: "quantity",
      name: "Quantity",
    },
    {
      id: "grindOption",
      name: "Grind Option",
    },
    {
      id: "deliveries",
      name: "Deliveries",
    },
  ];
  return (
    <div className="flex justify-center gap-[64px]">
      <div>
        {indexList.map((list, index) => {
          return (
            <Index
              key={list.id}
              number={index + 1}
              id={list.id}
              name={list.name}
            />
          );
        })}
      </div>
      <div>
        {questionList.map((list) => {
          return (
            <TableOfContent key={list.id} list={list} isCapsules={isCapsules} />
          );
        })}
      </div>
    </div>
  );
};

export default CustomizePlan;
