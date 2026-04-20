export interface SiteConfig {
  company: {
    name: string;
    wordmark_style: string;
    tag?: string;
    phone: string;
    email: string;
    address?: string;
    org_no?: string;
    industry: string;
  };
  meta: {
    title: string;
    description: string;
    og_image?: string;
  };
  hero: {
    eyebrow?: string;
    headline: string;
    subhead: string;
    primary_cta: { label: string; href: string };
    secondary_cta?: { label: string; href: string };
    weird_thing_id: string;
    weird_thing_props?: Record<string, unknown>;
  };
  spabad?: Array<{
    id: string;
    size: string;
    persons: number;
    price: number;
    was: number;
  }>;
  swimpro?: Array<{
    id: string;
    model: string;
    price: number;
    tag: string | null;
  }>;
  services: Array<{
    n: string;
    title: string;
    lead: string;
    included: string[];
    duration?: string;
    image?: string;
  }>;
  pricing?: {
    kind: 'calculator' | 'quote-cta' | 'tiers' | 'none';
    config?: Record<string, unknown>;
  };
  team?: Array<{
    name: string;
    role: string;
    years?: number;
    langs?: string;
    image: string;
  }>;
  reviews?: {
    source: 'google' | 'trustpilot' | 'customer-supplied' | 'omit';
    aggregate?: { rating: number; count: number };
    items: Array<{
      name: string;
      rating: number;
      text: string;
      when: string;
      source: string;
    }>;
  };
  clients?: Array<{
    name: string;
    style?: string;
  }>;
  contact: {
    heading: string;
    subhead: string;
    opening_hours?: string;
    service_area?: string;
  };
  footer: {
    tagline: string;
    columns: Array<{ title: string; links: Array<[string, string]> }>;
    status_line?: string;
  };
}
