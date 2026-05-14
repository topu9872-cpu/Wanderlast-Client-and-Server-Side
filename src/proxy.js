import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
import toast from "react-hot-toast";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
console.log(session)
  if (!session) {
    toast.error('you have to signup ❤️❤️❤️')
    return NextResponse.redirect(
      new URL("/signin", request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile","//destination/:_id","/my-profile","/my-bookings"],
};