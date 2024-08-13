import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = signToken({ userId: user.id });
      console.log("Generated token:", token);

      const response = NextResponse.json({ success: true }, { status: 200 });
      response.cookies.set("token", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        secure: false,
        maxAge: 60 * 60,
        path: "/",  // Ensure the cookie is available site-wide
      });

      return response;
    } else {
      return NextResponse.json({ success: false }, { status: 401 });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
