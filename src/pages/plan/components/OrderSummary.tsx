import { useState } from "react";
import OrderSummaryText from "./OrderSummaryText";
import SummaryModal from "./SummaryModal";
import type { IOrder } from "../interfaces/PlanInterface";

const OrderSummary = ({ order }: { order: IOrder }) => {
  const [isShowCheckoutModal, setIsShowCheckoutModal] = useState(false);

  const { preference, beanType, quantity, grindOption, deliveries } = order;
  const isCapsules = order.preference === "Capsule";

  const isOrderCompleted =
    preference && beanType && quantity && deliveries && isCapsules
      ? isCapsules
      : grindOption !== null;

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[48px]">
      <div className="flex flex-col gap-[8px] bg-(--neutral-900) rounded-(--radius-8) px-[24px] py-[48px] md:px-[48px] lg:px-[64px]">
        <h1 className="text-preset-7 text-(--neutral-0) opacity-[50%]">
          ORDER SUMMARY
        </h1>
        <OrderSummaryText order={order} />
      </div>
      <div className="flex justify-end">
        <button
          className="bg-[#0e8784] text-white font-bold px-[16px] py-[8px] rounded-md disabled:bg-[#e2dedb]"
          disabled={!isOrderCompleted}
          onClick={() => setIsShowCheckoutModal(true)}
        >
          Create my plan!
        </button>
      </div>
      <SummaryModal
        order={order}
        isShowCheckoutModal={isShowCheckoutModal}
        setIsShowCheckoutModal={setIsShowCheckoutModal}
      />
    </div>
  );
};

export default OrderSummary;
