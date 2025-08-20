import type { Metadata } from "next";
import { Outfit, Teko } from "next/font/google";
import "./assets/css/phosphoricons.css";
import "./assets/css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "swiper/css";
import InnerLayout from "@/components/layouts/InnerLayout";
import ScrollTop from "@/components/scroll-top/ScrollTop";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});
const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "DigiFlow | Digital Agency Next JS Template",
  description:
    "Digiflow is a professionally designed Figma template tailored for Digital Agency websites! Whether you’re building a site for any business related to agency, business, digital agency, and portfolio website, Pixelo provides modern, clean, and fully customizable templates to help you create an impactful online presence. Its user-friendly design ensures an effortless and smooth design process for developers and designers alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teko.variable} ${outfit.variable}`}>
      <body className="tz-bg-neutral3 ">
        <InnerLayout>
          {children}
          <ScrollTop />
        </InnerLayout>
      </body>
    </html>
  );
}
