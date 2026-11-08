import ContactForm from '../components/sections/contact/ContactForm';
import ContactInfo from '../components/sections/contact/ContactInfo';
import usePageTitle from '../hooks/usePageTitle';

export default function Contact() {
  usePageTitle('Contact');

  return (
    <div className="grid grid-cols-1 gap-gutter pb-8 pt-4 xl:grid-cols-12">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}