import { tv, type VariantProps } from "tailwind-variants";

const InputVariants = tv({
  slots: {
    parentSlot: "flex flex-col",
    labelSlot: "text-zinc-200 text-md font-medium mb-2",
    inputSlot: "px-3 py-2 text-zinc-200 bg-transparent border border-zinc-500 rounded-md placeholder:text-sm",
    descriptionSlot: "",
    errorMessageSlot: "text-red-600 text-xs mt-1",
  },
  variants: {
    isDisabled: {
      true: {},
    },
    isInvalid: {
      true: {},
    },
  },
  defaultVariants: {
    isDisabled: false,
    isInvalid: false,
  },
});

type TInputVariants = VariantProps<typeof InputVariants>;

type TInputSlots = keyof typeof InputVariants.slots;

export { InputVariants, type TInputVariants, type TInputSlots };
