import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header/Header";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({
  weight: ["500"], 
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${jost.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
