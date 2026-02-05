import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useI18n } from '../i18n/useI18n';

interface Partner {
  name: string;
  country: string;
  descriptionEn: string;
  descriptionDa: string;
  website: string;
  logoPath: string;
}

const partners: Partner[] = [
  {
    name: "Carlos V School",
    country: "Spain",
    descriptionEn: "Carlos V School is a non-denominational educational centre in southern Spain, providing early childhood, primary, and secondary education. As a Google for Education school with a strong bilingual programme, it is recognised for its innovative use of digital tools, inclusive practices, and active participation in Erasmus+ projects focused on international cooperation and educational excellence.",
    descriptionDa: "Carlos V School er et ikke-konfessionelt uddannelsescenter i det sydlige Spanien, der tilbyder undervisning i førskole-, grundskole- og sekundærtrinnet. Som en Google for Education-skole med et stærkt tosproget program er skolen anerkendt for sin innovative brug af digitale værktøjer, inkluderende praksisser og aktive deltagelse i Erasmus+-projekter med fokus på internationalt samarbejde og uddannelsesmæssig excellence.",
    website: "https://colegiocarlosv.es/",
    logoPath: "/assets/LOGO CARLOS V SCHOOL, SPAIN.png"
  },
  {
    name: "Hristo Smirnenski Primary School",
    country: "Bulgaria",
    descriptionEn: "Hristo Smirnenski Primary School is a public, innovative school in Rakovski, Bulgaria, educating students aged 5–14. Recognised as a Microsoft Innovative School and EcoSchool, it has a strong focus on STEM education, digital transformation, sustainability, and international cooperation through Erasmus+ and eTwinning initiatives.",
    descriptionDa: "Hristo Smirnenski Primary School er en offentlig, innovativ skole i Rakovski, Bulgarien, der underviser elever i alderen 5–14 år. Skolen er anerkendt som Microsoft Innovative School og EcoSchool og har et stærkt fokus på STEM-undervisning, digital transformation, bæredygtighed og internationalt samarbejde gennem Erasmus+ og eTwinning-aktiviteter.",
    website: "https://www.smirnenski.com",
    logoPath: "/assets/Hristo Smirnenski logo.png"
  },
  {
    name: "Grupo DSG Consultores, Formación e Innovación, S.L.",
    country: "Spain",
    descriptionEn: "Founded in 2005, Grupo DSG Consultores is a Spanish organisation specialising in education, training, and innovation. It supports skills development, lifelong learning, and professional training through tailored programmes, educational research, and European cooperation projects.",
    descriptionDa: "Grupo DSG Consultores blev grundlagt i 2005 og er en spansk organisation specialiseret i uddannelse, træning og innovation. Organisationen understøtter kompetenceudvikling, livslang læring og faglig efteruddannelse gennem skræddersyede programmer, uddannelsesforskning og europæiske samarbejdsprojekter.",
    website: "https://dsgconsultores.com/",
    logoPath: "/assets/DSG Consultores.png"
  },
  {
    name: "Mersin Governorship",
    country: "Türkiye",
    descriptionEn: "Public institution providing digital transformation, modernization, and innovation support for all schools in the Mersin province.",
    descriptionDa: "Offentlig institution, der leverer støtte til digital transformation, modernisering og innovation til alle skoler i Mersin-provinsen.",
    website: "https://mersin.meb.gov.tr",
    logoPath: "/assets/T.C.Mersin Valiliği Logo (1).png"
  },
  {
    name: "UCL University College",
    country: "Denmark",
    descriptionEn: "UCL University College is a regional higher education institution in Denmark with multiple campuses across Southern Denmark. It specialises in teacher education, applied research, and professional development, supporting innovation, digital pedagogy, and international cooperation in education.",
    descriptionDa: "UCL University College er en regional professionshøjskole i Danmark med flere campusser i Syddanmark. Institutionen specialiserer sig i læreruddannelse, anvendt forskning og kompetenceudvikling og understøtter innovation, digital pædagogik og internationalt samarbejde inden for uddannelse.",
    website: "http://ucl.dk/international",
    logoPath: "/assets/UCL logo.png"
  },
  {
    name: "BrainLog",
    country: "Denmark",
    descriptionEn: "BrainLog is a non-profit organisation based in Denmark, specialising in non-formal education, digital learning platforms, and project development. It supports public institutions, NGOs, and companies through training, consultancy, and EU-funded initiatives focused on lifelong learning, digital literacy, and soft skills development.",
    descriptionDa: "BrainLog er en nonprofitorganisation baseret i Danmark, specialiseret i ikke-formel uddannelse, digitale læringsplatforme og projektudvikling. Organisationen støtter offentlige institutioner, NGO'er og virksomheder gennem træning, rådgivning og EU-finansierede initiativer med fokus på livslang læring, digital kompetence og udvikling af bløde kompetencer.",
    website: "https://brainlog-ngo.com/",
    logoPath: "/assets/mainLogo_whiteBackground@300x.png"
  },
  {
    name: "Know and Can Association",
    country: "Bulgaria",
    descriptionEn: "Know & Can Association is an NGO working mainly in the field of non-formal education, development and implementation of KA1 trainings and on European projects and programmes in the fields of education and training, rights, justice, citizenship and mobility. Know and Can works with partners in and outside EU.",
    descriptionDa: "Know & Can Association er en NGO, der primært arbejder inden for ikke-formel uddannelse, udvikling og implementering af KA1-træningsforløb samt europæiske projekter og programmer inden for uddannelse og træning, rettigheder, retfærdighed, medborgerskab og mobilitet. Know and Can samarbejder med partnere både inden for og uden for EU.",
    website: "https://knowandcan.com/en/",
    logoPath: "/assets/302477130_601989151510717_1254956823492220585_n.jpg"
  },
  {
    name: "Atatürk Ortaokulu",
    country: "Türkiye",
    descriptionEn: "İzmit Atatürk Ortaokulu is a public secondary school located in the city centre of İzmit, Türkiye, and affiliated with the Ministry of National Education. The school is recognised for its strong focus on educational quality, innovative teaching practices, and the development of 21st-century skills through well-equipped workshops in STEM, ICT, arts, coding, and creative learning.",
    descriptionDa: "İzmit Atatürk Ortaokulu er en offentlig folkeskole beliggende i centrum af İzmit, Türkiye, og tilknyttet Ministeriet for National Uddannelse. Skolen er kendt for sit stærke fokus på uddannelseskvalitet, innovative undervisningsmetoder og udviklingen af 21. århundredes kompetencer gennem veludstyrede værksteder inden for STEM, IT, kunst, kodning og kreativ læring.",
    website: "https://izmitataturkoo.meb.k12.tr/",
    logoPath: "/assets/Atatürk Ortaokulu_Logo.jpg"
  }
];

export function PartnersSection() {
  const { t, language } = useI18n();
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="partners" className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`scroll-animate will-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('partnersTitle')}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              {t('partnersDescription')}
            </p>
          </div>
          
          <div 
            ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {partners.map((partner, index) => (
              <Card 
                key={index}
                className={`group hover-lift border-2 hover:border-primary/50 flex flex-col will-animate scroll-animate stagger-${Math.min(index + 1, 8)} ${cardsAnimation.isVisible ? 'visible' : ''}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 h-24 flex items-center justify-center">
                    <img 
                      src={partner.logoPath}
                      alt={t('partnerLogoAlt').replace('{name}', partner.name)}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110 will-animate"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-xl mb-1">{partner.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{partner.country}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-1">
                    {language === 'da' ? partner.descriptionDa : partner.descriptionEn}
                  </p>
                  {partner.website !== "#" && (
                    <a 
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium group/link"
                    >
                      {t('partnerVisitWebsite')}
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 will-animate" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
