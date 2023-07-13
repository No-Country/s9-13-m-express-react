import ReduxProvider from '@/store/ReduxProvider';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <ReduxProvider>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow'>
              <div className='mx-auto'>{children}</div>
            </main>
            <Footer />
          </div>
        </ReduxProvider>
      <ReduxProvider>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow'>
              <div className='mx-auto'>{children}</div>
            </main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
