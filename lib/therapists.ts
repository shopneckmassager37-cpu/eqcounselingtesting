export interface Therapist {
  slug: string
  name: string
  title: string
  image: string
  bio: string
  specialties: string[]
  testing: string[]
  credentials: string[]
  schema: {
    jobTitle: string
    hasCredential: string[]
    knowsAbout: string[]
    alumniOf?: string
    worksFor: string
    telephone: string
    address: string
  }
}

export const therapists: Therapist[] = [
  {
    slug: 'dr-ronit-navon',
    name: 'Dr. Ronit Navon',
    title: 'Practice Director, PhD, LMHC, NCC',
    image: '/images/dr-ronit-navon.png',
    bio: "Dr. Navon earned her PhD in Counseling from Barry University (2009) and her Master's in Community Mental Health from Rollins College (1998). She founded EQ Counseling & Testing in 2012 and, with 22+ years in psychological evaluations, her Solution-Focused approach builds lasting confidence and positive change.",
    specialties: [
      'Bipolar Disorder & Depression',
      'Anxiety & Substance Abuse',
      'Grief & Family Counseling',
      'Elder Care & Couples Counseling',
      'Psychological Evaluations for Juveniles',
      'Custody Cases & Immigration Assessments',
      'SSI & Pre-Surgical Assessments',
      'Learning Disability Evaluations',
    ],
    testing: [
      'Academic & Intelligence Testing',
      'DSM-IV Diagnosis',
      'Autism/Spectrum Disorder',
      'Career & Personality Tests',
    ],
    credentials: [
      'PhD in Counseling — Barry University, 2009',
      'MS in Community Mental Health — Rollins College, 1998',
      'LMHC — Licensed Mental Health Counselor, Florida',
      'NCC — Nationally Certified Counselor',
    ],
    schema: {
      jobTitle: 'Practice Director & Licensed Mental Health Counselor',
      hasCredential: ['PhD', 'LMHC', 'NCC'],
      knowsAbout: ['Counseling', 'Psychological Evaluations', 'Bipolar Disorder', 'Depression', 'Anxiety', 'Family Therapy'],
      alumniOf: 'Barry University',
      worksFor: 'EQ Counseling & Testing LLC',
      telephone: '+1-407-461-9721',
      address: '390 N Orange Ave, Suite 2300, Orlando, FL 32801',
    },
  },
  {
    slug: 'dr-danilo-polanco',
    name: 'Dr. Danilo Polanco',
    title: 'PhD, Christian Clinical License Counselor, NBCP, CCFC',
    image: '/images/dr-danilo-polanco.png',
    bio: 'Dr. Polanco brings 20+ years of experience counseling children and families, with expertise in temperament modality and theology integration. He also serves as Professor of Psychology at Florida Christian University.',
    specialties: [
      'Children & Family Counseling',
      'Forensic Counseling',
      'Temperament Modality',
      'Theology-Integrated Counseling',
      'Adolescent Behavioral Issues',
    ],
    testing: [],
    credentials: [
      'PhD in Counseling',
      'Christian Clinical License Counselor',
      'NBCP — Nationally Board Certified Psychologist',
      'CCFC — Clinically Certified Forensic Counselor',
    ],
    schema: {
      jobTitle: 'Licensed Clinical Counselor & Professor of Psychology',
      hasCredential: ['PhD', 'NBCP', 'CCFC'],
      knowsAbout: ['Children Counseling', 'Family Counseling', 'Forensic Counseling', 'Adolescent Issues'],
      worksFor: 'EQ Counseling & Testing LLC',
      telephone: '+1-407-461-9721',
      address: '390 N Orange Ave, Suite 2300, Orlando, FL 32801',
    },
  },
  {
    slug: 'sandra-deoliveira-zeni',
    name: 'Sandra DeOliveira Zeni',
    title: 'Licensed Mental Health Counselor (LMHC MH16908)',
    image: '/images/sandra-deoliveira-zeni.png',
    bio: 'Sandra is a bilingual (English/Portuguese) LMHC who graduated from UCF in 2008. Using unconditional positive regard, she works with adults, teens, children, couples, and families across diverse cultures including the LGBT community.',
    specialties: [
      'Depression & Anxiety',
      'Couples Counseling',
      'Family Therapy',
      'Adolescent Advice',
      'Multicultural Counseling',
      'LGBT Affirmative Therapy',
    ],
    testing: [],
    credentials: [
      'LMHC MH16908 — Florida',
      'Bilingual: English & Portuguese',
      'University of Central Florida, 2008',
    ],
    schema: {
      jobTitle: 'Licensed Mental Health Counselor',
      hasCredential: ['LMHC'],
      knowsAbout: ['Depression', 'Anxiety', 'Couples Counseling', 'Family Therapy', 'Multicultural Counseling', 'LGBT Therapy'],
      alumniOf: 'University of Central Florida',
      worksFor: 'EQ Counseling & Testing LLC',
      telephone: '+1-407-461-9721',
      address: '390 N Orange Ave, Suite 2300, Orlando, FL 32801',
    },
  },
  {
    slug: 'veronica-dickens',
    name: 'Veronica Dickens',
    title: 'Licensed Marriage and Family Therapist',
    image: '/images/veronica-dickens.png',
    bio: 'With 20 years of experience across juvenile, dependency, and mental health settings, Veronica specializes in reframing family systems and creating meaningful change for individuals, couples, and families.',
    specialties: [
      'Marriage & Family Therapy',
      'Juvenile & Adolescent Issues',
      'Dependency & Mental Health Facilities',
      'Family Systems Reframing',
      'Adult & Child Counseling',
    ],
    testing: [],
    credentials: [
      'LMFT — Licensed Marriage and Family Therapist',
      '20+ Years of Clinical Experience',
    ],
    schema: {
      jobTitle: 'Licensed Marriage and Family Therapist',
      hasCredential: ['LMFT'],
      knowsAbout: ['Marriage Therapy', 'Family Therapy', 'Juvenile Counseling', 'Adolescent Issues'],
      worksFor: 'EQ Counseling & Testing LLC',
      telephone: '+1-407-461-9721',
      address: '390 N Orange Ave, Suite 2300, Orlando, FL 32801',
    },
  },
  {
    slug: 'betzaida-garcia',
    name: 'Betzaida Garcia',
    title: 'Licensed Mental Health Counselor',
    image: '/images/therapist-5.png',
    bio: "Betzaida is a warm, culturally sensitive LMHC who creates a safe space where clients feel heard and empowered. She works with adults, adolescents, and couples using evidence-based approaches tailored to each person's unique goals.",
    specialties: [
      'Individual & Couples Counseling',
      'Anxiety & Stress Management',
      'Depression & Mood Disorders',
      'Life Transitions & Adjustment',
      'Trauma-Informed Care',
      'Cultural & Identity Issues',
    ],
    testing: [],
    credentials: [
      'LMHC — Licensed Mental Health Counselor, Florida',
    ],
    schema: {
      jobTitle: 'Licensed Mental Health Counselor',
      hasCredential: ['LMHC'],
      knowsAbout: ['Individual Counseling', 'Couples Counseling', 'Anxiety', 'Depression', 'Trauma-Informed Care'],
      worksFor: 'EQ Counseling & Testing LLC',
      telephone: '+1-407-461-9721',
      address: '390 N Orange Ave, Suite 2300, Orlando, FL 32801',
    },
  },
]

export function getTherapistBySlug(slug: string): Therapist | undefined {
  return therapists.find((t) => t.slug === slug)
}
