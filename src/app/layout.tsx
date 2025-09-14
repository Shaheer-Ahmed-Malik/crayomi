import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Crayomii",
  description: "Best kids store",
  icons: {
    icon: "/faviconn.png", // favicon ki jagah logo.png use hoga
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
