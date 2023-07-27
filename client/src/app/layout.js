import { AuthContextProvider } from "@/context/authContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatsApp",
  description: "WhatsApp",
  icons: {
    icon: "/whatsapp.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
