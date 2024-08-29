"use client"

import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ giftMedia }: { giftMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(giftMedia[0]);

  return (
    <div className="flex flex-col gap-3 max-w-[500px">
      <Image
        src={mainImage}
        width={500}
        height={500}
        alt="gift"
        className="w-96 h-96 rounded-lg shadow-xl object-cover"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {giftMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={200}
            width={200}
            alt="gift"
            className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${mainImage === image ? "border-2 border-black" : ""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
