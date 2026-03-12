import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-white text-gray-900 min-h-screen transition-colors duration-300">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
