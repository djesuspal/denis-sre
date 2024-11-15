import './globals.css'
import { Metadata } from 'next'
import { metadata as siteMetadata } from './metadata'

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://denis.codes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-[#18181b] text-white antialiased">{children}</body>
    </html>
  )
}
