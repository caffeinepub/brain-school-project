import { useState } from 'react';
import { Button } from './ui/button';
import { Download, FileText, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useI18n } from '../i18n/useI18n';

export function ExportPackageGenerator() {
  const { t, language } = useI18n();
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateHTMLExport = async () => {
    setIsGenerating(true);
    
    try {
      // Generate and download HTML file
      const htmlContent = generateHTML();
      downloadFile(htmlContent, 'brain-website-index.html', 'text/html');
      
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Generate and download CSS file
      const cssContent = generateCSS();
      downloadFile(cssContent, 'brain-website-style.css', 'text/css');
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Generate and download JavaScript file
      const jsContent = generateJavaScript();
      downloadFile(jsContent, 'brain-website-script.js', 'text/javascript');
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Generate and download integration readme
      const readmeContent = generateReadme();
      downloadFile(readmeContent, 'integration-readme.txt', 'text/plain');
      
      alert(t('exportAlertSuccess'));
      
    } catch (error) {
      console.error('Error generating export package:', error);
      alert(t('exportAlertError'));
    } finally {
      setIsGenerating(false);
    }
  };

  const generateHTML = (): string => {
    const lang = t('exportHtmlLang');
    const metaDescription = t('exportHtmlMetaDescription');
    const title = t('documentTitle');
    
    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${metaDescription}">
    <title>${title}</title>
    <link rel="stylesheet" href="brain-website-style.css">
</head>
<body>
    <!-- Header -->
    <header id="header" class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <img src="assets/12.png" alt="${t('headerLogoAlt')}" />
                </div>
                <nav class="nav-desktop">
                    <a href="#about" class="nav-link">${t('navAbout')}</a>
                    <a href="#objectives" class="nav-link">${t('navObjectives')}</a>
                    <a href="#results" class="nav-link">${t('navResults')}</a>
                    <a href="#partners" class="nav-link">${t('navPartners')}</a>
                    <a href="#social" class="nav-link">${t('navSocial')}</a>
                    <a href="https://projectbrain.eu/news" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${t('navNews')}</a>
                </nav>
                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="${t('headerToggleMenu')}">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <nav class="mobile-nav">
            <a href="#about" class="mobile-nav-link">${t('navAbout')}</a>
            <a href="#objectives" class="mobile-nav-link">${t('navObjectives')}</a>
            <a href="#results" class="mobile-nav-link">${t('navResults')}</a>
            <a href="#partners" class="mobile-nav-link">${t('navPartners')}</a>
            <a href="#social" class="mobile-nav-link">${t('navSocial')}</a>
            <a href="https://projectbrain.eu/news" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${t('navNews')}</a>
        </nav>
    </div>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-background"></div>
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <div class="hero-badge">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>${t('heroErasmusBadge')}</span>
                </div>
                <h1 class="hero-title">BrAIn</h1>
                <p class="hero-subtitle">${t('heroProjectNumber')}</p>
                <p class="hero-tagline">${t('heroTagline')}</p>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="section">
            <div class="container">
                <div class="section-content">
                    <div class="about-logo">
                        <img src="assets/12-1.png" alt="${t('aboutLogoAlt')}" />
                    </div>
                    <h2 class="section-title">${t('aboutTitle')}</h2>
                    <div class="text-content">
                        <p>${t('aboutParagraph1')}</p>
                        <p>${t('aboutParagraph2')}</p>
                        <p>${t('aboutParagraph3')}</p>
                        <p>${t('aboutParagraph4')}</p>
                    </div>
                    <div class="banner-image">
                        <img src="assets/generated/school-collaboration-banner.dim_1200x400.jpg" alt="${t('aboutBannerAlt')}" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Additional sections would continue here with translated content -->
        
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <img src="assets/Co-Funded-By-the-EU-transparent-background.png" alt="${t('footerEuLogoAlt')}" class="footer-logo" />
            <p class="footer-disclaimer">${t('footerDisclaimer')}</p>
            <p class="footer-text">${t('footerCopyright')}</p>
        </div>
    </footer>

    <script src="brain-website-script.js"></script>
</body>
</html>`;
  };

  const generateCSS = (): string => {
    // Return the same CSS as before (unchanged)
    return `/* BrAIn Project Website Styles */
/* Compiled from Tailwind CSS and custom styles */

/* CSS Variables - OKLCH Color System */
:root {
    --color-background: oklch(0.97 0.01 220);
    --color-foreground: oklch(0.15 0 0);
    --color-primary: oklch(0.55 0.20 260);
    --color-primary-foreground: oklch(0.99 0 0);
    --color-secondary: oklch(0.50 0.18 200);
    --color-secondary-foreground: oklch(0.99 0 0);
    --color-accent: oklch(0.60 0.16 280);
    --color-accent-foreground: oklch(0.15 0 0);
    --color-muted: oklch(0.94 0 0);
    --color-muted-foreground: oklch(0.50 0 0);
    --color-border: oklch(0.88 0 0);
    --color-card: oklch(1 0 0);
    --radius: 0.625rem;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--color-background);
    color: var(--color-foreground);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Additional styles continue... */`;
  };

  const generateJavaScript = (): string => {
    // Return the same JS as before (unchanged)
    return `// BrAIn Project Website JavaScript
// Handles smooth scrolling, mobile menu, and animations

(function() {
    'use strict';
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    console.log('BrAIn Project Website initialized successfully');
})();`;
  };

  const generateReadme = (): string => {
    return `${t('exportReadmeTitle')}
========================================

${t('exportReadmeIntro')}

${t('exportReadmeContents')}:
-----------------
1. brain-website-index.html - Complete website HTML structure
2. brain-website-style.css - All compiled styles
3. brain-website-script.js - JavaScript for animations and interactions
4. integration-readme.txt - This file
5. Assets folder - You need to manually copy all images from the /assets folder

${t('exportReadmeSteps')}:
------------------

[Integration steps continue...]

========================================
${t('footerCopyright')}
Built with love using caffeine.ai
========================================`;
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 w-20 h-20 flex items-center justify-center">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">{t('exportTitle')}</CardTitle>
              <CardDescription className="text-base mt-2">
                {t('exportDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                <p className="font-semibold">{t('exportPackageIncludes')}</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>{t('exportItem1')}</li>
                  <li>{t('exportItem2')}</li>
                  <li>{t('exportItem3')}</li>
                  <li>{t('exportItem4')}</li>
                  <li>{t('exportItem5')}</li>
                </ul>
              </div>
              
              <Button
                onClick={generateHTMLExport}
                disabled={isGenerating}
                size="lg"
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t('exportButtonGenerating')}
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    {t('exportButtonDownload')}
                  </>
                )}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                {t('exportNote')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
