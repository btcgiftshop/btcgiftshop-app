"use client"

import useGiftbox from "@/lib/hooks/useGiftbox";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const giftbox = useGiftbox();

  useEffect(() => {
    giftbox.clearGiftbox();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-heading4-bold text-red-1">Successful Payment</p>
      <p>Thank you for your purchase</p>
      <Link
        href="/"
        className="p-4 border text-base-bold hover:bg-black hover:text-white"
      >
        CONTINUE TO GIFTING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
