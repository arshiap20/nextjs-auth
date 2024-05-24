import Link from "next/link";
import { auth, signOut } from "@/auth";
import { LOGIN_ROUTE } from "@/shared/routes";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="flex justify-between px-10 py-4 items-center min-h-[8dvh] bg-transparent">
      <ul className="flex items-center gap-3">
        <li>
          <Link
            href="/login"
            className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 inline-block text-transparent bg-clip-text font-bold"
          >
            Login
          </Link>
        </li>
        <div className="w-1 h-5 bg-zinc-200 rounded-full" />
        <li>
          <Link
            href="/register"
            className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 inline-block text-transparent bg-clip-text font-bold"
          >
            Register
          </Link>
        </li>
      </ul>

      {session !== null && (
        <div className="text-white font-black flex gap-4">
          <form
            action={async () => {
              "use server";

              await signOut({ redirectTo: LOGIN_ROUTE });
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
