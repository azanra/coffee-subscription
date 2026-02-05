import OrderSummaryText from "./OrderSummaryText";

export interface Order {
  preference: string | null;
  beanType: string | null;
  quantity: string | null;
  grindOption: string | null;
  deliveries: string | null;
}

interface IOrderSummary {
  order: Order;
}

const OrderSummary = ({ order }: IOrderSummary) => {
  const { preference, beanType, quantity, grindOption, deliveries } = order;
  const isCapsules = preference === "Capsule";

  const isOrderCompleted =
    preference && beanType && quantity && deliveries && isCapsules
      ? isCapsules
      : grindOption !== null;

  return (
    <div className="mt-[64px]">
      <div className="bg-[#2c343e] px-[64px] py-[32px] rounded-md mb-[64px]">
        <h1 className="text-[#ffffff] opacity-[0.5] mb-[8px]">ORDER SUMMARY</h1>
        <OrderSummaryText
          customClass="text-white font-extrabold text-2xl"
          order={order}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="bg-[#0e8784] text-white font-bold px-[16px] py-[8px] rounded-md disabled:bg-[#e2dedb]"
          disabled={!isOrderCompleted}
        >
          Create my plan!
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
