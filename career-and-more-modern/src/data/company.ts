import { CompanyInfo, ContactInfo, NavigationItem, Service, TeamMember, Testimonial } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'career & more',
  description: 'Ihr Partner für Direct Search, Personal- und Unternehmensberatung',
  founded: '2016',
  legal: {
    companyName: 'career & more GmbH',
    address: 'Lettenweg 7, 91781 Weißenburg',
    phone: '09141/877990',
    email: 'info@careerandmore.de',
    manager: 'Oliver Pickl',
    register: 'Ansbach HRB 6863',
    taxId: 'DE320925321'
  }
};

export const contactInfo: ContactInfo = {
  address: 'Lettenweg 7, 91781 Weißenburg',
  phone: '09141/877990',
  email: 'info@careerandmore.de',
  website: 'https://careerandmore.de',
  businessHours: 'Mo-Fr: 8:00-18:00 Uhr',
  linkedin: 'https://www.linkedin.com/company/career-more-gmbh/posts/?feedView=all',
  xing: 'https://www.xing.com/pages/career-more-gmbh'
};

export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Über uns',
    href: '/about'
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Recruiting & Talent Management', href: '/services/recruiting' },
      { label: 'Personalentwicklung', href: '/services/entwicklung' },
      { label: 'Organisationsberatung', href: '/services/organisation' }
    ]
  },
  {
    label: 'Consulting',
    href: '/consulting',
    children: [
      { label: 'Unternehmens-Nachfolge', href: '/consulting/unternehmens-nachfolge' },
      { label: 'Strategisches Personal-Management', href: '/consulting/strategisches-personalmanagement' },
      { label: 'Management-Beratung', href: '/consulting/management-beratung' }
    ]
  },
  {
    label: 'Karriere',
    href: '/career',
    children: [
      { label: 'Aktuelle Stellenangebote', href: '/career/jobs' },
      { label: 'Direktbewerbung', href: '/career/application' },
      { label: 'Employee Branding', href: '/career/employee-branding' }
    ]
  },
  {
    label: 'Team',
    href: '/team'
  },
  {
    label: 'Kontakt',
    href: '/contact'
  }
];

export const services: Service[] = [
  {
    id: 'direct-search',
    title: 'Direct Search',
    description: 'Erfolgreiches Recruiting von High Potentials - individuell abgestimmt auf Ihre spezifischen Bedürfnisse',
    icon: 'Search',
    category: 'recruiting',
    features: [
      'Unabhängiges Recruiting von Führungskräften',
      'Individuelle Anpassung an Ihre Unternehmenskultur',
      'Umfassendes Netzwerk in der Industrie',
      'Diskrete und professionelle Abwicklung'
    ]
  },
  {
    id: 'employer-branding',
    title: 'Employer Branding',
    description: 'Entwicklung und Stärkung Ihrer Arbeitgebermarke für erfolgreiche Talentgewinnung',
    icon: 'Users',
    category: 'recruiting',
    features: [
      'Strategische Positionierung als attraktiver Arbeitgeber',
      'Entwicklung von Employer Value Propositions',
      'Marketing-Kampagnen für Talentgewinnung',
      'Messung und Optimierung der Arbeitgeberattraktivität'
    ]
  },
  {
    id: 'outplacement',
    title: 'Outplacement',
    description: 'Karriereberatung und Unterstützung bei Stellenwechsel und Neuorientierung',
    icon: 'ArrowRight',
    category: 'recruiting',
    features: [
      'Individuelle Karriereberatung',
      'Bewerbungscoaching und -training',
      'Netzwerkaufbau und Kontaktvermittlung',
      'Psychologische Unterstützung'
    ]
  },
  {
    id: 'personal-entwicklung',
    title: 'Personal-Entwicklung',
    description: 'Maßgeschneiderte Programme zur Entwicklung Ihrer Mitarbeiter und Führungskräfte',
    icon: 'TrendingUp',
    category: 'entwicklung',
    features: [
      'Individuelle Entwicklungspläne',
      'Führungskräfte-Coaching',
      'Team-Entwicklung und Teambuilding',
      'Kompetenz-Assessment und Förderung'
    ]
  },
  {
    id: 'management-audit',
    title: 'Management Audit',
    description: 'Umfassende Bewertung und Optimierung Ihrer Führungsstrukturen',
    icon: 'BarChart3',
    category: 'entwicklung',
    features: [
      'Analyse der aktuellen Führungsstrukturen',
      'Potenzialbewertung von Führungskräften',
      'Entwicklungsempfehlungen',
      'Begleitung bei der Umsetzung'
    ]
  },
  {
    id: 'mediation',
    title: 'Mediation',
    description: 'Professionelle Konfliktlösung für nachhaltige Arbeitsbeziehungen',
    icon: 'Users',
    category: 'entwicklung',
    features: [
      'Neutrale Konfliktvermittlung',
      'Wiederherstellung der Arbeitsbeziehungen',
      'Präventive Konfliktberatung',
      'Nachhaltige Lösungsansätze'
    ]
  },
  {
    id: 'organisations-entwicklung',
    title: 'Organisations-Entwicklung',
    description: 'Strategische Weiterentwicklung Ihrer Unternehmensstruktur und -kultur',
    icon: 'Building2',
    category: 'organisation',
    features: [
      'Analyse der aktuellen Organisationsstruktur',
      'Entwicklung neuer Arbeitsmodelle',
      'Change Management',
      'Kulturtransformation'
    ]
  }
];

