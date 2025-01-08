export const metadata = {
  title: 'Faculty & Staff | Notre Dame College Dhaka',
  description: 'Meet our distinguished faculty members and staff at Notre Dame College Dhaka. Our educators bring extensive experience and expertise across various academic disciplines.',
  keywords: 'Notre Dame College faculty, NDC teachers, Notre Dame College Dhaka staff, NDC professors, academic staff, college teachers Bangladesh',
  openGraph: {
    title: 'Faculty & Staff | Notre Dame College Dhaka',
    description: 'Meet our distinguished faculty members and staff at Notre Dame College Dhaka. Our educators bring extensive experience and expertise across various academic disciplines.',
    url: 'https://ndc.edu.bd/about-us/faculty-and-staff',
    siteName: 'Notre Dame College Dhaka',
    images: [
      {
        url: '/images/og/faculty-staff.jpg',
        width: 1200,
        height: 630,
        alt: 'Notre Dame College Faculty & Staff',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faculty & Staff | Notre Dame College Dhaka',
    description: 'Meet our distinguished faculty members and staff at Notre Dame College Dhaka. Our educators bring extensive experience and expertise across various academic disciplines.',
    images: ['/images/og/faculty-staff.jpg'],
  },
  alternates: {
    canonical: 'https://ndc.edu.bd/about-us/faculty-and-staff',
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
};

export default function Layout({ children }) {
  return children;
} 