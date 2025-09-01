import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"
import { Exo_2 } from "next/font/google"
const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
})
export const metadata: Metadata = {
  title: "Todo App",
  description: "Assessment for Tobams group",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${exo2.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {/* <Analytics /> */}
        </Suspense>
      </body>
    </html>
  );
}
