"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface GiftCardProps {
  gift: GiftType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const GiftCard = ({ gift, updateSignedInUser }: GiftCardProps) => {
  return (
    <Link
      href={`/gifts/${gift._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={gift.media[0]}
        alt="gift"
        width={250}
        height={300}
        className="h-auto rounded-lg object-cover"
      />
      <div>
        <p className="text-base-bold">{gift.title}</p>
        <p className="text-small-medium text-grey-2">{gift.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">${gift.price}</p>
        <HeartFavorite gift={gift} updateSignedInUser={updateSignedInUser} />
      </div>
    </Link>
  );
};

export default GiftCard;
