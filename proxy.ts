import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const APP_DOMAIN = "https://app.imker-logbuch-pro.de"

const APP_ROUTE_PREFIXES = [
  "/dashboard",
  "/sign-in",
  "/sign-up",
  "/settings",
  "/reports",
  "/projects",
]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  for (const prefix of APP_ROUTE_PREFIXES) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      const redirectUrl = new URL(pathname, APP_DOMAIN)
      redirectUrl.search = request.nextUrl.search
      return NextResponse.redirect(redirectUrl, { status: 308 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/sign-in/:path*",
    "/sign-up/:path*",
    "/settings/:path*",
    "/reports/:path*",
    "/projects/:path*",
  ],
}
