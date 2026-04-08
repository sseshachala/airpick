import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AirPick.ai",
  description: "A calmer way to choose the right flight."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
