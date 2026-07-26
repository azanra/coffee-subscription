type IPreference = "Capsule" | "Filter" | "Espresso";
type IBeanType = "Single origin" | "Decaf" | "Blended";
type IQuantity = "250g" | "500g" | "1000g";
type IGrindOption = "Wholebean" | "Filter" | "Cafetiére";
type IDeliveries = "Every week" | "Every 2 weeks" | "Every month";

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
