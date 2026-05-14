import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Good to specify weights for non-variable fonts
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {/* Wrap children in a main tag with flex-grow */}
        <main className="grow">
          <Toaster/>
          <ToastContainer/>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}