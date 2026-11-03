import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import MobileNav from '../layout/MobileNav';
import Footer from '../layout/Footer';

// Header + footer only (used by the 404 page).
export default function PageLayout() {
  return (
    <div className="min-h-screen pb-16 pt-16 lg:pb-0">
      <Header />

      <main className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop">
        <Outlet />
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
