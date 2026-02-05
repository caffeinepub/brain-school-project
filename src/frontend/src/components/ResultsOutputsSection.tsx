import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useI18n } from '../i18n/useI18n';

export function ResultsOutputsSection() {
  const { t } = useI18n();
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  const outputs = [
    {
      icon: '/assets/generated/generated/skillquest-framework-icon-solid.dim_64x64.png',
      title: t('result1Title'),
      description: t('result1Description'),
    },
    {
      icon: '/assets/generated/generated/teachers-handbook-icon-solid.dim_64x64.png',
      title: t('result2Title'),
      description: t('result2Description'),
    },
    {
      icon: '/assets/generated/generated/active-brain-platform-icon-solid.dim_64x64.png',
      title: t('result3Title'),
      description: t('result3Description'),
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`scroll-animate will-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('resultsTitle')}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              {t('resultsDescription')}
            </p>
          </div>
          
          <div 
            ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {outputs.map((output, index) => (
              <Card 
                key={index} 
                className={`group hover-lift border-2 hover:border-primary/50 bg-gradient-to-br from-background to-accent/5 will-animate scroll-animate stagger-${index + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 will-animate">
                      <img 
                        src={output.icon} 
                        alt={t('resultIconAlt').replace('{title}', output.title)}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{output.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {output.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
