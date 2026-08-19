import { useState } from "react";
import { INITIAL_ORDER } from "../constants/planConst";
import type { IOrder, IShownSection } from "../interfaces/PlanInterface";

const useCustomizePlan = () => {
  const [order, setOrder] = useState<IOrder>(INITIAL_ORDER);
  const [selectedContent, setSelectedContent] = useState("");
  const [shownSection, setIsShownSection] = useState<IShownSection[]>([
    { id: "preference", isShown: false },
    { id: "beanType", isShown: false },
    { id: "quantity", isShown: false },
    { id: "grindOption", isShown: false },
    { id: "deliveries", isShown: false },
  ]);

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

  const handleQuestionDropdownClick = (id: string, isDisabled: boolean) => {
    // Grind option can't be selected with capsules as preference
    if (isDisabled) return;

    const currentShownSection = shownSection.map((section) =>
      section.id === id ? { ...section, isShown: !section.isShown } : section,
    );
    setIsShownSection(currentShownSection);
    setSelectedContent(id);
  };

  return {
    order,
    setOrder,
    selectedContent,
    setSelectedContent,
    shownSection,
    setIsShownSection,
    handleOrder,
    handleQuestionDropdownClick,
  };
};

export default useCustomizePlan;
