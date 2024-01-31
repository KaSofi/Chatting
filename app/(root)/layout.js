import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@components/Provider";
import Navbar from "@components/Navbar";
import BottomBar from "@components/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatting Project",
  description: "Chat App Next.js MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-2`}>
        <Provider>
          <Navbar/>
            {children}
          <BottomBar/>
        </Provider>
      </body>
    </html>
  );
}
