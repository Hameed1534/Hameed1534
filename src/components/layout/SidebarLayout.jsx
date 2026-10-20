import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';

export default function SidebarLayout() {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Header />
      <Sidebar />

      <div className="lg:pl-64">
        <main className="mx-auto max-w-container-max px-margin-mobile pb-12 pt-24 md:px-margin-desktop">
          <Outlet />
        </main>
        <Footer />
      </div>

      <MobileNav />
    </div>
  );
}