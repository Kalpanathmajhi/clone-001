"use client"
import { Inter } from 'next/font/google'
import Footer from './components/footer/footer'
import Header from './components/header/header'

import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const pathName = usePathname ();
  console.log(pathName)
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      
      <div>
        <Footer />
      </div>
     
      
      <div>
       <Header />
      </div>
      

      </body>

    </html>
  )
}
