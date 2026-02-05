// Central translation dictionary for English and Danish
export type Language = 'en' | 'da';

export interface Translations {
  // Document metadata
  documentTitle: string;
  
  // Header
  headerLogoAlt: string;
  headerToggleMenu: string;
  navAbout: string;
  navObjectives: string;
  navResults: string;
  navPartners: string;
  navSocial: string;
  navNews: string;
  
  // Hero
  heroErasmusBadge: string;
  heroProjectNumber: string;
  heroTagline: string;
  
  // About Section
  aboutLogoAlt: string;
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutParagraph3: string;
  aboutParagraph4: string;
  aboutBannerAlt: string;
  
  // Objectives Section
  objectivesTitle: string;
  objectivesDescription: string;
  objective1Title: string;
  objective1Description: string;
  objective2Title: string;
  objective2Description: string;
  objective3Title: string;
  objective3Description: string;
  objective4Title: string;
  objective4Description: string;
  objective5Title: string;
  objective5Description: string;
  objective6Title: string;
  objective6Description: string;
  
  // Results & Outputs Section
  resultsTitle: string;
  resultsDescription: string;
  result1Title: string;
  result1Description: string;
  result2Title: string;
  result2Description: string;
  result3Title: string;
  result3Description: string;
  resultIconAlt: string;
  
  // Target Groups Section
  targetGroupsTitle: string;
  targetGroupsDescription: string;
  targetGroup1Title: string;
  targetGroup1Description: string;
  targetGroup2Title: string;
  targetGroup2Description: string;
  targetGroup3Title: string;
  targetGroup3Description: string;
  
  // Partners Section
  partnersTitle: string;
  partnersDescription: string;
  partnerVisitWebsite: string;
  partnerLogoAlt: string;
  
  // Social Media Section
  socialTitle: string;
  socialDescription: string;
  socialEpaleName: string;
  socialEpaleDescription: string;
  socialFacebookName: string;
  socialFacebookDescription: string;
  socialInstagramName: string;
  socialInstagramDescription: string;
  socialLinkedinName: string;
  socialLinkedinDescription: string;
  socialVisit: string;
  socialNewsletters: string;
  socialBrochure: string;
  
  // Footer
  footerEuLogoAlt: string;
  footerDisclaimer: string;
  footerCopyright: string;
  
  // Export Package Generator
  exportTitle: string;
  exportDescription: string;
  exportPackageIncludes: string;
  exportItem1: string;
  exportItem2: string;
  exportItem3: string;
  exportItem4: string;
  exportItem5: string;
  exportButtonGenerating: string;
  exportButtonDownload: string;
  exportNote: string;
  exportAlertSuccess: string;
  exportAlertError: string;
  exportHtmlLang: string;
  exportHtmlMetaDescription: string;
  exportReadmeTitle: string;
  exportReadmeIntro: string;
  exportReadmeContents: string;
  exportReadmeSteps: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Document metadata
    documentTitle: 'BrAIn School Project',
    
    // Header
    headerLogoAlt: 'BrAIn Project Logo',
    headerToggleMenu: 'Toggle menu',
    navAbout: 'About BrAIn',
    navObjectives: 'Objectives',
    navResults: 'Results & Outputs',
    navPartners: 'Partners',
    navSocial: 'Social Media',
    navNews: 'NEWS',
    
    // Hero
    heroErasmusBadge: 'Erasmus+ Project',
    heroProjectNumber: 'School Education Project No: 2025-1-ES01-KA220-SCH-000358138',
    heroTagline: 'Empowering students, educators, and families with the knowledge and skills to navigate the AI-driven future responsibly.',
    
