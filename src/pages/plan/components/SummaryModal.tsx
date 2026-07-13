import OrderSummaryText from "./OrderSummaryText";
import type { Order } from "./OrderSummary";
import React, { useEffect, useRef } from "react";

const SummaryModal = ({
  order,
  isShowCheckoutModal,
  setIsShowCheckoutModal,
}: {
  order: Order;
  isShowCheckoutModal: boolean;
  setIsShowCheckoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isShowCheckoutModal) {
      dialogRef?.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isShowCheckoutModal]);

  return (
    <dialog ref={dialogRef}>
      <div>
        <h1>Order Summary</h1>
      </div>
      <div>
        <div>
          <OrderSummaryText order={order} />
        </div>
        <div>
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
        </div>
      </div>
      <div>
        <button onClick={() => setIsShowCheckoutModal(false)}>Checkout</button>
      </div>
    </dialog>
  );
};

export default SummaryModal;
