
import { ProjectItem, SkillItem, GalleryItem } from './types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Revolutionizing Park Administration",
    category: "Administration",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=1200",
    description: "How I implemented a digital tracking system at M. Saifur Rahman Shishu Park to manage 10,000+ monthly visitors and optimize team efficiency.",
    tags: ["Management", "Digital Transformation", "Ops"],
    fullContent: "At M. Saifur Rahman Shishu Park, the challenge was manually tracking daily visitors and revenue. I introduced a cloud-based reporting system that reduced paper waste by 90% and provided real-time financial analytics to the board. My role involved training 15 staff members and ensuring seamless customer service."
  },
  {
    id: 2,
    title: "Scaling UK Food Systems (GKSoft)",
    category: "Web Development",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    description: "Deep dive into maintenance strategies for a high-traffic UK food ordering portal, focusing on zero-downtime updates and customer collaboration.",
    tags: ["React", "API Integration", "UK Client"],
    fullContent: "Collaborating with GKSoft for the UK market required high precision. I managed daily system health checks, resolved over 200 technical tickets, and maintained the front-end components to ensure a smooth ordering experience for thousands of users. Communication was key to success here."
  },
  {
    id: 3,
    title: "Branding for the Digital Age",
    category: "Marketing",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    description: "Building brand identities that convert. A summary of my digital marketing strategies for local entrepreneurs.",
    tags: ["SEO", "Ad Strategy", "Identity"],
    fullContent: "I believe every business has a unique story. My branding planning focuses on finding that 'hook'. By combining SEO-optimized website architecture with aggressive social media marketing, I've helped three local startups double their lead generation within 6 months."
  },
  {
    id: 4,
    title: "Impact: Winter Relief 2024",
    category: "Social Work",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
    description: "A heartbeat for the community. Visual journey of our latest humanitarian drive supporting 100+ families.",
    tags: ["Humanity", "Aid", "Volunteer"],
    fullContent: "Standing beside helpless people is my true calling. In the coldest months of 2024, my team and I distributed blankets and warm meals. This project isn't about numbers; it's about the smiles and the community resilience we build together."
  }
];

export const SKILLS: SkillItem[] = [
  { name: "Administration & Management", icon: "ShieldCheck" },
  { name: "Website Maintenance", icon: "Settings" },
  { name: "Website Development", icon: "Code" },
  { name: "Digital Marketing", icon: "TrendingUp" },
  { name: "Business Branding", icon: "Palette" },
  { name: "Customer Collaboration", icon: "MessageSquare" },
  { name: "Social Work & Aid", icon: "HeartHandshake" }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800', title: 'Work Environment', category: 'professional' },
  { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1459183885447-df53d17ee2ab?q=80&w=800', title: 'Aid Distribution', category: 'social' },
  { id: 3, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800', title: 'Impact Video', category: 'event' }
];
