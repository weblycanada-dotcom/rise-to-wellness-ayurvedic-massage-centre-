import React from 'react';
import { IMAGES } from '../assets/images';

interface HeaderBannerProps {
  title: string;
  currentPage: string;
  parentPage?: string;
  parentPath?: string;
  onNavigate?: (page: string) => void;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  title,
  currentPage,
  parentPage,
  parentPath = 'services',
  onNavigate
}) => {
  return (
    <div className="relative w-full h-[220px] md:h-[280px] bg-[#1a231d] overflow-hidden flex items-center justify-center">
      {/* Background Image with botanical foliage texture matching reference screenshots */}
      <img
        src={IMAGES.foliageHeaderBanner}
        alt="Botanical Foliage"
        className="absolute inset-0 w-full h-full object-cover opacity-65 filter brightness-90"
        loading="eager"
        referrerPolicy="no-referrer"
      />
      {/* Dark overlay scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      {/* Content matching reference screenshot layout */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          style={{
            fontFamily: 'London, "Tenor Sans", sans-serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            lineHeight: 'clamp(32px, 4vw, 52px)',
            color: '#ffffff',
          }}
          className="uppercase tracking-[0.08em] drop-shadow-md"
        >
          {title}
        </h1>

        <nav
          style={{ fontFamily: '"Open Sans", sans-serif' }}
          aria-label="Breadcrumb"
          className="mt-3 flex items-center justify-center gap-2 text-xs md:text-sm text-stone-200 font-light tracking-wide"
        >
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>

          {parentPage && (
            <>
              <span className="text-stone-400">/</span>
              <button
                onClick={() => onNavigate && onNavigate(parentPath)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {parentPage}
              </button>
            </>
          )}

          <span className="text-stone-400">/</span>
          <span className="text-stone-100 font-medium">{currentPage}</span>
        </nav>
      </div>
    </div>
  );
};
