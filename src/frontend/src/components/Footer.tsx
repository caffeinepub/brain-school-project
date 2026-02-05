import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useI18n } from '../i18n/useI18n';

export function Footer() {
  const { t } = useI18n();
  const logoAnimation = useScrollAnimation({ threshold: 0.2 });
  const textAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer className="border-t bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* EU Funding Logo */}
          <div 
            ref={logoAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`flex flex-col items-center gap-4 scroll-animate-zoom will-animate ${logoAnimation.isVisible ? 'visible' : ''}`}
          >
            <img 
              src="/assets/Co-Funded-By-the-EU-transparent-background.png" 
              alt={t('footerEuLogoAlt')}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          
          {/* EU Funding Disclaimer */}
          <div 
            ref={textAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`max-w-4xl scroll-animate will-animate ${textAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-xs text-muted-foreground leading-relaxed px-4">
              {t('footerDisclaimer')}
            </p>
          </div>
          
          {/* Copyright Notice */}
          <p className={`text-sm text-muted-foreground scroll-animate stagger-1 will-animate ${textAnimation.isVisible ? 'visible' : ''}`}>
            {t('footerCopyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
