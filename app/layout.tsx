import './globals.css'
import './sass/main.css'
import './sass/main.min.css'
import NavBar from './components/navbar'
import {Quicksand } from 'next/font/google'
const quicksand = Quicksand({
  // weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'JUKTI',
  description: 'jukti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="sticky-top "><NavBar /></div>
        <div>{children}</div>    
      </body>
    </html>
  )
}
