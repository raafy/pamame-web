import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (token) {
    const payload = verifyToken(token.value);
    if (payload) {
      req.headers.set("x-user-id", String(payload.userId));
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/admin", req.url));
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
