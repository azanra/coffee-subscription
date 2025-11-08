interface IOrderSummary {
  order: {
    preference: string | null;
    beanType: string | null;
    quantity: string | null;
    grindOption: string | null;
    deliveries: string | null;
  };
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
      <span className={order ? "" : "inline-block w-[16px] border-b-1"}>
        {`${text} ${order}`}
      </span>
    );
  };

  const getPreference = getOrderSummary(
    preference,
    isCapsules ? "using" : "as"
  );
  const getBeanType = getOrderSummary(beanType);
  const getQuantity = getOrderSummary(quantity);
  const getGrindOption = !isCapsules && getOrderSummary(grindOption);
  const getDeliveries = getOrderSummary(deliveries);

  return (
    <div>
      <div>
        <h1>Order Summary</h1>
        <p>
          I drink my coffee {getPreference}, with a {getBeanType} type of bean.{" "}
          {getQuantity} {isWithGroundAla}
          {getGrindOption}, sent to me {getDeliveries}.
        </p>
      </div>
      <div>
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
