"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Skeleton } from "@mui/material";
import { Counter } from "@/components/ui/counter";
import { Eye, Clock, MapPin, Smartphone as DeviceMobile } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

interface VisitByPath {
  path: string;
  _count: {
    path: number;
  };
}

interface VisitPerDay {
  date: string;
  count: number;
  percentageChange: number;
}

interface VisitByHour {
  hour: number;
  count: number;
}

interface DeviceBrowserStats {
  device: string;
  browser: string;
  count: number;
}

interface GeoDistribution {
  country: string;
  region: string;
  city: string;
  count: number;
}

interface AnalyticsData {
  totalUniqueVisits: number;
  visitsPerDay: VisitPerDay[];
  totalRecords: number;
  visitsByPath: VisitByPath[];
  visitsByHour: VisitByHour[];
  deviceBrowserStats: DeviceBrowserStats[];
  geoDistribution: GeoDistribution[];
}

const Dashboard: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch(
          `/api/analytics?page=${page}&pageSize=${pageSize}`,
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const data: AnalyticsData = await res.json();
        setAnalyticsData(data);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load analytics data. Please try again later.");
      }
    };

    fetchAnalytics();
  }, [page]);

  if (error) {
    return <div className="p-8">{error}</div>;
  }

  if (!analyticsData) {
    return (
      <div className="p-8">
        <Skeleton className="h-[150px] w-full" />
      </div>
    );
  }

  const {
    visitsPerDay,
    totalRecords,
    visitsByPath,
    totalUniqueVisits,
    visitsByHour,
    deviceBrowserStats,
    geoDistribution,
  } = analyticsData;

  const totalPages = Math.ceil(totalRecords / pageSize);

  const visitsPerDayData = {
    labels: visitsPerDay.map((item) =>
      new Date(item.date).toLocaleDateString("en-GB", {
        timeZone: "Asia/Kuala_Lumpur",
      }),
    ),
    datasets: [
      {
        label: "Visits",
        data: visitsPerDay.map((item) => item.count),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const visitsByHourData = {
    labels: visitsByHour.map((item) => `${item.hour}:00`),
    datasets: [
      {
        label: "Visits by Hour",
        data: visitsByHour.map((item) => item.count),
        backgroundColor: "rgba(255,159,64,0.6)",
      },
    ],
  };

  const deviceBrowserData = {
    labels: deviceBrowserStats.map(
      (stat) => `${stat.device} - ${stat.browser}`,
    ),
    datasets: [
      {
        label: "Device/Browser Usage",
        data: deviceBrowserStats.map((stat) => stat.count),
        backgroundColor: "rgba(54,162,235,0.6)",
      },
    ],
  };

  const geoDistributionData = {
    labels: geoDistribution.map(
      (geo) => `${geo.city}, ${geo.region}, ${geo.country}`,
    ),
    datasets: [
      {
        label: "Geo Distribution",
        data: geoDistribution.map((geo) => geo.count),
        backgroundColor: "rgba(153,102,255,0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const index = context.dataIndex;
            const percentageChange =
              visitsPerDay[index]?.percentageChange?.toFixed(2);
            return `${context.dataset.label}: ${context.raw}${
              percentageChange ? ` (${percentageChange}% change)` : ""
            }`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Visits",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-y-auto p-4 md:p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Analytics Dashboard
      </h1>

      <div className="grid h-screen flex-grow grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="flex flex-col p-6 shadow-md">
          <CardHeader className="text-center">
            <Eye className="mx-auto mb-2 h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold">Total Unique Visits</h2>
          </CardHeader>
          <CardContent className="flex-grow text-center">
            <Counter
              end={totalUniqueVisits}
              duration={1.5}
              className="text-primary-600 text-5xl font-bold"
            />
          </CardContent>
        </Card>

        {visitsByPath.map((item, index) => (
          <Card key={index} className="flex flex-col p-6 shadow-md">
            <CardHeader className="text-center">
              <Eye className="mx-auto mb-2 h-8 w-8 text-primary" />
              <h2 className="text-xl font-semibold">
                {item.path === "/" ? "Home" : item.path}
              </h2>
            </CardHeader>
            <CardContent className="flex-grow text-center">
              <Counter
                end={item._count.path}
                duration={1.5}
                className="text-3xl font-bold text-blue-500"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 flex flex-col p-6 shadow-md">
        <CardHeader className="text-center">
          <h2 className="text-xl font-semibold">Visits per Day</h2>
        </CardHeader>
        <CardContent className="flex-grow">
          <Line data={visitsPerDayData} options={chartOptions} />
        </CardContent>
      </Card>

      <Card className="mt-8 flex flex-col p-6 shadow-md">
        <CardHeader className="text-center">
          <Clock className="mx-auto mb-2 h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Visits by Hour</h2>
        </CardHeader>
        <CardContent className="flex-grow">
          <Bar data={visitsByHourData} options={chartOptions} />
        </CardContent>
      </Card>

      <Card className="mt-8 flex flex-col p-6 shadow-md">
        <CardHeader className="text-center">
          <DeviceMobile className="mx-auto mb-2 h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Device/Browser Breakdown</h2>
        </CardHeader>
        <CardContent className="flex-grow">
          <Bar data={deviceBrowserData} options={chartOptions} />
        </CardContent>
      </Card>

      <Card className="mt-8 flex flex-col p-6 shadow-md">
        <CardHeader className="text-center">
          <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Geo Distribution</h2>
        </CardHeader>
        <CardContent className="flex-grow">
          <Bar data={geoDistributionData} options={chartOptions} />
        </CardContent>
      </Card>

      <CardFooter className="mt-4 flex justify-center space-x-2">
        <Button
          variant="outline"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </CardFooter>
    </div>
  );
};

export default Dashboard;
