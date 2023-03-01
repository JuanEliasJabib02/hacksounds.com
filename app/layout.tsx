
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Providers } from "../store/provider";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  );
}