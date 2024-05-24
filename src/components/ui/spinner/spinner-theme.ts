import { tv, type VariantProps } from "tailwind-variants";

const SpinnerVariants = tv({
  slots: {
    wrapperSlot: "relative flex h-5 w-5",
    circle1Slot:
      "absolute h-full w-full animate-spinner-ease-spin rounded-full border-2 border-solid border-b-current border-l-transparent border-r-transparent border-t-transparent",
    circle2Slot:
      "absolute h-full w-full animate-spinner-linear-spin rounded-full border-2 border-dotted border-b-current border-l-transparent border-r-transparent border-t-transparent opacity-75",
  },
});

type TSpinnerVariants = VariantProps<typeof SpinnerVariants>;

type TSpinnerSlots = keyof typeof SpinnerVariants.slots;

export { SpinnerVariants, type TSpinnerVariants, type TSpinnerSlots };
