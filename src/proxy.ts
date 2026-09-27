import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/id" || pathname === "/en") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/id/") || pathname.startsWith("/en/")) {
    const newPath = pathname.replace(/^\/(id|en)/, "");
    return NextResponse.redirect(new URL(newPath || "/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
