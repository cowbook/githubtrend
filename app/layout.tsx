import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Trend - 程序员的风向标",
  description: "每日更新 GitHub Trending 热门项目，用幽默的方式解读技术趋势",
  keywords: ["GitHub", "Trending", "开源", "程序员", "技术趋势"],
  authors: [{ name: "cowbook" }],
  openGraph: {
    title: "GitHub Trend - 程序员的风向标",
    description: "每日更新 GitHub Trending 热门项目，用幽默的方式解读技术趋势",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}