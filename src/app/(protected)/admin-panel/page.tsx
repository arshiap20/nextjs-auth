import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/shared/routes";

const AdminPanelPage = async () => {
  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    redirect(DEFAULT_LOGIN_REDIRECT);
  }

  return <div className="text-center text-2xl mt-4 text-zinc-200">Admin Panel</div>;
};

export default AdminPanelPage;
