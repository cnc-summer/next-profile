import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Next Profile',
  description: 'A Next.js profile website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#2c2c2c]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
