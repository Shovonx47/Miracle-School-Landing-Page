import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import NoticeTicker from '@/components/NoticeTicker';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Notre Dame College Dhaka',
    template: '%s | Notre Dame College Dhaka',
  },
  description: 'Notre Dame College Dhaka - A Premier Educational Institution for Higher Secondary Education in Bangladesh',
  keywords: ['notre dame college', 'dhaka', 'education', 'college', 'bangladesh', 'hsc', 'catholic institution'],
  authors: [{ name: 'Notre Dame College' }],
  creator: 'Notre Dame College',
  publisher: 'Notre Dame College',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notredame.edu.bd/',
    siteName: 'Notre Dame College Dhaka',
    title: 'Notre Dame College Dhaka',
    description: 'Notre Dame College Dhaka - A Premier Educational Institution for Higher Secondary Education in Bangladesh',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Notre Dame College Dhaka',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
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
  );
}
