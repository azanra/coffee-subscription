import { PRICE_MULTIPLIER, SHIPMENT_PRICE } from "../constants/planConst";
import type { IDeliveries, IQuantity } from "../interfaces/PlanInterface";

const getCurrentPrice = (
  quantity: IQuantity | null,
  deliveries: IDeliveries | null,
  body: string,
) => {
  if (!quantity || !deliveries)
    return body.replace("$[current_price]", "Price");

  const currentPrice = SHIPMENT_PRICE[quantity];
  const totalPrice = currentPrice[deliveries];

  return body.replace("[current_price]", `${totalPrice.toFixed(2)}`);
};

const getFinalPrice = (
  quantity: IQuantity | null,
  deliveries: IDeliveries | null,
) => {
  if (!quantity || !deliveries) return;

  const currentPrice = SHIPMENT_PRICE[quantity][deliveries];
  return `${(currentPrice * PRICE_MULTIPLIER[deliveries]).toFixed(2)} / mo`;
};

export { getCurrentPrice, getFinalPrice };
