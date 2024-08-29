"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";

const GiftInfo = ({ giftInfo }: { giftInfo: GiftType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    giftInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    giftInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{giftInfo.title}</p>
        <HeartFavorite gift={giftInfo} />
      </div>

      <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">Category:</p>
        <p className="text-base-bold">{giftInfo.category}</p>
      </div>

      <p className="text-heading3-bold">$ {giftInfo.price}</p>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Description:</p>
        <p className="text-small-medium">{giftInfo.description}</p>
      </div>

      {giftInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="flex gap-2">
            {giftInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${selectedColor === color && "bg-black text-white"
                  }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {giftInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {giftInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${selectedSize === size && "bg-black text-white"
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Quantity:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="outline text-base-bold py-3 w-[150px] rounded-lg hover:bg-black hover:text-white"
        onClick={() => {
          cart.addItem({
            item: giftInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
      >
        Add To Giftbox
      </button>
    </div>
  );
};

export default GiftInfo;
