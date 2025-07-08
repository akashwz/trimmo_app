import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // return NextResponse.next();
}

export const config = {
  matcher: [
    "/bio/select-platform",
    "/bio/about-yourself",
    "/bio/link-ready",
    "/bio/select-template",
    "/bio/add-links",
    "/bio/profile-details",
    "/bio/analytics",
    "/bio/edit-profile",
    "/bio/appearance",
    "/bio/setting",
    "/bio/apps",
    "/link/home",
    "/link/analytics",
    "/link/customizeqr",
    "/dashboard",
  ],
};
