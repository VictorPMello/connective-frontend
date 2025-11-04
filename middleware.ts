import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register");

  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  const allowedPaths = [
    "/",
    "/dashboard",
    "/dashboard/clients",
    "/dashboard/projects",
  ];

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  }

  const isAllowed = allowedPaths.some((path) => pathname.startsWith(path));

  if (!isAllowed) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
