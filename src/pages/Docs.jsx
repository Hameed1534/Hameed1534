import PageHeader from '../components/ui/PageHeader';
import FeaturedRepos from '../components/sections/docs/FeaturedRepos';
import LogicPreview from '../components/sections/docs/LogicPreview';
import DocumentationGrid from '../components/sections/docs/DocumentationGrid';
import { docsHeader } from '../data/docs';
import usePageTitle from '../hooks/usePageTitle';

export default function Docs() {
  usePageTitle('QA Docs');

  return (
    <div className="pb-8">
      <PageHeader
        eyebrow={docsHeader.eyebrow}
        title={docsHeader.title}
        description={docsHeader.description}
        descriptionClassName="max-w-3xl"
        className="mb-12"
      />
      <FeaturedRepos />
      <LogicPreview />
      <DocumentationGrid />
    </div>
  );
}
