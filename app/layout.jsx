import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Segmentor",
  description: "UI components library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <link rel="icon" href="/favicon.png" sizes="32x32" />
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
