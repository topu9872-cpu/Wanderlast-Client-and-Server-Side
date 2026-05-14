import Link from "next/link";
import { Button } from "@heroui/react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white">
      <h1 className="text-7xl font-extrabold text-cyan-500 md:text-9xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold md:text-4xl">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-sm text-gray-400 md:text-base">
        Oops! The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/" className="mt-8">
        <Button
       
          className="rounded-full px-6 btn btn-info py-6 text-base font-semibold"
        >
          Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;