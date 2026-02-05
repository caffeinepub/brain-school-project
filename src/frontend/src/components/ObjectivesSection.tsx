import { Lightbulb, Brain, Users, Target, BookOpen, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useI18n } from '../i18n/useI18n';

export function ObjectivesSection() {
  const { t } = useI18n();
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  const objectives = [
    {
      icon: Brain,
      title: t('objective1Title'),
      description: t('objective1Description'),
    },
    {
      icon: Shield,
      title: t('objective2Title'),
      description: t('objective2Description'),
    },
    {
      icon: Users,
      title: t('objective3Title'),
      description: t('objective3Description'),
    },
    {
      icon: Target,
      title: t('objective4Title'),
      description: t('objective4Description'),
    },
    {
      icon: BookOpen,
      title: t('objective5Title'),
      description: t('objective5Description'),
    },
    {
      icon: Lightbulb,
      title: t('objective6Title'),
      description: t('objective6Description'),
    },
  ];

  return (
    <section id="objectives" className="py-16 sm:py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`scroll-animate will-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('objectivesTitle')}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              {t('objectivesDescription')}
            </p>
          </div>
          
          <div 
            ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {objectives.map((objective, index) => (
              <Card 
                key={index} 
                className={`group hover-lift border-2 hover:border-primary/50 will-animate scroll-animate stagger-${index + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 group-hover:scale-110 will-animate">
                      <objective.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {objective.description}
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
