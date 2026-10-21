# Data Schema Specification

All content is defined in `src/data/portfolio.ts` using strict TypeScript types:

## PersonalInfo

```ts
export const personalInfo = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  website: string;
  availability: boolean;
  availabilityText: string;
  bio: string;
  roles: string[];           // Displayed in typewriter ticker on Hero
  socials: {
    github: string;
    linkedin: string;
    stackoverflow: string;
    email: string;
    phone: string;
  };
  resumeUrl: string;
};
```

## Project

```ts
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'mobile' | 'fullstack' | 'enterprise';
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubStars?: number;
  featured: boolean;
  size: 'large' | 'medium' | 'small';
  gradient: string; // Tailwind gradient classes (e.g., "from-indigo-600 via-violet-600 to-purple-700")
};
```

## Experience

```ts
export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  startDate: string; // YYYY-MM
  endDate?: string; // YYYY-MM or omitted for present
  location: string;
  type: 'fulltime' | 'freelance' | 'contract' | 'education';
  description: string;
  highlights: string[];
  techStack: string[];
};
```

## Skill

```ts
export type Skill = {
  category: string;
  icon: string;
  items: Array<{
    name: string;
    level: 'expert' | 'advanced' | 'proficient';
  }>;
};
```

## Testimonial & BlogPost

```ts
export type Testimonial = {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  coverGradient: string;
};
```

_Note: Testimonials and BlogPosts arrays are kept empty until real user data is provided._
