import "./globals.css";
import { Inter } from "next/font/google";
export const metadata = {
  title: "Schedulrr",
  description: "Meeting Scheduling App",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
