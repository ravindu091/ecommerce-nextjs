import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: Request) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // If no token is found, redirect to the login page
  if(req.url === '/'){
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/dashboard","/admin"], // Add protected routes here
};