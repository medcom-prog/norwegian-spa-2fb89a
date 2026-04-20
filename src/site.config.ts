import type { SiteConfig } from './site.config.types';

export const site: SiteConfig = {
  company: {
    name: 'Norwegian Spa',
    wordmark_style: 'mixed-serif-display',
    tag: 'Siden 1994',
    phone: '67 53 01 00',
    email: 'post@hotspring.no',
    address: 'Slependen / Trondheim / Kirkenes',
    industry: 'spa',
  },
  meta: {
    title: 'Norwegian Spa — Bedre isolert. Lavere strøm. 30 år i Norge.',
    description:
      'Spabad og SwimPro motstrømsbasseng designet for det norske klimaet. 30 års erfaring, 7-lags thermoisolering, lavt strømforbruk. Fra kr 49.900.',
  },
  hero: {
    eyebrow: '30 år i Norge · Jubileumstilbud nå',
    headline: 'Hver dag blir bedre i et Norwegian Spa.',
    subhead:
      'Bedre isolert, høyere kvalitet, lavere strømforbruk — og et renseanlegg som bare funker. Du kan trygt lene deg tilbake og kjenne forskjellen.',
    primary_cta:  { label: 'Få pristilbud på spabad', href: '#spabad' },
    secondary_cta: { label: 'Bestill prøvebading', href: '#kontakt' },
    weird_thing_id: 'spa-model-picker',
  },
  spabad: [
    { id: 's1', size: '170×152 cm', persons: 4, price: 49900, was: 101200 },
    { id: 's2', size: '190×190 cm', persons: 5, price: 59900, was: 120800 },
    { id: 's3', size: '190×190 cm', persons: 7, price: 64900, was: 120800 },
    { id: 's4', size: '200×200 cm', persons: 5, price: 79900, was: 142800 },
    { id: 's5', size: '200×200 cm', persons: 6, price: 89900, was: 152800 },
    { id: 's6', size: '200×200 cm', persons: 6, price: 99900, was: 170700 },
    { id: 's7', size: '216×216 cm', persons: 5, price: 109900, was: 184400 },
    { id: 's8', size: '216×216 cm', persons: 7, price: 119900, was: 198600 },
    { id: 's9', size: '230×230 cm', persons: 6, price: 179900, was: 252700 },
    { id: 's10', size: '220×305 cm', persons: 8, price: 186000, was: 246700 },
  ],
  swimpro: [
    { id: 'sp1', model: 'SwimPro 39D', price: 279900, tag: 'Kampanjepris' },
    { id: 'sp2', model: 'SwimPro 44D', price: 299900, tag: 'Kampanjepris' },
    { id: 'sp3', model: 'SwimPro 50D', price: 299900, tag: null },
    { id: 'sp4', model: 'SwimPro 55D', price: 349900, tag: 'Kampanjepris' },
    { id: 'sp5', model: 'SwimPro 60D', price: 399900, tag: 'Kampanjepris' },
  ],
  services: [
    {
      n: '01',
      title: 'Utendørs spabad',
      lead: 'Designet for det norske klimaet. 7-lags thermoisolering som holder varmen inne — og strømregningen nede.',
      included: [
        '3 vannfontener med LED-lys',
        'Bluetooth / WiFi stereo',
        'Klorfritt Ag+ renseanlegg',
        '10 års garanti på konstruksjon',
      ],
      // Warm evening outdoor hot tub
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&fit=crop',
    },
    {
      n: '02',
      title: 'SwimPro motstrømsbasseng',
      lead: 'Svøm mot strømmen i ditt eget basseng. 7-lags polyuretaanisolering gir Norges laveste strømforbruk.',
      included: [
        'Ekstrem 7-lags isolering (10–15 cm PUR)',
        'Norges laveste driftskostnader',
        'Motoflex massasje',
        'CD3 Ozon + flerfarget LED',
      ],
      // Outdoor pool / swim spa
      image: 'https://images.unsplash.com/photo-1531256436229-b4e3c16d23af?w=800&q=80&fit=crop',
    },
    {
      n: '03',
      title: 'Chilltub — kuldeterapi',
      lead: 'Kontrast mellom varme og kulde. Kuldeterapi for kropp og sinn — hjemme i hagen.',
      included: [
        'Enkel installasjon',
        'Passer alle årstider',
        'Helårsbruk',
      ],
      // Ice bath / cold plunge aesthetic
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop',
    },
    {
      n: '04',
      title: 'Norges største utstilling',
      lead: 'Kom og prøv alle typer spabad hos oss. Slependen, Trondheim og Kirkenes.',
      included: [
        'Prøvebading uten forpliktelse',
        'Rådgivning fra erfarne spesialist',
        'Se alle modeller i full størrelse',
      ],
      // Showroom interior
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80&fit=crop',
    },
  ],
  pricing: {
    kind: 'tiers',
  },
  reviews: {
    source: 'omit',
    items: [],
  },
  contact: {
    heading: 'Finn spabadet som passer for deg.',
    subhead: 'Vi svarer morgen og kveld. Ring oss direkte, eller fyll ut skjemaet — så kontakter vi deg.',
    opening_hours: 'Man–fre: 10–17 · Lør: 11–15',
    service_area: 'Slependen · Trondheim · Kirkenes',
  },
  footer: {
    tagline: 'Bedre isolert. Lavere strøm. 30 år i Norge.',
    columns: [
      {
        title: 'Produkter',
        links: [
          ['Spabad', '#spabad'],
          ['SwimPro motstrømsbasseng', '#swimpro'],
          ['Chilltub', '#tjenester'],
          ['Utstilling', '#utstilling'],
        ],
      },
      {
        title: 'Tjenester',
        links: [
          ['Finansiering', 'https://norwegianspa.no/finansiering-northseaspas/'],
          ['Installasjon', 'https://norwegianspa.no/enkel-innstallasjon/'],
          ['Manualer', 'https://norwegianspa.no/manualer/'],
          ['Last ned katalog', 'https://norwegianspa.no/last-ned-katalog/'],
        ],
      },
      {
        title: 'Butikker',
        links: [
          ['Slependen (Oslo-området)', 'https://norwegianspa.no/butikker/'],
          ['Trondheim', 'https://norwegianspa.no/butikker/'],
          ['Kirkenes', 'https://norwegianspa.no/butikker/'],
          ['Kontakt oss', '#kontakt'],
        ],
      },
    ],
    status_line: '© 2024 Norwegian Spa · Org.nr. finnes på faktura',
  },
};
