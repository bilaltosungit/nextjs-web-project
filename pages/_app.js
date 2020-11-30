import '../styles/app.css'
import '../styles/navigation.css'

// These files (that name begins with underline like _app.js) under the pages folder are system file,
// there is no _app page in this project.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}