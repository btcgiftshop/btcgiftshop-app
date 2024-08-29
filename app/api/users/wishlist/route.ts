import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";

import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId, giftId } = await req.json()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    await connectToDB()

    const user = await User.findOne({ userId: userId })

    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    if (!giftId) {
      return new NextResponse("Gift Id required", { status: 400 })
    }

    const isLiked = user.wishlist.includes(giftId)

    if (isLiked) {
      // Dislike
      user.wishlist = user.wishlist.filter((id: string) => id !== giftId)
    } else {
      // Like
      user.wishlist.push(giftId)
    }

    await user.save()

    return NextResponse.json(user, { status: 200 })
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
