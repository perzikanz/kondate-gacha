import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
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
        className={`${notoSansJP.variable} ${shipporiMincho.variable} min-h-dvh grid grid-rows-[auto_1fr_auto]`}
        style={{ backgroundColor: "var(--gacha-cream)", fontFamily: "var(--font-noto-sans-jp)" }}
      >
        {/* ヘッダー */}
        <header
          style={{
            backgroundColor: "#2E1D0E",
            padding: "28px 24px 24px",
          }}
        >
          {/* 装飾ライン */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(201,146,42,0.5)" }} />
            <span
              style={{
                color: "#C9922A",
                fontSize: "10px",
                letterSpacing: "0.28em",
                fontFamily: "var(--font-noto-sans-jp)",
              }}
            >
              ※ 夕食の献立 ※
            </span>
            <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(201,146,42,0.5)" }} />
          </div>

          {/* タイトル */}
          <h1
            style={{
              fontFamily: "var(--font-shippori-mincho)",
              color: "var(--gacha-cream)",
              fontSize: "clamp(2rem, 7vw, 3.75rem)",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textAlign: "center",
              lineHeight: 1,
              margin: 0,
            }}
          >
            献立ガチャ
          </h1>

          {/* サブタイトル */}
          <p
            style={{
              color: "rgba(201,146,42,0.9)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textAlign: "center",
              marginTop: "10px",
              marginBottom: 0,
              fontFamily: "var(--font-noto-sans-jp)",
            }}
          >
            KONDATE GACHA — 今週の夕食をランダムに決める
          </p>
        </header>

        {/* メインコンテンツ */}
        <main
          style={{
            width: "100%",
            maxWidth: "960px",
            margin: "0 auto",
            padding: "40px 16px",
          }}
        >
          {children}
        </main>

        {/* フッター */}
        <footer
          style={{
            backgroundColor: "#2E1D0E",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "rgba(201,146,42,0.7)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              fontFamily: "var(--font-noto-sans-jp)",
            }}
          >
            ※ 献立ガチャ ※
          </span>
        </footer>
      </body>
    </html>
  );
}
