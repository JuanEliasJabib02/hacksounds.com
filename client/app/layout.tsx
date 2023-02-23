import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './globals.css'


/* This components is the door to our app
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        < Header />
        {children}
        < Footer />
      </body>
    </html>
  );
}
