"use client";

import { Button, Input } from "@/components/ui/form";
import { RegisterSchema } from "@/shared/zod-schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useState, useTransition } from "react";
import { sleep } from "@/shared/utils/fn";
import { register as registerAction } from "@/actions/register";

const RegisterPage = () => {
  const [message, setMessage] = useState<{
    error?: string;
    success?: string;
  }>({});
  const [isPending, startTransition] = useTransition();

  type TRegisterInputs = z.infer<typeof RegisterSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterInputs>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      password: "",
      confirm: "",
    },
  });

  const onRegisterSubmit: SubmitHandler<TRegisterInputs> = async (data) => {
    startTransition(async () => {
      // 2s wait for see loading style
      await sleep(2000);
      const result = await registerAction(data);
      setMessage(result);
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-semibold text-3xl bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 inline-block text-transparent bg-clip-text pb-0.5">
            Register
          </span>
        </div>
        <p className="text-sm text-zinc-400 ">
          you have an account?{" "}
          <Link
            className="font-bold bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 inline-block text-transparent bg-clip-text"
            href={"/login"}
          >
            Login
          </Link>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onRegisterSubmit)}
        className="flex flex-col gap-4 mt-6"
      >
        <Input
          label="PhoneNumber"
          placeholder="09...."
          register={register("phoneNumber")}
          isInvalid={!!errors.phoneNumber}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          label="Username"
          placeholder="enter your username"
          register={register("username")}
          isInvalid={!!errors.username}
          errorMessage={errors.username?.message}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            label="Password"
            type="password"
            placeholder="enter your password"
            register={register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="enter again your password"
            register={register("confirm")}
            isInvalid={!!errors.confirm}
            errorMessage={errors.confirm?.message}
          />
        </div>
        {message.success && (
          <div className="p-2 w-full rounded-md bg-green-300 border-2 border-green-400 text-green-600 font-semibold">
            {message.success}
          </div>
        )}
        {message.error && (
          <div className="p-2 w-full rounded-md bg-red-300 border-2 border-red-400 text-red-600 font-semibold">
            {message.error}
          </div>
        )}
        <Button data-test="register-btn" isLoading={isPending} color="yellow" fullWidth className="mt-2">
          Register
        </Button>
      </form>
    </>
  );
};
export default RegisterPage;
