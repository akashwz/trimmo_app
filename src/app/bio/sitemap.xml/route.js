export const dynamic = "force-dynamic";

import { decryptData } from "@/utils/encryptionUtils";
import axios from "axios";

export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      console.error("NEXT_PUBLIC_API_URL is not defined in environment variables.");
      return new Response("Server configuration error", { status: 500 });
    }

    const dynamicUrlsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}users/create-sitemap`,
      {
        headers: {
          "Cache-Control": "no-store",
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
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${urls
            .map(
              (url) => `
                <sitemap>
                  <loc>${url}</loc>
                </sitemap>
              `,
            )
            .join("")}
      </sitemapindex>`;

    return new Response(createSitemap(descData.data.site_urls), {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
