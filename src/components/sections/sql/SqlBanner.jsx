import ImageWithFallback from '../../ui/ImageWithFallback';
import { sqlBanner as banner } from '../../../data/sql';

export default function SqlBanner() {
  return (
    <section
      aria-labelledby="banner-title"
      className="relative mt-16 flex min-h-[16rem] items-center justify-center overflow-hidden rounded-2xl bg-inverse-surface py-10 md:mt-section-gap"
    >
      <ImageWithFallback
        src={banner.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative z-10 px-6 text-center md:px-10">
        <h2 id="banner-title" className="mb-4 text-h2 text-white">
          {banner.title}
        </h2>
        <p className="mx-auto max-w-xl text-body-lg text-outline-variant">{banner.description}</p>
      </div>
    </section>
  );
}
