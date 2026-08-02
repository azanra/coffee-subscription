const QUESTION_LIST = [
  {
    id: "preference",
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
        body: "$[current_price] per shipment. Includes free first-class shipping.",
      },
      {
        header: "Every 2 weeks",
        body: "$[current_price] per shipment. Includes free priority shipping.",
      },
      {
        header: "Every month",
        body: "$[current_price] per shipment. Includes free priority shipping.",
      },
    ],
  },
];

const SHIPMENT_PRICE = {
  ["250g"]: {
    ["Every week"]: 7.2,
    ["Every 2 weeks"]: 9.6,
    ["Every month"]: 12.0,
  },
  ["500g"]: {
    ["Every week"]: 13.0,
    ["Every 2 weeks"]: 17.5,
    ["Every month"]: 22.0,
  },
  ["1000g"]: {
    ["Every week"]: 22.0,
    ["Every 2 weeks"]: 32.0,
    ["Every month"]: 42.0,
  },
};

const PRICE_MULTIPLIER = {
  ["Every week"]: 4,
  ["Every 2 weeks"]: 2,
  ["Every month"]: 1,
};

export { QUESTION_LIST, SHIPMENT_PRICE, PRICE_MULTIPLIER };
