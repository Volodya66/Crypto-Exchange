import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer/Footer';

export default function SharedLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
