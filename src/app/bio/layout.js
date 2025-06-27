"use client";

import "./bio.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { persistor, store } from "@/redux/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { getBio, getUser } from "@/redux/slices/authSlice";
import { getCookie } from "cookies-next/client";
import { usePathname } from "next/navigation";

function RootComponent({ children }) {
  const dispatch = useDispatch();
  const checkToken = getCookie("token");
  const location = usePathname();

  useEffect(() => {
    if (checkToken) {
      dispatch(getUser());
    }
  }, [dispatch]);

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

export default function RootLayout({ children }) {
  return <>{children}</>;
}
