import type { Professional, Service } from '../types'

export const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: 'Vickie Aziabah ',
    title: 'Senior Project Manager',
    specialization: 'Project Management',
    description: 'Expert in delivering projects on time and within budget ',
    image: '/images/professionals/project-manager.png',
    experience: '8+ years',
    skills: ['Agile', 'Scrum', 'Team Leadership', 'Risk Management', 'Stakeholder Communication'],
    bio: 'Vickie is a PMP-certified Digital Project Manager with 8+ years of experience managing marketing campaigns, digital operations, and cross-functional teams across telecoms and NGOs. She has delivered projects for brands like MTN, Vodafone, UNICEF, Unilever, and USAID.',
    LinkedIn: 'https://www.linkedin.com/in/victoria-aziabah'
  },
  
  {
    id: 2,
    name: 'Daniel Tetteh Partey',
    title: 'Senior Software Engineer',
    specialization: 'Software Engineering',
    description: 'Passionate about creating digital products and stunning, responsive websites',
    image: '/images/professionals/web-developer.png',
    experience: '8+ years',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript','Kotlin', 'Java','PostgreSQL','Firebase','Fast & Rest API', 'React', 'Dart', 'Web Design'],
    bio: 'Daniel Tetteh Partey is a Ghanaian software developer and mobile application engineer with over five years of experience building scalable digital products across fintech, logistics, transport, e-commerce, workflow automation, and value-added services. He specializes in Flutter and native Android development, with strong experience in Kotlin, Java, Dart, Firebase, REST APIs, FastAPI, PostgreSQL, mobile payments, USSD, SMS integrations, and performance monitoring tools. Daniel has contributed to and led the development of high-impact applications including Gredox, Remcash, Nova Gas, Tesah, e-Shuttle, VPOS, Trickles, Opine, Tokrom, and logistics solutions for Antrak Express Ghana. His current contribution to Antrak Express Ghana includes building a delivery dashboard and mobile application designed to support delivery operations, improve workflow visibility, and enhance the management of logistics activities. His work spans full-cycle product development, mobile architecture, API integration, incident management, application optimization, and deployment to both Android and iOS platforms. He is particularly skilled at turning business requirements into reliable, user-friendly mobile and web solutions that improve operational efficiency and customer experience. Beyond engineering, Daniel brings strong leadership, communication, and mentoring experience, shaped by his work with development teams, stakeholders, and youth-focused community leadership. He is passionate about building technology that solves real problems in Ghana and beyond, especially in fintech, logistics, digital services, and mobile-first platforms.',
    LinkedIn:'https://www.linkedin.com/in/daniel-tetteh-partey/'
  },
  {
    id: 3,
    name: 'Maud Ewoenam Fugar',
    title: 'Virtual Assistant & Youth Development Professional',
    specialization: 'Virtual Assistance',
    description: 'Expert in  executive support, project coordination, stakeholder engagement, and youth empowerment initiatives.',
    image: '/images/professionals/virtual_assistant.png',
    experience: '7+ years',
    skills: ['Administration', 'Research', 'Project Coordination', 'Communication', 'Management', 'Youth Development'],
    bio: ' Maud is a dedicated Virtual Assistant and Youth Development Professional with experience in executive support, project coordination, stakeholder engagement, and youth empowerment initiatives. She has worked with organizations across the nonprofit and development sectors, supporting operations, managing programs, and creating opportunities for young people to thrive. Passionate about leadership, education, and community impact, she combines strong organizational skills with a commitment to driving meaningful social change.',
    LinkedIn:  'https://drive.google.com/file/d/10YEVhTX0bTY1KtWzEhZJpGvOmemOnn2M/view?usp=sharing'
  },
  {
    id: 4,
    name: ' Wisdom Festus Foli',
    title: 'Data Analyst | Business Intelligence & Finance Professional',
    specialization: 'Data Analysis',
    description: 'Transforming data into actionable business insights',
    image: '/images/professionals/data-analyst.png',
    experience: '4+ years',
    skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Statistical Analysis'],
    bio: 'Wisdom is a Data Analyst with over four years of experience in business intelligence, data analytics, and performance reporting. He has led data-driven initiatives that support strategic decision-making, learner engagement, and business growth at ALX Ghana. Passionate about leveraging technology and analytics to solve real-world problems, he is also advancing his expertise through the Institute of Chartered Accountants Ghana (ICAG) and Gold Coast university (MBA in Business Intelligence and Data Analytics).',
    LinkedIn:  'https://www.linkedin.com/in/wisdomfestusfoli/'
  },
   {
    id: 5,
    name: ' Bernard Nyaaba',
    title: 'Creative Director / Designer',
    specialization: 'Creative Directing / Designing',
    description: 'Crafting visually compelling designs that communicate your brand effectively',
    image: '/images/professionals/creative.png',
    experience: '5+ years',
    skills: ['Motion Graphics', 'Graphic Design', '3D Modelling & Animation', 'Creative Directing', 'Adobe Creative Suite', 'Figma', 'Sketch', 'Branding', 'Visual Design'],
    bio: 'Bernard is dynamic and lucrative creative professional with 5+ years of invaluable hands-on experience in creative design projects, concept creation, graphic design,2D and 3D animation and visual conceptualization. He has delivered projects for major brands including Sintex Ghana, Palace Mall, Plot Enterprise Ghana, Jumia Ghana, Munch n Dip Michigan, Clinica, The Burger Spot Michigan and Cypher Zone.',
    LinkedIn:  'https://1drv.ms/f/c/9353be76eebaf3af/IgAdS3iGbIzGQa4OgOnU5zFwAYnT3DitPWGIPoePENGu0O0?e=mRT9Oh'
  }
]

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: 'CheckCircle',
    title: 'Project Management & Automation',
    description: 'Professional oversight to ensure projects stay on track'
  },
  {
    id: 2,
     icon: 'Code2',
    title: 'Software and Web Development',
    description: 'Custom applications and software solutions tailored to your needs'
  },
  {
    id: 3,
     icon: 'Globe',
    title: 'Virtual Assistance',
    description: 'Seamless operational and administrative support to scale your organization'
  },
  {
    id: 4,
    icon: 'BarChart3',
    title: 'Data Analysis and Business Intelligence',
    description: 'Data-driven insights to optimize your business operations'
  },
  {
    id: 5,
    icon: 'Sparkles',
    title: 'Creative Directing and Designing',
    description: 'Expert in communicating your brand effectively'
  }
]

