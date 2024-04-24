import '../styles/global.css';
import { Jersey_20 } from 'next/font/google'

const jersey = Jersey_20({ 
    subsets: ['latin'],
    weight: ['400'],
})

export default function App({ Component, pageProps }) {
    return (
        <main className={jersey.className}>
            <Component {...pageProps} />;
        </main>
    )
}