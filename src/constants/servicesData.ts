export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // To be mapped to icons
  color: string;
  features: string[];
  benefits: string[];
  featured: boolean;
  image?: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: 'residential-cleaning',
    title: 'Residential Cleaning',
    featured: true,
    shortDescription:
      'Complete home cleaning services tailored for apartments and houses.',
    fullDescription:
      'Our residentail cleaning service is designed to give you back your time. We cover everything from dusting and vacuuming to deep cleaning kitchens and bathrooms. Our team uses safe, effective products to ensure your home is healthy and spotless.',
    iconName: 'Home',
    color: 'bg-blue-500',
    features: [
      'Kitchen Deep Clean',
      'Bathroom Sanitization',
      'Dusting & Vacuuming',
      'Floor Mopping',
    ],
    benefits: [
      'Detailed professional cleaning',
      'Healthier living environment',
      'Flexible scheduling',
      'Eco-friendly products',
    ],
  },
  {
    slug: 'villa-cleaning',
    title: 'Villa Cleaning',
    featured: true,
    shortDescription:
      'Specialized deep cleaning for large villas including outdoor areas.',
    fullDescription:
      'Villas require a higher level of care and attention. Our specialized villa cleaning service includes intensive indoor cleaning, window washing, and outdoor area maintenance. We treat your estate with the premium care it deserves.',
    iconName: 'Sparkles',
    color: 'bg-indigo-500',
    features: [
      'Exterior Pressure Wash',
      'Glass & Mirror Polishing',
      'Intensive Floor Care',
      'Balcony Cleaning',
    ],
    benefits: [
      'Premium handling of luxury properties',
      'Complete indoor & outdoor care',
      'High-tech equipment used',
      'Supervisor-led teams',
    ],
  },
  {
    slug: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    featured: true,
    shortDescription:
      'Professional cleaning for offices, retail stores, and warehouses.',
    fullDescription:
      'Maintain a productive and healthy workspace with our commercial cleaning solutions. We offer flexible after-hours services to ensure zero disruption to your business operations.',
    iconName: 'Building2',
    color: 'bg-emerald-500',
    features: [
      'Office Desk Sanitization',
      'Common Area Cleaning',
      'Trash Removal',
      'Commercial Floor Care',
    ],
    benefits: [
      'Improved employee productivity',
      'Professional business appearance',
      'Safe and hygienic workspace',
      'Tailored cleaning schedules',
    ],
  },
  {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    featured: true,
    shortDescription:
      'Extra-thorough cleaning targeting grime and hard-to-reach places.',
    fullDescription:
      'Our deep cleaning goes beyond the surface. We target hidden dust, grease, and grime in areas often overlooked in regular cleaning. Perfect for move-ins, move-outs, or seasonal refreshes.',
    iconName: 'Waves',
    color: 'bg-cyan-500',
    features: [
      'Inside Cabinet Cleaning',
      'Appliance Deep Scrub',
      'Grout Cleaning',
      'Air Vent Dusting',
    ],
    benefits: [
      'Eliminates hidden bacteria & allergens',
      'Restores surfaces to original shine',
      'Perfect for life transitions',
      'Intensive attention to detail',
    ],
  },
  {
    slug: 'hourly-cleaning',
    title: 'Hourly Cleaning',
    featured: true,
    shortDescription:
      'Flexible cleaning sessions based on your specific needs.',
    fullDescription:
      'Our hourly cleaning service provides maximum flexibility. Whether you need help with ironing, organizing, or a quick refresh of specific rooms, you only pay for the time you need.',
    iconName: 'Clock',
    color: 'bg-amber-500',
    features: [
      'Flexible Scheduling',
      'On-demand Tasks',
      'Ironing Services',
      'Organization Help',
    ],
    benefits: [
      'Pay only for what you need',
      'Highly customizable tasks',
      'Same professional standard',
      'Perfect for busy schedules',
    ],
  },
  {
    slug: 'sofa-cleaning',
    title: 'Sofa & Upholstery',
    featured: true,
    shortDescription:
      'Advanced steam and dry cleaning for sofas and armchairs.',
    fullDescription:
      'Revitalize your furniture with our professional upholstery cleaning. We use advanced steam and dry cleaning techniques to remove deep-seated stains, dust mites, and odors from all types of fabrics.',
    iconName: 'Armchair',
    color: 'bg-rose-500',
    features: [
      'Stain Removal',
      'Steam Sanitization',
      'Odor Neutralization',
      'Fabric Protection',
    ],
    benefits: [
      'Extends furniture life',
      'Removes deep-seated allergens',
      'Safe for all fabric types',
      'Quick drying methods',
    ],
  },
  {
    slug: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    featured: false,
    shortDescription: 'Professional deep cleaning for rugs and carpets.',
    fullDescription:
      'Our carpet cleaning restores the color and texture of your rugs while eliminating bacteria and dust. We use specialized shampooing and steam extraction for the best results.',
    iconName: 'Wind',
    color: 'bg-teal-500',
    features: [
      'Industrial Vacuuming',
      'Spot Treatment',
      'Deodorizing',
      'Quick Drying Process',
    ],
    benefits: [
      'Improves indoor air quality',
      'Removes stubborn stains',
      'Softens carpet fibers',
      'Eliminates pet odors',
    ],
  },
  {
    slug: 'car-cleaning',
    title: 'Car Cleaning',
    featured: false,
    shortDescription:
      'Internal and external premium car wash at your doorstep.',
    fullDescription:
      'Keep your car in pristine condition with our doorstep car cleaning service. We provide thorough interior vacuuming, dashboard polishing, and exterior washing for maximum convenience.',
    iconName: 'Car',
    color: 'bg-slate-700',
    features: [
      'Interior Vacuuming',
      'Dashboard Polishing',
      'Leather Conditioning',
      'Window Polishing',
    ],
    benefits: [
      'Doorstep convenience',
      'Professional detailing tools',
      'Maintains resale value',
      'Spotless interior & exterior',
    ],
  },
];
