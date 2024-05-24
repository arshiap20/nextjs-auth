import { tv, type VariantProps } from "tailwind-variants";

const ButtonVariants = tv({
  base: "rounded-md py-3 px-4 transition-colors duration-300 font-semibold flex justify-center gap-2 items-center",

  variants: {
    variant: {
      solid: "bg-zinc-800 ",
    },
    color: {
      emerald: "text-emerald-400",
      yellow: "text-yellow-400",
    },
    isLoading: {
      true: "cursor-wait opacity-50 bg-zinc-950",
    },
    isDisabled: {
      true: "opacity-50 bg-zinc-950 cursor-no-drop",
    },
    fullWidth: {
      true: "w-full",
    },
  },

  compoundVariants: [
    {
      variant: "solid",
      isDisabled: false,
      isLoading: false,
      class: "hover:bg-zinc-700",
    },
    {
      variant: "solid",
      color: "emerald",
      isDisabled: false,
      isLoading: false,
      class: "hover:text-emerald-500",
    },
    {
      variant: "solid",
      color: "yellow",
      isDisabled: false,
      isLoading: false,
      class: "hover:text-yellow-500",
    },
  ],

  defaultVariants: {
    color: "emerald",
    variant: "solid",
    isLoading: false,
    isDisabled: false,
    fullWidth: false,
  },
});

type TButtonVariants = VariantProps<typeof ButtonVariants>;

export { ButtonVariants, type TButtonVariants };
