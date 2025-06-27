"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";

import Footer from "../Footer";
import {
  Check2Circle,
  ChevronDown,
  ChevronUp,
  People,
  QrCode,
  QrCodeScan,
} from "react-bootstrap-icons";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "@/store/slices/blogSlice";

export default function LandingPage() {
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blogSlice.blogData);

  useEffect(() => {
    dispatch(getAllBlogs({ page: 1, limit: 3 }));
  }, []);

  const frequentlyQuestions = [
    {
      question: "What is Trimmo.bio?",
      answer:
        "Trimmo.bio is a platform that combines link shortening, QR Codes, and link-in-bio tools to help you manage and optimize your online connections.",
    },
    {
      question: "How do I create a short link?",
      answer:
        "Simply paste your long URL, and our tool will generate a clean, short link that you can share instantly.",
    },
    {
      question: "Can I track my links and QR Codes?",
      answer:
        "Yes! You can monitor clicks, audience insights, and overall performance to improve your content strategy.",
    },
    {
      question: "Is it free to use Trimmo.bio?",
      answer:
        "Absolutely. We offer a free plan to help you get started, with premium options for advanced features.",
    },
  ];

  return (
    <>
      <div className="w-full bg-white ">
        {/* Hero section start */}
        <div className="bg-[#1F8F5B] text-white w-full min-h-fit max-h-[922px] flex flex-col justify-center items-center">
          <section className="text-white pt-24">
            <div className="container mx-auto flex px-5 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold  2xl:text-[50px] leading-10 md:leading-[60px] font-montserrat">
                  Build Stronger Digital Connections
                </h1>
                <p className="mb-8 leading-relaxed text-xl">
                  Use our URL shortener, QR Codes, and landing pages to engage
                  your audience and connect them to the right information.
                  Build, edit, and track everything inside the Bitly Connections
                  Platform.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex items-center text-primarycolor bg-yellowish hover:bg-[#d6f66c] px-7 py-2.5 border-0 focus:outline-none rounded text-sm font-medium">
                    <Image
                      src="/images/link.svg"
                      width={28}
                      height={28}
                      alt="Link Icon"
                      className="mr-2 w-5 h-5 lg:w-7 lg:h-7"
                    />
                    Short Link
                  </button>
                  <button className="mx-3 inline-flex items-center text-primarycolor bg-white group  hover:text-green px-7 py-2.5 border-0 focus:outline-none  rounded text-sm font-medium">
                    <QrCode className="mr-2 w-3 h-3 lg:w-5 lg:h-5 text-primarycolor group-hover:fill-green " />
                    QR Code
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className=" mt-5 mb-5 lg:mb-24 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 text-primarycolor bg-yellowish w-[90%] lg:w-[50%]">
            <h2 className="font-semibold text-2xl font-montserrat">
              Shorten a long link
            </h2>
            <p className="text-lg lg:text-lg font-medium font-montserrat mt-10 mb-2">
              Paste the URL to be shortened
            </p>

            <div className="border rounded border-primarycolor my-2">
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg bg-yellowish text-primarycolor p-4 text-sm shadow-sm focus:outline-none"
                  placeholder="Example: http://super-long-link.com/shorten-it"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-1">
                  <button
                    type="button"
                    className="group inline-block rounded-lg bg-primarycolor px-5 py-3 text-sm font-medium text-white "
                  >
                    <span className="inline-block group-hover:scale-105">
                      Shorten URL
                    </span>
                  </button>
                </span>
              </div>
            </div>
            <div className=" text-sm flex gap-4 items-center text-">
              <div className="flex gap-1 items-center">
                <Check2Circle className="h-4 w-4" />
                Short links
              </div>
              <div className="flex gap-1 items-center">
                <Check2Circle className="h-4 w-4" />
                QR Codes
              </div>
              <div className="flex gap-1 items-center">
                <Check2Circle className="h-4 w-4" />
                Link-in-bio page
              </div>
            </div>
          </section>
        </div>
        {/* Hero section end */}

        {/* Service section Start */}
        <section className="flex flex-col justify-center items-center my-12 max-w-screen-xl mx-auto">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className=" sm:text-3xl text-2xl 2xl:text-[40px]  font-semibold text-primarycolor  leading-10 md:leading-[60px] font-montserrat">
              The Trimmo Connections Platform
            </h1>
            <p className="mb-8 leading-relaxed font-normal text-secondarycolor text-[20px]">
              Get all the essentials for fostering brand relationships, handling
              links and QR Codes, and engaging audiences across all channels,
              all within one comprehensive platform.
            </p>
          </div>

          <div className="py-5">
            {/* First section (grey background) */}
            <div className="bg-[#F5F5F5] py-16 mb-16 rounded ">
              <div className="container mx-auto px-7">
                <div className="flex flex-col md:flex-row items-center justify-between gap-x-10 ">
                  {/* Left side (Text) */}
                  <div className="text-center  mb-8 md:mb-0 flex flex-col items-center justify-center relative">
                    <h2 className="text-lg lg:text-xl font-semibold text-primarycolor">
                      URL Shortener
                    </h2>
                    <p className="text-sm leading-6 text-secondarycolor mt-4 text-center">
                      Simplify long, clunky URLs and turn them into short,
                      branded links that make an impact. Track clicks,
                      engagement, and performance in real time.
                    </p>

                    <div className="h-16 w-16 absolute -top-[65%] sm:-top-[95%] md:-top-[60%] lg:-top-[95%] bg-[#F5F5F5]  rounded-full border-2 border-[#FFFFFF] border-spacing-3 p-3 text-primarycolor transition hover:text-white flex items-center justify-center">
                      <Image
                        src={"/images/link.svg"}
                        width={30}
                        height={30}
                        alt="no image"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-5 min-w-[40%] items-center  ">
                    <Image
                      src={"/images/shortenLink.svg"}
                      width={300}
                      height={300}
                      alt="no image"
                    />
                  </div>
                  <div className="flex flex-col gap-4 mt-8 w-[50%]">
                    <button className="bg-primarycolor text-white px-8 py-3 rounded hover:bg-opacity-80 transition text-sm">
                      Shorten Your URL
                    </button>
                    <Link
                      href={"#"}
                      alt="no link"
                      className="text-center text-primarycolor hover:underline text-sm font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Second section (Green background) */}
            <div className="bg-green py-16  rounded ">
              <div className="container mx-auto px-7">
                <div className="flex flex-col md:flex-row items-center justify-between gap-x-10 ">
                  {/* Left side (Text) */}
                  <div className="text-center  mb-8 md:mb-0 flex flex-col items-center justify-center relative">
                    <h2 className="text-lg lg:text-xl font-semibold text-white">
                      QR Shortener
                    </h2>
                    <p className="text-sm leading-6 text-whitelight mt-4 text-center">
                      Your one-stop solution for managing links, QR Codes, and
                      landing pages. Build, track, and optimize your content to
                      connect effectively across all platforms.
                    </p>

                    <div className="h-16 w-16 absolute -top-[65%] sm:-top-[95%] md:-top-[60%] lg:-top-[95%] bg-green  rounded-full border-2 border-[#FFFFFF] border-spacing-3 p-3 text-primarycolor transition hover:text-white flex items-center justify-center">
                      <QrCode className="text-white fill-white h-7 w-7" />
                    </div>
                  </div>
                  {/* Right side (Icons/Features) */}
                  <div className="flex justify-center gap-5 min-w-[40%] items-center  ">
                    <Image
                      src={"/images/qrCode.svg"}
                      width={200}
                      height={200}
                      alt="no image"
                    />
                  </div>
                  {/* Button Section */}
                  <div className="flex flex-col gap-4 mt-8 w-[50%]">
                    <button className="bg-white text-primarycolor px-8 py-3 rounded hover:text-green transition text-sm">
                      QR Codes
                    </button>
                    <Link
                      href={"#"}
                      alt="no link"
                      className="text-center text-white hover:underline text-sm font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section End */}

        {/* Counter Section start */}
        <section className="text-gray-600 body-font my-12">
          <div className="container px-5  mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" px-4 py-6 ">
                  <People className="inline-block h-12 w-12 text-black fill-black mb-3" />
                  <h2 className="title-font font-semibold text-4xl text-primarycolor">
                    500K
                  </h2>
                  <p className="leading-relaxed text-primarycolor font-normal text-lg mt-3 mb-7">
                    Global Paying Customers
                  </p>
                  <Link
                    href="#"
                    className="text-primarycolor transition hover:opacity-75 underline text-sm font-medium "
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" px-4 py-6 ">
                  <People className="inline-block h-12 w-12 text-black fill-black mb-3" />

                  <h2 className="title-font font-semibold text-4xl text-primarycolor">
                    300K
                  </h2>
                  <p className="leading-relaxed text-primarycolor font-normal text-lg mt-3 mb-7">
                    Use Website created monthly
                  </p>
                  <Link
                    href="#"
                    className="text-primarycolor transition hover:opacity-75 underline text-sm font-medium "
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" px-4 py-6 ">
                  <People className="inline-block h-12 w-12 text-black fill-black mb-3" />
                  <h2 className="title-font font-semibold text-4xl text-primarycolor">
                    500+
                  </h2>
                  <p className="leading-relaxed text-primarycolor font-normal text-lg mt-3 mb-7">
                    App integrations
                  </p>
                  <Link
                    href="#"
                    className="text-primarycolor transition hover:opacity-75 underline text-sm font-medium "
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" px-4 py-6 ">
                  <People className="inline-block h-12 w-12 text-black fill-black mb-3" />
                  <h2 className="title-font font-semibold text-4xl text-primarycolor">
                    10K
                  </h2>
                  <p className="leading-relaxed text-primarycolor font-normal text-lg mt-3 mb-7">
                    Connections
                  </p>
                  <Link
                    href="#"
                    className="text-primarycolor transition hover:opacity-75  underline text-sm font-medium "
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Counter Section End */}

        {/* FAQ Section Start */}
        <section className="w-full  px-3 max-w-screen-xl mx-auto my-20 flex flex-col justify-center items-center">
          <div className="text-center sm:w-2/3 lg:w-1/2 w-full">
            <h1 className=" sm:text-3xl text-2xl 2xl:text-[40px]  font-semibold text-primarycolor  leading-10 md:leading-[60px] font-montserrat">
              Frequently asked questions
            </h1>
            <p className="mb-8 leading-relaxed font-normal text-secondarycolor text-[20px]">
              Get all the essentials for fostering brand relationships, handling
              links and QR Codes, and engaging audiences.
            </p>
          </div>
          <div className="w-full">
            <div className="-my-8 divide-y divide-gray-100 ">
              {frequentlyQuestions?.map((data, index) => {
                return (
                  <details
                    key={index}
                    className="group py-8 [&_summary::-webkit-details-marker]:hidden border-b border-b-[#D9D9D9]"
                    open
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-[#333333]">
                      <h2 className="text-xl lg:text-[22px] font-semibold text-[#333333]">
                        {data?.question}
                      </h2>

                      <span className="relative size-5 shrink-0">
                        <ChevronDown className="absolute inset-0 size-7 opacity-80 group-open:opacity-0 text-[#333333]" />

                        <ChevronUp className="absolute inset-0 size-7 opacity-0 group-open:opacity-80 text-[#333333]" />
                      </span>
                    </summary>

                    <p className="mt-4 leading-relaxed font-normal text-lg text-secondarycolor max-w-full md:max-w-[70%]">
                      {data?.answer}
                    </p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
        {/* FAQ Section End */}

        {/* Blog Section Start */}
        <section className="w-full px-3 max-w-screen-xl mx-auto my-20 flex flex-col justify-center items-center">
          <div className="text-center sm:w-2/3 lg:w-1/2 w-full">
            <h1 className=" sm:text-3xl text-2xl 2xl:text-[40px]  font-semibold text-primarycolor  leading-10 md:leading-[60px] font-montserrat">
              Latest Blog News
            </h1>
            <p className="mb-8 leading-relaxed font-normal text-secondarycolor text-[20px]">
              Get all the essentials for fostering brand relationships, handling
              links and QR Codes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogData?.records?.map((data, index) => {
              return (
                <article
                  key={index}
                  className="overflow-hidden rounded-lg  bg-white "
                >
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      alt="blogImage"
                      width={405}
                      height={256}
                      src={data?.image}
                      className="h-64 w-full"
                    />
                  </div>

                  <div className="p-2 sm:p-4">
                    <Link
                      href={`https://shopeasy.ai/blog/${data?.blog_slug_name}`}
                      target="_blank"
                    >
                      <h3 className="text-lg font-semibold text-primarycolor">
                        {data?.title}
                      </h3>
                    </Link>

                    {/* <p className="mt-2 line-clamp-3 text-sm font-normal text-secondarycolor">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, possimus pariatur animi
                        temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                      </p> */}

                    <Link
                      href={`https://shopeasy.ai/blog/${data?.blog_slug_name}`}
                      target="_blank"
                      className="group mt-4 inline-flex items-center gap-1 text-[16px] font-medium text-primarycolor"
                    >
                      Read More
                      <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        {/* Blog Section End */}
        <Footer />
      </div>
      {/* <Footer/> */}
    </>
  );
}
