// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(req: NextRequest) {
  const { session, res } = await updateSession(req);
  const { pathname } = req.nextUrl;

  // مسیرهای نیازمند لاگین
  const protectedRoutes = ["/chat"];

  // مسیرهای auth
  const authRoutes = ["/sign-in", "/sign-up"];

  // کاربر لاگین نکرده → اجازه ورود به protectedRoutes نداره
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!session) {
      const redirectUrl = new URL("sign-in", req.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // کاربر لاگین کرده → اجازه ورود به authRoutes نداره
  if (authRoutes.includes(pathname)) {
    if (session) {
      const redirectUrl = new URL("/chat", req.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
