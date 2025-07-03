"use client";

import React, { useEffect } from "react";
import "./trimmoapp.css";
import { useDispatch } from "react-redux";
import { getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { getUser } from "@/redux/slices/authSlice";

function RootComponent({ children }) {
  const dispatch = useDispatch();
  const checkToken = getCookie("token");
  const location = usePathname();
  useEffect(() => {
    if (checkToken) {
      dispatch(getUser());
    }
  }, [dispatch, checkToken]);

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${location}`;
    const createTagIfNotExists = (selector, tagName, attributes) => {
      let tag = document.querySelector(selector);
      if ((!tag || tag.dataset.pathname !== location) && location !== "/") {
        if (tag) tag.remove(); // Remove outdated tag for previous pathname

        tag = document.createElement(tagName);
        Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
        tag.dataset.pathname = location; // Store pathname to track updates
        document.head.appendChild(tag);
      }
    };

    // Canonical Link
    createTagIfNotExists("link[rel='canonical']", "link", {
      rel: "canonical",
      href: canonicalUrl,
    });
  }, [location.pathname]);
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      {children}
    </>
  );
}

const TrimmoAppProvider = ({ children }) => {
  return <RootComponent>{children}</RootComponent>;
};

export default TrimmoAppProvider;
