import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MammaTales - Your Voice, Their Favorite Stories",
  description:
    "Record your voice telling beautiful children's stories. Create magical moments that your little ones can treasure forever.",
  keywords: "children stories, voice recording, bedtime stories, mothers, storytelling",
  authors: [{ name: "MammaTales Team" }],
  openGraph: {
    title: "MammaTales - Your Voice, Their Favorite Stories",
    description:
      "Record your voice telling beautiful children's stories. Create magical moments that your little ones can treasure forever.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MammaTales - Your Voice, Their Favorite Stories",
    description:
      "Record your voice telling beautiful children's stories. Create magical moments that your little ones can treasure forever.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
