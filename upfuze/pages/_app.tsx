import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Header } from '../components/Header'

function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
