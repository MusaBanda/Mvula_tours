"use client";

import "./globals.css";
import {hooks} from "./hooks/Hooks";
import { Outfit, Ovo, Roboto, Dancing_Script } from "next/font/google";


export const s = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {

  const { isLoaded } = hooks();

  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="My personal portfolio showcasing my work and projects."
        />
      </head>
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden`}
      >
        
          {!isLoaded ? (
            <div
              style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center",
                fontSize: "24px",fontFamily: outfit.className,}}>
              Loading...
            </div>
          ) : (
            children
          )}
        
      </body>
    </html>
  );
}
