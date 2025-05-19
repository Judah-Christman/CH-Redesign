import type { Metadata } from "next";
import "./globals.css";
import { Navigation, Footer } from "./components.jsx";

export const metadata: Metadata = {
  title: "Christman Horseshoeing",
  description: "Farrier services simplified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
