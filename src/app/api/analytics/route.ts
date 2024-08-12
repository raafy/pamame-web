import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Custom JSON serialization function to handle BigInt
function jsonBigIntReplacer(key: string, value: any) {
  return typeof value === "bigint" ? value.toString() : value;
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  const offset = (page - 1) * pageSize;

  try {
    const uniqueVisits = await prisma.pageView.groupBy({
      by: ["ipAddress"],
    });

    const totalUniqueVisits = uniqueVisits.length;

    const totalVisitsCount = await prisma.$queryRaw<{ count: any }[]>`
      SELECT COUNT(*) as count FROM (
        SELECT DATE(\`createdAt\`) as \`date\`
        FROM \`PageView\`
        GROUP BY \`date\`
      ) as subquery;
    `;

    const totalRecords = BigInt(totalVisitsCount[0].count);

    const visitsPerDayResult = await prisma.$queryRaw<
      { date: string; count: any }[]
    >`
      SELECT DATE(\`createdAt\`) as \`date\`, 
             COUNT(DISTINCT \`ipAddress\`) as \`count\`
      FROM \`PageView\`
      GROUP BY \`date\`
      ORDER BY \`date\` DESC
      LIMIT ${pageSize} OFFSET ${offset};
    `;

    const visitsPerDay = visitsPerDayResult.map((current, index, array) => {
      const count = BigInt(current.count);
      const previousCount =
        index > 0 ? BigInt(array[index - 1].count) : BigInt(0);
      const percentageChange =
        previousCount > BigInt(0)
          ? Number(((count - previousCount) * BigInt(100)) / previousCount)
          : 0;
      return { date: current.date, count, percentageChange };
    });

    const visitsByPath = await prisma.pageView.groupBy({
      by: ["path"],
      _count: {
        path: true,
      },
      where: {
        path: {
          in: [
            "/",
            "/parenting-in-nature",
            "/little-hero-challenge",
            "/register",
          ],
        },
      },
      orderBy: {
        _count: {
          path: "desc",
        },
      },
    });

    const visitsByHourResult = await prisma.$queryRaw<
      { hour: number; count: any }[]
    >`
      SELECT HOUR(\`createdAt\`) as \`hour\`, 
             COUNT(DISTINCT \`ipAddress\`) as \`count\`
      FROM \`PageView\`
      GROUP BY \`hour\`
      ORDER BY \`hour\` ASC;
    `;

    const visitsByHour = visitsByHourResult.map((item) => ({
      hour: item.hour,
      count: BigInt(item.count),
    }));

    const deviceBrowserStatsResult = await prisma.$queryRaw<
      { device: string; browser: string; count: any }[]
    >`
      SELECT CASE
               WHEN \`userAgent\` LIKE '%Mobile%' THEN 'Mobile'
               WHEN \`userAgent\` LIKE '%Tablet%' THEN 'Tablet'
               ELSE 'Desktop'
             END as \`device\`,
             CASE
               WHEN \`userAgent\` LIKE '%Chrome%' THEN 'Chrome'
               WHEN \`userAgent\` LIKE '%Firefox%' THEN 'Firefox'
               WHEN \`userAgent\` LIKE '%Safari%' AND \`userAgent\` NOT LIKE '%Chrome%' THEN 'Safari'
               WHEN \`userAgent\` LIKE '%Edge%' THEN 'Edge'
               WHEN \`userAgent\` LIKE '%Opera%' THEN 'Opera'
               ELSE 'Other'
             END as \`browser\`,
             COUNT(*) as \`count\`
      FROM \`PageView\`
      GROUP BY \`device\`, \`browser\`
      ORDER BY \`count\` DESC;
    `;

    const deviceBrowserStats = deviceBrowserStatsResult.map((item) => ({
      device: item.device,
      browser: item.browser,
      count: BigInt(item.count),
    }));

    const geoDistributionResult = await prisma.pageView.groupBy({
      by: ["country", "region", "city"],
      _count: {
        country: true,
      },
    });

    const geoDistribution = geoDistributionResult.map((item) => ({
      country: item.country || "Unknown",
      region: item.region || "Unknown",
      city: item.city || "Unknown",
      count: BigInt(item._count.country),
    }));

    const responseData = {
      totalUniqueVisits,
      visitsPerDay,
      totalRecords,
      visitsByPath,
      visitsByHour,
      deviceBrowserStats,
      geoDistribution,
    };

    return new NextResponse(JSON.stringify(responseData, jsonBigIntReplacer), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 },
    );
  }
}

export const runtime = "nodejs";
