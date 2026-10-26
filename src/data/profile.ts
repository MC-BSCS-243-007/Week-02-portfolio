import avatarUrl from '../assets/jhon-avatar.jpg'

export const profile = {
  name: 'Jhon',
  role: 'Frontend Developer',
  location: 'Multan, Pakistan',
  email: 'abdulwassaykhan@gmail.com',
  github: 'https://github.com/MC-BSCS-243-007',
  githubHandle: 'MC-BSCS-243-007',
  avatar: avatarUrl,
  availability: 'Available for frontend internships',
  intro:
    'I build responsive, accessible interfaces with a bias for depth — the kind of front end that feels considered at every breakpoint.',
  summary:
    'Frontend developer and computer science student based in Multan. I care about interfaces that are fast, responsive and easy to use, where structure, type and motion work together instead of competing.',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const

export const aboutCards = [
  {
    id: '01',
    title: 'Background',
    body: 'BSc Computer Science at Times University, Multan, in progress. Before that, an Intermediate in Humanities at Nishat College of Science — a non-linear route into code that taught me to communicate clearly and ask better questions.',
  },
  {
    id: '02',
    title: 'Current focus',
    body: 'Responsive architecture, reusable component systems and type-driven UI. I am going deeper into TypeScript patterns, interface performance and the craft of accessible motion.',
  },
  {
    id: '03',
    title: 'How I work',
    body: 'Quick learner, calm problem-solver, collaborative teammate. I ask questions early, test the awkward edges, and care about the details a user never has to notice.',
  },
]

export const education = [
  {
    period: '2024 — Present',
    title: 'BSc Computer Science',
    place: 'Times University, Multan',
    note: 'In progress · software fundamentals, data structures and web development',
    current: true,
  },
  {
    period: '2020 — 2022',
    title: 'Intermediate in Humanities',
    place: 'Nishat College of Science, Multan',
    note: 'Foundation in communication, research and critical thinking',
    current: false,
  },
]

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    level: 'Comfortable',
    blurb: 'The tools I reach for first, and can explain line by line.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & data',
    level: 'Foundational',
    blurb: 'Enough to connect an interface to real data and reason about the request.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'workflow',
    title: 'Workflow',
    level: 'Daily',
    blurb: 'How the work actually gets built, checked and shipped.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Responsive design',
      'Component architecture',
      'Problem solving',
    ],
  },
]

export const learningNow = [
  'Deeper TypeScript: generics, narrowing and safer component contracts.',
  'Interaction design and motion that respects the user.',
  'Design systems that stay simple as a product grows.',
]

export const strengths = [
  'Quick learner',
  'Problem solving',
  'Team collaboration',
  'Attention to detail',
  'Self-motivated',
  'Curiosity',
]

export const principles = [
  {
    id: '01',
    title: 'Clarity over noise',
    body: 'Hierarchy, spacing and type should answer questions before the user has to ask them.',
  },
  {
    id: '02',
    title: 'Build for the edge',
    body: 'The smallest screen, the slow connection and the keyboard-only visitor are part of the design.',
  },
  {
    id: '03',
    title: 'Motion with a job',
    body: 'Depth and movement should guide attention, not compete with the content.',
  },
]
