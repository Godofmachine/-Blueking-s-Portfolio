import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React
// import { header } from "./components/header"


export const metadata: Metadata = {
  title: "Blueking | Graphic designer & Front end developer",
  description:
    "Product designer and front end developer with a passion for designing beautiful and functional user experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <header/> */}
      <body>{children}</body>
    </html>
  )
}

