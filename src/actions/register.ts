"use server";

import { RegisterSchema } from "@/shared/zod-schemas";
import { z } from "zod";
import prisma from "@/shared/utils/db";
import bcrypt from "bcryptjs";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validatedData = RegisterSchema.safeParse(data);

  if (!validatedData.success) return { error: "invalid fields" };

  try {
    const { username, phoneNumber, password } = validatedData.data;

    //hash password
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(password, salt);

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { phoneNumber }],
      },
    });

    if (existingUser) {
      return { error: "username or phoneNumber is already exist" };
    }

    await prisma.user.create({
      data: {
        username,
        phoneNumber,
        password: hashedPass,
      },
    });

  } catch (error) {
    return { error: "failed to register" };
  }

  return { success: "Register successfully" };
};
