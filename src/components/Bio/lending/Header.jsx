"use client";
import { getCookie } from "cookies-next";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const token = getCookie("token");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);

  const handleProductClick = (e) => {
    e.preventDefault();
    setIsProductMenuOpen(!isProductMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsProductMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProductMenuOpen(false);
  };

  const handleResourceClick = (e) => {
    e.preventDefault();
    setIsResourcesMenuOpen(!isProductMenuOpen);
  };

  const handleMouseResourceEnter = () => {
    setIsResourcesMenuOpen(true);
  };

  const handleMouseResourceLeave = () => {
    setIsResourcesMenuOpen(false);
  };

  const { userData } = useSelector((state) => state?.authReducer || {});
  const router = useRouter();

  const mainLink = useMemo(() => {
    if (!token) return "/login";
    return userData?.data?.template ? "/bio/edit-profile" : "/bio/about-yourself";
  }, [token, userData]);
  const handleClick = (e) => {
    e.stopPropagation();
    window.location.href = mainLink;
  };

  return (
    <header className="ps-3 lg:ps-6 sticky top-6 z-50 pe-3 lg:pe-4">
      <div className="logo">
        <img src="/images/bio/Trimmo-Logo.svg" alt="logo" />
      </div>
      <nav className="hidden lg:block">
        <ul className="text-base gap-6 flex">
          <li
            className="relative group"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onBlur={handleMouseLeave}
            onClick={handleProductClick}
          >
            <button className="flex items-center gap-1 focus:outline-none hover:text-black-600">
              {t("lang_product")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isProductMenuOpen && (
              <ul
                className="absolute left-0 top-full mt-2 flex flex-col bg-white shadow-md rounded-md p-2 w-48 z-20"
                onMouseLeave={handleMouseLeave}
              >
                <li className="flex justify-start w-full">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = "/bio";
                    }}
                    className="px-4 py-2 text-black hover:text-black hover:bg-gray-100"
                  >
                    {t("lang_link_in_bio")}
                  </button>
                </li>
                <li className="flex justify-start w-full">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = "/link";
                    }}
                    className="px-4 py-2 text-black hover:text-black hover:bg-gray-100"
                  >
                    {t("lang_shorten_links_QR")}
                  </button>
                </li>
                <li className="flex justify-start w-full">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = "/chat";
                    }}
                    className="px-4 py-2 text-black hover:text-black hover:bg-gray-100"
                  >
                    {t("lang_all_in_one_chat")}
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            // onMouseEnter={handleMouseResourceEnter}
            // onMouseLeave={handleMouseResourceLeave}
            onBlur={handleMouseResourceLeave}
            onClick={handleResourceClick}
          >
            <button className="flex items-center gap-1 focus:outline-none hover:text-black-600">
              {t("lang_resources")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isResourcesMenuOpen && (
              <ul
                className="absolute left-0 top-full mt-2 flex flex-col bg-white shadow-md rounded-md p-2 w-48 z-20"
                onMouseLeave={handleMouseResourceLeave}
              >
                <li className="flex justify-start w-full">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = "/bio/help";
                    }}
                    className="px-4 py-2 text-black hover:text-black hover:bg-gray-100"
                  >
                    {t("lang_read_our_blog")}
                  </button>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = "/bio/marketplaces";
              }}
              className="hover:text-black-600"
            >
              {t("lang_marketplace")}
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = "/bio/pricing";
              }}
              className="hover:text-black-600"
            >
              {t("lang_pricing_plan")}
            </button>
          </li>
        </ul>
      </nav>

      <div className="relative">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={handleClick}
            className="btn-outline hover:border-[#ebff57] hover:text-[#ebff57]"
          >
            {token
              ? userData?.data?.template
                ? t("lang_my_account")
                : t("lang_getting_started")
              : t("lang_login")}
          </button>
          {!token && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = "/register";
              }}
              className="btn hover:bg-[#ebff57] hover:text-[#000]"
            >
              {t("lang_sign_up")}
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#ffffff"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#ffffff"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
            <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              {t("lang_login")}
            </Link>
            <Link href="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              {t("lang_sign_up")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
