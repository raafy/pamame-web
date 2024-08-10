import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { username } });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = signToken({ userId: user.id });
    const response = NextResponse.json({ success: true }, { status: 200 });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
    });

    return response;
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
