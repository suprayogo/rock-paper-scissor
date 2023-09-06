import 'tailwindcss/tailwind.css';
import { AudioProvider } from '../utils/AudioContext.js';
import { MusicProvider } from '../utils/MusicContext.js';

function MyApp({ Component, pageProps }) {
  return (
    <MusicProvider>
    <AudioProvider>
      <Component {...pageProps} />
    </AudioProvider>
    </MusicProvider>
  );
}

export default MyApp;
