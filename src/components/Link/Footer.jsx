'use client'
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primarycolor">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4  sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8  pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:pt-16">
          <div>
            <p className="font-semibold text-lg text-white font-montserrat">
              About Us
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Returns & Exchanges
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Shipping & Consolidation
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Automation & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Resell & Recycle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-white font-montserrat">
              Page
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Book a Demo
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-white font-montserrat">
              Marketing
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Referrals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Stealth
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-white font-montserrat">
              Support
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Referrals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Stealth
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-white font-montserrat">
              Social Media
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Instagram
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Facebook
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Twitter
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-whitelight transition hover:opacity-75"
                >
                  Linkdin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10	">
          <p className="text-sm text-white py-2 text-center font-medium">
            Copyright © 2024, Ultimator
          </p>
        </div>
      </div>
    </footer>
  );
}
