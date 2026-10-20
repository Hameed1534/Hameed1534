import Hero from '../components/sections/Hero';
import ExecutionOverview from '../components/sections/ExecutionOverview';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle();

  return (
    <>
      <Hero />
      <ExecutionOverview />
    </>
  );
}