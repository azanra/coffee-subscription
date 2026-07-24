export interface IOrder {
  preference: string | null;
  beanType: string | null;
  quantity: string | null;
  grindOption: string | null;
  deliveries: string | null;
}

export interface ITableOfContentOption {
  header: string;
  body: string;
}
