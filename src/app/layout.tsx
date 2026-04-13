import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "700", "800"],
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "献立ガチャ",
  description: "週7日分の夕食献立をランダムに決める",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${shipporiMincho.variable} min-h-dvh grid grid-rows-[auto_1fr_auto] bg-gacha-cream font-[family-name:var(--font-noto-sans-jp)]`}
      >
        <header className="bg-gacha-dark px-6 pt-7 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gacha-gold opacity-50" />
            <span className="text-gacha-gold text-[10px] tracking-[0.28em]">※ 夕食の献立 ※</span>
            <div className="h-px flex-1 bg-gacha-gold opacity-50" />
          </div>
          <h1 className="font-[family-name:var(--font-shippori-mincho)] text-gacha-cream text-[clamp(2rem,7vw,3.75rem)] font-extrabold tracking-[0.22em] text-center leading-none m-0">
            献立ガチャ
          </h1>
          <p className="text-gacha-gold/90 text-[11px] tracking-[0.2em] text-center mt-2.5 mb-0">
            KONDATE GACHA — 今週の夕食をランダムに決める
          </p>
        </header>

        <main className="w-full max-w-[960px] mx-auto px-4 py-10">
          {children}
        </main>

        <footer className="bg-gacha-dark h-14 flex items-center justify-center">
          <span className="text-gacha-gold/70 text-[10px] tracking-[0.18em]">※ 献立ガチャ ※</span>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
