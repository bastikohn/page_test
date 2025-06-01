import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page Test - Your Awesome Project</title>
        <meta name="description" content="A modern project built with Next.js and MDX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
