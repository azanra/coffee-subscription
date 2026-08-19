import { createContext, useContext } from "react";
import useCustomizePlan from "./useCustomizePlan";
import type { ICustomizePlanContext } from "../interfaces/PlanInterface";

const CustomizePlanContext = createContext<ICustomizePlanContext | null>(null);

const CustomizePlanProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    order,
    setOrder,
    selectedContent,
    setSelectedContent,
    shownSection,
    setIsShownSection,
    handleOrder,
    handleQuestionDropdownClick,
  } = useCustomizePlan();

  return (
    <CustomizePlanContext
      value={{
        order,
        setOrder,
        selectedContent,
        setSelectedContent,
        shownSection,
        setIsShownSection,
        handleOrder,
        handleQuestionDropdownClick,
      }}
    >
      {children}
    </CustomizePlanContext>
  );
};

const useCustomizePlanContext = () => {
  const context = useContext(CustomizePlanContext);
  if (!context) {
    throw new Error(
      "useCustomizePlanContext must be used within a CustomizePlanProvider!",
    );
  }

  return context;
};

export { CustomizePlanProvider, useCustomizePlanContext };
