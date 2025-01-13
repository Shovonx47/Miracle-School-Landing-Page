'use client';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import NoticeTicker from '@/components/NoticeTicker';
import Footer from '@/components/Footer';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <NoticeTicker />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
