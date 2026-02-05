import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useI18n } from '../i18n/useI18n';

export function AboutSection() {
  const { t } = useI18n();
  const logoAnimation = useScrollAnimation({ threshold: 0.2 });
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1 });
  const imageAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-16 sm:py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* BrAIn Logo */}
          <div 
            ref={logoAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`flex justify-center mb-8 sm:mb-10 scroll-animate-zoom will-animate ${logoAnimation.isVisible ? 'visible' : ''}`}
          >
            <img
              src="/assets/12-1.png"
              alt={t('aboutLogoAlt')}
              className="w-48 sm:w-64 md:w-80 h-auto object-contain"
            />
          </div>

          <h2 
            ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent scroll-animate will-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            {t('aboutTitle')}
          </h2>
          
          <div 
            ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-6 text-lg text-foreground/90 leading-relaxed scroll-animate will-animate ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            <p>{t('aboutParagraph1')}</p>
            <p>{t('aboutParagraph2')}</p>
            <p>{t('aboutParagraph3')}</p>
            <p>{t('aboutParagraph4')}</p>
          </div>
          
          <div 
            ref={imageAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`mt-12 scroll-animate will-animate ${imageAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg hover-zoom-image">
              <img
                src="/assets/generated/school-collaboration-banner.dim_1200x400.jpg"
                alt={t('aboutBannerAlt')}
                className="w-full h-auto object-cover brightness-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
