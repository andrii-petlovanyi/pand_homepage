import { Footer } from '@/src/components/layout/Footer/Footer'
import { Header } from '@/src/components/layout/Header/Header'
import '@/styles/globals.css'
import { Roboto } from '@next/font/google'
import { ServerThemeProvider } from 'next-themes'
import { Providers } from './providers'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "500", "700"], variable: '--font-roboto' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" >
        <head />
        <body className={`${roboto.className} overflow-hidden`}>
          <Providers>
            <div className='min-h-screen relative px-2 container max-w-4xl xs:mx-auto xs:px-5'>
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
        </body>
      </html >
    </ServerThemeProvider>
  )
}
