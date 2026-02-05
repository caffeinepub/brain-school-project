import { Menu, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useI18n } from '../i18n/useI18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  const { language, setLanguage, t } = useI18n();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'about', label: t('navAbout') },
    { id: 'objectives', label: t('navObjectives') },
    { id: 'results', label: t('navResults') },
    { id: 'partners', label: t('navPartners') },
    { id: 'social', label: t('navSocial') },
  ];

  const LanguageSwitch = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 transition-all duration-300 hover:scale-105"
          aria-label="Select language"
        >
          <Globe className="h-4 w-4" />
          <span className="uppercase font-medium">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'bg-accent' : ''}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('da')}
          className={language === 'da' ? 'bg-accent' : ''}
        >
          Dansk
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/assets/12.png" 
              alt={t('headerLogoAlt')}
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-105"
              >
                {item.label}
              </button>
            ))}
            <Button
              asChild
              variant="default"
              size="sm"
              className="ml-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <a href="https://projectbrain.eu/news/">
                {t('navNews')}
              </a>
            </Button>
            <LanguageSwitch />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitch />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="transition-transform duration-300 hover:scale-110">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t('headerToggleMenu')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="mt-2 transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://projectbrain.eu/news/">
                      {t('navNews')}
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
