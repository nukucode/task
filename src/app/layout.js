import "./globals.css";
import { Plus_Jakarta_Sans } from "@next/font/google";

export const metadata = {
  title: "Plan.io",
  description: "Mange Your Tasks With Plan.io",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/favicon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${PlusJakartaSans.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