export const serviceCategories = [
  {
    id: 'recruiting',
    title: 'Recruiting & Talent Management',
    description: 'Von der Suche nach Top-Talenten bis zur erfolgreichen Talentgewinnung und -betreuung',
    icon: 'Users',
    services: services.filter(s => s.category === 'recruiting')
  },
  {
    id: 'entwicklung',
    title: 'Personalentwicklung',
    description: 'Maßgeschneiderte Programme zur Entwicklung Ihrer Mitarbeiter, Führungskräfte und Teams',
    icon: 'TrendingUp',
    services: services.filter(s => s.category === 'entwicklung')
  },
  {
    id: 'organisation',
    title: 'Organisationsberatung',
    description: 'Strategische Weiterentwicklung Ihrer Unternehmensstruktur und Organisationskultur',
    icon: 'Building2',
    services: services.filter(s => s.category === 'organisation')
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'oliver-pickl',
    name: 'Oliver Pickl',
    position: 'Managing Director',
    description: 'Oliver Pickl leitet das Unternehmen mit über 15 Jahren Erfahrung in der Personalberatung und einem tiefen Verständnis für die Bedürfnisse mittelständischer und großer Industrieunternehmen.',
    image: '/images/team/oliver-pickl.jpg',
    email: 'oliver.pickl@careerandmore.de'
  },
  {
    id: 'claudia-hartmann',
    name: 'Claudia Hartmann',
    position: 'Senior Recruiting Expert',
    description: 'Claudia Hartmann ist Expertin für das Recruiting von High Potentials und verfügt über ein umfangreiches Netzwerk in der Industrie. Sie spezialisiert sich auf die Vermittlung von Führungskräften.',
    image: '/images/team/claudia-hartmann.jpg',
    email: 'claudia.hartmann@careerandmore.de'
  },
  {
    id: 'karl-heinz-mohr',
    name: 'Karl-Heinz Mohr',
    position: 'Recruiting Expert',
    description: 'Karl-Heinz Mohr bringt langjährige Erfahrung in der Personalberatung mit und ist spezialisiert auf die Vermittlung von Fach- und Führungskräften in der Industrie.',
    image: '/images/team/karl-heinz-mohr.jpg',
    email: 'karl-heinz.mohr@careerandmore.de'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    text: 'career & more hat uns bei der Suche nach einem neuen Geschäftsführer hervorragend unterstützt. Die Professionalität und das Verständnis für unsere Branche waren beeindruckend.',
    author: 'Max Mustermann',
    position: 'Geschäftsführer',
    company: 'Muster Industrie GmbH'
  },
  {
    id: 'testimonial-2',
    text: 'Durch das Employer Branding von career & more konnten wir unsere Attraktivität als Arbeitgeber deutlich steigern und haben seitdem deutlich mehr qualifizierte Bewerbungen erhalten.',
    author: 'Anna Schmidt',
    position: 'Personalmanagerin',
    company: 'Tech Solutions AG'
  },
  {
    id: 'testimonial-3',
    text: 'Das Outplacement-Programm hat mir geholfen, mich erfolgreich neu zu orientieren. Die Beratung war sehr professionell und hat mir neue Perspektiven eröffnet.',
    author: 'Thomas Weber',
    position: 'Ehemaliger Abteilungsleiter',
    company: 'Industrie Holding'
  }
];

export const partnerships = [
  {
    id: 'jeta-tier-und-mensch',
    name: 'JETA Tier und Mensch',
    description: 'JETA Ketschauer Hof und mehr',
    logo: '/images/partners/jeta-logo.png',
    website: 'https://jeta-tier-und-mensch.de',
    descriptionText: 'Wir unterstützen JETA Tier und Mensch bei ihrer Mission, die Verbindung zwischen Mensch, Tier und Natur zu stärken.'
  }
];


