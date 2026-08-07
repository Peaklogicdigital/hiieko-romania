export const languages = { en: 'English', ro: 'Română' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

// No specific Google Maps place URL was provided for the registered address —
// this is a generated search-query link (Google's documented maps/search
// pattern), not a fabricated place ID. Swap for an exact Maps URL if one
// exists.
export const PRIVACY_ADDRESS_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Bulevardul+Theodor+Pallady+51N%2C+032258+Bucharest%2C+Romania';

const en = {
  nav: {
    solutions: 'Solutions',
    calculator: 'Calculator',
    projects: 'Projects',
    about: 'About',
    team: 'Team',
    contact: 'Contact',
    cta: 'Get a site assessment',
    toggleMenu: 'Toggle menu',
  },
  hero: {
    eyebrow: 'Hiieko Romania · Industrial Solar & Storage',
    h1: "We don't sell panels. We deliver a system and stand behind it.",
    lede: 'Design, installation, and long-term maintenance of rooftop and ground-mount solar plus battery storage for Romanian industrial and commercial sites: one contractor, one guarantee, backed by Estonian engineering since 1994.',
    ctaPrimary: 'Get a site assessment →',
    ctaSecondary: 'Estimate your system ↓',
  },
  trust: {
    founded: { value: '1994', label: 'Group Founded, Estonia' },
    capacity: { label: 'MWp Installed' },
    happyClients: { label: 'Happy Clients in Romania' },
    specialists: { label: 'Specialists in Romania' },
    iso: { value: 'ISO', label: '9001 · 14001 Certified' },
  },
  diff: {
    eyebrow: 'How we work',
    h2: "We're the contractor who stays after commissioning.",
    lede: 'Most solar installers in Romania sell equipment and move on. Hiieko Romania designs, builds, and maintains every system under one contract, with a workmanship guarantee and a maintenance plan that starts the day the system goes live.',
    steps: [
      {
        n: '01 / DESIGN',
        title: 'Site assessment & sizing',
        body: 'We size the system to your real consumption and structure, not a generic package.',
      },
      {
        n: '02 / INSTALL',
        title: 'Installation & commissioning',
        body: 'Our own crews, not subcontracted labor, installed to ANRE grid-connection requirements.',
      },
      {
        n: '03 / GUARANTEE',
        title: 'Workmanship guarantee',
        body: 'A minimum 60-month workmanship guarantee on every installation we complete.',
      },
      {
        n: '04 / MAINTAIN',
        title: 'Ongoing maintenance',
        body: 'Scheduled service and monitoring for the same 60-month period after handover. The system stays our responsibility.',
      },
    ],
    callout:
      "We don't resell panels and batteries: we deliver the full engineering-to-maintenance lifecycle, under one contract, with one team accountable for the result.",
    comparison: {
      heading: 'Why Hiieko Romania',
      columnTypical: 'Typical Installer',
      columnHiieko: 'Hiieko Romania',
      rows: [
        {
          typical: 'Sells equipment and leaves the site',
          hiieko: 'Design, installation, and maintenance in one contract',
        },
        {
          typical: 'Work done via subcontracting',
          hiieko: 'Own installation crews, no subcontracting',
        },
        {
          typical: 'Limited or no execution warranty',
          hiieko: 'Minimum 60-month execution warranty',
        },
        {
          typical: 'No maintenance plan after handover',
          hiieko: 'Active maintenance plan from day one',
        },
        {
          typical: 'Responsibility fragmented across suppliers',
          hiieko: 'Single point of responsibility: Hiieko',
        },
      ],
    },
  },
  solutionsHome: {
    eyebrow: 'What we build',
    h2: 'Three systems. One team.',
    lede: 'For industrial platforms, logistics halls, production facilities, and unused land.',
  },
  performance: {
    eyebrow: 'Performance & yield',
    h2: 'Built to still be earning its keep in year 30.',
    lede: 'Real coefficients from the equipment we install and maintain, not marketing averages.',
    stats: [
      { value: '~1,200', label: 'kWh/kWp/yr average yield' },
      { value: '98.6%', label: 'Peak inverter efficiency' },
      { value: '6,000+', label: 'Battery charge cycles' },
      { value: '30-year', label: 'Panel performance warranty' },
    ],
    chartCaption: 'Even after 30 years, a well-chosen system still produces nearly 89% of its original output.',
    chartYAxisLabel: 'Output vs. Year 0',
  },
  techPartners: {
    eyebrow: 'Technology partners',
    h2: 'Equipment we trust enough to warranty.',
    lede: 'Every system is built from tier-one components, selected for the specific project, not a single default package.',
    groups: [
      {
        heading: 'Panel manufacturers',
        items: [
          { name: 'Unicasolar', detail: 'Monocrystalline' },
          { name: 'Astroenergy', detail: 'N-Type TOPCon' },
          { name: 'Aiko', detail: 'N-Type ABC technology, 24%+ efficiency' },
        ],
      },
      {
        heading: 'Inverters',
        items: [
          { name: 'Huawei', detail: 'Industrial, 98.6% efficiency' },
          { name: 'Solis', detail: 'Commercial' },
        ],
      },
      {
        heading: 'Storage',
        items: [
          { name: 'Dyness', detail: '' },
          { name: 'Huawei LUNA2000', detail: 'LFP chemistry' },
        ],
      },
      {
        heading: 'Infrastructure',
        items: [
          { name: 'ZPUE', detail: 'Prefabricated transformer substations' },
          { name: 'Tesla Power Systems', detail: 'Romanian-manufactured MT/LV equipment, factory in Buzău' },
        ],
      },
    ],
  },
  solutionsPage: {
    eyebrow: 'What we build',
    h1: 'Three systems. One team.',
    lede: 'For industrial platforms, logistics halls, production facilities, and unused land. Each system is designed, installed, and maintained under one contract.',
  },
  solutionDetail: {
    eyebrowPrefix: 'Solution',
    backLink: '← Back to all solutions',
  },
  projectsHome: {
    eyebrow: 'Projects',
    h2: "What we've built.",
    ledePrefix: 'A sample of completed work.',
    seeAllLink: 'See all projects →',
  },
  projectsPage: {
    eyebrow: 'Projects',
    h1: "What we've built.",
    lede: 'A sample of completed work. Entries marked PLACEHOLDER are examples pending real project data.',
  },
  projectsFilters: {
    all: 'All',
    rooftop: 'Rooftop',
    groundMount: 'Ground-mount',
    bess: 'BESS',
    subcategoryAll: 'All',
    industrial: 'Industrial',
    retail: 'Retail',
    warehouse: 'Warehouse',
    agriculture: 'Agriculture',
    institutional: 'Institutional',
    residential: 'Residential',
    commercial: 'Commercial',
  },
  about: {
    eyebrow: 'Why Hiieko',
    heading: 'Estonian engineering, delivered locally.',
    para1:
      'Hiieko Romania SRL is part of the Estonian Hiieko group, which has designed, installed, and maintained construction technical systems since 1994. In Romania, that same engineering discipline was applied to a purpose-built subsidiary, established in 2020 specifically to develop industrial solar parks and storage facilities.',
    para2:
      "We're not a panel installer that appeared last year. We're part of a group with three decades of execution on complex sites and a Romanian team that stays accountable after handover.",
    para3Page:
      'Most solar installers in Romania sell equipment and move on. Hiieko Romania designs, builds, and maintains every system under one contract, with a workmanship guarantee and a maintenance plan that starts the day the system goes live. Meet the',
    readMoreLink: 'Read more about Hiieko →',
    readMoreTeamLink: 'team behind the work →',
    iso1: 'ISO 9001:2015',
    iso2: 'ISO 14001:2015',
    iso3: 'ISO 27001',
    iso4: 'ISO 45001',
    isoRegistration: 'Registration RO 1450/1/1/1–4, issued 18.08.2025, certified by ROCERT, RENAR-accredited.',
    anre: {
      heading: 'ANRE Authorizations',
      description:
        'Legally mandatory authorizations for any company that designs, executes, or connects electrical installations in Romania, issued directly by the national energy regulator.',
      items: [
        { code: 'E1', label: 'Design' },
        { code: 'E2', label: 'Execution' },
        { code: 'A3', label: 'Grid Connection' },
      ],
    },
    figs: {
      founded: { label: 'Group founded', value: '1994, Tallinn' },
      subsidiary: { label: 'Romania subsidiary established', value: '2020' },
      purpose: { label: 'Purpose', value: 'Solar parks + storage' },
      localTeam: { label: 'Local team', value: 'Over 40 specialists' },
      certification: { label: 'Certification', value: 'ISO 9001 / 14001 / 27001 / 45001' },
      address: { label: 'Address', value: 'Bd. Theodor Pallady 51N, Bucharest' },
    },
  },
  team: {
    eyebrow: 'Our team',
    h1: 'Over 40 specialists, one accountable team.',
    lede: 'Real engineers, real accountability. Every person on this page is someone you can actually call once your system is live, not a subcontractor, not a call center.',
  },
  contact: {
    eyebrow: 'Next step',
    heading: 'Request a site assessment.',
    lede: "Send a few details about the site and consumption. You'll get a sizing estimate back, not a sales pitch.",
    companyName: 'Hiieko Romania SRL',
    addressLine: 'Bd. Theodor Pallady 51N, Sector 3, Bucharest',
    email: 'office@hiieko.ro',
  },
  contactForm: {
    nameLabel: 'Name',
    companyLabel: 'Company',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    projectTypeLabel: 'Project type',
    projectTypeOptions: {
      rooftop: 'Rooftop solar',
      groundMount: 'Ground-mount solar park',
      bess: 'Battery storage (BESS)',
      notSure: 'Not sure yet',
    },
    messageLabel: 'Site details (area, approximate monthly consumption)',
    submitBtn: 'Send request →',
    statusNotConfigured: 'Contact endpoint not configured yet. Please email us directly.',
    statusSending: 'Sending…',
    statusSuccess: 'Request sent. We’ll get back to you shortly.',
    statusError: 'Something went wrong. Please email us directly.',
  },
  calculator: {
    eyebrow: 'Estimate your system',
    h2: 'See what your electricity bill could fund.',
    lede: 'Enter your monthly usage: this estimates system size, payback, and ROI. Not a quote; a real number needs a site assessment.',
    consumptionLabel: 'Current monthly consumption (kWh)',
    areaLabel: 'Available area (m²)',
    calculateBtn: 'Calculate →',
    statCapacity: 'System capacity (kWp)',
    statGen: 'Est. annual generation (MWh/yr)',
    statMinArea: 'Min. area to cover your usage (m²)',
    statPayback: 'Est. payback period (years)',
    statRoi: 'ROI (%)',
    disclaimer:
      'System sized to offset your annual consumption, assuming 1200 kWh/kWp/yr yield and 4.3 m²/kWp. Install cost is tiered by system size: €480/kWp under 20 kWp, €450/kWp from 20–50 kWp, €430/kWp from 50–100 kWp, €410/kWp from 100–250 kWp, €390/kWp above 250 kWp. Savings assume 90% self-consumption at €0.18/kWh, capped at your annual consumption. A rough estimate, not a quote. A real number needs a site assessment.',
    warningTemplate:
      'Your available space ({area} m²) covers only {pct}% of your usage. {minArea} m² would fully offset your consumption.',
    toastMessage: 'Talk with sales for a site assessment and real values.',
    toastCta: 'Contact sales →',
    toastDismissLabel: 'Dismiss',
  },
  footer: {
    companyHeading: 'Hiieko Romania',
    addressLine1: 'Bd. Theodor Pallady 51N',
    addressLine2: 'Sector 3, Bucharest',
    email: 'office@hiieko.ro',
    groupHeading: 'Group',
    groupLine1: 'AS Hiieko, Tallinn, Estonia',
    groupLine2: 'hiieko.ee',
    legalHeading: 'Legal',
    cifLine: 'CIF 42849908',
    privacyLine: 'Privacy Policy',
    cookiePreferencesLine: 'Cookie preferences',
    copyright: '© {year} Hiieko Romania SRL',
    tagline: 'Part of the AS Hiieko group, founded 1994',
  },
  common: {
    placeholderBadge: 'PLACEHOLDER',
    inProgressBadge: 'In Progress',
  },
  notFound: {
    badge: '404 · Signal lost',
    headline: "Signal lost: this page isn't in the system.",
    lede: "The page you're looking for doesn't exist, or the link's out of date.",
    ctaHome: 'Back to Home →',
    linkSolutions: 'Solutions',
    linkProjects: 'Projects',
    linkContact: 'Contact',
  },
  // Draft privacy policy — legal content pending sign-off by counsel before
  // launch. See also the top-of-file notes and inline HTML comment in
  // src/pages/privacy/index.astro (and its RO mirror).
  privacy: {
    eyebrow: 'Legal',
    h1: 'Privacy Policy',
    whoWeAreHeading: 'Who we are',
    whoWeArePrefix: 'Hiieko Romania SRL (CIF 42849908),',
    whoWeAreAddressText: 'Building C1, Bulevardul Theodor Pallady 51N, Block A, 3rd floor, 032258 București',
    whoWeAreSuffix: 'is part of the AS Hiieko group and is the data controller for this website.',
    sections: [
      {
        heading: 'What we collect',
        body: 'Through the contact form, we collect the name, company name, email address, phone number, project type, and site details you provide. We do not use tracking cookies at this time; if analytics or advertising cookies are added later, this policy and a cookie consent banner will be updated accordingly.',
      },
      {
        heading: 'Why we collect it',
        body: 'We use this information to respond to your inquiry and provide a quote or site assessment. Our legal basis is legitimate interest in responding to business inquiries, and/or steps taken at your request prior to entering into a contract (GDPR Art. 6(1)(b) and (f)).',
      },
      {
        heading: 'Who we share it with',
        body: 'Your submission is processed by Formspree, a third-party service that delivers it to our email. We do not sell your data to third parties.',
      },
      {
        heading: 'Retention',
        body: 'We retain contact form submissions for 6 months, after which they are deleted unless an ongoing business relationship requires longer retention.',
      },
    ],
    transfersHeading: 'International transfers',
    transfersBody: 'Some of the processors above may be based outside the EU/EEA.',
    rightsHeading: 'Your rights',
    rightsIntro:
      'Under GDPR, you have the right to access, correct, delete, or restrict the use of your data, to receive a copy of it (data portability), and to object to processing. To exercise these rights, contact us at',
    rightsEmail: 'alexander.zeciu@hiieko.ee',
    rightsMiddle:
      ". You may also lodge a complaint with ANSPDCP, Romania's National Supervisory Authority for Personal Data Processing, at",
    rightsLinkLabel: 'www.dataprotection.ro',
    changesHeading: 'Changes',
    changesBody: 'This policy may be updated periodically. Last updated: 1 August 2026.',
    // Cookie section is new content, drafted separately from the lawyer-approved
    // Privacy Policy text above — pending legal review before launch.
    cookies: {
      heading: 'Cookies',
      sections: [
        {
          heading: 'What are cookies',
          body: 'Cookies are small text files placed on your device when you visit a website, used to make the site function, remember preferences, or gather usage statistics.',
        },
        {
          heading: 'Cookies on this site today',
          body: 'This website uses Google Analytics (GA4), an analytics cookie, to understand how visitors use the site. This cookie is only set after you accept it via the consent banner; if you decline, no analytics cookie is set. We do not currently use advertising cookies.',
        },
        {
          heading: 'Types of cookies we use',
          body: 'Strictly necessary cookies (required for the site to function, no consent needed) and analytics cookies (Google Analytics, used to understand how visitors use the site), the only two categories currently in use. Advertising cookies are not currently used; if that changes in the future, this section will be updated and your consent requested first.',
        },
        {
          heading: 'How we handle consent',
          body: 'Before the Google Analytics cookie is set, you are shown a consent banner letting you accept or decline. You may change your choice at any time using the "Cookie preferences" link in the site footer.',
        },
        {
          heading: 'What data Google Analytics collects',
          body: 'Google Analytics collects anonymized usage data: pages visited, session duration, and general location and device type. It does not collect your name, email address, or other directly identifying information.',
        },
        {
          heading: 'Your rights regarding cookies',
          body: 'You may accept or decline the analytics cookie, and withdraw consent at any time using the "Cookie preferences" link in the site footer. Declining does not affect your ability to browse the site or use the contact form.',
        },
        {
          heading: 'How to control cookies',
          body: 'You can change your analytics cookie choice at any time using the "Cookie preferences" link in the site footer. You can also control or delete cookies through your browser\'s settings at any time.',
        },
        {
          heading: 'Updates to this section',
          body: 'This section will be reviewed and updated whenever new cookies are introduced to the site, and periodically thereafter.',
        },
      ],
    },
  },
  cookieConsent: {
    message:
      'We use Google Analytics to understand how visitors use this site. This only runs if you accept; declining won’t affect your ability to browse the site or use the contact form.',
    accept: 'Accept',
    decline: 'Decline',
    ariaLabel: 'Cookie consent',
  },
  industries: {
    eyebrow: 'Who we serve',
    headline: 'Energy prices keep climbing. These businesses stopped caring.',
    lede: "Over 200 MWp installed across Romania's highest-consumption industries: proof the energy crisis doesn't have to be permanent for yours.",
    ctaLabel: 'See projects →',
    items: [
      { name: 'Agriculture' },
      { name: 'Manufacturing' },
      { name: 'Retail' },
      { name: 'Hospitality', sublabel: 'Hotels, Restaurants & Catering' },
      { name: 'Institutions' },
      { name: 'Construction' },
    ],
  },
  meta: {
    home: {
      title: 'Hiieko Romania · Industrial Solar & Energy Storage',
      description:
        'Design, installation, and long-term maintenance of rooftop and ground-mount solar plus battery storage for Romanian industrial and commercial sites: one contractor, one guarantee, backed by Estonian engineering since 1994.',
    },
    solutions: {
      title: 'Solutions · Hiieko Romania',
      description:
        'Rooftop solar, ground-mount solar parks, and battery storage (BESS), designed, installed, and maintained by Hiieko Romania.',
    },
    projects: {
      title: 'Projects · Hiieko Romania',
      description:
        'Completed rooftop, ground-mount, and battery storage projects from Hiieko Romania.',
    },
    about: {
      title: 'About · Hiieko Romania',
      description:
        'Hiieko Romania SRL is part of the Estonian Hiieko group, designing, installing, and maintaining industrial solar and storage systems since 2020.',
    },
    team: {
      title: 'Team · Hiieko Romania',
      description: "The Romanian team behind Hiieko's industrial solar and storage installations.",
    },
    contact: {
      title: 'Contact · Hiieko Romania',
      description:
        'Request a site assessment from Hiieko Romania: rooftop solar, ground-mount solar parks, and battery storage.',
    },
    privacy: {
      title: 'Privacy Policy · Hiieko Romania',
      description:
        'How Hiieko Romania collects, uses, and protects personal data submitted through this site.',
    },
  },
};

export type Dictionary = typeof en;

// Draft AI-assisted translation — pending native-speaker review before launch.
const ro: Dictionary = {
  nav: {
    solutions: 'Soluții',
    calculator: 'Calculator',
    projects: 'Proiecte',
    about: 'Despre noi',
    team: 'Echipă',
    contact: 'Contact',
    cta: 'Solicită o evaluare',
    toggleMenu: 'Comută meniul',
  },
  hero: {
    eyebrow: 'Hiieko România · Solar Industrial & Stocare',
    h1: 'Nu vindem panouri. Livrăm un sistem și răspundem pentru el.',
    lede: 'Proiectare, instalare și mentenanță pe termen lung a sistemelor solare pe acoperiș și la sol, plus stocare cu baterii, pentru site-uri industriale și comerciale din România: un singur contractor, o singură garanție, susținută de inginerie estoniană din 1994.',
    ctaPrimary: 'Solicită o evaluare →',
    ctaSecondary: 'Estimează sistemul ↓',
  },
  trust: {
    founded: { value: '1994', label: 'Grup fondat, Estonia' },
    capacity: { label: 'MWp instalați' },
    happyClients: { label: 'Clienți mulțumiți în România' },
    specialists: { label: 'Specialiști în România' },
    iso: { value: 'ISO', label: '9001 · 14001 Certificat' },
  },
  diff: {
    eyebrow: 'Cum lucrăm',
    h2: 'Suntem contractorul care rămâne după punerea în funcțiune.',
    lede: 'Majoritatea instalatorilor de solar din România vând echipamente și pleacă mai departe. Hiieko România proiectează, construiește și întreține fiecare sistem printr-un singur contract, cu garanție de execuție și un plan de mentenanță care începe din ziua punerii în funcțiune.',
    steps: [
      {
        n: '01 / PROIECTARE',
        title: 'Evaluare și dimensionare site',
        body: 'Dimensionăm sistemul în funcție de consumul și structura reală, nu după un pachet generic.',
      },
      {
        n: '02 / INSTALARE',
        title: 'Instalare și punere în funcțiune',
        body: 'Echipe proprii, nu forță de muncă subcontractată, instalat conform cerințelor de racordare ANRE.',
      },
      {
        n: '03 / GARANȚIE',
        title: 'Garanție de execuție',
        body: 'O garanție de execuție de minimum 60 de luni la fiecare instalare pe care o finalizăm.',
      },
      {
        n: '04 / ÎNTREȚINERE',
        title: 'Mentenanță continuă',
        body: 'Service programat și monitorizare pentru aceeași perioadă de 60 de luni după predare. Sistemul rămâne responsabilitatea noastră.',
      },
    ],
    callout:
      'Nu revindem panouri și baterii: livrăm întregul ciclu, de la inginerie la mentenanță, printr-un singur contract, cu o singură echipă responsabilă de rezultat.',
    comparison: {
      heading: 'De ce Hiieko România',
      columnTypical: 'Instalator obișnuit',
      columnHiieko: 'Hiieko România',
      rows: [
        {
          typical: 'Vinde echipamente și părăsește șantierul',
          hiieko: 'Proiectare, instalare și mentenanță printr-un singur contract',
        },
        {
          typical: 'Lucrări realizate prin subcontractare',
          hiieko: 'Echipe proprii de instalare, fără subcontractare',
        },
        {
          typical: 'Garanție de execuție limitată sau inexistentă',
          hiieko: 'Garanție de execuție de minimum 60 de luni',
        },
        {
          typical: 'Fără plan de mentenanță după predare',
          hiieko: 'Plan de mentenanță activ din prima zi',
        },
        {
          typical: 'Responsabilitate fragmentată între furnizori',
          hiieko: 'Un singur punct de responsabilitate: Hiieko',
        },
      ],
    },
  },
  solutionsHome: {
    eyebrow: 'Ce construim',
    h2: 'Trei sisteme. O singură echipă.',
    lede: 'Pentru platforme industriale, hale logistice, unități de producție și terenuri neutilizate.',
  },
  performance: {
    eyebrow: 'Performanță și randament',
    h2: 'Construit ca să merite investiția și în anul 30.',
    lede: 'Coeficienți reali ai echipamentelor pe care le instalăm și le întreținem, nu medii de marketing.',
    stats: [
      { value: '~1.200', label: 'kWh/kWp/an randament mediu' },
      { value: '98,6%', label: 'Eficiență maximă invertor' },
      { value: '6.000+', label: 'Cicluri de încărcare baterie' },
      { value: '30 de ani', label: 'Garanție de performanță panouri' },
    ],
    chartCaption: 'Chiar și după 30 de ani, un sistem bine ales produce în continuare aproape 89% din producția inițială.',
    chartYAxisLabel: 'Producție față de anul 0',
  },
  techPartners: {
    eyebrow: 'Parteneri tehnologici',
    h2: 'Echipamente în care avem suficientă încredere încât să le garantăm.',
    lede: 'Fiecare sistem este construit din componente de top, alese pentru proiectul specific, nu dintr-un pachet unic implicit.',
    groups: [
      {
        heading: 'Producători de panouri',
        items: [
          { name: 'Unicasolar', detail: 'Monocristalin' },
          { name: 'Astroenergy', detail: 'N-Type TOPCon' },
          { name: 'Aiko', detail: 'Tehnologie N-Type ABC, eficiență 24%+' },
        ],
      },
      {
        heading: 'Invertoare',
        items: [
          { name: 'Huawei', detail: 'Industrial, eficiență 98,6%' },
          { name: 'Solis', detail: 'Comercial' },
        ],
      },
      {
        heading: 'Stocare',
        items: [
          { name: 'Dyness', detail: '' },
          { name: 'Huawei LUNA2000', detail: 'Chimie LFP' },
        ],
      },
      {
        heading: 'Infrastructură',
        items: [
          { name: 'ZPUE', detail: 'Posturi de transformare prefabricate' },
          { name: 'Tesla Power Systems', detail: 'Echipamente MT/JT fabricate în România, fabrică în Buzău' },
        ],
      },
    ],
  },
  solutionsPage: {
    eyebrow: 'Ce construim',
    h1: 'Trei sisteme. O singură echipă.',
    lede: 'Pentru platforme industriale, hale logistice, unități de producție și terenuri neutilizate. Fiecare sistem este proiectat, instalat și întreținut printr-un singur contract.',
  },
  solutionDetail: {
    eyebrowPrefix: 'Soluția',
    backLink: '← Înapoi la toate soluțiile',
  },
  projectsHome: {
    eyebrow: 'Proiecte',
    h2: 'Ce am construit.',
    ledePrefix: 'O selecție de proiecte finalizate.',
    seeAllLink: 'Vezi toate proiectele →',
  },
  projectsPage: {
    eyebrow: 'Proiecte',
    h1: 'Ce am construit.',
    lede: 'O selecție de proiecte finalizate. Intrările marcate PLACEHOLDER sunt exemple, în așteptarea datelor reale despre proiect.',
  },
  projectsFilters: {
    all: 'Toate',
    rooftop: 'Acoperiș',
    groundMount: 'La sol',
    bess: 'BESS',
    subcategoryAll: 'Toate',
    industrial: 'Industrial',
    retail: 'Retail',
    warehouse: 'Depozitare',
    agriculture: 'Agricultură',
    institutional: 'Instituțional',
    residential: 'Rezidențial',
    commercial: 'Comercial',
  },
  about: {
    eyebrow: 'De ce Hiieko',
    heading: 'Inginerie estoniană, livrată local.',
    para1:
      'Hiieko România SRL face parte din grupul estonian Hiieko, care proiectează, instalează și întreține sisteme tehnice pentru construcții din 1994. În România, aceeași disciplină de inginerie a fost aplicată unei filiale dedicate, înființată în 2020 special pentru dezvoltarea de parcuri solare industriale și facilități de stocare.',
    para2:
      'Nu suntem un instalator de panouri apărut anul trecut. Facem parte dintr-un grup cu trei decenii de execuție pe șantiere complexe și o echipă din România care rămâne responsabilă după predare.',
    para3Page:
      'Majoritatea instalatorilor de solar din România vând echipamente și pleacă mai departe. Hiieko România proiectează, construiește și întreține fiecare sistem printr-un singur contract, cu garanție de execuție și un plan de mentenanță care începe din ziua punerii în funcțiune. Cunoaște',
    readMoreLink: 'Află mai multe despre Hiieko →',
    readMoreTeamLink: 'echipa din spatele lucrărilor →',
    iso1: 'ISO 9001:2015',
    iso2: 'ISO 14001:2015',
    iso3: 'ISO 27001',
    iso4: 'ISO 45001',
    isoRegistration: 'Înregistrare RO 1450/1/1/1–4, emisă la 18.08.2025, certificată de ROCERT, acreditată RENAR.',
    anre: {
      heading: 'Autorizații ANRE',
      description:
        'Autorizații obligatorii prin lege pentru orice companie care proiectează, execută sau racordează instalații electrice în România, emise direct de autoritatea națională de reglementare în domeniul energiei.',
      items: [
        { code: 'E1', label: 'Proiectare' },
        { code: 'E2', label: 'Execuție' },
        { code: 'A3', label: 'Racordare la rețea' },
      ],
    },
    figs: {
      founded: { label: 'Grup fondat', value: '1994, Tallinn' },
      subsidiary: { label: 'Filiala din România înființată', value: '2020' },
      purpose: { label: 'Scop', value: 'Parcuri solare + stocare' },
      localTeam: { label: 'Echipă locală', value: 'Peste 40 de specialiști' },
      certification: { label: 'Certificare', value: 'ISO 9001 / 14001 / 27001 / 45001' },
      address: { label: 'Adresă', value: 'Bd. Theodor Pallady 51N, București' },
    },
  },
  team: {
    eyebrow: 'Echipa noastră',
    h1: 'Peste 40 de specialiști, o singură echipă responsabilă.',
    lede: 'Ingineri reali, responsabilitate reală. Fiecare persoană de pe această pagină este cineva pe care chiar îl poți suna după ce sistemul tău este funcțional, nu un subcontractant, nu un call center.',
  },
  contact: {
    eyebrow: 'Următorul pas',
    heading: 'Solicită o evaluare a site-ului.',
    lede: 'Trimite-ne câteva detalii despre site și consum. Vei primi o estimare de dimensionare, nu un discurs de vânzare.',
    companyName: 'Hiieko Romania SRL',
    addressLine: 'Bd. Theodor Pallady 51N, Sector 3, București',
    email: 'office@hiieko.ro',
  },
  contactForm: {
    nameLabel: 'Nume',
    companyLabel: 'Companie',
    emailLabel: 'Email',
    phoneLabel: 'Telefon',
    projectTypeLabel: 'Tip proiect',
    projectTypeOptions: {
      rooftop: 'Solar pe acoperiș',
      groundMount: 'Parc solar la sol',
      bess: 'Stocare cu baterii (BESS)',
      notSure: 'Nu sunt sigur încă',
    },
    messageLabel: 'Detalii site (suprafață, consum lunar aproximativ)',
    submitBtn: 'Trimite solicitarea →',
    statusNotConfigured: 'Endpoint-ul de contact nu este încă configurat. Te rugăm să ne scrii direct pe email.',
    statusSending: 'Se trimite…',
    statusSuccess: 'Solicitare trimisă. Te contactăm în curând.',
    statusError: 'Ceva nu a funcționat. Te rugăm să ne scrii direct pe email.',
  },
  calculator: {
    eyebrow: 'Estimează-ți sistemul',
    h2: 'Vezi ce ți-ar putea finanța factura la curent.',
    lede: 'Introdu consumul tău lunar: acesta estimează dimensiunea sistemului, perioada de amortizare și ROI. Nu este o ofertă fermă; o cifră reală necesită o evaluare la fața locului.',
    consumptionLabel: 'Consum lunar actual (kWh)',
    areaLabel: 'Suprafață disponibilă (m²)',
    calculateBtn: 'Calculează →',
    statCapacity: 'Capacitate sistem (kWp)',
    statGen: 'Producție anuală estimată (MWh/an)',
    statMinArea: 'Suprafață minimă pentru consumul tău (m²)',
    statPayback: 'Perioadă de amortizare estimată (ani)',
    statRoi: 'ROI (%)',
    disclaimer:
      'Sistem dimensionat pentru a acoperi consumul tău anual, presupunând un randament de 1200 kWh/kWp/an și 4,3 m²/kWp. Costul instalării este eșalonat în funcție de dimensiunea sistemului: 480 €/kWp sub 20 kWp, 450 €/kWp între 20–50 kWp, 430 €/kWp între 50–100 kWp, 410 €/kWp între 100–250 kWp, 390 €/kWp peste 250 kWp. Economiile presupun un autoconsum de 90% la 0,18 €/kWh, plafonat la consumul tău anual. O estimare aproximativă, nu o ofertă fermă. O cifră reală necesită o evaluare la fața locului.',
    warningTemplate:
      'Spațiul tău disponibil ({area} m²) acoperă doar {pct}% din consumul tău. {minArea} m² ar acoperi integral consumul.',
    toastMessage: 'Discută cu echipa de vânzări pentru o evaluare la fața locului și cifre reale.',
    toastCta: 'Contactează echipa de vânzări →',
    toastDismissLabel: 'Închide',
  },
  footer: {
    companyHeading: 'Hiieko România',
    addressLine1: 'Bd. Theodor Pallady 51N',
    addressLine2: 'Sector 3, București',
    email: 'office@hiieko.ro',
    groupHeading: 'Grup',
    groupLine1: 'AS Hiieko, Tallinn, Estonia',
    groupLine2: 'hiieko.ee',
    legalHeading: 'Legal',
    cifLine: 'CIF 42849908',
    privacyLine: 'Politica de confidențialitate',
    cookiePreferencesLine: 'Preferințe cookie-uri',
    copyright: '© {year} Hiieko Romania SRL',
    tagline: 'Parte a grupului AS Hiieko, fondat în 1994',
  },
  common: {
    placeholderBadge: 'EXEMPLU',
    inProgressBadge: 'În desfășurare',
  },
  notFound: {
    badge: '404 · Semnal pierdut',
    headline: 'Semnal pierdut: această pagină nu există în sistem.',
    lede: 'Pagina pe care o cauți nu există sau linkul nu mai este valid.',
    ctaHome: 'Înapoi acasă →',
    linkSolutions: 'Soluții',
    linkProjects: 'Proiecte',
    linkContact: 'Contact',
  },
  privacy: {
    eyebrow: 'Legal',
    h1: 'Politica de confidențialitate',
    whoWeAreHeading: 'Cine suntem',
    whoWeArePrefix: 'Hiieko Romania SRL (CIF 42849908),',
    whoWeAreAddressText: 'Clădirea C1, Bulevardul Theodor Pallady nr. 51N, Bloc A, etaj 3, 032258 București',
    whoWeAreSuffix: 'face parte din grupul AS Hiieko și este operatorul de date pentru acest site.',
    sections: [
      {
        heading: 'Ce colectăm',
        body: 'Prin formularul de contact, colectăm numele, denumirea companiei, adresa de email, numărul de telefon, tipul de proiect și detaliile despre site pe care ni le furnizezi. Nu folosim cookie-uri de urmărire în acest moment; dacă vor fi adăugate ulterior cookie-uri de analiză sau publicitate, această politică și un banner de consimțământ pentru cookie-uri vor fi actualizate corespunzător.',
      },
      {
        heading: 'De ce le colectăm',
        body: 'Folosim aceste informații pentru a răspunde solicitării tale și pentru a oferi o ofertă sau o evaluare a site-ului. Temeiul nostru legal este interesul legitim de a răspunde solicitărilor de afaceri și/sau demersurile realizate la cererea ta înainte de încheierea unui contract (Art. 6(1)(b) și (f) GDPR).',
      },
      {
        heading: 'Cui le transmitem',
        body: 'Solicitarea ta este procesată de Formspree, un serviciu terț care o livrează pe email-ul nostru. Nu vindem datele tale către terți.',
      },
      {
        heading: 'Păstrarea datelor',
        body: 'Păstrăm solicitările trimise prin formularul de contact timp de 6 luni, după care sunt șterse, cu excepția cazului în care o relație de afaceri continuă necesită o păstrare mai îndelungată.',
      },
    ],
    transfersHeading: 'Transferuri internaționale',
    transfersBody: 'Unii dintre procesatorii de mai sus pot fi localizați în afara UE/SEE.',
    rightsHeading: 'Drepturile tale',
    rightsIntro:
      'Conform GDPR, ai dreptul de a accesa, corecta, șterge sau restricționa utilizarea datelor tale, de a primi o copie a acestora (portabilitatea datelor) și de a te opune prelucrării. Pentru a-ți exercita aceste drepturi, contactează-ne la',
    rightsEmail: 'alexander.zeciu@hiieko.ee',
    rightsMiddle:
      '. De asemenea, poți depune o plângere la ANSPDCP, Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, la',
    rightsLinkLabel: 'www.dataprotection.ro',
    changesHeading: 'Modificări',
    changesBody: 'Această politică poate fi actualizată periodic. Ultima actualizare: 1 august 2026.',
    cookies: {
      heading: 'Cookie-uri',
      sections: [
        {
          heading: 'Ce sunt cookie-urile',
          body: 'Cookie-urile sunt fișiere text mici plasate pe dispozitivul tău atunci când vizitezi un site web, folosite pentru a face site-ul să funcționeze, a reține preferințele sau a colecta statistici de utilizare.',
        },
        {
          heading: 'Cookie-uri pe acest site în prezent',
          body: 'Acest site folosește Google Analytics (GA4), un cookie de analiză, pentru a înțelege cum utilizează vizitatorii site-ul. Acest cookie este setat doar după ce îl accepți prin bannerul de consimțământ; dacă refuzi, niciun cookie de analiză nu este setat. Nu folosim în prezent cookie-uri publicitare.',
        },
        {
          heading: 'Tipuri de cookie-uri pe care le folosim',
          body: 'Cookie-uri strict necesare (necesare pentru funcționarea site-ului, fără a necesita consimțământ) și cookie-uri de analiză (Google Analytics, folosite pentru a înțelege cum utilizează vizitatorii site-ul), singurele două categorii folosite în prezent. Cookie-urile publicitare nu sunt folosite în prezent; dacă acest lucru se va schimba în viitor, această secțiune va fi actualizată și consimțământul tău va fi solicitat mai întâi.',
        },
        {
          heading: 'Cum gestionăm consimțământul',
          body: 'Înainte de setarea cookie-ului Google Analytics, ți se afișează un banner de consimțământ care îți permite să accepți sau să refuzi. Îți poți schimba alegerea în orice moment folosind linkul „Preferințe cookie-uri" din subsolul site-ului.',
        },
        {
          heading: 'Ce date colectează Google Analytics',
          body: 'Google Analytics colectează date de utilizare anonimizate: paginile vizitate, durata sesiunii și locația generală și tipul de dispozitiv. Nu colectează numele tău, adresa de email sau alte informații direct identificabile.',
        },
        {
          heading: 'Drepturile tale privind cookie-urile',
          body: 'Poți accepta sau refuza cookie-ul de analiză și îți poți retrage consimțământul în orice moment folosind linkul „Preferințe cookie-uri" din subsolul site-ului. Refuzul nu îți va afecta posibilitatea de a naviga pe site sau de a folosi formularul de contact.',
        },
        {
          heading: 'Cum controlezi cookie-urile',
          body: 'Îți poți schimba alegerea privind cookie-ul de analiză în orice moment folosind linkul „Preferințe cookie-uri" din subsolul site-ului. De asemenea, poți controla sau șterge cookie-urile din setările browserului tău în orice moment.',
        },
        {
          heading: 'Actualizări ale acestei secțiuni',
          body: 'Această secțiune va fi revizuită și actualizată ori de câte ori sunt introduse cookie-uri noi pe site, și periodic ulterior.',
        },
      ],
    },
  },
  cookieConsent: {
    message:
      'Folosim Google Analytics pentru a înțelege cum utilizează vizitatorii acest site. Acesta rulează doar dacă accepți; refuzul nu îți va afecta posibilitatea de a naviga pe site sau de a folosi formularul de contact.',
    accept: 'Accept',
    decline: 'Refuz',
    ariaLabel: 'Consimțământ cookie-uri',
  },
  industries: {
    eyebrow: 'Pentru cine lucrăm',
    headline: 'Prețurile la energie continuă să crească. Aceste companii au încetat să le mai pese.',
    lede: 'Peste 200 MWp instalați în cele mai mari industrii consumatoare de energie din România: dovada că criza energetică nu trebuie să fie permanentă și pentru afacerea ta.',
    ctaLabel: 'Vezi proiectele →',
    items: [
      { name: 'Agricultură' },
      { name: 'Producție' },
      { name: 'Retail' },
      { name: 'Ospitalitate', sublabel: 'Hoteluri, restaurante și catering' },
      { name: 'Instituții' },
      { name: 'Construcții' },
    ],
  },
  meta: {
    home: {
      title: 'Hiieko România · Solar Industrial & Stocare de Energie',
      description:
        'Proiectare, instalare și mentenanță pe termen lung a sistemelor solare pe acoperiș și la sol, plus stocare cu baterii, pentru site-uri industriale și comerciale din România: un singur contractor, o singură garanție, susținută de inginerie estoniană din 1994.',
    },
    solutions: {
      title: 'Soluții · Hiieko România',
      description:
        'Solar pe acoperiș, parcuri solare la sol și stocare cu baterii (BESS), proiectate, instalate și întreținute de Hiieko România.',
    },
    projects: {
      title: 'Proiecte · Hiieko România',
      description:
        'Proiecte finalizate de solar pe acoperiș, la sol și stocare cu baterii de la Hiieko România.',
    },
    about: {
      title: 'Despre noi · Hiieko România',
      description:
        'Hiieko România SRL face parte din grupul estonian Hiieko, proiectând, instalând și întreținând sisteme industriale de solar și stocare din 2020.',
    },
    team: {
      title: 'Echipă · Hiieko România',
      description: 'Echipa din România din spatele instalațiilor Hiieko de solar industrial și stocare.',
    },
    contact: {
      title: 'Contact · Hiieko România',
      description:
        'Solicită o evaluare de la Hiieko România: solar pe acoperiș, parcuri solare la sol și stocare cu baterii.',
    },
    privacy: {
      title: 'Politica de confidențialitate · Hiieko România',
      description:
        'Cum colectează, folosește și protejează Hiieko România datele personale transmise prin acest site.',
    },
  },
};

export const ui: Record<Lang, Dictionary> = { en, ro };

export function getTranslations(lang: Lang): Dictionary {
  return ui[lang] ?? ui[defaultLang];
}

export function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_match, key: string) => String(vars[key] ?? ''));
}
