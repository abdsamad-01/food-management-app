import { Sidebar } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <div className='flex flex-row bg-bg-dark-2'>
            <Sidebar />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
