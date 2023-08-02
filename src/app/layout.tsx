import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const poppin = Poppins({ weight: ['600'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quizme',
  description: 'Interactive quizzes for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("antialiased min-h-screen pt-10",poppin.className)}>{children}</body>
    </html>
  )
}
