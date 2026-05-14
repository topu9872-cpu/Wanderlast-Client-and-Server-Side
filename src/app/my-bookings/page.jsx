import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {Button, Card, CloseButton} from "@heroui/react";

const MyBookings = async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user=session?.user
console.log(session)
    const res=await fetch(`http://localhost:2000/booking/${user?.id}`)
    const data= await res.json();
    console.log(data)
  return (
<div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-bold text-foreground">My Bookings</h1>

      <div className="flex w-full items-center justify-center">
        <div className="grid w-full max-w-3xl grid-cols-12 gap-4">
          
          {/* Booking Card */}
          <Card className="col-span-12 flex flex-col overflow-hidden p-4 sm:flex-row gap-4">
            
            {/* Image Section */}
            <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[140px] sm:w-[140px]">
              <img
                alt="Booking Thumbnail"
                className="h-full w-full object-cover transition-transform hover:scale-110"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col">
              <div className="relative flex flex-col gap-1 pr-8">
                <h3 className="text-lg font-semibold text-foreground">Become an ACME Creator!</h3>
                <p className="text-sm text-default-500">
                  Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
                  faucibus etiam.
                </p>
                {/* Close/Action Button */}
                <button 
                  aria-label="Close" 
                  className="absolute right-0 top-0 rounded-full p-1 hover:bg-default-100"
                >
                  <span className="text-xl">×</span>
                </button>
              </div>

              {/* Footer Section */}
              <div className="mt-6 flex flex-col items-end justify-between gap-4 border-t border-divider pt-4 sm:flex-row sm:items-center">
                <div className="flex flex-col w-full sm:w-auto">
                  <span className="text-sm font-medium text-warning">Only 10 spots left</span>
                  <span className="text-xs text-default-400">Submission ends Oct 10, 2026.</span>
                </div>
                <Button color="primary" className="w-full font-medium sm:w-auto">
                  Apply Now
                </Button>
              </div>
            </div>

          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default MyBookings;