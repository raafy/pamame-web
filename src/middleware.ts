// /src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/favicon.ico")
  ) {
    const ipAddress = req.ip || req.headers.get("x-forwarded-for") || "";
    const userAgent = req.headers.get("user-agent") || "";
    const referrer = req.headers.get("referer") || null;

    // Generate or retrieve session ID
    let sessionId = req.cookies.get("sessionId")?.value;

    if (!sessionId) {
      sessionId = uuidv4();
      const res = NextResponse.next();
      res.cookies.set("sessionId", sessionId, { path: "/" });
      return res;
    }

    // Send data to your API route
    await fetch(`${req.nextUrl.origin}/api/log-pageview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: pathname,
        ipAddress,
        userAgent,
        referrer,
        sessionId,
      }),
    });
  }

  if (pathname.startsWith("/admin/dashboard")) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
