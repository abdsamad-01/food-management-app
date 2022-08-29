import { Sidebar } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <div className='flex flex-row'>
            <Sidebar />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
