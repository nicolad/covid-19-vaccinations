import { AppProps } from 'next/app'
import Head from 'next/head'
import 'antd/dist/antd.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Pro - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple Next.js Boilerplate Ready to production"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
