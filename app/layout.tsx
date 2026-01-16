import type React from "react"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Metadata, Viewport } from "next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "AgriScore",
  description:
    "Precision agriculture for the modern age. Elevate your yields with AgriScore.",
  keywords: ["smart farming", "precision agriculture", "luxury farming", "India"],
  icons: {
    icon: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: '#1a3c34'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="font-sans bg-black text-white selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  )
}
