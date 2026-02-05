import { GraduationCap, Users, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useI18n } from '../i18n/useI18n';

export function TargetGroupsSection() {
  const { t } = useI18n();
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  const targetGroups = [
    {
      icon: GraduationCap,
      title: t('targetGroup1Title'),
      description: t('targetGroup1Description'),
      image: '/assets/generated/students-icon.dim_64x64.png',
    },
    {
      icon: Users,
      title: t('targetGroup2Title'),
      description: t('targetGroup2Description'),
      image: '/assets/generated/educators-icon-solid.dim_64x64.png',
    },
    {
      icon: Heart,
      title: t('targetGroup3Title'),
      description: t('targetGroup3Description'),
      image: '/assets/generated/families-icon.dim_64x64.png',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`scroll-animate will-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('targetGroupsTitle')}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              {t('targetGroupsDescription')}
            </p>
          </div>
          
          <div 
            ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {targetGroups.map((group, index) => (
              <Card 
                key={index} 
                className={`group hover-lift border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 will-animate scroll-animate stagger-${index + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 will-animate">
                    <img 
                      src={group.image} 
                      alt={group.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {group.description}
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
