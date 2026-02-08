export interface MultiLangProfile {
  en: Profile;
  fr: Profile;
}

export interface Profile {
  name: string;
  title: string;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  languages: string[];
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
