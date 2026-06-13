import type { Professional, Service } from '../types'

export const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Software Developer',
    specialization: 'Software & App Development',
    description: 'Expert in full-stack development with 10+ years of experience',
    image: '/images/professionals/developer.jpg',
    experience: '10+ years',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'],
    bio: 'Sarah is a highly skilled software engineer specializing in cloud-native applications and microservices architecture. She has led numerous projects from conception to production deployment, mentoring junior developers along the way. Her expertise spans both frontend and backend technologies, making her a valuable asset for end-to-end software solutions.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Web Design & Development Lead',
    specialization: 'Website Development',
    description: 'Passionate about creating stunning, responsive websites',
    image: '/images/professionals/web-developer.jpg',
    experience: '8+ years',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Web Design'],
    bio: 'Michael combines artistic vision with technical expertise to create beautiful, functional websites. With a keen eye for UX/UI design principles, he ensures every project not only looks amazing but also provides an intuitive user experience. He specializes in responsive design that works seamlessly across all devices.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Senior Project Manager',
    specialization: 'Project Management',
    description: 'Expert in delivering projects on time and within budget',
    image: '/images/professionals/project-manager.jpg',
    experience: '9+ years',
    skills: ['Agile', 'Scrum', 'Team Leadership', 'Risk Management', 'Stakeholder Communication'],
    bio: 'Emily brings strategic thinking and exceptional organizational skills to every project she manages. With experience managing teams of 20+ professionals across multiple departments, she excels at keeping projects on track, managing budgets effectively, and ensuring stakeholder satisfaction. Her agile methodology expertise has transformed project delivery timelines across organizations.'
  },
  {
    id: 4,
    name: 'David Thompson',
    title: 'Data Analyst & Business Consultant',
    specialization: 'Data Analysis & Virtual Assistance',
    description: 'Transforming data into actionable business insights',
    image: '/images/professionals/data-analyst.jpg',
    experience: '7+ years',
    skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Statistical Analysis'],
    bio: 'David specializes in mining meaningful insights from complex datasets. His analytical prowess combined with business acumen enables him to provide strategic recommendations that drive growth. He also provides comprehensive virtual assistance services, handling administrative tasks, research, and operational support with meticulous attention to detail.'
  }
]

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: 'Code2',
    title: 'Software Development',
    description: 'Custom applications and software solutions tailored to your needs'
  },
  {
    id: 2,
    icon: 'Globe',
    title: 'Web Development',
    description: 'Modern, responsive websites that engage and convert visitors'
  },
  {
    id: 3,
    icon: 'BarChart3',
    title: 'Data Analytics',
    description: 'Data-driven insights to optimize your business operations'
  },
  {
    id: 4,
    icon: 'CheckCircle',
    title: 'Project Management',
    description: 'Professional oversight to ensure projects stay on track'
  }
]

export const COMPANY_INFO = {
  name: 'G-Tech Solutions',
  tagline: 'Outsourcing Excellence, Delivering Results',
  mission: 'To provide exceptional, cost-effective solutions by connecting businesses with top-tier professionals across software development, web design, project management, data analysis, and virtual assistance.',
  vision: 'To be the trusted partner for businesses seeking reliable, skilled professionals to execute their projects with precision and excellence.',
  values: [
    'Excellence in execution',
    'Client satisfaction',
    'Professional integrity',
    'Continuous innovation',
    'Team collaboration'
  ],
  whyChooseUs: [
    'Experienced professionals across diverse industries',
    'Competitive pricing and flexible engagement models',
    'Quick project turnaround without compromising quality',
    'Dedicated project management and oversight',
    'Scalable solutions that grow with your business',
    'Proven track record of successful project delivery'
  ],
  phone: '+1 (555) 123-4567',
  email: 'info@gtechsolutions.com',
  address: 'Tech Park, Suite 500, New York, NY 10001',
  year: new Date().getFullYear()
}

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/g-tech-solutions',
  twitter: 'https://twitter.com/gtechsolutions',
  facebook: 'https://facebook.com/gtechsolutions',
  instagram: 'https://instagram.com/gtechsolutions'
}
