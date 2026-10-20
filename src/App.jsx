import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import SidebarLayout from './layouts/SidebarLayout';
import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Pages whose Stitch design has the left sidebar */}
        <Route element={<SidebarLayout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<ComingSoon title="Skills" />} />
          <Route path="projects" element={<ComingSoon title="Projects" />} />
          <Route path="docs" element={<ComingSoon title="QA Docs" />} />
          <Route path="contact" element={<ComingSoon title="Contact" />} />
          <Route path="test-cases" element={<ComingSoon title="Test Cases" />} />
          <Route path="automation" element={<ComingSoon title="Automation" />} />
          <Route path="ci-cd" element={<ComingSoon title="CI/CD" />} />
          <Route path="bug-reports" element={<ComingSoon title="Bug Reports" />} />
        </Route>

        {/* Pages without a sidebar */}
        <Route element={<PageLayout />}>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}