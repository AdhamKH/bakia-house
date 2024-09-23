import type { Metadata } from "next";
import { Inter, Montserrat, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/parallex";
import Loader from "@/components/loader";
import { Suspense } from "react";
import Header from "./home/components/header";
import NavBar from "@/components/navBar";
import PageTransition from "./components/pageTranstion/pageTransition";
import Footer from "@/components/footer";

const inter = Open_Sans({ subsets: ["latin"] });

const montserrat = Poppins({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Bakia house",
  description: "All you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <Suspense fallback={<Loader />}>
          <Providers>
            <NavBar />
            {children}
            <Footer />{" "}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
