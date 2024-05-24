import { auth } from "@/auth";
import Link from "next/link";

const PanelPage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col items-center mt-4 text-xl font-bold text-zinc-200">
      <span>username: {session?.user.username}</span>
      <span>role: {session?.user.role}</span>

      {session?.user.role === "ADMIN" && (
        <Link href={"/admin-panel"} className="mt-4">
          Go To Admin Panel
        </Link>
      )}
    </div>
  );
};

export default PanelPage;
