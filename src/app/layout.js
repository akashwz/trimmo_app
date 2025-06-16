"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import "./globals.css";
import { persistor, store } from "@/redux/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { getBio, getUser } from "@/redux/Action/auth.action";
import { getCookie } from "cookies-next/client";
import "../../public/i18n";
import { usePathname } from "next/navigation";

function RootComponent({ children }) {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state?.authReducer);
  const checkToken = getCookie("token");
  const location = usePathname();

  useEffect(() => {
    if (checkToken) {
      dispatch(getUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (userData && location === "/") {
      dispatch(getBio(userData?.data?.username));
    }
  }, [userData]);

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
  return (
    <html lang="en">
      <head>
        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="/lInGXSxGb9R5Z7ZFtk8Cg"
          async
        ></script>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yfY_9hWMCGs3tYf9Jxr3SkBQ5ErY4kNQ-sUm2HUm_5U"
        />

        {/* <!-- Google tag (gtag.js) trimmo app --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PWPZBLWMZ0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PWPZBLWMZ0', {
                  page_path: window.location.pathname,
              });
            `,
          }}
        ></script>

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ry7evzm6np");
          `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootComponent>{children}</RootComponent>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
