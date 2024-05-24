import { FC, ReactNode, useId } from "react";
import { InputVariants, TInputSlots, TInputVariants } from "./input-theme";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends TInputVariants {
  label: string;
  register: UseFormRegisterReturn;
  placeholder: string;
  description?: ReactNode;
  errorMessage?: string;
  classNames?: Partial<Record<TInputSlots, string>>;
  type?: "text" | "password";
}

export const Input: FC<InputProps> = ({
  label,
  description,
  placeholder,
  classNames,
  isDisabled = false,
  isInvalid = false,
  type = "text",
  errorMessage,
  register,
}) => {
  const {
    descriptionSlot,
    errorMessageSlot,
    inputSlot,
    labelSlot,
    parentSlot,
  } = InputVariants();

  const InputID = useId();

  return (
    <div
      className={parentSlot({
        className: classNames?.parentSlot,
      })}
      data-invalid={isInvalid}
      data-disabled={isDisabled}
    >
      <label
        className={labelSlot({
          isDisabled,
          isInvalid,
          className: classNames?.labelSlot,
        })}
        htmlFor={InputID}
      >
        {label}
      </label>
      <input
        id={InputID}
        type={type}
        disabled={isDisabled}
        placeholder={placeholder}
        className={inputSlot({
          isDisabled,
          isInvalid,
          className: classNames?.inputSlot,
        })}
        {...register}
      />
      {description}
      {errorMessage && (
        <span
          className={errorMessageSlot({
            isDisabled,
            isInvalid,
            className: classNames?.errorMessageSlot,
          })}
          data-test={`error-message-${register.name}`}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};
