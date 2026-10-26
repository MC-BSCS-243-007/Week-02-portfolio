import { profile } from './profile'

export type ProjectGlyph = 'fashion' | 'shop' | 'satellite' | 'music'

export type Project = {
  id: string
  index: string
  title: string
  category: string
  short: string
  description: string
  highlights: string[]
  technologies: string[]
  accent: string
  glyph: ProjectGlyph
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'fashion-store',
    index: '01',
    title: 'Fashion Store',
    category: 'E-commerce',
    short:
      'A responsive storefront with reusable React components and a type-safe product UI.',
    description:
      'Fashion Store was built to practise scale: a storefront that stays coherent when the catalogue grows. I designed a small set of reusable components — product card, filter row and navigation — then used TypeScript to keep their props predictable. The layout moves from a four-column product grid on desktop to a single readable column on phones without hiding content.',
    highlights: [
      'Reusable product and navigation components',
      'TypeScript props for safer composition',
      'Responsive grid from 320px to wide desktop',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    accent: '#f2a6b6',
    glyph: 'fashion',
  },
  {
    id: 'shopings',
    index: '02',
    title: 'Shopings',
    category: 'Commerce UI',
    short:
      'A shopping interface focused on clear discovery, flexible cards and touch-friendly controls.',
    description:
      'Shopings is a component-first shopping UI. The goal was simple: make browsing feel effortless. Category surfaces, product cards and calls to action share one spacing scale, and every control is sized for touch first. The project sharpened how I think about layout systems and repeated UI.',
    highlights: [
      'Component-first interface built with React',
      'Touch-friendly controls and spacing',
      'Responsive category and product layouts',
    ],
    technologies: ['React', 'Tailwind CSS', 'HTML5'],
    accent: '#ffcb7d',
    glyph: 'shop',
  },
  {
    id: 'tcj-space',
    index: '03',
    title: 'TCJ-Space',
    category: 'Information design',
    short:
      'A satellite information site that turns dense material into a calm, scannable layout.',
    description:
      'TCJ-Space presents satellite-related information without overwhelming the reader. I leaned on hierarchy: quiet navigation, strong section headings and short supporting copy. The responsive layout keeps technical content readable, and the visual system stays consistent from hero to detail sections.',
    highlights: [
      'Editorial hierarchy for technical content',
      'Responsive content sections and navigation',
      'Calm, consistent visual system',
    ],
    technologies: ['React', 'Tailwind CSS', 'HTML5'],
    accent: '#8bbcff',
    glyph: 'satellite',
  },
  {
    id: 'mtaom',
    index: '04',
    title: 'MTAOM',
    category: 'Education · Music',
    short:
      'A modern music school website built with Next.js and TypeScript, with clear enrolment paths.',
    description:
      'MTAOM is a music school site built around a warm first impression. I used Next.js and TypeScript with reusable sections for programmes, teachers and enrolment. The design keeps clear calls to action while letting the tone stay human and welcoming.',
    highlights: [
      'Reusable page sections with Next.js',
      'TypeScript components for safe content props',
      'Warm, responsive UI with clear calls to action',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    accent: '#c3a6ff',
    glyph: 'music',
  },
]

export const projectMailto = `mailto:${profile.email}?subject=${encodeURIComponent(
  'Project walkthrough request',
)}`
