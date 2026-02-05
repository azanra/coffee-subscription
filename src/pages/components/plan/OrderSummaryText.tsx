import type { Order } from "./OrderSummary";

const OrderSummaryText = ({
  customClass = "",
  order,
}: {
  customClass?: string;
  order: Order;
}) => {
  const { preference, beanType, quantity, grindOption, deliveries } = order;

  const isCapsules = preference === "Capsule";
  const isWholeBean = grindOption === "Wholebean";
  const isWithGroundAla = !isCapsules && !isWholeBean ? "ground ala" : "";

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
  const getGrindOption = !isCapsules ? getOrderSummary(grindOption) : null;
  const getDeliveries = getOrderSummary(deliveries);

  return (
    <p className={customClass}>
      "I drink my coffee {getPreference}, with a {getBeanType} type of bean.{" "}
      {getQuantity} {isWithGroundAla} {getGrindOption}, sent to me{" "}
      {getDeliveries}
      ."
    </p>
  );
};

export default OrderSummaryText;
