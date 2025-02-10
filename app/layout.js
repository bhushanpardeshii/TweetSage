import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"], weight: ["400", "700"],
  variable: "--font-nunito",
});


export const metadata = {
  title: "TweetSage",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
