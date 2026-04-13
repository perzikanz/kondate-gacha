import { NextRequest, NextResponse } from "next/server";

// OGP取得を許可するレシピサイトのホスト名一覧
const ALLOWED_RECIPE_HOSTS = [
  "www.sirogohan.com",
  "www.kikkoman.co.jp",
  "park.ajinomoto.co.jp",
  "housefoods.jp",
  "www.nisshin-seifun-welna.com",
];

function isAllowedUrl(urlString: string): boolean {
  try {
    const parsedUrl = new URL(urlString);
    // httpとhttpsのみ許可（file://やその他プロトコルを排除）
    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return false;
    }
    return ALLOWED_RECIPE_HOSTS.includes(parsedUrl.hostname);
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const recipeUrl = request.nextUrl.searchParams.get("url");

  if (!recipeUrl) {
    return NextResponse.json({ imageUrl: null }, { status: 400 });
  }

  if (!isAllowedUrl(recipeUrl)) {
    return NextResponse.json({ imageUrl: null }, { status: 403 });
  }

  try {
    const response = await fetch(recipeUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; kondate-gacha-bot/1.0)" },
      next: { revalidate: 60 * 60 * 24 }, // 24時間キャッシュ
    });

    const html = await response.text();
    const imageUrl = extractOgpImageUrl(html);
    return NextResponse.json({ imageUrl });
  } catch {
    return NextResponse.json({ imageUrl: null });
  }
}

function extractOgpImageUrl(html: string): string | null {
  const match =
    html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  return match?.[1] ?? null;
}
