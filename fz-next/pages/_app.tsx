import '../styles/globals.css'
//import 'quasar/dist/quasar.sass'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
