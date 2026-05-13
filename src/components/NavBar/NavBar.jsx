"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const router=useRouter()
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const isActive =
  (path) => pathname === path;

const handaleSignOut=async ()=>{
  await authClient.signOut();
  router.push('/signin')
}

  return (
    <div className="text-lg font-semibold">
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
          <ul className="flex gap-4 bg-base-100 rounded-box z-1 mt-3 w-52 p-2">
            <li>
              <Link
                href="/"
                className={
                  isActive("/") ? "text-cyan-500 underline" : "text-gray-700"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/destination"
                className={
                  isActive("/destination")
                    ? "text-cyan-500 underline"
                    : "text-gray-700"
                }
              >
                Destinations
              </Link>
            </li>
            <li className="text-nowrap">
              <Link
                href="/add-destination"
                className={
                  isActive("/add-destination")
                    ? "text-cyan-500 underline"
                    : "text-gray-700"
                }
              >
                My Bookings
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-center text-3xl">
          <Image
            src="/assets/Wanderlast.png"
            width={160}
            height={160}
            alt="logo"
          />
        </div>

        <div className="navbar-end">
          <ul className="flex gap-4 items-center">
            {user && (
              <>
                <h1 className="text-cyan-500 text-sm">{`Welcome, ${user?.name} !`}</h1>
                <Image
                  src={user?.image?.charAt(0) || "/assets/icons8-avatar.gif"}
                  width={36}
                  height={36}
                  alt={user?.name || "user"}
                  className="rounded-full border"
                />
              </>
            )}

            <li>
              <Link
                href="/profile"
                className={isActive("/profile") ? "text-cyan-500" : ""}
              >
                Profile
              </Link>
            </li>

            {user ? (
              <li>
               <button onClick={handaleSignOut} className={isActive("/signin") ? "text-red-500" : ""}>Logout</button>
              </li>
            ) : (
              <li>
                <Link
                  href="/signin"
                  className={isActive("/signin") ? "text-cyan-500" : ""}
                >
                  Login
                </Link>
              </li>
            )}
{!user && <li>
              <Link
                href="/signup"
                className={isActive("/signup") ? "text-cyan-500" : ""}
              >
                Sign Up
              </Link>
            </li>

}
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
