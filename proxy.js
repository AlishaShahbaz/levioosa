import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  // ✅ '/checkout' ko yahan se delete kar diya hai
  // Ab sirf profile aur orders wale pages hi login maangeinge
  matcher: ["/profile", "/orders"],
};