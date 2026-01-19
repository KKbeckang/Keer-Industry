import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keer Industry - Industrial Precision & Reliability",
  description: "Professional industrial equipment supplier for engineers and procurement officers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