    // About Section
    aboutLogoAlt: 'BrAIn Project Logo – Brain First AI Second',
    aboutTitle: 'About BrAIn',
    aboutParagraph1: 'BrAIn aims to equip students with the knowledge and skills necessary to understand and engage with artificial intelligence (AI) in a responsible and ethical manner. As AI becomes increasingly integrated into various aspects of daily life, it is crucial for young people to develop a critical understanding of how these technologies work, their potential benefits, and the ethical considerations they raise.',
    aboutParagraph2: 'The project focuses on fostering AI literacy among students aged 12-16, helping them to navigate the complexities of AI-driven systems. Through interactive learning experiences, students will explore topics such as machine learning, data privacy, algorithmic bias, and the societal impact of AI. The curriculum is designed to be accessible and engaging, encouraging students to think critically about the role of AI in their lives and the broader implications for society.',
    aboutParagraph3: 'By promoting responsible AI literacy, BrAIn seeks to empower the next generation to become informed digital citizens who can make thoughtful decisions about technology use. The project also aims to support educators by providing them with the resources and training needed to effectively teach AI concepts in the classroom. Additionally, BrAIn recognizes the importance of involving parents and families in the learning process, offering guidance on how to discuss AI-related topics at home.',
    aboutParagraph4: 'Through collaboration between schools, educators, students, and families, BrAIn strives to create a comprehensive approach to AI education that prepares young people for the challenges and opportunities of an AI-driven future.',
    aboutBannerAlt: 'Education, Collaboration, and AI Literacy',
    
    // Objectives Section
    objectivesTitle: 'Project Objectives',
    objectivesDescription: 'Our comprehensive approach to building responsible AI literacy through education, collaboration, and practical application',
    objective1Title: 'Develop AI Literacy',
    objective1Description: 'Equip students with foundational knowledge of AI concepts, including machine learning, neural networks, and data processing.',
    objective2Title: 'Promote Ethical Understanding',
    objective2Description: 'Foster critical thinking about ethical considerations in AI, including privacy, bias, fairness, and transparency.',
    objective3Title: 'Encourage Collaboration',
    objective3Description: 'Create opportunities for students to work together on AI-related projects, promoting teamwork and peer learning.',
    objective4Title: 'Build Practical Skills',
    objective4Description: 'Provide hands-on experiences with AI tools and technologies, enabling students to apply theoretical knowledge in real-world contexts.',
    objective5Title: 'Support Educators',
    objective5Description: 'Offer comprehensive training and resources for teachers to effectively integrate AI education into their curriculum.',
    objective6Title: 'Empower Digital Citizens',
    objective6Description: 'Prepare students to become informed, responsible digital citizens capable of making thoughtful decisions about AI technology.',
    
    // Results & Outputs Section
    resultsTitle: 'RESULTS & OUTPUTS',
    resultsDescription: 'Key deliverables and outcomes from the BrAIn project designed to support AI education across Europe',
    result1Title: 'SkillQuest Framework',
    result1Description: 'A comprehensive educational framework designed to guide students through AI literacy development with structured learning pathways and competency-based progression.',
    result2Title: "Teachers' Handbook",
    result2Description: 'An essential resource providing educators with practical strategies, lesson plans, and pedagogical approaches for effectively teaching AI concepts and ethics in the classroom.',
    result3Title: 'Active BrAIn Platform',
    result3Description: 'An interactive digital platform offering hands-on AI learning experiences, collaborative tools, and resources for students, teachers, and families to explore AI together.',
    resultIconAlt: '{title} icon',
    
    // Target Groups Section
    targetGroupsTitle: 'Target Groups',
    targetGroupsDescription: 'BrAIn serves a diverse community of learners, educators, and families',
    targetGroup1Title: 'Students (Ages 6-12)',
    targetGroup1Description: 'Young learners developing critical AI literacy skills and understanding the ethical implications of artificial intelligence in their daily lives.',
    targetGroup2Title: 'Educators',
    targetGroup2Description: 'Teachers and educational professionals receiving training, resources, and support to effectively integrate AI education into their curriculum.',
    targetGroup3Title: 'Parents & Families',
    targetGroup3Description: "Family members gaining insights and guidance on how to discuss AI-related topics at home and support their children's digital literacy journey.",
    
    // Partners Section
    partnersTitle: 'Partners',
    partnersDescription: 'Collaborating institutions working together to advance AI literacy in education',
    partnerVisitWebsite: 'Visit Website',
    partnerLogoAlt: '{name} logo',
    
