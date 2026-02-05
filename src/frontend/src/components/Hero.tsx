import { Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="absolute inset-0 bg-[url('/assets/generated/hero-ai-education-vivid.dim_1200x600.jpg')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      
      <div className="relative z-10 container mx-auto px-4 h-full min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-fade-in will-animate">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('heroErasmusBadge')}</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground animate-zoom-in will-animate">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              BrAIn
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1 will-animate">
            {t('heroProjectNumber')}
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up stagger-2 will-animate">
            {t('heroTagline')}
          </p>
        </div>
      </div>
    </section>
  );
}
