import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X-Writer',
  description: 'Generative Ai For Free',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
    <body className="">
      {/* Navbar */}
      <nav className="w-full z-50 fixed bg-neutral-900 text-white py-5 px-16 rounded-b-2xl flex justify-between items-center">
        <div className="text-xl md:text-3xl typographica">X-Writer</div>
        <div className="space-x-4  flex gap-4">
          <Link href="/" className="hover:underline poppins-bold">Home</Link>
          <Link href="/tools" className="hover:underline poppins-bold">Tools</Link>
          <Link href="/about" className="hover:underline poppins-bold">About</Link>
        </div>
      </nav>
      {children}
    </body>
  </html>
  )
}
