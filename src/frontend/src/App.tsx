import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { ResultsOutputsSection } from './components/ResultsOutputsSection';
import { TargetGroupsSection } from './components/TargetGroupsSection';
import { PartnersSection } from './components/PartnersSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';
import { I18nProvider } from './i18n/I18nProvider';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <ObjectivesSection />
          <ResultsOutputsSection />
          <TargetGroupsSection />
          <PartnersSection />
          <SocialMediaSection />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
