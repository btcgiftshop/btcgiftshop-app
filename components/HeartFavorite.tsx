"use client"

import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface HeartFavoriteProps {
  gift: GiftType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const HeartFavorite = ({ gift, updateSignedInUser }: HeartFavoriteProps) => {
  const router = useRouter();
  const { user } = useDynamicContext();

  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/users/${user?.userId}`, {
        method: "GET"
      })
      const data = await res.json();
      setIsLiked(data.wishlist.includes(gift._id));
      setLoading(false);
    } catch (err) {
      console.log("[users_GET]", err);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      if (!user) {
        // router.push("/sign-in");
        return;
      } else {
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ userId: user.userId, giftId: gift._id }),
        });
        const updatedUser = await res.json();
        setIsLiked(updatedUser.wishlist.includes(gift._id));
        updateSignedInUser && updateSignedInUser(updatedUser);
      }
    } catch (err) {
      console.log("[wishlist_POST]", err);
    }
  };

  return (
    <button onClick={handleLike}>
      <Heart fill={`${isLiked ? "red" : "white"}`} />
    </button>
  );
};

export default HeartFavorite;
