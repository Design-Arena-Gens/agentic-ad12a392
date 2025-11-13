import "./globals.css";
import type { ReactNode } from "react";

const fontClassName = "font-sans";

export const metadata = {
  title: "UGC CAD Training Script",
  description:
    "High-converting UGC video script for a CAD training institute with hooks, emotional beats, and clear CTA."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={fontClassName}>{children}</body>
    </html>
  );
}
