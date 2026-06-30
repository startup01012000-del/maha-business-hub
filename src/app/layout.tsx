import "./globals.css";

export const metadata = {
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
