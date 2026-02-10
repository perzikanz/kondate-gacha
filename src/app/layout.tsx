import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "献立ガチャ",
  description: "献立ガチャ、7回分",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} min-h-screen flex flex-col`}>
        <header className="h-[100px] bg-slate-200" />
        <main className="flex-1">{children}</main>
        <footer className="h-[100px] bg-slate-300" />
      </body>
    </html>
  );
}
