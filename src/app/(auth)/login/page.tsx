"use client";

import { Button, Input } from "@/components/ui/form";
import { z } from "zod";
import { LoginSchema } from "@/shared/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { sleep } from "@/shared/utils/fn";

const LoginPage = () => {
  const [message, setMessage] = useState<{
    error?: string;
    success?: string;
  }>({});
  const [isPending, startTransition] = useTransition();

  type TLoginInputs = z.infer<typeof LoginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputs>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onLoginSubmit: SubmitHandler<TLoginInputs> = async (data) => {
    startTransition(async () => {
      // 1s wait for see loading style
      await sleep(1000);
      const result = await login(data);
      setMessage(result);
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-semibold text-3xl bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 inline-block text-transparent bg-clip-text pb-0.5">
            Login
          </span>
        </div>
        <p className="text-sm text-zinc-400">
          Don{"'"}t have an account yet?{" "}
          <Link
            className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 inline-block text-transparent bg-clip-text font-bold"
            href={"/register"}
          >
            Register
          </Link>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className="flex flex-col gap-4 mt-6"
      >
        <Input
          label="Username"
          placeholder="enter your username"
          register={register("username")}
          isInvalid={!!errors.username}
          errorMessage={errors.username?.message}
        />
        <Input
          label="Password"
          type="password"
          placeholder="enter your password"
          register={register("password")}
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
        />
        {message?.error && (
          <div className="p-2 w-full rounded-md bg-red-300 border-2 border-red-400 text-red-600 font-semibold">
            {message.error}
          </div>
        )}
        <Button
          isLoading={isPending}
          color="emerald"
          fullWidth
          className="mt-2"
          data-test="login-btn"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginPage;
