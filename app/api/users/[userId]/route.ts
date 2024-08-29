import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    if (!params.userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 })
    }

    await connectToDB()

    let _user = await User.findOne({ userId: params.userId })

    // When the user sign-in for the 1st, immediately we will create a new user for them
    if (!_user) {
      _user = await User.create({ userId: params.userId })
      await _user.save()
    }

    return NextResponse.json(_user, { status: 200 })
  } catch (err) {
    console.log("[users_GET]", err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}