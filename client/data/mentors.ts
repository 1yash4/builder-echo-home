export interface Mentor {
  id: string;
  name: string;
  title: string;
  subjects: string[];
  rating: number;
  totalSessions: number;
  experience: string;
  languages: string[];
  hourlyRate: number;
  tier: "Tier 1" | "Tier 2" | "Tier 3";
  tierDescription: string;
  profileImage: string;
  description: string;
  specializations: string[];
  availability: string;
  verified: boolean;
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    title: "Mathematics Professor",
    subjects: ["Mathematics", "Statistics", "Calculus"],
    rating: 4.9,
    totalSessions: 1250,
    experience: "8 years",
    languages: ["English", "Hindi"],
    hourlyRate: 800,
    tier: "Tier 2",
    tierDescription: "Weekly sessions - ₹3,200/week",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
    description: "IIT Delhi alumna passionate about making complex mathematical concepts simple. Specialized in helping students overcome math anxiety with traditional Indian methods.",
    specializations: ["Algebra", "Geometry", "Trigonometry", "JEE Math"],
    availability: "Mon-Fri 9AM-6PM",
    verified: true
  },
  {
    id: "2", 
    name: "Prof. Rajesh Gupta",
    title: "Physics Expert",
    subjects: ["Physics", "Chemistry", "Engineering"],
    rating: 4.8,
    totalSessions: 980,
    experience: "12 years",
    languages: ["English", "Hindi", "Bengali"],
    hourlyRate: 1200,
    tier: "Tier 1",
    tierDescription: "Permanent mentorship - ₹15,000/month",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    description: "Former ISRO scientist with a passion for teaching. Helps students understand physics through real-world applications and ancient Indian scientific principles.",
    specializations: ["Quantum Physics", "Mechanics", "Thermodynamics", "JEE Physics"],
    availability: "Tue-Sat 2PM-9PM",
    verified: true
  },
  {
    id: "3",
    name: "Dr. Sneha Patel",
    title: "Biology Specialist",
    subjects: ["Biology", "Chemistry", "Environmental Science"],
    rating: 4.9,
    totalSessions: 1100,
    experience: "6 years",
    languages: ["English", "Hindi", "Gujarati"],
    hourlyRate: 700,
    tier: "Tier 2",
    tierDescription: "Bi-weekly sessions - ₹2,800/2 weeks",
    profileImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    description: "AIIMS graduate specializing in life sciences. Makes biology fascinating by connecting it to everyday life and Ayurvedic principles.",
    specializations: ["Cell Biology", "Genetics", "Anatomy", "NEET Prep"],
    availability: "Mon-Thu 4PM-10PM",
    verified: true
  },
  {
    id: "4",
    name: "Arjun Singh",
    title: "Computer Science Expert",
    subjects: ["Computer Science", "Programming", "Mathematics"],
    rating: 4.7,
    totalSessions: 850,
    experience: "10 years",
    languages: ["English", "Hindi"],
    hourlyRate: 1000,
    tier: "Tier 1",
    tierDescription: "Permanent coding mentorship - ₹18,000/month",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    description: "Senior software engineer at top Indian tech companies. Helps students master programming and prepare for technical interviews with industry insights.",
    specializations: ["Python", "JavaScript", "Data Structures", "System Design"],
    availability: "Weekends 10AM-8PM",
    verified: true
  },
  {
    id: "5",
    name: "Dr. Meera Nair",
    title: "Chemistry Professor",
    subjects: ["Chemistry", "Biochemistry", "Organic Chemistry"],
    rating: 4.8,
    totalSessions: 1300,
    experience: "15 years",
    languages: ["English", "Hindi", "Tamil"],
    hourlyRate: 900,
    tier: "Tier 1",
    tierDescription: "Complete chemistry mastery - ₹20,000/month",
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    description: "IISc professor with extensive research background. Teaches chemistry through interactive experiments and connects concepts to traditional Indian knowledge.",
    specializations: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "JEE Chemistry"],
    availability: "Mon-Fri 1PM-7PM",
    verified: true
  },
  {
    id: "6",
    name: "Kavita Sharma",
    title: "English Literature Expert",
    subjects: ["English", "Literature", "Writing"],
    rating: 4.6,
    totalSessions: 720,
    experience: "5 years",
    languages: ["English", "Hindi"],
    hourlyRate: 600,
    tier: "Tier 2",
    tierDescription: "Weekly language improvement - ₹2,400/week",
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    description: "Published author and literature enthusiast. Helps students develop critical thinking and writing skills through engaging discussions.",
    specializations: ["Essay Writing", "Poetry Analysis", "Grammar", "CBSE English"],
    availability: "Daily 6PM-11PM",
    verified: true
  },
  {
    id: "7",
    name: "Vikram Reddy",
    title: "Free Trial Mentor",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    rating: 4.5,
    totalSessions: 500,
    experience: "4 years",
    languages: ["English", "Hindi", "Telugu"],
    hourlyRate: 0,
    tier: "Tier 3",
    tierDescription: "Free 1-hour trial session",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    description: "Young and energetic tutor helping students get started with their learning journey. Perfect for trying out our mentorship program.",
    specializations: ["Basic Math", "Science Fundamentals", "Study Planning"],
    availability: "Daily 5PM-8PM",
    verified: true
  },
  {
    id: "8",
    name: "Dr. Anita Joshi",
    title: "Multi-Subject Expert",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    rating: 4.9,
    totalSessions: 2000,
    experience: "20 years",
    languages: ["English", "Hindi", "Marathi"],
    hourlyRate: 1500,
    tier: "Tier 1",
    tierDescription: "Premium all-subject mentorship - ₹20,000/month",
    profileImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    description: "Veteran educator with expertise across multiple subjects. Provides comprehensive guidance combining modern teaching with ancient Indian educational wisdom.",
    specializations: ["All Competitive Exams", "Board Exams", "Concept Building", "Career Guidance"],
    availability: "Mon-Sat 8AM-10PM",
    verified: true
  },
  {
    id: "9",
    name: "Ravi Kumar",
    title: "Mathematics Specialist",
    subjects: ["Mathematics", "Statistics"],
    rating: 4.7,
    totalSessions: 650,
    experience: "6 years",
    languages: ["English", "Hindi", "Tamil"],
    hourlyRate: 650,
    tier: "Tier 2",
    tierDescription: "Weekly math sessions - ₹2,600/week",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    description: "IIT graduate specializing in making mathematics easy and enjoyable. Uses innovative teaching methods inspired by ancient Indian mathematical traditions.",
    specializations: ["Vedic Mathematics", "Competitive Math", "Calculus", "Statistics"],
    availability: "Mon-Fri 7PM-10PM",
    verified: true
  },
  {
    id: "10",
    name: "Dr. Sunita Verma",
    title: "Science All-Rounder",
    subjects: ["Physics", "Chemistry", "Biology"],
    rating: 4.8,
    totalSessions: 1500,
    experience: "12 years",
    languages: ["English", "Hindi"],
    hourlyRate: 950,
    tier: "Tier 1",
    tierDescription: "Comprehensive science mentorship - ₹16,000/month",
    profileImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    description: "Former DRDO scientist turned educator. Combines practical science knowledge with traditional Indian scientific wisdom for holistic learning.",
    specializations: ["Applied Physics", "Practical Chemistry", "Medical Biology", "Research Methods"],
    availability: "Tue-Sat 3PM-8PM",
    verified: true
  }
];
