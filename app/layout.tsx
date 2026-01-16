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
  title: {
    default: "AgriScore | Precision Agriculture & Soil Intelligence",
    template: "%s | AgriScore"
  },
  description: "The global standard in precision agriculture. We combine advanced soil intelligence with AI-driven insights to help estate owners and farmers achieve sustainable, high-yield results.",
  keywords: ["precision agriculture India", "soil intelligence", "smart farming solutions", "agritech Kolkata", "sustainable farming", "yield engineering"],
  authors: [{ name: "AgriScore" }],
  creator: "AgriScore",
  publisher: "AgriScore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://myagriscore.com",
    title: "AgriScore | Precision Agriculture & Soil Intelligence",
    description: "Engineering the future of farming with advanced soil intelligence and AI-driven precision agriculture.",
    siteName: "AgriScore",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AgriScore - Precision Agriculture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriScore | Precision Agriculture",
    description: "Engineering the future of farming with advanced soil intelligence.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
