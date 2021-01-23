import '../styles/globals.css'
import {setUpFirebase} from "../lib/firebase";

function MyApp({ Component, pageProps }) {
  setUpFirebase()
  return <Component {...pageProps} />
}

export default MyApp
