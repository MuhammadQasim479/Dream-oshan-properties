/* =====================================================================
   AWTAD WEBSITE — ALL CONTENT LIVES HERE
   Edit text, numbers, links and images in this file only.
   (Colors & fonts are in /tailwind.config.js)

   Sections:
   1. IMAGES HELPER      6. HOME PAGE
   2. COMPANY INFO       7. PROPERTIES (list + detail pages)
   3. NAVBAR             8. TEAM (page + members)
   4. FOOTER             9. CONTACT PAGE
   5. SHARED / FAQ      10. TESTIMONIALS
   Icon names available: map, shield, trending, sun, award, users, search,
   calendar, file, key, home, check, phone, mail, clock, instagram
   ===================================================================== */

/* ---------- 1. IMAGES HELPER ---------- */
// u('<unsplash photo id>', width) builds a direct Unsplash link. You can also paste any full image URL instead.
const u = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: u('1512453979798-5ea266f8880c', 2200), // Dubai skyline
  about: u('1582672060674-bc2bd808a8b5', 1400), // Dubai Marina
  // cta: u('1518684079-3c830dcef090', 2000), // Dubai
}

/* ---------- 2. COMPANY INFO ---------- */
export const company = {
  name: 'Dream Oshan Properties',
  logoSub: 'Development',
  fullName: 'Dream Oshan Properties',
  city: 'Dubai', // shown after project locations, e.g. "Business Bay, Dubai"
  address: 'Business Bay, Dubai, United Arab Emirates', // TODO: replace with real office address
  phones: ['+971582582639', '+971 52 958 8539'], // TODO: replace with real numbers
  whatsapp: '+971582582639', // digits only, with country code — TODO: replace
  email: 'dreamoshanpropeties@gmail.com', // TODO: confirm
  instagram: 'instagram.com', // TODO: confirm
  hours: ['Mon – Fri: 9:00 – 18:00', 'Sat: 10:00 – 16:00 · Sun: By appointment'], // TODO: confirm
}

/* ---------- 3. NAVBAR ---------- */
export const nav = {
  links: [
    { label: 'Home', to: '/' },
    { label: 'Properties', to: '/properties' },
    // { label: 'About Us', to: '/#about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Contact', to: '/contact' },
  ],
  cta: { label: 'Register Interest', to: '/contact' },
}

/* ---------- 4. FOOTER ---------- */
export const footer = {
  blurb: 'Building landmarks that define the future of luxury living.',
  quickLinksTitle: 'Quick Links',
  contactTitle: 'Contact Us',
  newsletter: {
    title: 'Stay Updated',
    text: 'Subscribe for the latest project updates.',
    button: 'Subscribe',
    success: "Thank you — you're on the list.",
  },
  copyright: 'Awtad Development. All rights reserved.', // year is added automatically
}

/* ---------- 5. SHARED / FAQ (used on Home + Contact) ---------- */
export const faq = {
  eyebrow: 'FAQ',
  title: 'Frequently Asked Questions',
  items: [ // TODO: replace with real FAQs
    { q: 'How can I register my interest in a project?', a: 'Use the form on the Contact page or the Register Interest button on any project page. Our sales team will contact you with availability and pricing.' },
    { q: 'Can I visit a project site?', a: 'Yes. Contact us to arrange a site visit and a meeting with a sales consultant.' },
    { q: 'Do you offer payment plans?', a: 'Flexible payment plans are available on selected projects. Our team will walk you through the options that fit you.' },
    { q: 'When will the projects be completed?', a: 'Each project page shows its expected completion date and current construction status.' },
  ],
}

