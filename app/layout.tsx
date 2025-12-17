import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Avance",
  description: "Avance | Plataforma de bienestar y wearables inteligentes",
  icons: {
    icon: [
      {
        url: "/images/avance-logo.svg",
        type: "image/svg+xml",
      },
      {
        url: "/images/avance-logo.png",
        type: "image/png",
      },
    ],
    apple: "/images/avance-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var path = window.location.pathname;
                if (path.startsWith('/shop') || path.startsWith('/product') || path.startsWith('/cart')) {
                  document.documentElement.style.backgroundColor = '#000000';
                  document.documentElement.classList.add('dark-page');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistMono.variable} font-mono antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
