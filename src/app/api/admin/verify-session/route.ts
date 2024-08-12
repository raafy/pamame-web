import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const payload = verifyToken(token.value);

  if (payload) {
    return NextResponse.json({ success: true, userId: payload.userId });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