/* ---------- 6. HOME PAGE ---------- */
export const home = {
  hero: {
    eyebrow: 'Defining Luxury Living in Dubai',
    titleBefore: 'Building',
    titleHighlight: 'Landmarks',
    titleAfter: 'of Tomorrow',
    text: 'Premium developments combining world-class design, strategic locations, and enduring value across the United Arab Emirates.',
    primaryCta: { label: 'Explore Our Projects', to: '/properties' },
    secondaryCta: { label: 'Register Interest', to: '/contact' },
  },
  featured: {
    eyebrow: 'Featured Projects',
    title: ['Our Latest', 'Developments'], // two lines
    linkLabel: 'View All Projects',
    count: 3, // how many projects to show
  },
  stats: [
    { value: 14, suffix: '+', label: 'Years of Excellence' },
    { value: 4, suffix: '', label: 'Active Projects' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
  ],
  about: {
    eyebrow: 'About Awtad',
    title: 'A Legacy of Excellence in Property Development',
    paragraphs: [
      'For over 14 years, Awtad has been at the forefront of property development in the United Arab Emirates, creating spaces that inspire and endure. Our commitment to quality, innovation, and client satisfaction has established us as one of the most trusted names in the industry.',
      'Every project we undertake reflects our deep understanding of the UAE market and our dedication to creating communities that stand the test of time.',
    ],
    linkLabel: 'Discover Our Story',
    badgeValue: '14+',
    badgeLabel: 'Years of Excellence',
  },
  whyInvest: {
    eyebrow: 'Invest in Dubai',
    title: 'Why Dubai, Why Now',
    points: [ // TODO: review wording / add verified figures before launch
      { icon: 'map', title: 'Global Hub', text: 'A world-class crossroads for business, tourism and trade, connected to the world through its airports and ports.' },
      { icon: 'shield', title: 'Safe & Stable', text: 'One of the safest and most welcoming cities in the world to live, work and invest in.' },
      { icon: 'trending', title: 'Investor Friendly', text: 'Freehold ownership for foreign buyers in designated areas, no personal income tax and strong rental demand.' },
      { icon: 'sun', title: 'Lifestyle', text: 'Beaches, skyline views, dining and year-round sunshine right on your doorstep.' },
    ],
  },
  values: {
    eyebrow: 'Why Awtad',
    title: 'Built on Values That Endure',
    items: [
      { icon: 'shield', title: 'Trust & Integrity', text: 'Built on transparency and a proven track record of delivering on every promise.' },
      { icon: 'award', title: 'Premium Quality', text: 'Every detail is crafted to the highest international standards of luxury.' },
      { icon: 'trending', title: 'Investment Value', text: 'Strategic locations and timeless designs that grow in value year after year.' },
      { icon: 'users', title: 'Client Focused', text: 'Personalized service from first inquiry to handover and beyond.' },
    ],
  },
  locations: {
    eyebrow: 'Locations',
    title: 'Prime Addresses Across Dubai',
    areas: ['Business Bay', 'Dubai Marina', 'Jumeirah Village Circle'], // must match each project's "location" below
  },
  process: {
    eyebrow: 'How It Works',
    title: 'Your Journey to Ownership',
    steps: [
      { icon: 'search', title: 'Discover', text: 'Browse our projects and shortlist the residences that fit your needs.' },
      { icon: 'calendar', title: 'Visit', text: 'Meet our team and tour the project site or sales gallery.' },
      { icon: 'file', title: 'Reserve', text: 'Choose your unit and payment plan, then secure it with a clear agreement.' },
      { icon: 'key', title: 'Handover', text: 'We keep you updated through construction until the keys are in your hand.' },
    ],
  },
  calculator: {
    eyebrow: 'Plan Ahead',
    title: 'Estimate Your Monthly Payment',
    text: 'Get a quick indication of what financing could look like. Our team will confirm exact plans and bank options for your chosen unit.',
    currency: 'AED',
    disclaimer: 'Indicative only. Not a financing offer.',
    defaults: { price: 1500000, down: 20, years: 25, rate: 4.5 },
    // slider ranges: [min, max, step]
    ranges: { price: [500000, 10000000, 50000], down: [20, 60, 5], years: [5, 25, 1], rate: [3, 9, 0.1] },
  },
  cta: {
    titleLine1: 'Your Future Home',
    titleLine2: 'Awaits',
    text: 'Contact our team today to explore available properties and take the first step towards exceptional living.',
    primaryCta: { label: 'Register Your Interest', to: '/contact' },
    secondaryCta: { label: 'Browse Projects', to: '/properties' },
  },
}

/* ---------- 7. PROPERTIES ---------- */
export const propertiesPage = {
  eyebrow: 'Our Portfolio',
  title: 'Properties & Projects',
  searchPlaceholder: 'Search properties…',
  filters: ['All', 'Upcoming', 'Under Construction', 'Ready'], // project "category" must match one of these
  empty: 'No projects match your search yet.',
}

// Text on every property detail page
export const propertyPage = {
  back: 'All Properties',
  registerCta: 'Register Interest',
  visitSite: 'Visit Project Site',
  overviewEyebrow: 'Overview',
  aboutPrefix: 'About', // "About RAND"
  factsTitle: 'Key Facts',
  amenitiesEyebrow: 'Amenities',
  amenitiesTitle: 'Designed for Everyday Luxury',
  galleryEyebrow: 'Gallery',
  galleryTitle: 'A Closer Look',
  availabilityEyebrow: 'Availability',
  availabilityTitle: 'Choose Your Residence',
  availabilityNote: 'currently available. Register your interest to reserve.',
  locationEyebrow: 'Location',
  locationPrefix: 'Find', // "Find RAND"
  inquiry: {
    eyebrow: 'Register Interest',
    titleBefore: 'Make',
    titleAfter: 'Yours',
    text: 'Leave your details and our sales team will contact you with availability, pricing and payment plans.',
    button: 'Send Inquiry',
    successTitle: 'Thank you!',
    successText: "We'll be in touch shortly.",
  },
  othersEyebrow: 'Explore More',
  othersTitle: 'Other Developments',
}



// Luxury interiors (living rooms, kitchens, bedrooms)
const interior = [
  u('1600585154340-be6161a56a0c'),
  u('1618221195710-dd6b41faaea6'),
  u('1600607687939-ce8a6c25118c'),
  u('1560448204-e02f11c3d0e2'),
  u('1600566753190-17f0baa2a6c3'),
]

export const projects = [
  {
    id: 1,
    slug: 'skyline-gate',
    name: 'Skyline Gate',
    location: 'Business Bay',
    status: 'Under Construction',
    category: 'Under Construction',
    external: true,
    externalUrl: 'https://example.com', // TODO: real project site
    kicker: 'Showcase Project',
    tagline: 'Visit the dedicated project site',
    units: null,
    image: u('1512453979798-5ea266f8880c'), // Dubai skyline at dusk
    completion: 'Q4 2027',
    type: 'Luxury Apartments',
    mapQuery: 'Business Bay, Dubai, UAE',
    description: [
      "Skyline Gate is Awtad's showcase development, a landmark tower of sculpted terraces and floor-to-ceiling glazing rising in the heart of Business Bay.",
      'The project has its own dedicated website with full floor plans, pricing and live availability.',
    ],
    amenities: ['Infinity Pool', 'Fitness Studio', 'Sky Lounge', '24/7 Security', 'Covered Parking', 'Landscaped Gardens'],
    unitTypes: [
      { type: '1 Bedroom', size: '750 – 950 sq ft' },
      { type: '2 Bedrooms', size: '1,200 – 1,450 sq ft' },
      { type: '3 Bedrooms', size: '1,700 – 2,050 sq ft' },
    ],
    gallery: [u('1512453979798-5ea266f8880c'), ...interior.slice(0, 2)],
  },
  {
    id: 2,
    slug: 'marina-icon',
    name: 'Marina Icon',
    location: 'Dubai Marina',
    status: 'Under Construction',
    category: 'Under Construction',
    tagline: 'The waterfront life you are looking for… resides here',
    units: 1,
    image: u('1582672060674-bc2bd808a8b5'), // Dubai Marina towers
    completion: 'Q2 2027',
    type: 'Waterfront Apartments',
    mapQuery: 'Dubai Marina, Dubai, UAE',
    description: [
      'Marina Icon brings together contemporary design and Arabian architectural motifs, with a signature patterned facade that defines the marina skyline.',
      'Waterfront living at its finest: residences moments from the promenade, beaches, dining and the metro.',
    ],
    amenities: ['Rooftop Terrace', 'Gym', "Children's Play Area", 'Smart Access', 'Underground Parking', 'Retail Podium'],
    unitTypes: [
      { type: '2 Bedrooms', size: '1,150 – 1,350 sq ft' },
      { type: '3 Bedrooms', size: '1,600 – 1,900 sq ft' },
    ],
    gallery: [u('1582672060674-bc2bd808a8b5'), ...interior.slice(1, 3)],
  },
  {
    id: 3,
    slug: 'rand',
    name: 'RAND',
    location: 'Jumeirah Village Circle',
    status: 'Under Construction',
    category: 'Under Construction',
    tagline: 'Your new address… where sophistication meets comfort',
    units: 4,
    image: u('1518684079-3c830dcef090'), // Dubai modern high-rises
    completion: 'Q1 2027',
    type: 'Boutique Residences',
    mapQuery: 'Jumeirah Village Circle, Dubai, UAE',
    description: [
      'RAND is your new address, where sophistication meets comfort. Landscaped balconies and warm stone textures give the building a refined, residential character.',
      'Thoughtfully planned layouts, generous natural light and premium finishes come as standard in every apartment.',
    ],
    amenities: ['Green Balconies', 'Fitness Room', 'Resident Lounge', 'CCTV Security', 'Covered Parking', 'High-Speed Lifts'],
    unitTypes: [
      { type: '1 Bedroom', size: '700 – 880 sq ft' },
      { type: '2 Bedrooms', size: '1,100 – 1,300 sq ft' },
    ],
    gallery: [u('1518684079-3c830dcef090'), ...interior.slice(2, 4)],
  },
   {
    id: 4,
    slug: 'burj-vista',
    name: 'Burj Vista',
    location: 'Downtown Dubai',
    status: 'Under Construction',
    category: 'Under Construction',
    tagline: 'Live beneath the world’s most iconic skyline',
    units: 4,
    image: u('1735320860585-08578659aec3'),
    completion: 'Q3 2027',
    type: 'Luxury Residences',
    mapQuery: 'Downtown Dubai, Dubai, UAE',
    description: [
      'Burj Vista stands in the heart of Downtown Dubai, with commanding views of the Burj Khalifa and the city skyline from its upper residences.',
      'Refined architecture, floor-to-ceiling glazing and premium finishes create an address that is as strong an investment as it is a home, steps from Dubai Mall, the fountains and the metro.',
    ],
    amenities: ['Sky Lounge', 'Infinity Pool', 'Fitness Studio', 'Concierge', 'Valet Parking', '24/7 Security'],
    unitTypes: [
      { type: '1 Bedroom', size: '750 – 950 sq ft' },
      { type: '2 Bedrooms', size: '1,250 – 1,500 sq ft' },
      { type: '3 Bedrooms', size: '1,800 – 2,200 sq ft' },
    ],
    gallery: [u('1735320860585-08578659aec3'), ...interior.slice(0, 2)],
  },

  // ---------- NEW ----------
  {
    id: 5,
    slug: 'palm-crest',
    name: 'Palm Crest',
    location: 'Palm Jumeirah',
    status: 'Under Construction',
    category: 'Under Construction',
    tagline: 'Iconic island living, redefined',
    units: 2,
    image: u('1546412414-e1885259563a'), // Palm Jumeirah / coastline
    completion: 'Q4 2027',
    type: 'Beachfront Residences',
    mapQuery: 'Palm Jumeirah, Dubai, UAE',
    description: [
      'Palm Crest offers rare beachfront living on the Palm Jumeirah, with sweeping views of the Arabian Gulf and the Dubai skyline beyond.',
      'Generous terraces, double-height lobbies and premium finishes create a resort-style address for residents and investors alike.',
    ],
    amenities: ['Private Beach Access', 'Infinity Pool', 'Spa & Wellness', 'Concierge', 'Valet Parking', 'Residents Club'],
    unitTypes: [
      { type: '2 Bedrooms', size: '1,400 – 1,700 sq ft' },
      { type: '3 Bedrooms', size: '2,000 – 2,400 sq ft' },
      { type: 'Penthouse', size: '4,200 – 5,000 sq ft' },
    ],
    gallery: [u('1546412414-e1885259563a'), ...interior.slice(1, 3)],
  },
    {
    id: 6,
    slug: 'marina-reflections',
    name: 'Marina Reflections',
    location: 'Dubai Marina',
    status: 'Under Construction',
    category: 'Under Construction',
    tagline: 'Waterfront living, mirrored in the marina',
    units: 3,
    image: u('1768463852068-cc277b8baf35'),
    completion: 'Q2 2028',
    type: 'Waterfront Apartments',
    mapQuery: 'Dubai Marina, Dubai, UAE',
    description: [
      'Marina Reflections rises along the Dubai Marina waterfront, with sweeping views of the water and the glittering skyline from nearly every residence.',
      'Calm promenades, smart-home features and efficient layouts make it ideal for modern families and long-term investment.',
    ],
    amenities: ['Waterfront Promenade', 'Sky Gym', 'Co-working Lounge', 'Smart Home', 'Kids Splash Pad', 'Covered Parking'],
    unitTypes: [
      { type: 'Studio', size: '430 – 560 sq ft' },
      { type: '1 Bedroom', size: '720 – 900 sq ft' },
      { type: '2 Bedrooms', size: '1,150 – 1,400 sq ft' },
    ],
    gallery: [u('1768463852068-cc277b8baf35'), ...interior.slice(2, 5)],
  },
]

/* ---------- 8. TEAM ---------- */
export const teamPage = {
  eyebrow: 'Our Team',
  title: 'The People Behind Awtad',
  text: 'Experienced professionals united by one goal: building landmarks that stand the test of time.',
  gridEyebrow: 'Meet the Team',
  gridTitle: 'Experts Dedicated to You',
  viewProfile: 'View Profile',
  experienceSuffix: 'experience',
  back: 'Back to Our Team',
  moreEyebrow: 'More from our team',
  moreTitle: 'Meet Our Other Experts',
  labels: { whatsapp: 'WhatsApp', email: 'Email', experience: 'Experience', speaks: 'Speaks', role: 'Role' },
  notFound: 'Team member not found',
}

/*
  TEAM MEMBERS — leadership:true members appear in the big 30/70 sections at the top (in order);
  everyone else appears as cards. Add a member by copying a block (unique slug).
  NOTE: all names, bios and contacts are placeholders.
*/




const p = (id) => u(id, 900)
// export const team = [
//   {
//     slug: 'khalid-al-mansoori', name: 'Khalid Al Mansoori', title: 'Chief Executive Officer', leadership: true,
//     experience: '20+ Years', languages: ['English', 'Arabic'], phone: '971500000000', email: 'ceo@awtad.ae',
//     image: p('1560250097-0b93528c311a'),
//     intro: 'Visionary leader steering Awtad towards landmark developments across Dubai.',
//     bio: [
//       'A seasoned executive with a proven record of conceiving and delivering landmark residential and mixed-use developments across the UAE. He leads Awtad with a clear focus on quality, transparency and long-term value for every client and partner.',
//       'Under his direction, the company has grown into one of the most trusted names in UAE real estate, combining international design standards with a deep understanding of the local market.',
//     ],
//   },
//   {
//     slug: 'saeed-al-nuaimi', name: 'Saeed Al Nuaimi', title: 'Chief Operating Officer', leadership: true,
//     experience: '15+ Years', languages: ['English', 'Arabic'], phone: '971500000000', email: 'coo@awtad.ae',
//     image: p('1472099645785-5658abf4ff4e'),
//     intro: 'Drives operational excellence from groundbreaking to handover.',
//     bio: [
//       'Responsible for translating strategy into delivery, he oversees project execution, contractor partnerships and quality control across every active development.',
//       'His disciplined, detail-driven approach ensures each Awtad project is completed on schedule and to the highest standard.',
//     ],
//   },
//   {
//     slug: 'maryam-al-suwaidi', name: 'Maryam Al Suwaidi', title: 'Head of Sales',
//     experience: '10+ Years', languages: ['English', 'Arabic'], phone: '971500000000', email: 'sales@awtad.ae',
//     image: p('1573496359142-b8d87734a5a2'),
//     intro: 'Guides buyers and investors to the right property with clarity and care.',
//     bio: [
//       'A natural communicator with a proven ability to build trust quickly and deliver white-glove service. She guides clients through every step, from first inquiry to key handover.',
//       'Skilled at presenting available units, structuring flexible purchase plans and ensuring a seamless, personalized experience.',
//     ],
//   },
//   {
//     slug: 'ahmed-al-zaabi', name: 'Ahmed Al Zaabi', title: 'Senior Property Consultant',
//     experience: '8+ Years', languages: ['English', 'Arabic', 'Hindi'], phone: '971500000000', email: 'ahmed@awtad.ae',
//     image: p('1507003211169-0a1dd7228f2d'),
//     intro: 'Expert advice on investment-grade units across Dubai.',
//     bio: [
//       "Specialises in advising local and international investors on high-yield opportunities across Dubai's fastest-growing districts.",
//       'Known for honest guidance, market insight and a client-first mindset.',
//     ],
//   },
//   {
//     slug: 'fatima-al-marri', name: 'Fatima Al Marri', title: 'Marketing Manager',
//     experience: '9+ Years', languages: ['English', 'Arabic'], phone: '971500000000', email: 'marketing@awtad.ae',
//     image: p('1580489944761-15a19d654956'),
//     intro: 'Shapes the Awtad brand story and project launches.',
//     bio: [
//       'Leads brand, digital and launch campaigns that put every Awtad project in front of the right audience.',
//       'Combines creative direction with data-led marketing to deliver measurable results.',
//     ],
//   },
//   {
//     slug: 'yousuf-al-shamsi', name: 'Yousuf Al Shamsi', title: 'Project Manager',
//     experience: '12+ Years', languages: ['English', 'Arabic'], phone: '971500000000', email: 'projects@awtad.ae',
//     image: p('1519085360753-af0119f7cbe7'),
//     intro: 'Keeps every build on time, on budget and on standard.',
//     bio: [
//       'Coordinates design teams, consultants and contractors to deliver complex developments safely and on schedule.',
//       'Brings rigorous planning and hands-on site leadership to every project.',
//     ],
//   },
//   {
//     slug: 'aisha-al-ketbi', name: 'Aisha Al Ketbi', title: 'Customer Relations Manager',
//     experience: '7+ Years', languages: ['English', 'Arabic'], phone: '971500000000', email: 'care@awtad.ae',
//     image: p('1594744803329-e58b31de8bf2'),
//     intro: 'Looking after every client long after handover.',
//     bio: [
//       'Ensures every client enjoys a smooth journey from reservation to handover and after-sales support.',
//       'Passionate about service that feels personal, responsive and reliable.',
//     ],
//   },
//   {
//     slug: 'hamad-al-dhaheri', name: 'Hamad Al Dhaheri', title: 'Finance Manager',
//     experience: '11+ Years', languages: ['English', 'Arabic'], phone: '971500000000', email: 'finance@awtad.ae',
//     image: p('1500648767791-00dcc994a43e'),
//     intro: 'Safeguarding financial integrity across every project.',
//     bio: [
//       'Oversees budgeting, payment plans and financial governance with a strong commitment to transparency.',
//       'Works closely with partners and banks to keep every transaction smooth and compliant.',
//     ],
//   },
//   {
//     slug: 'noor-al-falasi', name: 'Noor Al Falasi', title: 'Legal & Compliance Officer',
//     experience: '9+ Years', languages: ['English', 'Arabic'], phone: '971500000000', email: 'legal@awtad.ae',
//     image: p('1438761681033-6461ffad8d80'),
//     intro: 'Ensuring every agreement is clear, fair and fully compliant.',
//     bio: [
//       'Oversees contracts, regulatory compliance and sales documentation so that every transaction is secure and transparent.',
//       'Works closely with clients and authorities to make ownership simple and worry-free.',
//     ],
//   },
// ]

// src/data/team.js
export const team = [
  {
    slug: 'waqar-rasheed', name: 'Waqar Rasheed', title: 'Chief Executive Officer', leadership: true,
    experience: '10+ Years', languages: ['English', 'Urdu'], phone: '+971 58 258 2639', email: 'waqar@dreamoshanproperties.com',
    image: '/team/ceo.png',
    intro: 'Leads the company with a clear vision for quality, trust and long-term client value.',
    bio: [
      'A seasoned real estate leader with a strong record of guiding buyers and investors toward the right opportunities across Dubai. He leads the company with a focus on transparency, quality and long-term value for every client.',
      'Under his direction, the team has grown into a trusted name, combining deep market knowledge with a client-first approach.',
    ],
  },
   {
    slug: 'talha-munir', name: 'Talha Munir', title: 'Managing Director', leadership: true,
    experience: '10+ Years', languages: ['English', 'Urdu', 'Arabic'], phone: '971529588539', email: 'talha@dreamoshanproperties.com',
    image: '/team/md.png',
    intro: 'Drives the company’s growth with a focus on trust, quality and client success.',
    bio: [
      'As Managing Director, he oversees the company’s strategy, operations and growth, ensuring every client receives honest advice and a seamless property experience across Dubai.',
      'With a strong understanding of the local market and a client-first mindset, he leads the team in delivering lasting value to buyers, sellers and investors.',
    ],
  },
  {
    slug: 'nadir-ali', name: 'Nadir Ali', title: 'Sales Manager',
    experience: '8+ Years', languages: ['English', 'Urdu'], phone: '971500000000', email: 'nadir@dreamoshanproperties.com',
    image: '/team/salesnadir.png',
    intro: 'Expert advice on investment-grade properties across Dubai.',
    bio: [
      "Specialises in advising local and international investors on high-yield opportunities across Dubai's fastest-growing districts.",
      'Known for honest guidance, market insight and a client-first mindset.',
    ],
  },
  {
    slug: 'salman-khalid', name: 'Salman Khalid', title: 'Sr. Operations Manager',
    experience: '9+ Years', languages: ['English', 'Urdu'], phone: '971500000000', email: 'salman@dreamoshanproperties.com',
    image: '/team/salman.png',
    intro: 'Keeps every deal and process running smoothly behind the scenes.',
    bio: [
      'Oversees day-to-day operations, documentation and coordination between teams so that every transaction moves forward without delay.',
      'His organised, detail-driven approach ensures clients enjoy a smooth and reliable experience.',
    ],
  },
  {
    slug: 'muhammad-shah-zaib', name: 'Muhammad Shah Zaib', title: 'Operations Manager',
    experience: '7+ Years', languages: ['English', 'Urdu'], phone: '971500000000', email: 'shahzaib@dreamoshanproperties.com',
    image: '/team/salesmuhammadshah.png',
    intro: 'Coordinates the details that make every transaction seamless.',
    bio: [
      'Manages operational workflows, client paperwork and team coordination to keep every property deal on track.',
      'Brings a dependable, hands-on approach to every task.',
    ],
  },
  {
    slug: 'faizan-abbas', name: 'Faizan Abbas', title: 'Sales Supervisor',
    experience: '6+ Years', languages: ['English', 'Urdu'], phone: '971500000000', email: 'faizan@dreamoshanproperties.com',
    image: '/team/faizan%20abbas.png',
    intro: 'Leads the sales floor with energy and honest advice.',
    bio: [
      'Supervises a team of property consultants and personally assists clients in finding properties that match their goals and budget.',
      'Known for clear communication and dependable follow-up.',
    ],
  },
  {
    slug: 'ehsan-javed', name: 'Ehsan Javed', title: 'Sales Supervisor',
    experience: '6+ Years', languages: ['English', 'Urdu'], phone: '971500000000', email: 'ehsan@dreamoshanproperties.com',
    image: '/team/ehsan%20jawved.png',
    intro: 'Turns client requirements into the right property match.',
    bio: [
      'Supports clients from first inquiry to closing, with a strong focus on understanding what they truly need.',
      'Combines market knowledge with a friendly, professional approach.',
    ],
  },
  {
    slug: 'nadeem-irfan', name: 'Nadeem Irfan', title: 'Marketing Specialist',
    experience: '5+ Years', languages: ['English', 'Urdu'], phone: '971500000000', email: 'nadeem@dreamoshanproperties.com',
    image: '/team/nadeemirfan.png',
    intro: 'Puts every property in front of the right audience.',
    bio: [
      'Creates digital campaigns and property promotions that attract quality leads and showcase every listing at its best.',
      'Combines creative thinking with data-led marketing to deliver measurable results.',
    ],
  },
  {
    slug: 'abdul-rehman', name: 'Abdul Rehman', title: 'Marketing Specialist',
    experience: '5+ Years', languages: ['English', 'Urdu'], phone: '971500000000', email: 'abdul@dreamoshanproperties.com',
    image: '/team/abdulrehman.png',
    intro: 'Builds the brand story behind every listing.',
    bio: [
      'Handles social media, content and promotional campaigns that grow the brand and bring in new clients.',
      'Passionate about presenting properties in a clear, attractive and trustworthy way.',
    ],
  },
  {
    slug: 'muhammad-anas', name: 'Muhammad Anas', title: 'Marketing Specialist',
    experience: '4+ Years', languages: ['English', 'Urdu'], phone: '971500000000', email: 'anas@dreamoshanproperties.com',
    image: '/team/muhammadanas.png',
    intro: 'Helps new buyers and investors discover the right opportunities.',
    bio: [
      'Manages lead generation and online campaigns, connecting interested clients with the right property consultants.',
      'Brings creativity and consistency to every marketing project.',
    ],
  },
]






/* ---------- 9. CONTACT PAGE ---------- */
export const contactPage = {
  eyebrow: 'Contact Us',
  title: "Let's Start a Conversation",
  text: 'Questions about a project, availability or payment plans? Our team is happy to help.',
  cards: { visit: 'Visit Us', call: 'Call Us', email: 'Email Us', hours: 'Working Hours' },
  whatsappLabel: 'WhatsApp',
  form: {
    title: 'Send us a',
    titleHighlight: 'message',
    text: 'We typically respond within one business day.',
    projectPlaceholder: 'Interested in (optional)',
    generalOption: 'General inquiry',
    button: 'Send Message',
    successTitle: 'Thank you!',
    successText: "Your message has been received. We'll get back to you shortly.",
    again: 'Send another message',
  },
  mapQuery: 'Business Bay, Dubai, UAE', // TODO: set to your real office
  mapTitle: 'Awtad Head Office',
}

/* ---------- 10. TESTIMONIALS ---------- */
// Add REAL client testimonials (with permission). The section stays hidden while this list is empty.
export const testimonialsSection = { eyebrow: 'Testimonials', title: 'What Our Clients Say' }
export const testimonials = [
  // { name: 'Client Name', role: 'Apartment Owner, Project Name', quote: 'Their exact words…' },
]

/* ---------- Derived helpers (no need to edit) ---------- */
export const leaders = team.filter((m) => m.leadership)
export const members = team.filter((m) => !m.leadership)
export const getMember = (slug) => team.find((m) => m.slug === slug)
export const getProject = (slug) => projects.find((x) => x.slug === slug)
export const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('')
