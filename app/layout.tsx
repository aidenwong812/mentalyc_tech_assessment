import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import HelpButton from "./components/client/helpbutton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "test app",
  description: "This is treatment app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F5F5F5]`}
      >
        <Header />
        <div className="py-4 px-20 w-full">
          <HelpButton />
        </div>
        {children}
      </body>
    </html>
  );
}
