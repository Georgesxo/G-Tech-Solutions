export interface Professional {
  id: number
  name: string
  title: string
  specialization: string
  description: string
  image: string
  experience: string
  skills: string[]
  bio: string
  LinkedIn?: string
}

export interface Service {
  id: number
  icon: string
  title: string
  description: string
LinkedIn?: string
}
