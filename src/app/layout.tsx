import Wrapper from "@/components/shared/Wrapper/Wrapper";
import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Navbar from "@/components/view/Navbar/Navbar";

const inter = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dine Market",
  description: "Generated by Dine Market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          {/* <Navbar/> */}
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
