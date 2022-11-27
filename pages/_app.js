import '../styles/globals.scss'
import {GlobalState} from "../context/global/globalState"

function MyApp({ Component, pageProps }) {
  return (
  <GlobalState>
  <Component {...pageProps} />
  </GlobalState>
  )
}

export default MyApp
