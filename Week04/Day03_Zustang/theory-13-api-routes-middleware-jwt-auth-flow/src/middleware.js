import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function middleware(req) {
  const path = req.nextUrl.pathname;
console.log("PATH:", path); // Xem chính xác middleware đang bắt route nào

  const token = req.cookies.get("token")?.value;
  console.log("CHECK TOKEN:", token);
  let verified = null;
if (token) {
  try {
    verified = await verifyToken(token);
  } catch (e) {
    console.error("JWT verify failed:", e);
    verified = null;
  }
}else{
    console.log("No Token");
}
   const protectedPaths = ["/dashboard", "/articles"];
  // const protectedPaths = ["/articles"];

  const requiresAuth = protectedPaths.some((p) => path.startsWith(p));

  if (!verified && requiresAuth) {
    console.log("Redirect to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  // matcher: ["/articles/:path*"],
  matcher: ["/dashboard/:path*", "/articles/:path*"],
};
