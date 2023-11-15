import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "크리스마스 롤링 페이퍼 🎄",
  description: "내 크리스마스 트리를 꾸며줘!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <script src="https://app.embed.im/snow.js"></script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
