import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';

export default function PageLayout() {
  return (
    <div className="min-h-screen pb-16 pt-16 md:pb-0">
      <Header variant="light" />

      <main className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop">
        <Outlet />
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}