import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pamame.com",
      lastModified: new Date(),
      priority: 1,
    },
    // {
    //   url: "https://pamame.com/little-hero-challenge",
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    // {
    //   url: "https://pamame.com/parenting-in-nature",
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    // {
    //   url: "https://pamame.com/register",
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    // {
    //   url: "https://pamame.com/admin",
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
  ];
}
