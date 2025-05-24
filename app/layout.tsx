import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omni AI - 创新科技，引领未来",
  description: "Omni AI 是一家专注于人工智能技术创新的公司，致力于为客户提供最前沿的 AI 解决方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
