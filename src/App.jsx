import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import SidebarLayout from './components/layout/SidebarLayout';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Docs from './pages/Docs';
import TestCases from './pages/TestCases';
import BugReports from './pages/BugReports';
import Automation from './pages/Automation';
import SqlTesting from './pages/SqlTesting';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Every page with the left sidebar */}
        <Route element={<SidebarLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="docs" element={<Docs />} />
          <Route path="test-cases" element={<TestCases />} />
          <Route path="bug-reports" element={<BugReports />} />
          <Route path="automation" element={<Automation />} />
          <Route path="sql" element={<SqlTesting />} />
          {/* The CI/CD pipeline lives inside the Automation page */}
          <Route path="ci-cd" element={<Navigate to="/automation#ci-cd" replace />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Header + footer only (no sidebar) */}
        <Route element={<PageLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}