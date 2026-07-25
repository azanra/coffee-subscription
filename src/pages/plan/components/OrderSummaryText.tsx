import type { IOrder } from "../interfaces/PlanInterface";

const OrderSummaryText = ({ order }: { order: IOrder }) => {
  const { preference, beanType, quantity, grindOption, deliveries } = order;

  const isCapsules = preference === "Capsule";
  const isWholeBean = grindOption === "Wholebean";
  const isWithGroundAla = !isCapsules && !isWholeBean ? "ground ala" : "";

  const getOrderSummary = (order: string | null, text: string = "") => {
    return (
      <span>
        {text}{" "}
        <span className="text-(--teal-600)">{`${order ? order : "_____"}`}</span>
      </span>
    );
  };

  const getPreference = getOrderSummary(
    preference,
    isCapsules ? "using" : "as",
  );
  const getBeanType = getOrderSummary(beanType);
  const getQuantity = getOrderSummary(quantity);
  const getGrindOption = !isCapsules ? getOrderSummary(grindOption) : null;
  const getDeliveries = getOrderSummary(deliveries);

  return (
    <p className="text-preset-4 text-(--neutral-0)">
      “I drink my coffee {getPreference}, with a {getBeanType} type of bean.{" "}
      {getQuantity} {isWithGroundAla} {getGrindOption}, sent to me{" "}
      {getDeliveries}
      .”
    </p>
  );
};

export default OrderSummaryText;
