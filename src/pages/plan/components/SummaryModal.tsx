import type { IOrder } from "../interfaces/PlanInterface";
import OrderSummaryText from "./OrderSummaryText";

import React from "react";

const SummaryModal = ({
  dialogRef,
  order,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  order: IOrder;
}) => {
  const handleCheckout = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-(--neutral-900) backdrop:opacity-[70%] rounded-(--radius-8) max-w-[311px] md:max-w-[540px]"
    >
      <h1 className="text-preset-2-mobile md:text-preset-2  px-[16px] py-[24px] md:px-[48px] md:py-[44px] bg-(--neutral-900) text-(--neutral-0)">
        Order Summary
      </h1>

      <div className="px-[16px] py-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">
        <div className="flex flex-col gap-[20px]">
          <OrderSummaryText order={order} isModal />
          <p className="text-preset-6 text-(--neutral-900)">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
        </div>

        <div className="flex flex-col flex-col md:flex-row md:justify-between gap-[16px]">
          <p className="text-preset-3 text-(--neutral-900)">Price</p>
          <button
            onClick={() => handleCheckout()}
            className="text-preset-5 bg-(--teal-600) text-(--neutral-50) px-[32px] py-[16px] rounded-(--radius-6)"
          >
            Checkout
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default SummaryModal;
