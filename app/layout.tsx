import '@/styles/globals.css'
import { Footer } from '@/components/layout/Footer/Footer'
import { Header } from '@/components/layout/Header/Header'
import { Roboto } from '@next/font/google'
import styles from './page.module.css'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"], variable: '--font-roboto' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head />
      <body className={`${roboto.className} ${styles.body}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  )
}
