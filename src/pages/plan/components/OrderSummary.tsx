import { useRef } from "react";
import OrderSummaryText from "./OrderSummaryText";
import SummaryModal from "./SummaryModal";
import type { IOrder } from "../interfaces/PlanInterface";

const OrderSummary = ({
  order,
  setOrder,
}: {
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isCapsules = order.preference === "Capsule";

  const isOrderCompleted = Object.keys(order)
    .filter((option) => (isCapsules ? option !== "grindOption" : option))
    .every((option) => order[option as keyof IOrder]);

  return (
    <div className="flex flex-col gap-[32px] xxl:gap-[48px]">
      <div className="flex flex-col gap-[8px] bg-(--neutral-900) rounded-(--radius-8) px-[24px] py-[48px] md:px-[48px] xxl:px-[64px]">
        <h1 className="text-preset-7 text-(--neutral-0) opacity-[50%]">
          ORDER SUMMARY
        </h1>
        <OrderSummaryText order={order} />
      </div>
      <div className="flex justify-end">
        <button
          className="focus:outline-(--teal-600) text-preset-5 bg-(--teal-600) hover:bg-(--teal-300) disabled:bg-(--neutral-200) text-(--neutral-50) px-[32px] py-[16px] rounded-(--radius-6)"
          disabled={!isOrderCompleted}
          onClick={() => {
            dialogRef.current?.showModal();
          }}
        >
          Create my plan!
        </button>
      </div>

      <SummaryModal dialogRef={dialogRef} order={order} setOrder={setOrder} />
    </div>
  );
};

export default OrderSummary;
