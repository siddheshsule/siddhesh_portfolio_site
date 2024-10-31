import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = localFont({
  src:"./fonts/Roboto-Black.ttf",
  variable:"--font-roboto",
  weight:'900',
})

export const metadata: Metadata = {
  title: "Siddhesh Sule",
  description: "Created by Siddhesh Sule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased bg-[#0B2447] `}
      >

        {children}
      </body>
    </html>
  );
}
