"use client"

import Loader from "@/components/Loader"
import GiftCard from "@/components/GiftCard"
import { getGiftDetails } from "@/lib/actions/actions"
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { use, useEffect, useState } from "react"

const Wishlist = () => {
  const { user } = useDynamicContext();

  const [loading, setLoading] = useState(true)
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null)
  const [wishlist, setWishlist] = useState<GiftType[]>([])

  const getUser = async () => {
    try {
      const res = await fetch(`/api/users/${user?.userId}`, {
        method: "GET"
      })
      const data = await res.json();
      setSignedInUser(data)
      setLoading(false)
    } catch (err) {
      console.log("[users_GET", err)
    }
  }

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [user])

  const getWishlistGifts = async () => {
    setLoading(true)

    if (!signedInUser) return

    const wishlistGifts = await Promise.all(signedInUser.wishlist.map(async (giftId) => {
      const res = await getGiftDetails(giftId)
      return res
    }))

    setWishlist(wishlistGifts)
    setLoading(false)
  }

  useEffect(() => {
    if (signedInUser) {
      getWishlistGifts()
    }
  }, [signedInUser])

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser)
  }


  return loading ? <Loader /> : (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Your Wishlist</p>
      {wishlist.length === 0 && (
        <p>No items in your wishlist</p>
      )}

      <div className="flex flex-wrap justify-center gap-16">
        {wishlist.map((gift) => (
          <GiftCard key={gift._id} gift={gift} updateSignedInUser={updateSignedInUser} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Wishlist