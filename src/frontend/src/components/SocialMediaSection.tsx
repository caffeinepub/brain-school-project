import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Globe, FileText, Newspaper } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useI18n } from '../i18n/useI18n';

export function SocialMediaSection() {
  const { t } = useI18n();
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });
  const buttonsAnimation = useScrollAnimation({ threshold: 0.2 });

  const socialLinks = [
    {
      name: t('socialEpaleName'),
      url: 'https://epale.ec.europa.eu/en/private/brain-erasmus-project-students-first-ai-second',
      icon: Globe,
      description: t('socialEpaleDescription'),
    },
    {
      name: t('socialFacebookName'),
      url: 'https://www.facebook.com/profile.php?id=61584698301717',
      icon: SiFacebook,
      description: t('socialFacebookDescription'),
    },
    {
      name: t('socialInstagramName'),
      url: 'https://instagram.com/brain_erasmus',
      icon: SiInstagram,
      description: t('socialInstagramDescription'),
    },
    {
      name: t('socialLinkedinName'),
      url: 'https://www.linkedin.com/company/brain-students-first-ai-second/',
      icon: SiLinkedin,
      description: t('socialLinkedinDescription'),
    },
  ];

  return (
    <section id="social" className="py-16 sm:py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`scroll-animate will-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('socialTitle')}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              {t('socialDescription')}
            </p>
          </div>
          
          <div 
            ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <Card 
                key={index} 
                className={`group hover-lift border-2 hover:border-primary/50 will-animate scroll-animate stagger-${index + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
              >
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 will-animate">
                    <link.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{link.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t('socialVisit')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div 
            ref={buttonsAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 scroll-animate will-animate ${buttonsAnimation.isVisible ? 'visible' : ''}`}
          >
            <a 
              href="https://projectbrain.eu/newsletters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 min-w-[240px] overflow-hidden will-animate"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Newspaper className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300 will-animate" />
              <span className="relative z-10">{t('socialNewsletters')}</span>
            </a>
            
            <a 
              href="https://projectbrain.eu/Brochure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-accent via-primary to-secondary shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 min-w-[240px] overflow-hidden will-animate"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FileText className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300 will-animate" />
              <span className="relative z-10">{t('socialBrochure')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
