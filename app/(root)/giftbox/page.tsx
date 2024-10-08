"use client";

import useGiftbox from "@/lib/hooks/useGiftbox";

import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Giftbox = () => {
  const router = useRouter();
  const { user } = useDynamicContext();
  const giftbox = useGiftbox();

  const total = giftbox.giftboxItems.reduce(
    (acc, giftboxItem) => acc + giftboxItem.item.price * giftboxItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = user ? {
    userId: user?.userId,
    email: user?.email,
    // name: user?.fullName,
  } : null;

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ giftboxItems: giftbox.giftboxItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
        // console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Your Giftbox</p>
        <hr className="my-6" />

        {giftbox.giftboxItems.length === 0 ? (
          <p className="text-body-bold">No item in giftbox</p>
        ) : (
          <div>
            {giftbox.giftboxItems.map((giftboxItem) => (
              <div className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between">
                <div className="flex items-center">
                  <Image
                    src={giftboxItem.item.media[0]}
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="gift"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{giftboxItem.item.title}</p>
                    {giftboxItem.color && (
                      <p className="text-small-medium">{giftboxItem.color}</p>
                    )}
                    {giftboxItem.size && (
                      <p className="text-small-medium">{giftboxItem.size}</p>
                    )}
                    <p className="text-small-medium">${giftboxItem.item.price}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => giftbox.decreaseQuantity(giftboxItem.item._id)}
                  />
                  <p className="text-body-bold">{giftboxItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => giftbox.increaseQuantity(giftboxItem.item._id)}
                  />
                </div>

                <Trash
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => giftbox.removeItem(giftboxItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          Summary{" "}
          <span>{`(${giftbox.giftboxItems.length} ${giftbox.giftboxItems.length > 1 ? "items" : "item"
            })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>Total Amount</span>
          <span>$ {totalRounded}</span>
        </div>
        <button
          className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Giftbox;