    // Social Media Section
    socialTitle: 'Connect With Us',
    socialDescription: 'Stay updated with the latest news, resources, and developments from the BrAIn project',
    socialEpaleName: 'EPALE',
    socialEpaleDescription: 'European Platform for Adult Learning',
    socialFacebookName: 'Facebook',
    socialFacebookDescription: 'Follow us on Facebook',
    socialInstagramName: 'Instagram',
    socialInstagramDescription: '@brain_erasmus',
    socialLinkedinName: 'LinkedIn',
    socialLinkedinDescription: 'Connect with us professionally',
    socialVisit: 'Visit',
    socialNewsletters: 'Newsletters',
    socialBrochure: 'Project Brochure',
    
    // Footer
    footerEuLogoAlt: 'Co-funded by the European Union',
    footerDisclaimer: 'Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.',
    footerCopyright: '© 2026. All Rights Reserved. BrAIn Project',
    
    // Export Package Generator
    exportTitle: 'Export for Divi (WordPress)',
    exportDescription: 'Download a complete HTML export package ready for Divi integration',
    exportPackageIncludes: 'Package includes:',
    exportItem1: 'Complete HTML file with all sections',
    exportItem2: 'Compiled CSS stylesheet',
    exportItem3: 'JavaScript for animations and interactions',
    exportItem4: 'Detailed integration instructions',
    exportItem5: 'Note: Assets must be copied manually from /assets folder',
    exportButtonGenerating: 'Generating Files...',
    exportButtonDownload: 'Download Export Files',
    exportNote: 'Four files will be downloaded separately. Follow the integration-readme.txt for setup instructions.',
    exportAlertSuccess: 'Export complete! 4 files have been downloaded:\n\n1. brain-website-index.html\n2. brain-website-style.css\n3. brain-website-script.js\n4. integration-readme.txt\n\nPlease also manually copy all assets from the /assets folder.',
    exportAlertError: 'Error generating export package. Please try again.',
    exportHtmlLang: 'en',
    exportHtmlMetaDescription: 'BrAIn School Education Project - Empowering students, educators, and families with AI literacy',
    exportReadmeTitle: 'BrAIn PROJECT - DIVI INTEGRATION GUIDE',
    exportReadmeIntro: 'This package contains a complete HTML export of the BrAIn School Project website, ready for integration into Divi (WordPress).',
    exportReadmeContents: 'PACKAGE CONTENTS',
    exportReadmeSteps: 'INTEGRATION STEPS',
  },
  da: {
    // Document metadata
    documentTitle: 'BrAIn Skoleprojekt',
    
    // Header
    headerLogoAlt: 'BrAIn Projekt Logo',
    headerToggleMenu: 'Åbn menu',
    navAbout: 'Om BrAIn',
    navObjectives: 'Mål',
    navResults: 'Resultater & Output',
    navPartners: 'Partnere',
    navSocial: 'Sociale Medier',
    navNews: 'NYHEDER',
    
    // Hero
    heroErasmusBadge: 'Erasmus+ Projekt',
    heroProjectNumber: 'Skoleuddannelsesprojekt Nr: 2025-1-ES01-KA220-SCH-000358138',
    heroTagline: 'Styrker elever, undervisere og familier med viden og færdigheder til ansvarligt at navigere i den AI-drevne fremtid.',
    
    // About Section
    aboutLogoAlt: 'BrAIn Projekt Logo – Hjerne Først AI Anden',
    aboutTitle: 'Om BrAIn',
    aboutParagraph1: 'BrAIn har til formål at udstyre elever med den viden og de færdigheder, der er nødvendige for at forstå og engagere sig med kunstig intelligens (AI) på en ansvarlig og etisk måde. Efterhånden som AI i stigende grad integreres i forskellige aspekter af dagligdagen, er det afgørende, at unge mennesker udvikler en kritisk forståelse af, hvordan disse teknologier fungerer, deres potentielle fordele og de etiske overvejelser, de rejser.',
    aboutParagraph2: 'Projektet fokuserer på at fremme AI-læsefærdigheder blandt elever i alderen 12-16 år og hjælpe dem med at navigere i kompleksiteten af AI-drevne systemer. Gennem interaktive læringsoplevelser vil eleverne udforske emner som maskinlæring, databeskyttelse, algoritmisk bias og AI\'s samfundsmæssige indvirkning. Pensum er designet til at være tilgængeligt og engagerende og opfordrer eleverne til at tænke kritisk over AI\'s rolle i deres liv og de bredere konsekvenser for samfundet.',
    aboutParagraph3: 'Ved at fremme ansvarlig AI-læsefærdighed søger BrAIn at styrke den næste generation til at blive informerede digitale borgere, der kan træffe gennemtænkte beslutninger om teknologibrug. Projektet har også til formål at støtte undervisere ved at give dem de ressourcer og den træning, der er nødvendig for effektivt at undervise i AI-koncepter i klasseværelset. Derudover anerkender BrAIn vigtigheden af at involvere forældre og familier i læringsprocessen og tilbyder vejledning om, hvordan man diskuterer AI-relaterede emner derhjemme.',
    aboutParagraph4: 'Gennem samarbejde mellem skoler, undervisere, elever og familier stræber BrAIn efter at skabe en omfattende tilgang til AI-uddannelse, der forbereder unge mennesker på udfordringerne og mulighederne i en AI-drevet fremtid.',
    aboutBannerAlt: 'Uddannelse, Samarbejde og AI-Læsefærdighed',
    
    // Objectives Section
    objectivesTitle: 'Projektmål',
    objectivesDescription: 'Vores omfattende tilgang til at opbygge ansvarlig AI-læsefærdighed gennem uddannelse, samarbejde og praktisk anvendelse',
    objective1Title: 'Udvikle AI-Læsefærdighed',
    objective1Description: 'Udstyre elever med grundlæggende viden om AI-koncepter, herunder maskinlæring, neurale netværk og databehandling.',
    objective2Title: 'Fremme Etisk Forståelse',
    objective2Description: 'Fremme kritisk tænkning om etiske overvejelser i AI, herunder privatliv, bias, retfærdighed og gennemsigtighed.',
    objective3Title: 'Opmuntre til Samarbejde',
    objective3Description: 'Skabe muligheder for, at elever kan arbejde sammen om AI-relaterede projekter, fremme teamwork og peer learning.',
    objective4Title: 'Opbygge Praktiske Færdigheder',
    objective4Description: 'Give praktiske erfaringer med AI-værktøjer og -teknologier, der gør det muligt for eleverne at anvende teoretisk viden i virkelige sammenhænge.',
    objective5Title: 'Støtte Undervisere',
    objective5Description: 'Tilbyde omfattende træning og ressourcer til lærere for effektivt at integrere AI-uddannelse i deres pensum.',
    objective6Title: 'Styrke Digitale Borgere',
    objective6Description: 'Forberede elever til at blive informerede, ansvarlige digitale borgere, der er i stand til at træffe gennemtænkte beslutninger om AI-teknologi.',
    
    // Results & Outputs Section
    resultsTitle: 'RESULTATER & OUTPUT',
    resultsDescription: 'Nøgleleverancer og resultater fra BrAIn-projektet designet til at støtte AI-uddannelse i hele Europa',
    result1Title: 'SkillQuest Framework',
    result1Description: 'En omfattende uddannelsesramme designet til at guide elever gennem AI-læsefærdighedsudvikling med strukturerede læringsveje og kompetencebaseret progression.',
    result2Title: 'Lærerhåndbog',
    result2Description: 'En essentiel ressource, der giver undervisere praktiske strategier, lektionsplaner og pædagogiske tilgange til effektivt at undervise i AI-koncepter og etik i klasseværelset.',
    result3Title: 'Active BrAIn Platform',
    result3Description: 'En interaktiv digital platform, der tilbyder praktiske AI-læringsoplevelser, samarbejdsværktøjer og ressourcer til elever, lærere og familier til at udforske AI sammen.',
    resultIconAlt: '{title} ikon',
    
    // Target Groups Section
    targetGroupsTitle: 'Målgrupper',
    targetGroupsDescription: 'BrAIn betjener et mangfoldigt fællesskab af elever, undervisere og familier',
    targetGroup1Title: 'Elever (Alder 6-12)',
    targetGroup1Description: 'Unge elever, der udvikler kritiske AI-læsefærdigheder og forstår de etiske implikationer af kunstig intelligens i deres daglige liv.',
    targetGroup2Title: 'Undervisere',
    targetGroup2Description: 'Lærere og uddannelsesprofessionelle, der modtager træning, ressourcer og støtte til effektivt at integrere AI-uddannelse i deres pensum.',
    targetGroup3Title: 'Forældre & Familier',
    targetGroup3Description: 'Familiemedlemmer, der får indsigt og vejledning om, hvordan man diskuterer AI-relaterede emner derhjemme og støtter deres børns digitale læsefærdighedsrejse.',
    
    // Partners Section
    partnersTitle: 'Partnere',
    partnersDescription: 'Samarbejdende institutioner, der arbejder sammen om at fremme AI-læsefærdighed i uddannelse',
    partnerVisitWebsite: 'Besøg Hjemmeside',
    partnerLogoAlt: '{name} logo',
    
    // Social Media Section
    socialTitle: 'Forbind Med Os',
    socialDescription: 'Hold dig opdateret med de seneste nyheder, ressourcer og udviklinger fra BrAIn-projektet',
    socialEpaleName: 'EPALE',
    socialEpaleDescription: 'Europæisk Platform for Voksenlæring',
    socialFacebookName: 'Facebook',
    socialFacebookDescription: 'Følg os på Facebook',
    socialInstagramName: 'Instagram',
    socialInstagramDescription: '@brain_erasmus',
    socialLinkedinName: 'LinkedIn',
    socialLinkedinDescription: 'Forbind med os professionelt',
    socialVisit: 'Besøg',
    socialNewsletters: 'Nyhedsbreve',
    socialBrochure: 'Projektbrochure',
    
    // Footer
    footerEuLogoAlt: 'Medfinansieret af Den Europæiske Union',
    footerDisclaimer: 'Medfinansieret af Den Europæiske Union. Synspunkter og meninger, der udtrykkes, er dog kun forfatterens og afspejler ikke nødvendigvis Den Europæiske Unions eller Det Europæiske Uddannelses- og Kulturagenturs (EACEA) synspunkter. Hverken Den Europæiske Union eller EACEA kan holdes ansvarlige for dem.',
    footerCopyright: '© 2026. Alle Rettigheder Forbeholdes. BrAIn Projekt',
    
    // Export Package Generator
    exportTitle: 'Eksporter til Divi (WordPress)',
    exportDescription: 'Download en komplet HTML-eksportpakke klar til Divi-integration',
    exportPackageIncludes: 'Pakken inkluderer:',
    exportItem1: 'Komplet HTML-fil med alle sektioner',
    exportItem2: 'Kompileret CSS-stylesheet',
    exportItem3: 'JavaScript til animationer og interaktioner',
    exportItem4: 'Detaljerede integrationsinstruktioner',
    exportItem5: 'Bemærk: Assets skal kopieres manuelt fra /assets-mappen',
    exportButtonGenerating: 'Genererer Filer...',
    exportButtonDownload: 'Download Eksportfiler',
    exportNote: 'Fire filer vil blive downloadet separat. Følg integration-readme.txt for opsætningsinstruktioner.',
    exportAlertSuccess: 'Eksport fuldført! 4 filer er blevet downloadet:\n\n1. brain-website-index.html\n2. brain-website-style.css\n3. brain-website-script.js\n4. integration-readme.txt\n\nKopier også manuelt alle assets fra /assets-mappen.',
    exportAlertError: 'Fejl ved generering af eksportpakke. Prøv venligst igen.',
    exportHtmlLang: 'da',
    exportHtmlMetaDescription: 'BrAIn Skoleuddannelsesprojekt - Styrker elever, undervisere og familier med AI-læsefærdighed',
    exportReadmeTitle: 'BrAIn PROJEKT - DIVI INTEGRATIONSVEJLEDNING',
    exportReadmeIntro: 'Denne pakke indeholder en komplet HTML-eksport af BrAIn Skoleprojekt-webstedet, klar til integration i Divi (WordPress).',
    exportReadmeContents: 'PAKKEINDHOLD',
    exportReadmeSteps: 'INTEGRATIONSTRIN',
  },
};

// Helper function to get translation with placeholder replacement
export function t(key: keyof Translations, lang: Language, replacements?: Record<string, string>): string {
  let text = translations[lang][key];
  
  if (replacements) {
    Object.entries(replacements).forEach(([placeholder, value]) => {
      text = text.replace(`{${placeholder}}`, value);
    });
  }
  
  return text;
}
