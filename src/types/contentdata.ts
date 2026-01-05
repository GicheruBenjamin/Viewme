// /src/types/contentdata.ts

// Generic type for items with name and title
export interface NameTitle {
    name: string;
    title: string;
  }
  
  // Generic type for items with skills
  export interface Skill {
    ski: string;
    logo: string;
  }
  
  export interface SkillCategory {
    name: string;
    skills: Skill[];
  }
  
  // Hero section type
  export interface HeroData {
    title: string;
    description: string;
    details: NameTitle[];
  }
  
  // Education section type
  export interface EducationDetail {
    school: string;
    level: string;
    duration : string;
  }
  
  export interface EducationData {
    title: string;
    description: string;
    details: EducationDetail[];
  }
  
  // Technical skills section type
  export interface TechSkillsData {
    title: string;
    description: string;
    details: SkillCategory[];
  }
  
  // Experience section type
  export interface ExperienceDetail {
    name: string;
    title: string;
    responsibilities: string[];
  }
  
  export interface ExperienceData {
    title: string;
    description: string; 
    details: ExperienceDetail[];
  }
  
  // Work apporach step
  export interface WorkApproachStep{
    step : number;
    title:  string;
    info : string;
  }
  // Work approach section type
  export interface WorkApproachDetail {
    name: string
    steps : WorkApproachStep[]
  }
  
  export interface WorkApproachData {
    title: string;
    description: string;
    details: WorkApproachDetail[];
  }
  
  // Contact section type
  export interface ContactDetail {
    name: string;
    info: string;
  }
  
  export interface ContactData {
    title: string;
    description: string;
    details: ContactDetail[];
  }
  