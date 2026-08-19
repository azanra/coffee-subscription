import type React from "react";

type IPreference = "Capsule" | "Filter" | "Espresso";
type IBeanType = "Single origin" | "Decaf" | "Blended";
export type IQuantity = "250g" | "500g" | "1000g";
type IGrindOption = "Wholebean" | "Filter" | "Cafetiére";
export type IDeliveries = "Every week" | "Every 2 weeks" | "Every month";

export interface IOrder {
  preference: IPreference | null;
  beanType: IBeanType | null;
  quantity: IQuantity | null;
  grindOption: IGrindOption | null;
  deliveries: IDeliveries | null;
}

export interface ITableOfContentOption {
  header: string;
  body: string;
}

export interface IShownSection {
  id: keyof IOrder;
  isShown: boolean;
}

export interface ICustomizePlanContext {
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  selectedContent: string;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
  shownSection: IShownSection[];
  setIsShownSection: React.Dispatch<React.SetStateAction<IShownSection[]>>;
  handleOrder: (orderOption: string, orderValue: string) => void;
  handleQuestionDropdownClick: (id: string, isDisabled: boolean) => void;
}
