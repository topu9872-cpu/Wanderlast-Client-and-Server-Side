'use client'
import { AlertDialog, Button } from "@heroui/react";

import { toast } from "react-toastify";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";


const BookingDelete = ({ booking }) => {
  
    const router = useRouter();
  const handleCancalBooking = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVEL_URL}/booking/${booking._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const deleteData = await res.json();
    if (deleteData.deletedCount > 0) {
  toast.success("Package removed successfully");
  router.refresh();
}
  };

  return (
    <div>
      <AlertDialog>
        <Button variant="danger" className="font-medium">
          <Trash size={18} />
          Cancel
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <span className="text-black"></span>
                <AlertDialog.Heading>Delete travel Package</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  Are you sure you want to delete{" "}
                  <strong className="font-bold">
                    "{booking.destinationName}"
                  </strong>
                  ? this action cannot be undone will permanenty remove this
                  travel packge from the system.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button className="text-black" slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={handleCancalBooking}
                  slot="close"
                  variant="danger"
                >
                  Delete Package
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default BookingDelete;
