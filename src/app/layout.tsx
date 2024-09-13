import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/parallex";
import Loader from "@/components/loader";
import { Suspense } from "react";
import Header from "./home/components/header";
import Footer from "./home/components/footer";
import NavBar from "@/components/navBar";
import PageTransition from "./components/pageTranstion/pageTransition";

const inter = Inter({ subsets: ["latin"] });

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
            <PageTransition>{children}</PageTransition>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
