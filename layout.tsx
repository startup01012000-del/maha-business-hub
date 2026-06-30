import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAHA BUSINESS HUB | Enterprise Ecosystem",
  description: "Maharashtra's Largest Digital Business Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
