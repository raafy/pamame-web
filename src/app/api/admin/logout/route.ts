import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ success: true });

  // Clear the JWT token by setting the cookie with an expired date
  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return response;
}
