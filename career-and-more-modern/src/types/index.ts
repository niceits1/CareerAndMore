export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  email?: string;
  phone?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  website: string;
  businessHours: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  founded: string;
  legal: {
    companyName: string;
    address: string;
    phone: string;
    email: string;
    manager: string;
    register: string;
    taxId: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  position: string;
  company: string;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  datePosted: string;
}
