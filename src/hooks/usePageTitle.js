import { useEffect } from 'react';

const SITE_NAME = 'QA Engineer Portfolio';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  }, [title]);
}