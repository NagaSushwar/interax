import Header from "./_components/Header";
import "./styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Footer from "./_components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   // title: "The Wild Oasis",
//   title: {
//     template: "%s / The Wild Oasis",
//     default: "Welcome / The Wild Oasis",
//   },
//   description:
//     " Luxorious various hotels locked in heart of Indians where u can use them for anything",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
