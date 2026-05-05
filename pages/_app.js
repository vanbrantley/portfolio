import '@/styles/globals.css';
import Layout from '@/components/Layout';

import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-white text-gray-900 min-h-screen transition-colors duration-300">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
