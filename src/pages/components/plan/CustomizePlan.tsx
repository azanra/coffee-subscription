import TableOfContent from "./TableOfContent";

const CustomizePlan = () => {
  const questionList = [
    {
      id: "Preference",
      question: "How do you drink your coffee ?",
      top: 0,
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
      id: "type",
      question: "What type of coffee?",
      top: 100,
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
      top: 200,
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
      id: "grind",
      question: "Want us to grind them?",
      top: 300,
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
      top: 400,
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
    <div>
      {questionList.map((list, index) => {
        return (
          <TableOfContent
            key={list.id}
            id={list.id}
            number={index + 1}
            question={list.question}
            options={list.options}
            top={list.top}
          />
        );
      })}
    </div>
  );
};

export default CustomizePlan;
