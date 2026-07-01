import type { Professional, Service } from '../types'

export const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: 'Vickie Aziabah ',
    title: 'Senior Project Manager',
    specialization: 'Project Management',
    description: 'Expert in delivering projects on time and within budget ',
    image: '/images/professionals/project-manager.jpg',
    experience: '8+ years',
    skills: ['Agile', 'Scrum', 'Team Leadership', 'Risk Management', 'Stakeholder Communication'],
    bio: 'Vickie is a PMP-certified Digital Project Manager with 8+ years of experience managing marketing campaigns, digital operations, and cross-functional teams across telecoms and NGOs. She has delivered projects for brands like MTN, Vodafone, UNICEF, Unilever, and USAID.',
     LinkedIn: 'https://www.linkedin.com/in/victoria-aziabah'
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
    name: 'Maud Ewoenam Fugar',
    title: 'Virtual Assistant & Youth Development Professional',
    specialization: 'Virtual Assistance',
    description: 'Expert in  executive support, project coordination, stakeholder engagement, and youth empowerment initiatives.',
    image: '/images/professionals/virtual assistant.jpg',
    experience: '7+ years',
    skills: ['Administration', 'Research', 'Project Coordination', 'Communication', 'Management', 'Youth Development'],
    bio: ' Maud is a dedicated Virtual Assistant and Youth Development Professional with experience in executive support, project coordination, stakeholder engagement, and youth empowerment initiatives. She has worked with organizations across the nonprofit and development sectors, supporting operations, managing programs, and creating opportunities for young people to thrive. Passionate about leadership, education, and community impact, she combines strong organizational skills with a commitment to driving meaningful social change.',
    LinkedIn:  'https://www.linkedin.com/in/maudfugar'
  },
  {
    id: 4,
    name: ' Wisdom Festus Foli',
    title: 'Data Analyst | Business Intelligence & Finance Professional',
    specialization: 'Data Analysis',
    description: 'Transforming data into actionable business insights',
    image: '/images/professionals/data-analyst.jpg',
    experience: '4+ years',
    skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Statistical Analysis'],
    bio: 'Wisdom is a Data Analyst with over four years of experience in business intelligence, data analytics, and performance reporting. He has led data-driven initiatives that support strategic decision-making, learner engagement, and business growth at ALX Ghana. Passionate about leveraging technology and analytics to solve real-world problems, he is also advancing his expertise through the Institute of Chartered Accountants Ghana (ICAG) and Gold Coast university (MBA in Business Intelligence and Data Analytics).',
    LinkedIn:  'https://www.linkedin.com/in/wisdomfestusfoli/'
  }
]

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: 'Code2',
    title: 'Software and Web Development',
    description: 'Custom applications and software solutions tailored to your needs'
  },
  {
    id: 2,
    icon: 'Globe',
    title: 'Virtual Assistance',
    description: 'Seamless operational and administrative support to scale your organization'
  },
  {
    id: 3,
    icon: 'BarChart3',
    title: 'Data Analysis',
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
  name: 'G-Tech Freelancers',
  tagline: 'Outsourcing Excellence, Delivering Results',
  mission: 'To provide exceptional, cost-effective solutions by connecting businesses with top-tier professionals across software & web development, project management, data analysis, and virtual assistance.',
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
    'Competitive pricing models and flexible engagement models',
    'Quick project turnaround without compromising quality',
    'Dedicated project management and oversight',
    'Scalable solid solutions that grow with your business',
    'Proven track record of successful project delivery'
  ],
  phone: '+233 (059) 377-8377',
  email: 'gtechfreelancers@gmail.com',
  address: 'Accra, Ghana, West Africa',
  year: new Date().getFullYear()
}

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/awuah/',
  twitter: 'https://x.com/awuahg500?t=SFQ0Nr2MtKN6wLVimdvy9w&s=09',
  facebook: 'https://www.facebook.com/share/14nv72WFLsn/',
  instagram: 'https://www.instagram.com/gtechltd?igsh=cTA5MTdmaWpnZXlw',
  tiktok: 'https://www.tiktok.com/@king_georgesco?_r=1&_t=ZS-97fNjcCDtrB'
}

export const TESTIMONIALS = [
  {
    quote: "G-Tech Solutions transformed our digital operations. Their team delivered a complex project ahead of schedule with exceptional attention to detail. Highly recommended!",
    author: "Sarah Johnson, CEO at Digital Ventures",
    image: '/images/professionals/project-manager.jpg',
    alt: "Sarah Johnson"
  },
  {
    quote: "The virtual assistance services provided by G-Tech are unparalleled. They handle our administrative tasks with precision and professionalism, freeing up our team for strategic work.",
    author: "Michael Rogers, Founder at Tech Startup Inc",
    image: '/images/professionals/virtual assistant.jpg',
    alt: "Michael Rogers"
  },
  {
    quote: "Vickie's project management expertise kept our enterprise initiative on track through complex stakeholder dynamics. Her leadership and communication made all the difference.",
    author: "Jennifer Lee, Operations Director at Global Corp",
    image: '/images/professionals/web-developer.jpg',
    alt: "Jennifer Lee"
  },
  {
    quote: "The data analysis and insights provided by G-Tech helped us optimize our business strategy. Their recommendations drove a 40% improvement in operational efficiency.",
    author: "David Martinez, Executive Director at Analytics Pro",
    image: '/images/professionals/data-analyst.jpg',
    alt: "David Martinez"
  }
]
