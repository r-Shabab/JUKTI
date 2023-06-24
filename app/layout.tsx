import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.js'
import './sass/main.css'
import './sass/main.min.css'
import NavBar from './components/navbar'
import {Quicksand } from 'next/font/google'
const poppins = Quicksand({
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
      <body className={poppins.className}>
        <div className="sticky-top "><NavBar /></div>
        <div>{children}</div>    
      </body>
    </html>
  )
}
