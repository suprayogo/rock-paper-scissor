import React from 'react';
import { AudioProvider } from './AudioContext.js'
import { MusicProvider } from './MusicContext.js';
import 'tailwindcss/tailwind.css';

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
