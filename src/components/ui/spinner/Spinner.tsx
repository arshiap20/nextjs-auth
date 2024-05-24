import { FC } from "react";
import {
  SpinnerVariants,
  TSpinnerSlots,
  TSpinnerVariants,
} from "./spinner-theme";

interface SpinnerProps extends TSpinnerVariants {
  classNames?: Partial<Record<TSpinnerSlots, string>>;
}

export const Spinner: FC<SpinnerProps> = ({ classNames }) => {
  const { circle1Slot, circle2Slot, wrapperSlot } = SpinnerVariants();

  return (
    <div className={wrapperSlot({ className: classNames?.wrapperSlot })}>
      <i className={circle1Slot({ className: classNames?.circle1Slot })} />
      <i className={circle2Slot({ className: classNames?.circle2Slot })} />
    </div>
  );
};
