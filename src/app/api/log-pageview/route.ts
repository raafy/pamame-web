// /app/api/log-pageview/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import maxmind from "maxmind";
import { formatInTimeZone } from "date-fns-tz";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { path, ipAddress, userAgent, referrer, sessionId } =
      await req.json();

    // Check if maxmind database is loaded
    if (maxmind) {
      const lookup = await maxmind.open("./data/GeoLite2-City.mmdb");
      const geoData = lookup.get(ipAddress);

      const country = geoData?.country?.names?.en || "Unknown";
      const region = geoData?.subdivisions?.[0]?.names?.en || "Unknown";
      const city = geoData?.city?.names?.en || "Unknown";

      // Format time to Kuala Lumpur time
      const kualaLumpurTime = formatInTimeZone(
        new Date(),
        "Asia/Kuala_Lumpur",
        "yyyy-MM-dd HH:mm:ssXXX",
      );

      await prisma.pageView.create({
        data: {
          path,
          ipAddress,
          userAgent,
          referrer,
          sessionId,
          country,
          region,
          city,
          createdAt: kualaLumpurTime,
        },
      });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: "GeoLite2 database not found" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error logging pageview:", error);
    return NextResponse.json(
      { success: false, error: "Failed to log pageview" },
      { status: 500 },
    );
  }
}
