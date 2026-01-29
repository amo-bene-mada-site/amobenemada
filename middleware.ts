import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // On protège uniquement /admin (et ce qui est en dessous)
  if (!url.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const authHeader = req.headers.get("authorization");
  const USER = process.env.BASIC_AUTH_USER;
  const PASS = process.env.BASIC_AUTH_PASS;

  if (authHeader && USER && PASS) {
    const [scheme, encoded] = authHeader.split(" ");

    if (scheme === "Basic") {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");

      if (user === USER && pass === PASS) {
        // Bonne combinaison → on laisse passer
        return NextResponse.next();
      }
    }
  }

  // Sinon : on demande un login / mot de passe (popup du navigateur)
  return new NextResponse("Authentification requise", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Zone sécurisée AMO BENE MADA"',
    },
  });
}

// On applique ce middleware uniquement à /admin
export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
