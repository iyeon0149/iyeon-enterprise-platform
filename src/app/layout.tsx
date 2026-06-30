import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "IYEON Enterprise Platform OS",
  description: "The Operating System for Global Korean Innovation",
  verification: {
    google: "google-site-verification=e6l9GKF4vtwoSXhcGHRvY5cuqSRTJvzz8gdh2i8TblA",
    other: {
      "naver-site-verification": "4e84bf030dd8865ff2159b4b02d3bdcdae13eb21"
    }
  },
  openGraph: {
    title: "IYEON Enterprise Platform OS",
    description: "Connecting Korean Potential to Global Reality",
    url: "https://iyeon.kr",
    siteName: "IYEON",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${noto.variable}`}>{children}</body>
    </html>
  );
}
