import { FC, ReactNode } from "react";
import { ButtonVariants, TButtonVariants } from "./button-theme";
import { Spinner } from "@/components/ui/spinner";

interface ButtonProps extends TButtonVariants {
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  color = "emerald",
  isDisabled = false,
  isLoading = false,
  variant = "solid",
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled || isLoading}
      data-loading={isLoading}
      data-disabled={isDisabled}
      className={ButtonVariants({
        color,
        isDisabled,
        isLoading,
        variant,
        fullWidth,
        className,
      })}
      {...props}
    >
      {children}
      {isLoading && <Spinner classNames={{ wrapperSlot: "w-4 h-4" }} />}
    </button>
  );
};
