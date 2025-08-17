import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  
  const supabase = createClient({ req, res });


  const {
    data: { session },
  } = await supabase.auth.getSession();


  const protectedRoutes = ["/"];

  if (protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!session) {
      const loginUrl = new URL("/sign-in", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return res;
}

export const config = {
  matcher: ["/:path*"],
};
