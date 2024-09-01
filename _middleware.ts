// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/:path*"]
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { NextRequest, NextResponse } from "next/server";

// the list of all allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://www.btcgiftshop.xyz',
  'https://app.btcgiftshop.xyz',
  'https://admin.btcgiftshop.xyz',
  'https://adminboh.btcgiftshop.xyz',
];

export function middleware(req: NextRequest) {
  // retrieve the current response
  const res = NextResponse.next()

  // retrieve the HTTP "Origin" header 
  // from the incoming request
  req.headers.get("origin")

  // if the origin is an allowed one,
  // add it to the 'Access-Control-Allow-Origin' header
  if (allowedOrigins.includes(origin)) {
    res.headers.append('Access-Control-Allow-Origin', origin);
  }

  // add the remaining CORS headers to the response
  res.headers.append('Access-Control-Allow-Credentials', "true")
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  return res
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: '/api/:path*',
}