import GiftCard from "@/components/GiftCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={100}
        height={100}
        alt="collection"
        className="w-full h-[100px] object-contain rounded-xl"
      />
      {/* <p className="text-heading1-bold text-grey-2">{collectionDetails.title}</p> */}
      <p className="text-heading3-bold text-grey-2 text-center max-w-[900px]">{collectionDetails.description}</p>
      <div className="flex flex-wrap gap-16 justify-center">
        {collectionDetails.gifts.map((gift: GiftType) => (
          <GiftCard key={gift._id} gift={gift} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";

