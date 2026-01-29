import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  const USER = process.env.BASIC_AUTH_USER;
  const PASS = process.env.BASIC_AUTH_PASS;

  if (!USER || !PASS) {
    return new NextResponse("Auth not configured", { status: 500 });
  }

  if (authHeader) {
    const basic = authHeader.split(" ")[1];
    const decoded = Uint8Array.from(
      atob(basic),
      c => c.charCodeAt(0)
    );
    const credentials = new TextDecoder().decode(decoded);
    const [user, pass] = credentials.split(":");

    if (user === USER && pass === PASS) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