export const COMPANY_INFO = {
  name: 'G-Tech Freelancers',
  tagline: 'Outsourcing Excellence, Delivering Results',
  mission: 'To provide exceptional, cost-effective solutions by connecting businesses, teams and individuals with top-tier professionals across Software & Web development, Project Management & Automation, Data Analysis & Business Intelligence, Creative Designing & Directing and virtual assistance.',
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
    quote: "G-Tech Freelancers transformed our digital operations. Their team delivered a complex project ahead of schedule with exceptional attention to detail. Highly recommended!",
    author: "Sarah Johnson, CEO at Digital Ventures",
    image: '/images/professionals/project-manager.jpg',
    alt: "Sarah Johnson"
  },
  {
    quote: "The virtual assistance services provided by G-Tech are unparalleled. Dear Maud, thanks for your VA service. I highly appreciate your professionalism and the prompt service you have given me.",
    author: "Nadege Amizero, Environmental Consultant at Global Center on Adaptation",
    image: '/images/professionals/VA testimonial.jpg',
    alt: "Nadege Amizero"
  },
  {
    quote: "Victoria did a fantastic job coordinating our digital product launch activities. She reviewed the existing plan, organized the workflow and helped ensure all tasks were clearly tracked.",
    author: "Jennifer Lee, Operations Director at Global Corp",
    image: '/images/professionals/web-developer.jpg',
    alt: "Jennifer Lee"
  },
  {
    quote: "The data analysis and insights provided by G-Tech helped us optimize our business strategy. Their recommendations drove a 40% improvement in operational efficiency.",
    author: "David Martinez, Executive Director at Analytics Pro",
    image: '/images/professionals/data-analyst.jpg',
    alt: "David Martinez"
  },
  {
    quote: " Good is an understatement. Bernard from G-Tech freelancers is exceptional. From the design concept through to the printing is on a different level.",
    author: "Reginald, Marketing Executive at Plot Enterprise Ghana",
    image: '/images/professionals/data-analyst.jpg',
    alt: "Reginald"
  }
]
