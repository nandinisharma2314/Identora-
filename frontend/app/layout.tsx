import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio Hero",
  description: "Helping brands grow through creativity & strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className={`${poppins.className} antialiased bg-[#FFF8F5]`}>
        {children}
      </body>
    </html>
  );
}
