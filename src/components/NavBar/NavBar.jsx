import Image from "next/image";

import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" text-lg font-semibold">
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
          <ul className=" flex gap-4 bg-base-100 rounded-box z-1 mt-3 w-52 p-2">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/destination'}>Destinations</Link></li>
            <li className="text-nowrap"><Link href={'/add-destination'}>My Bookings</Link></li>
          </ul>
        </div>
        <div className="navbar-center text-3xl"><Image src={'/assets/Wanderlast.png'} width={160} height={160} alt="imsge"  /></div>
        <div className="navbar-end">
          <ul className="flex gap-4">
            <li><Link href={'/profile'}>Profile</Link></li>
            <li><Link href={'/login'}>Login</Link></li>
            <li><Link href={'/signup'}>Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
