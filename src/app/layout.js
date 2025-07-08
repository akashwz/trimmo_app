"use client";

import { persistor, store } from "@/redux/store";
import { getCookie } from "cookies-next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../../public/i18n";
import "../../styles/index.css";
import "./globals.css";
import TrimmoAppProvider from "./provider/TrimmoAppProvider";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideSidebarRoutes = [
    "/link",
    "/bio",
    "/chat",
    "/",
    "/login",
    "/register",
    "/reset-password",
    "/forget-password",
    "/otp-verify",
  ];
  return (
    <html lang="en">
      <head>
        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="/lInGXSxGb9R5Z7ZFtk8Cg"
          async
        ></script>
        <script src="https://cdn.tailwindcss.com"></script>
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
            <TrimmoAppProvider>
              <div className={`${hideSidebarRoutes.includes(pathname) ? "" : "flex w-full"}`}>
                {!hideSidebarRoutes.includes(pathname) && <Sidebar />}
                {children}
              </div>
            </TrimmoAppProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
