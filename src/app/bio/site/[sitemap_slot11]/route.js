import { decryptData } from "@/utils/encryptionUtils";
import axios from "axios";

export async function GET(_req, { params }) {
  const { sitemap_slot11 } = await params;
  const match = sitemap_slot11.match(/bio_(\d+)\.xml/);
  let page;
  let key;
  if (match) {
    page = match && parseInt(match[1], 10); // default to 1 if no match
  } else {
    key = sitemap_slot11;
  }
  try {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      console.error("NEXT_PUBLIC_API_URL is not defined in environment variables.");
      return new Response("Server configuration error", { status: 500 });
    }

    const dynamicUrlsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}users/create-sitemap`,
      {
        params: {
          page: page,
          key,
        },
      },
    );
    const descData =
      process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD"
        ? decryptData(dynamicUrlsResponse.data.encrypted)
        : dynamicUrlsResponse.data;
    if (descData.code !== 200) {
      console.error("Failed to fetch dynamic URLs:", dynamicUrlsResponse.statusText);
      return new Response("Failed to fetch dynamic URLs", { status: 500 });
    }

    const createSitemap = (urls) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <changefreq>daily</changefreq>
        <priority>${url === "https://trimmo.bio" ? "1.0" : "0.8"}</priority>
      </url>
    `,
      )
      .join("")}
  </urlset>`;
    return new Response(createSitemap(descData.data.user_urls), {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
