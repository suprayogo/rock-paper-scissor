import React from 'react';
import { AudioProvider } from './AudioContext.js'
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <AudioProvider>
      <Component {...pageProps} />
    </AudioProvider>
  );
}

export default MyApp;
