import "../../styles/globals.css"
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ITbank',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
          <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={inter.className} style={{minHeight: '100vh'}}>
          <Navbar/>
          <div className="mainContentWrapper">
            {children}
          </div>          
          <Footer/>
      </body>
    </html>
  )
}
