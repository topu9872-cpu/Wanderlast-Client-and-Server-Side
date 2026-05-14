"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
  };

  // Nav Links Component to keep code DRY
  const NavLinks = ({ mobile = false }) => (
    <>
      <li>
        <Link href="/" className={isActive("/") ? "text-cyan-500 font-bold" : "text-gray-700"}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/destination" className={isActive("/destination") ? "text-cyan-500 font-bold" : "text-gray-700"}>
          Destinations
        </Link>
      </li>
      <li>
        <Link href="/my-bookings" className={isActive("/my-bookings") ? "text-cyan-500 font-bold" : "text-gray-700"}>
          My Bookings
        </Link>
      </li>
      <li>
        <Link href="/add-destination" className={isActive("/add-destination") ? "text-cyan-500 font-bold" : "text-gray-700"}>
          Add Destination
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LEFT SECTION: Mobile Toggle + Desktop Menu */}
        <div className="navbar-start">
          {/* Hamburger for Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 border border-gray-100">
              <NavLinks mobile />
            </ul>
          </div>

          {/* Desktop Links - Hidden on Mobile */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <NavLinks />
            </ul>
          </div>
        </div>

        {/* CENTER SECTION: Logo (Always centered or moves to start on mobile) */}
        <div className="navbar-center">
          <Link href="/">
            <Image
              src="/assets/Wanderlast.png"
              width={140}
              height={40}
              alt="logo"
              className="w-28 md:w-36 h-auto"
              priority
            />
          </Link>
        </div>

        {/* RIGHT SECTION: User Profile/Auth */}
        <div className="navbar-end gap-2">
          {/* Welcome Text - Desktop Only */}
          {user && (
            <div className="hidden md:block text-right mr-2 leading-tight">
              <p className="text-[10px] uppercase text-gray-400">Welcome</p>
              <p className="text-cyan-600 text-xs font-bold truncate max-w-25">{user.name}</p>
            </div>
          )}

          {/* User Avatar Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
              <div className="w-9 rounded-full ring ring-cyan-500 ring-offset-base-100 ring-offset-1">
                <Image
                  src={user?.image || "/assets/icons8-avatar.gif"}
                  width={36}
                  height={36}
                  alt="Avatar"
                />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-gray-100">
              <li className="md:hidden px-4 py-2 font-bold text-cyan-600 border-b mb-1">
                Hi, {user?.name || "Guest"}
              </li>
              <li><Link href="/profile">My Profile</Link></li>
              
              {user ? (
                <li><button onClick={handleSignOut} className="text-red-500">Logout</button></li>
              ) : (
                <>
                  <li><Link href="/signin">Login</Link></li>
                  <li><Link href="/signup">Sign Up</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;