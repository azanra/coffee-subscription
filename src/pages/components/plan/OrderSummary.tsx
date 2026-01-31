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
  const isWholeBean = grindOption === "Wholebean";
  const isWithGroundAla = !isCapsules && !isWholeBean && "ground ala";

  const isOrderCompleted =
    preference && beanType && quantity && deliveries && isCapsules
      ? isCapsules
      : grindOption !== null;

  const getOrderSummary = (order: string | null, text: string = "") => {
    return (
      <span>
        {text}{" "}
        <span
          className={
            order
              ? "text-[#0e8784]"
              : " inline-block w-[30px] h-[30px] border-b-1 border-dashed border-[#0e8784]"
          }
        >{`${order ? order : " "}`}</span>
      </span>
    );
  };

  const getPreference = getOrderSummary(
    preference,
    isCapsules ? "using" : "as",
  );
  const getBeanType = getOrderSummary(beanType);
  const getQuantity = getOrderSummary(quantity);
  const getGrindOption = !isCapsules && getOrderSummary(grindOption);
  const getDeliveries = getOrderSummary(deliveries);

  return (
    <div className="mt-[64px]">
      <div className="bg-[#2c343e] px-[64px] py-[32px] rounded-md mb-[64px]">
        <h1 className="text-[#ffffff] opacity-[0.5] mb-[8px]">ORDER SUMMARY</h1>
        <p className="text-white font-extrabold text-2xl">
          "I drink my coffee {getPreference}, with a {getBeanType} type of bean.{" "}
          {getQuantity} {isWithGroundAla}
          {getGrindOption}, sent to me {getDeliveries}."
        </p>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-[#0e8784] text-white font-bold px-[16px] py-[8px] rounded-md disabled:bg-[#e2dedb]"
          disabled={isOrderCompleted}
        >
          Create my plan!
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
