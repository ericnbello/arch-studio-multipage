import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-full max-w-4xl mx-auto font-spartan'>
      <Head>
        <title>Arch Studio </title>
        <meta name="description" content="Arch Studio multipage website built with Next.js and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
              integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
              crossOrigin=""/>
        <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
              integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
              crossOrigin="" async></script>
      </Head>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
