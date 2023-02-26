import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Fonts from '../components/Fonts'

import { Header } from '../components/Header'

function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Fonts />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
