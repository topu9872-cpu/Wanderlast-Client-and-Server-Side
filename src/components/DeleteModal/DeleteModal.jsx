"use client";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { AlertDialog, Button } from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
const DeleteModal = ({ destination }) => {
  const {
    destinationName,
    imageUrl,
    _id,
  } = destination;

  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVEL_URL}/destination/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    });
    const deleteData = await res.json();
    if(deleteData){
        redirect('/destination'),
        toast.error('packge is deleted successfully')
    }

  };

  return (
    <div>
      <AlertDialog>
        <Button className="btn btn-outline text-xl items-center text-red-500">
          <FaRegTrashAlt />
          Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <span className="text-black">
                  <Image
                    src={imageUrl}
                    height={40}
                    width={40}
                    alt="image"
                    className="rounded-full object-cover"
                  />
                </span>
                <AlertDialog.Heading>Delete travel Package</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  Are you sure you want to delete{" "}
                  <strong className="font-bold">"{destinationName}"</strong>?
                  this action cannot be undone will permanenty remove this
                  travel packge from the system.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button className="text-black" slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
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

export default DeleteModal;
