import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button, Card } from "@heroui/react";
import { Eye, MapPin, Trash } from "lucide-react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import BookingDelete from "@/components/BookingDelete/BookingDelete";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:2000/booking/${user?.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();
console.log(bookings)
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-10 xl:px-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold sm:text-4xl">My Bookings</h1>

        <p className="mt-2 text-sm opacity-70 sm:text-base">
          Manage and view your upcoming travel plans
        </p>
      </div>

      <div className=" space-y-5 ">
        {bookings.map((booking) => (
          <Card
            key={booking._id}
            className="overflow-hidden rounded-2xl card border-4 border-gray-300 p-4 shadow-sm"
          >
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="relative h-52 w-full overflow-hidden rounded-xl md:h-44 md:w-44">
                <Image
                  src={booking?.destinationImage}
                  alt={"booking image"}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                    Continue
                  </span>

                  <p className="mt-2 text-2xl font-bold text-cyan-500 opacity-70">
                    {booking.destinationName}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div className="space-y-3 font-semibold">
                    <div className="flex items-center gap-2 text-cyan-500 opacity-80">
                      <FaCalendarAlt/>
                      <span >
                        {new Date(booking.departureDate).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 opacity-80">
                      <MapPin size={18} className="text-cyan-500" />
                      <span className="text-cyan-500">{booking.destinationCountry}</span>
                    </div>

                    <h3 className="text-xl font-bold text-cyan-500">
                      ${booking.destinationPrice}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <BookingDelete booking={booking} />
                    {/* // havean issue in viwe btn  */}
                    <Link href={`/destination/${booking.destinationId}`}>
                      <Button color="primary" className="font-medium">
                        <Eye size={18} />
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
