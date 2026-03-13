import colTownImg from './photo/1.jpg';
import riverColImg from './photo/2.jpg';
import countryResImg from './photo/3.png';
import cascadeLakesImg from './photo/4.jpg';
import elephantParkImg from './photo/5.jpg';
import presentationPdf from './photo/presentation.pdf';

export type Language = 'en' | 'ua';

export const translations = {
  en: {
    nav: {
      objects: 'Objects',
      map: 'Map of Objects',
      about: 'About',
      masterplan: 'Masterplan',
      investment: 'Investments',
      contact: 'Contact',
    },
    intro: {
      yield: 'Guaranteed price growth 50%',
      note: 'Minimum investment period 3 years',
      term: 'partnership with investors',
      price: 'From $300,000',
      cooperation: 'Discuss Cooperation'
    },
    infoblock: {
      title: 'Objects Air Survey',
      route: 'Get Route',
      youtube: 'YouTube Channel',
      telegram: 'Telegram Channel',
      info: 'Explore our latest developments in Kolonshchyna via satellite maps and air surveys.',
      location: 'Kolonshchyna Village'
    },
    hero: {
      badge: '',
      partners: 'Land assets from 1 to 100 Ha',
      title1: 'ZEMRESURS',
      title2: '', // Removed second part as requested name is single word or handled differently
      description: 'Land asset management company in the suburbs of Kyiv',
      explore: 'Download Presentation',
      exploreLink: presentationPdf,
      masterplan: 'Objects',
      est: 'EST. 2025',
      location: 'KYIV REGION',
    },
    contact: {
      back: 'Return to Portal',
      badge: 'Excellence Redefined',
      title1: 'Begin Your',
      title2: 'Transformation.',
      description: 'More than a residency. A statement of harmony, luxury, and the future of living at the gates of Kyiv.',
      whyUs: [
        {
          title: "Harmony of Nature",
          description: "Located at the gates of Kyiv, our resort offers a unique blend of mist-covered forests and modern comfort."
        },
        {
          title: "Exclusive Six-Zone System",
          description: "From active recreation to deep relaxation, our expertly designed zones cater to every lifestyle."
        },
        {
          title: "Investment Opportunity",
          description: "Not just a home, but a growing asset with high potential for passive income in a prime location."
        },
        {
          title: "Premium Service",
          description: "Our dedicated management team ensures your safety, privacy, and absolute comfort 24/7."
        },
        {
          title: "Sustainable Living",
          description: "Eco-friendly technologies and materials integrated into every residential zone for a greener future."
        },
        {
          title: "Strategic Location",
          description: "Fast access to the capital while maintaining complete silence and atmospheric forest views."
        }
      ],
      formTitle: 'Schedule a Consult',
      formSubtitle: 'Personalized attention for elite investors',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      messageLabel: 'Project Interest',
      placeholderName: 'e.g. Alexander Solonko',
      placeholderEmail: 'gmail@gmail.com',
      placeholderPhone: '+380 000 00 00',
      placeholderMessage: 'Your message...',
      submit: 'Submit Inquiry',
      processing: 'Processing...',
      successTitle: 'Request Received',
      successText: 'Our concierge team will reach out to you personally within the next 24 hours.',
      successAction: 'Send another message',
      formatValid: 'Format Valid',
      formatInvalid: 'Invalid Format',
      errorName: 'Please enter your full name (at least 2 characters).',
      errorBoth: 'Please check both your email and phone number format.',
      errorEmail: 'Invalid email address. Please use name@example.com',
      errorPhone: 'Invalid phone number. Min 10 digits required.',
      successInquiry: 'Your inquiry has been sent successfully!',
      privacyConsent: 'You confirm that you have read, accepted and agreed to the Privacy Policy.'
    },
    cooperation: {
      back: 'Return to Portal',
      badge: 'Strategic Partnership',
      title1: 'Discuss',
      title2: 'Cooperation.',
      description: 'ZEMRESURS is open to B2B collaborations, co-investment options, and strategic alliances.',
      whyUs: [
        {
          title: "B2B Opportunities",
          description: "Exclusive conditions for corporate partners and institutional investors."
        },
        {
          title: "Co-Investment",
          description: "Participate in early-stage development of high-yield residential zones."
        },
        {
          title: "Transparency",
          description: "Full access to financial models, legal documentation, and construction progress."
        },
        {
          title: "Tailored Approach",
          description: "We design partnership structures that fit your specific investment goals."
        },
        {
          title: "Joint Ventures",
          description: "Opportunities to develop specific zones or infrastructure objects together."
        },
        {
          title: "Priority Access",
          description: "Partners receive first look at our newest land acquisitions before the public."
        }
      ],
      formTitle: 'Propose Cooperation',
      formSubtitle: 'Direct line to our investment committee',
      nameLabel: 'Company Name / Representative',
      emailLabel: 'Corporate Email',
      phoneLabel: 'Direct Phone Line',
      messageLabel: 'Partnership Intent',
      placeholderName: 'e.g. Investment Group LLC',
      placeholderEmail: 'partners@company.com',
      placeholderPhone: '+380 000 00 00',
      placeholderMessage: 'Outline your proposal or interest...',
      submit: 'Send Proposal',
      processing: 'Processing...',
      successTitle: 'Proposal Received',
      successText: 'Our investment committee will review your proposal and contact you shortly.',
      successAction: 'Send another proposal',
      formatValid: 'Format Valid',
      formatInvalid: 'Invalid Format',
      errorName: 'Please enter a valid company or representative name.',
      errorBoth: 'Please check both your email and phone number format.',
      errorEmail: 'Invalid corporate email address.',
      errorPhone: 'Invalid phone number. Min 10 digits required.',
      successInquiry: 'Your proposal has been successfully transmitted!',
      privacyConsent: 'You confirm that you have read, accepted and agreed to the Privacy Policy.'
    },
    footer: {
      description: 'A masterpiece of nature and modern architecture. Exclusive residential zones at the gates of Kyiv. A unique ecosystem for life and investment, combining premium service, innovative technologies, and pristine natural landscapes.',
      nav: 'Navigation',
      legal: 'Legal',
      assistance: 'Assistance',
      office: 'Official Representative Office',
      address: 'Kyiv, IQ Business Center',
      rights: '© 2025 ZEMRESURS. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      home: 'Home',
      objects: 'Objects',
      map: 'Map of Objects',
      about: 'About',
      masterplan: 'Masterplan',
      investment: 'Investments',
      contact: 'Contact',
      city: 'Kyiv'
    },
    colTown: {
      badge: 'New Opportunity',
      title: 'Complex "COL-TOWN"',
      subtitle: 'Land Array 7.43 Ha',
      description: 'Combined by three land plots: 3.63 Ha, 1.9 Ha and 1.90 Ha. Half of the array (3.63 Ha) is fully forested area, the other half (3.8 Ha) is unique relief terrain – HILL. Soils are dry and sandy. Groundwater – deep occurrence.',
      infrastructure: 'Connection of the array to general power grids – 3 months. Laying of the access road with hard surface – two weeks under climatic conditions.',
      priceTitle: 'Cost of Land Array',
      priceSubtitle: 'On the day of signing the investment agreement',
      priceValue: '$ 550/are, or $ 490 000.00',
      capitalizationTitle: 'Total Project Capitalization',
      capitalizationValue: '$ 14.415 mln',
      constructionTitle: 'Construction Part',
      lakeTitle: 'Infrastructure Objects',
      lakeDescription: 'Serpentine lake of channel type with width 20 m and length 1 943 linear meters. Total area of the artificial lake – 38 800 m² – 3.88 Ha',
      housingTitle: 'Residential Infrastructure',
      housingDescription: 'Two-level terrace type houses – 22 units – 7.70 Ha',
      termTitle: 'Project Realization Term',
      termValue: '30 – 36 months',
      cadastralLink: 'View Cadastral Map',
      location: 'Bucha district, Makariv community, Kolonshchyna village council',
      infrastructureList: {
        title: 'Infrastructure Objects',
        items: [
          { name: 'Bath complex with outdoor pool', area: '0.55 Ha' },
          { name: 'Sports & Children\'s playground (Basketball, Tennis, Table tennis)', area: '0.75 Ha' },
          { name: 'Two-level house / Kindergarten (16 kids)', area: '0.12 Ha' },
          { name: 'Shop, Cafe, Pharmacy (single block)', area: '0.10 Ha' },
          { name: 'Hangar for sports gear (ATVs, Buggies, Bikes)', area: '0.12 Ha' },
          { name: 'Separate blocks (cold/hot tubs, changing rooms)', area: '0.15 Ha', count: '7 blocks' },
          { name: 'Backup generation & Fuel storage', area: '0.03 Ha' }
        ]
      },
      housingList: {
        title: 'Residential Infrastructure',
        items: [
          { name: 'Modular houses for rent', count: '37 units', area: '2.59 Ha' },
          { name: 'Terrace-type houses (new architecture)', count: '37 units', area: '2.59 Ha' }
        ]
      }
    },
    riverCol: {
      badge: 'New Project',
      title: 'Complex "RIVER-COL"',
      subtitle: 'Land Array 25.00 Ha',
      description: 'Array combined of plots 12.68 Ha, 6.84 Ha and smaller ones. The central part has high groundwater levels, allowing for a channel-type artificial lake (30m wide, 1132m long). Features a central "Relax Island" with landscape design. The channel is the main concept: fishing/recreation in summer, ice rink in winter. Total water area 3.88 Ha.',
      infrastructure: 'Power grid connection - 3 months. Hard-surface road - 2 weeks. Rational use: 100% Business (Recreation & Entertainment Complex).',
      priceTitle: 'Land Value',
      priceSubtitle: 'At moment of investment agreement',
      priceValue: '$ 350 per sotka / $ 875,000',
      capitalizationTitle: 'Total Capitalization',
      capitalizationValue: '$ 55.418 M',
      constructionTitle: 'Construction Part',
      lakeTitle: 'Water Infrastructure',
      lakeDescription: 'Channel 30m wide, 1132m long. Central relax island. Total water surface 34,000 m². Winter usage: Ice arena.',
      termTitle: 'Realization Term',
      termValue: '30 – 36 months',
      cadastralLink: 'View Cadastral Map',
      location: 'Bucha district, Makariv community, Kolonshchyna village council',
      infrastructureList: {
        title: 'Infrastructure Objects',
        items: [
          { name: 'Bath complex "SPA - WORLD" with parking', area: '1.85 Ha' },
          { name: 'Sports & Children\'s playground (Tennis, Basketball)', area: '0.75 Ha' },
          { name: 'Hangar for ATVs, Buggies, Bikes', area: '0.15 Ha' },
          { name: 'Separate blocks (tubs, changing rooms)', area: '0.20 Ha', count: '10 blocks' },
          { name: 'Backup generation & Fuel storage', area: '0.05 Ha' }
        ]
      },
      housingList: {
        title: 'Residential Infrastructure',
        items: [
          { name: 'Capsule houses by the channel (42 m²)', count: '52 units', area: '1.56 Ha' },
          { name: 'Modular houses (48 m²)', count: '48 units', area: '2.88 Ha' },
          { name: 'Two-level terrace houses', count: '66 units', area: '5.28 Ha' },
          { name: 'Houses under single helio-dome', count: '38 units', area: '3.80 Ha' }
        ]
      }
    },
    countryResidence: {
      badge: 'Club Residence',
      title: 'Complex "COUNTRY RESIDENCE"',
      subtitle: 'Land Array 13.73 Ha',
      description: 'Southernmost part of "ELEPHANT PARK". Single plot with former natural reservoir (needs land reclamation). Unique opportunity to create a country residence with a private reservoir - a serpentine channel 20m wide. 22 plots on the banks. PHILOSOPHY: Club investor gets 35 sotkas plot, finished house, private lake (part of channel) and exotic garden.',
      infrastructure: 'Power grid connection - 3 months. Hard-surface road - 2 weeks. Channel: Summer - fishing, Winter - ice rink.',
      priceTitle: 'Land Value',
      priceSubtitle: 'At moment of investment agreement',
      priceValue: '$ 350 per sotka / $ 481,000',
      capitalizationTitle: 'Total Capitalization',
      capitalizationValue: '$ 14.415 M',
      constructionTitle: 'Construction Part',
      lakeTitle: 'Water Infrastructure',
      lakeDescription: 'Serpentine channel-type lake: 20m wide, 1943m long. Total water area 3.88 Ha (38 800 m²).',
      termTitle: 'Realization Term',
      termValue: '30 – 36 months',
      cadastralLink: 'View Cadastral Map',
      location: 'Bucha district, Makariv community, Kolonshchyna village council',
      housingList: {
        title: 'Residential Infrastructure',
        items: [
          { name: 'Two-level terrace houses', count: '22 units', area: '7.70 Ha' }
        ]
      }
    },
    cascadeLakes: {
      badge: 'Large Scale Project',
      title: 'Complex "CASCADE of LAKES"',
      subtitle: 'Land Array 28.65 Ha',
      description: 'Northernmost part of "ELEPHANT PARK". Single plot bordering State Forest (16,000 Ha). Features three spots of dried lakes that will form a cascade of artificial reservoirs (8.15 Ha). Unique conditions for active recreation: ATVs, buggies, snowmobiles. 100% Business concept (recreation & entertainment complex).',
      infrastructure: 'Power grid connection - 3 months. Roads from North and South - 1 month. Facade of hard-surface road.',
      priceTitle: 'Land Value',
      priceSubtitle: 'At moment of investment agreement',
      priceValue: '$ 350 per sotka / $ 1,002,750',
      capitalizationTitle: 'Total Capitalization',
      capitalizationValue: '$ 71.625 M',
      constructionTitle: 'Construction Part',
      lakeTitle: 'Water Infrastructure',
      lakeDescription: 'New lakes and coastlines occupy 28.45% of territory – 8.15 Ha. Summer – fishing & catamarans, Winter – ice rinks.',
      termTitle: 'Realization Term',
      termValue: '30 – 36 months',
      cadastralLink: null,
      location: 'Bucha district, Makariv community, Kolonshchyna village council',
      infrastructureList: {
        title: 'Infrastructure Objects',
        items: [
          { name: 'Hotel & Restaurant complex with pool', area: '1.25 Ha' },
          { name: 'Combined Sports & Kids playground (Tennis, Basketball)', area: '0.75 Ha' },
          { name: 'Public Bath complex', area: '0.35 Ha' },
          { name: 'Separate blocks (tubs, changing rooms)', area: '0.20 Ha', count: '10 blocks' },
          { name: 'Hangar for ATVs, Buggies, Snowmobiles', area: '0.15 Ha' },
          { name: 'Backup generation & Fuel storage', area: '0.05 Ha' }
        ]
      },
      housingList: {
        title: 'Residential Infrastructure',
        items: [
          { name: 'Capsule houses by lakes (42/28 m²)', count: '62 units', area: '1.82 Ha' },
          { name: 'Modular houses (26, 48, 62 m²)', count: '58 units', area: '3.48 Ha' },
          { name: 'Two-level terrace houses', count: '46 units', area: '2.76 Ha' },
          { name: 'Houses under single helio-dome', count: '10 units', area: '1.00 Ha' }
        ]
      }
    },
    elephantPark: {
      badge: 'Hotel-Recreational',
      title: 'Complex "ELEPHANT PARK"',
      subtitle: 'Land Array 19.00 Ha',
      description: 'Array combined of 9.99 Ha and 8.99 Ha plots. Center – high groundwater zone for creating a specific artificial lake (4.48 Ha) with a Relax Island. Right – recreation segment (74 houses), Left – unique housing (74 houses). Value: asphalt road access, forest, geography. Mixed use: Recreation + Innovative Housing.',
      infrastructure: 'Power grid connection - 3 months. Garages, Offices, Laundry, Kitchen, Warehouses, Parking, Substation, Security guard house.',
      priceTitle: 'Land Value',
      priceSubtitle: 'At moment of investment agreement',
      priceValue: '$ 650 per sotka / $ 1,235,000',
      capitalizationTitle: 'Total Capitalization',
      capitalizationValue: '$ 47.50 M',
      constructionTitle: 'Construction Part',
      lakeTitle: 'Water Infrastructure',
      lakeDescription: 'Artificial lake of specific shape (4.48 Ha). Relax Island and landscape design. Summer – fishing, Winter – ice rink.',
      termTitle: 'Realization Term',
      termValue: '36 – 48 months',
      cadastralLink: 'View Cadastral Map',
      location: 'Bucha district, Makariv community, Kolonshchyna village council',
      financials: {
        title: 'Financial Characteristics',
        items: [
          { label: 'Investment Volume', value: '$ 1,735,000.00' },
          { label: 'Total Annual Sales/Rent', value: '$ 10,764,000.00' },
          { label: 'Operating Expenses', value: '$ 6,997,000.00' },
          { label: 'Investor Profit (60%)', value: '$ 3,767,000.00' }
        ]
      },
      infrastructureList: {
        title: 'Object Specification',
        items: [
          { name: 'Bath-Health Complex, SPA' },
          { name: 'Tennis Court, Volleyball, Kids Playground' },
          { name: '6 "Cold-Hot Tub" complexes' },
          { name: 'Garages, Warehouses, Offices, Laundry' },
          { name: 'Restaurant Zone (Kitchen & Ordering)' },
          { name: 'Parking, Security House' }
        ]
      },
      housingList: {
        title: 'Housing Fund (148 units)',
        items: [
          { name: 'Recreation houses (right of lake)', count: '74 units' },
          { name: 'Unique architecture houses (left)', count: '74 units', area: '4 types' }
        ]
      }
    },
    legal: {
      return: 'Return to Portal',
      effectiveDate: 'Effective Date:',
      agreementStatus: 'Agreement Status: Standard Edition (v1.0)',
      lastUpdated: 'Last Updated:',
      privacy: {
        title: 'Privacy',
        subtitle: 'Policy',
        sections: [
          {
            title: '1. Data Architecture',
            content: 'ZEMRESURS treats your personal information with the same precision and exclusivity as our residential architecture. We collect data specifically for providing our concierge, sales, and residential management services. This includes names, professional contact details, and investment preferences provided through our digital discovery portal.'
          },
          {
            title: '2. Security Protocol',
            content: 'Your data is protected by industry-standard encryption protocols. Like the Gates of Kyiv, we maintain a strict security perimeter. We do not sell, lease, or distribute your identity to third-party entities without explicit authorization, except as required for legal compliance and property transaction processing.'
          },
          {
            title: '3. Rights of Access',
            content: 'As a valued interest holder, you have the right to request access, correction, or deletion of your personal data from our records. For high-profile identities requiring specialized handling protocols, please contact our Data Privacy Officer at PARTNERS@ZEMRESURS.COM.'
          },
          {
            title: '4. Data Retention',
            content: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Upon expiration of this period, your data will be securely deleted.'
          },
          {
            title: '5. Data Transfers',
            content: 'Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.'
          }
        ]
      },
      terms: {
        title: 'Terms of',
        subtitle: 'Service',
        sections: [
          {
            title: '1. The Golden Standard',
            content: 'By accessing this portal, you agree to the highest standards of professional conduct. ZEMRESURS provides information regarding off-plan residential developments and investment opportunities. All renderings, visual representations, and conceptual drafts are for illustrative purposes and remain intellectual property of the developer.'
          },
          {
            title: '2. Advisory Disclaimer',
            content: 'Participation in residential investment involves strategic analysis. While our expert team provides market insights for the Kyiv region, this portal does not constitute financial or legal advice. Full investment documentation is provided during private consultation phases.'
          },
          {
            title: '3. Proprietary Design',
            content: 'All architectural concepts, zone philosophies, and technical specifications disclosed herein are proprietary. Unauthorized reproduction or use of these concepts without a bilateral agreement is strictly prohibited and protected under international property law.'
          },
          {
            title: '4. User Obligations',
            content: 'You agree to use our portal only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else\'s use and enjoyment of the portal. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our portal.'
          },
          {
            title: '5. Limitation of Liability',
            content: 'ZEMRESURS shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the portal.'
          }
        ]
      },
      cookies: {
        title: 'Cookie',
        subtitle: 'Policy',
        sections: [
          {
            title: '1. Utilization of Cookies',
            content: 'To enhance your digital discovery of ZEMRESURS, we use cookies—small data files placed on your device. These help us understand your preferences and ensure the smooth performance of our interactive zone maps and high-definition video backgrounds.'
          },
          {
            title: '2. Analytical Excellence',
            content: 'We use analytical tools to measure the traffic patterns of our global investor community. These cookies provide anonymized metrics that allow us to optimize our server response times and visual fidelity.'
          },
          {
            title: '3. Preference Control',
            content: 'You may adjust your browser settings to refuse or alert you about cookies. Please note that disabling essential cookies may impact the parallax effects and real-time validation features of our concierge portal.'
          },
          {
            title: '4. Types of Cookies Used',
            content: 'We use both session and persistent cookies on the portal and we use different types of cookies to run the portal: Essential cookies, Preference cookies, Analytics cookies, and Advertising cookies.'
          },
          {
            title: '5. Third-Party Cookies',
            content: 'In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the portal, deliver advertisements on and through the portal, and so on.'
          }
        ]
      }
    },
    widget: {
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      callUs: 'Call Us',
      contactUs: 'Contact Us'
    },
    about: {
      return: 'Return to Portal',
      badge: 'Brand Philosophy',
      title1: 'EXPERTISE',
      title2: 'IN EVERY AREA.',
      description: 'ZEMRESURS doesn\'t just sell land. We create an ecosystem for capital growth.',
      longDescription: 'Our team analyzes hundreds of hectares, studies community development plans and infrastructure projects, to offer you only those assets that are guaranteed to increase in price. We turn the chaotic land market into a clear financial tool.',
      heroImage: elephantParkImg,
      stats: [
        { label: 'Annual Return', value: '40%' },
        { label: 'Legal Transparency', value: '100%' }
      ],
      vision: {
        title: 'Our Vision',
        content: 'To create the most exclusive ecosystem in Eastern Europe, setting a new gold standard for sustainable luxury living.'
      },
      mission: {
        title: 'Our Mission',
        content: 'Integrating high-tech security, premium concierge service, and deep ecological preservation into a single seamless experience.'
      },
      history: {
        title: 'Our Heritage',
        content: 'Founded in 2025, ZEMRESURS is the culmination of years of landscape research and architectural innovation near the Gates of Kyiv.'
      },
      ideology: {
        title: 'Natural Harmony',
        subtitle: 'Where every meter breathes freedom',
        image: colTownImg,
        list: [
          '362 hectares of protected forest – your personal oasis of silence and power.',
          '144.8 units – from spa to playgrounds.',
          '47,000 kilometers of eco-trails – quad bike, bicycle or buggy without dust and nerves.',
          '54,300 m² of mirror lakes – morning on a kayak, evening at sunset.',
          '100 months of full power – income that works while you rest.',
          'Capitalization 198.9 million UAH – a future that is already here, just in a different light.'
        ]
      },
      lifestyle: {
        gastronomy: {
          title: 'Gastronomy & Soul',
          items: [
            {
              name: 'Restaurants with Ukrainian Soul',
              count: '1 establishment',
              description: 'Where borscht is served in ceramic bowls, and vareniki hold their shape like your investments.',
              image: countryResImg
            },
            {
              name: 'Coffee Shops with Author\'s Mix',
              count: '4 points',
              description: 'From flat white with honey from our own beehive to coffee under the moonlight.',
              image: cascadeLakesImg
            }
          ]
        },
        wellness: {
          title: 'Wellness & Relaxation',
          items: [
            {
              name: 'Relax-center SPA-World',
              count: '1 complex',
              description: 'Sauna, pool, massage chairs, where you melt like butter on a hot baursak.',
              image: riverColImg
            },
            {
              name: 'Meditation Hub of Phytotherapy',
              count: '1 house',
              description: 'Aromas of needles, herbal teas, yoga on trees, without the mantra "the customer is wrong".',
              image: elephantParkImg
            }
          ]
        },
        recreation: {
          title: 'Recreation & Fun',
          items: [
            {
              name: 'Homes on Lakes',
              count: '4 cottages',
              description: 'Private pontoon, kayak included, evening candles and silence.',
              image: colTownImg
            },
            {
              name: 'Festival Season',
              count: '8–10 events/year',
              description: 'Jazz over water, electronics in the forest, folk-blues on the pier.',
              image: countryResImg
            }
          ]
        }
      }
    },
    investment: {
      badge: 'Strategic Growth',
      title: 'Three-Echelon Investment System',
      description: 'A strategic approach to capital growth in the most promising residential ecosystem in Eastern Europe.',
      labels: {
        threshold: 'Entry Threshold',
        yield: 'Projected Yield',
        strategy: 'Investment Strategy'
      },
      cta: {
        learn: 'Learn More',
        book: 'Book In-person meeting'
      },
      trust: {
        title: 'Protect your future with institutional-grade assets',
        text: 'ZEMRESURS ensures full legal transparency, strategic location benefits, and expert management to ensure your investment thrives in any market conditions.',
        p1: '100% Legal Purity',
        p2: 'Guaranteed Capitalization',
        p3: 'Passive Income Ready'
      },
      echelons: [
        {
          tier: 'Echelon 1: Strategic Investor',
          entry: 'from $200,000',
          return: '25% per annum',
          details: 'Early exit via resale. Priority right to purchase new hectares at the initial price.'
        },
        {
          tier: 'Echelon 2: Club Investor',
          entry: 'from $100,000',
          return: '40% in two years',
          details: 'Picks up strategic level assets. Access to exclusive land lots with infrastructure already prepared.'
        },
        {
          tier: 'Echelon 3: Collective Investor',
          entry: 'from $5,000',
          return: '50% in three years',
          details: 'Scale. Stability. Diversified pool of assets with low entry barrier and guaranteed buyout.'
        }
      ]
    },
    masterplan: {
      badge: 'Future Roadmap',
      title: 'Three Phases to Full Realization',
      tagline: 'Unique recreation of forests, lakes and landscapes. Pivnichno-Kulonshchyna',
      distance: '25 km from the capital',
      location: 'Pivnichno-Kulonshchyna',
      kyiv: 'Kyiv',
      direction: 'Northwest direction',
      landscape: 'Eco-Protected Landscape',
      phaseLabel: 'Phase',
      yearTarget: 'Launch Year',
      cycles: [
        {
          phase: 'Phase 1: ZEMRESURS',
          area: '67 ha',
          period: '2026–2028',
          description: 'Launch of recreational segment.',
          features: ['Forest Villas', 'Mirror Lakes', 'SPA-Center']
        },
        {
          phase: 'Phase 2: Infrastructure',
          area: '64 ha',
          period: '2028–2030',
          description: 'Expansion of social and culinary zones.',
          features: ['Gastro Hub', 'Eco-Trails', 'Club Area']
        },
        {
          phase: 'Phase 3: Community',
          area: '231 ha',
          period: '2029–2035',
          description: 'Full capitalization and innovation hub.',
          features: ['Helio-Domes', 'Festival Dock', 'Innovation Hub']
        }
      ]
    },
    architecture: {
      totalUnits: '1,448 Units',
      types: [
        {
          title: 'Modular Houses',
          area: '28–64 m²',
          count: '507 units',
          description: 'Fast assembly, energy-efficient, private terraces.'
        },
        {
          title: 'Capsule Houses on Waterfront',
          area: '19–43 m²',
          count: '220 units',
          description: 'Minimalism, panoramic glass, lake access.'
        },
        {
          title: 'Innovative Architecture',
          area: '38–96 m²',
          count: '616 units',
          description: 'Smart home, ventilation, intelligent lighting.'
        },
        {
          title: 'Houses under Helio-dome',
          area: 'Family Layouts',
          count: '106 units',
          description: 'Transparent dome, private courtyard, green zone.'
        }
      ]
    },
    objects: {
      badge: 'Investment Assets',
      title1: 'Strategic',
      title2: 'Land Objects.',
      back: 'Return to Portal',
      details: 'Details',
      map: 'Show on Map',
      areaLabel: 'Total Area',
      priceLabel: 'Price per cent',
      minLotLabel: 'Min Lot',
      locationLabel: 'LOCATION',
      descriptionLabel: 'Description',
      list: [
        {
          id: 'col-town',
          name: 'Complex "COL-TOWN"',
          location: 'Bucha district, Makariv community, Kolonshchyna village council',
          description: 'A unique investment opportunity combining three land plots (3.63 Ha, 1.9 Ha, 1.90 Ha) with a total area of 7.43 Ha. The landscape features a perfect balance: 3.63 Ha of dense forest and 3.8 Ha of scenic relief terrain (Hill). The project includes a comprehensive infrastructure package: a bath complex with an outdoor pool (0.55 Ha), sports and children\'s playgrounds (0.75 Ha), a kindergarten, and a commercial block (shop, cafe, pharmacy). The residential zone comprises 37 modular rental houses and 37 terrace-type houses of new architecture. Detailed amenities include a hangar for sports gear and backup generation facilities. Total project capitalization potential is estimated at $14.415 million.',
          area: '7.43 Ha',
          price: '$490,000',
          minLot: '7.43 Ha',
          image: colTownImg,
          coordinates: [50.471194, 29.92975],
          tags: ['Forest', 'Hill', 'Investment', 'Recreation']
        },
        {
          id: 'river-col',
          name: 'Complex "RIVER-COL"',
          location: 'Bucha district, Makariv community, Kolonshchyna village council',
          description: 'Large-scale project of 25.00 Ha with a unique water concept. The central element is a 1132m long channel and a "Relax Island". Infrastructure includes "SPA-WORLD" complex, sports zones, and diverse housing formats: from capsule houses by the water to helio-domes. The project is oriented towards 100% business use (entertainment complex). Potential capitalization $55.4M.',
          area: '25.00 Ha',
          price: '$875,000',
          minLot: '25.00 Ha',
          image: riverColImg,
          coordinates: [50.475778, 29.943806],
          tags: ['Water', 'SPA', 'Channel', 'Investment']
        },
        {
          id: 'country-residence',
          name: 'Complex "COUNTRY RESIDENCE"',
          location: 'Bucha district, Makariv community, Kolonshchyna village council',
          description: 'Southernmost part of the complex. Club format: 22 elite households with private access to the channel. Land plot 13.73 Ha with restored natural reservoir. Each investor gets 35 sotkas of land, a house, and a private part of the lake. Ideal place for a country residence with an exotic garden. Capitalization $14.4M.',
          area: '13.73 Ha',
          price: '$490,000',
          minLot: '13.73 Ha',
          image: countryResImg,
          coordinates: [50.468446, 29.933377],
          tags: ['Club', 'Water', 'Garden', 'Residence']
        },
        {
          id: 'cascade-lakes',
          name: 'Complex "CASCADE of LAKES"',
          location: 'Bucha district, Makariv community, Kolonshchyna village council',
          description: 'Northernmost part of the complex. Land array 28.65 Ha (single plot). Borders State Forest (16,000 Ha). Highlight – three spots of dried natural lakes with high groundwater, allowing creation of artificial lake cascade. 100% Business concept: recreation and entertainment complex. Summer – fishing and catamarans, Winter – ice rinks. Ideal conditions for ATV and snowmobile tours due to forest proximity.',
          area: '28.65 Ha',
          price: '$1,002,750',
          minLot: '28.65 Ha',
          image: cascadeLakesImg,
          coordinates: [50.485000, 29.950000],
          tags: ['Lakes', 'Forest', 'Business', 'Fun']
        },
        {
          id: 'elephant-park',
          name: 'Complex "ELEPHANT PARK"',
          location: 'Bucha district, Makariv community, Kolonshchyna village council',
          description: 'Land array 19.00 Ha (9.99 Ha + 8.99 Ha). Central part has high groundwater, allowing for a unique artificial lake (4.48 Ha) with a Relax Island. Right side – 74 recreation houses, Left side – 74 unique architecture houses. Mixed use: 50% recreation, 50% innovative housing. Borders asphalt road, mostly forested.',
          area: '19.00 Ha',
          price: '$1,235,000',
          minLot: '19.00 Ha',
          image: elephantParkImg,
          coordinates: [50.462721, 29.953006],
          tags: ['Hotel', 'SPA', 'Island', 'Business']
        }
      ]
    },
    map: {
      widgetTitle: 'Investment Map',
      widgetSubtitle: 'Kyiv Region Expertise',
      widgetDescription: 'Our interactive map allows you to explore the most promising land assets around Kyiv. Each point represents a vetted opportunity for capital growth.',
      legendLand: 'Land Objects',
      legendPlanned: 'Planned Zones',
      viewDetails: 'View Full Details',
      modalBadge: 'Investment Opportunity',
      modalDescription: 'Description',
      bookConsultation: 'Book Consultation',
    },
    faq: {
      badge: 'Knowledge Base',
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What are the main risks associated with investing in land assets at ZEMRESURS?',
          answer: 'All our land assets undergo rigorous legal and ecological audits before being offered. The primary risk in any real estate investment is market fluctuation, but by securing tangible land with clear development potential at the Gates of Kyiv, we minimize speculative risks. Our models project resilient capitalization regardless of short-term economic shifts.'
        },
        {
          question: 'How is the investment agreement legally structured?',
          answer: 'Investments are structured through direct ownership or shares in a dedicated corporate entity holding the land asset, depending on your residency and investment echelon. All agreements are processed by our specialized legal team ensuring 100% compliance with Ukrainian law and international investment protection standards.'
        },
        {
          question: 'Can I monitor the progress of my investment and the surrounding infrastructure?',
          answer: 'Absolutely. Club and Strategic investors receive quarterly progress reports, including video drone footage of the site, infrastructure development updates, and revised capitalization models based on current market data.'
        },
        {
          question: 'Is it possible to exit the investment before the 3-year minimum term?',
          answer: 'While our models are based on a minimum 3-year term for optimal capitalization, Echelon 1 and 2 investors have secondary market options. ZEMRESURS maintains a waiting list of buyers and can facilitate an early exit, albeit potentially at a lower yield than the full-term projection.'
        }
      ]
    }
  },
  ua: {
    nav: {
      objects: 'Об\'єкти',
      map: 'Карта об\'єктів',
      about: 'Про Нас',
      contact: 'Контакти',
      masterplan: 'Генплан',
      investment: 'Інвестиції'
    },
    intro: {
      yield: 'Гарантовано зростання ціни 50%',
      note: 'Мінімальний термін інвестування 3 роки',
      term: 'запрошуємо до партнерства з нами',
      price: 'Від 300 000$',
      cooperation: 'Обговорити співпрацю'
    },
    infoblock: {
      title: 'Аерозйомка об\'єктів',
      route: 'Прокласти маршрут',
      youtube: 'YouTube канал',
      telegram: 'Telegram канал',
      info: 'Дослідіть наші останні розробки в Колонщині за допомогою супутникових карт та аерозйомки.',
      location: 'село Колонщина'
    },
    hero: {
      badge: '',
      partners: 'Земельні активи від 1 до 100 Га',
      title1: 'ZEMRESURS',
      title2: '',
      description: 'Компанія з управління земельними активами в передмісті Києва',
      explore: 'Завантажити презентацію',
      exploreLink: presentationPdf,
      masterplan: 'Обʼєкти',
      est: 'ЗАСН. 2025',
      location: 'КИЇВСЬКА ОБЛ.',
    },
    contact: {
      back: 'Повернутися',
      badge: 'Досконалість переосмислена',
      title1: 'Почніть Вашу',
      title2: 'Трансформацію.',
      description: 'Більше ніж резиденція. Маніфест гармонії, розкоші та майбутнього життя біля воріт столиці.',
      whyUs: [
        {
          title: "Гармонія Природи",
          description: "Розташований біля воріт Києва, наш курорт пропонує унікальне поєднання туманних лісів та сучасного комфорту."
        },
        {
          title: "Ексклюзивна Система 6 Зон",
          description: "Від активного відпочинку до глибокої релаксації — наші експертно спроектовані зони задовольнять будь-який стиль життя."
        },
        {
          title: "Інвестиційна Можливість",
          description: "Це не просто будинок, а зростаючий актив із високим потенціалом пасивного доходу в елітній локації."
        },
        {
          title: "Преміальний Сервіс",
          description: "Наша команда менеджменту гарантує вашу безпеку, приватність та абсолютний комфорт 24/7."
        },
        {
          title: "Екологічне Життя",
          description: "Еко-технології та матеріали інтегровані в кожну житлову зону для сталого майбутнього."
        },
        {
          title: "Стратегічне Розташування",
          description: "Швидкий доступ до столиці при збереженні повної тиші та атмосферних лісових краєвидів."
        }
      ],
      formTitle: 'Записатися на Консультацію',
      formSubtitle: 'Персоналізована увага для елітних інвесторів',
      nameLabel: 'Ваше Ім\'я',
      emailLabel: 'Email Адреса',
      phoneLabel: 'Номер Телефону',
      messageLabel: 'Інтерес до Проекту',
      placeholderName: 'напр. Олександр Солонко',
      placeholderEmail: 'gmail@gmail.com',
      placeholderPhone: '+380 000 00 00',
      placeholderMessage: 'Ваше повідомлення...',
      submit: 'Надіслати Запит',
      processing: 'Обробка...',
      successTitle: 'Запит Отримано',
      successText: 'Наша консьєрж-служба зв\'яжеться з вами особисто протягом наступних 24 годин.',
      successAction: 'Надіслати ще одне повідомлення',
      formatValid: 'Вірний Формат',
      formatInvalid: 'Невірний Формат',
      errorName: 'Будь ласка, введіть ваше повне ім\'я (мінімум 2 символи).',
      errorBoth: 'Будь ласка, перевірте формат email та номеру телефону.',
      errorEmail: 'Невірна email адреса. Використовуйте name@example.com',
      errorPhone: 'Невірний номер телефону. Мін. 10 цифр.',
      successInquiry: 'Ваш запит успішно надіслано!',
      privacyConsent: 'Ви підтверджуєте, що ознайомилися, прийняли та погодилися з Політикою конфіденційності.'
    },
    cooperation: {
      back: 'Повернутися',
      badge: 'Стратегічне Партнерство',
      title1: 'Обговорити',
      title2: 'Співпрацю.',
      description: 'ZEMRESURS відкритий до B2B-співпраці, спільних інвестицій та стратегічних альянсів.',
      whyUs: [
        {
          title: "B2B Можливості",
          description: "Ексклюзивні умови для корпоративних партнерів та інституційних інвесторів."
        },
        {
          title: "Спільне Інвестування",
          description: "Участь на ранніх етапах забудови високомобільних житлових зон."
        },
        {
          title: "Прозорість",
          description: "Повний доступ до фінансових моделей, юридичної документації та ходу будівництва."
        },
        {
          title: "Індивідуальний Підхід",
          description: "Ми розробляємо структури партнерства, які відповідають вашим інвестиційним цілям."
        },
        {
          title: "Спільні Підприємства",
          description: "Можливість спільно розвивати конкретні зони чи інфраструктурні об'єкти."
        },
        {
          title: "Пріоритетний Доступ",
          description: "Партнери першими отримують пропозиції щодо наших нових земельних активів."
        }
      ],
      formTitle: 'Запропонувати Співпрацю',
      formSubtitle: 'Прямий зв\'язок з нашим інвестиційним комітетом',
      nameLabel: 'Назва Компанії / Представник',
      emailLabel: 'Корпоративний Email',
      phoneLabel: 'Прямий Номер Телефону',
      messageLabel: 'Суть Пропозиції',
      placeholderName: 'напр. Інвест Груп ТОВ',
      placeholderEmail: 'partners@company.com',
      placeholderPhone: '+380 000 00 00',
      placeholderMessage: 'Опишіть вашу пропозицію...',
      submit: 'Надіслати Пропозицію',
      processing: 'Обробка...',
      successTitle: 'Пропозицію Отримано',
      successText: 'Наш інвестиційний комітет розгляне вашу пропозицію та зв\'яжеться з вами найближчим часом.',
      successAction: 'Надіслати ще одну пропозицію',
      formatValid: 'Вірний Формат',
      formatInvalid: 'Невірний Формат',
      errorName: 'Будь ласка, введіть коректну назву компанії або представника.',
      errorBoth: 'Будь ласка, перевірте формат email та номеру телефону.',
      errorEmail: 'Невірна адреса електронної пошти.',
      errorPhone: 'Невірний номер телефону. Мін. 10 цифр.',
      successInquiry: 'Вашу пропозицію успішно надіслано!',
      privacyConsent: 'Ви підтверджуєте, що ознайомилися, прийняли та погодилися з Політикою конфіденційності.'
    },
    footer: {
      description: 'Шедевр природи та сучасної архітектури. Ексклюзивні житлові зони біля воріт Києва. Унікальна екосистема для життя та інвестицій, що поєднує преміальний сервіс, інноваційні технології та первозданні природні ландшафти.',
      nav: 'Навігація',
      legal: 'Юридична інформація',
      assistance: 'Допомога',
      office: 'Офіційне Представництво',
      address: 'Київ, IQ Business Center',
      rights: '© 2025 ZEMRESURS. Усі права захищено.',
      privacy: 'Політика Конфіденційності',
      terms: 'Умови та Положення',
      cookies: 'Політика Cookie',
      home: 'Головна',
      objects: 'Об\'єкти',
      map: 'Карта об\'єктів',
      about: 'Про Нас',
      masterplan: 'Генплан',
      investment: 'Інвестиції',
      contact: 'Контакти',
      city: 'Київ'
    },
    colTown: {
      badge: 'Нова Можливість',
      title: 'Комплекс "COL-TOWN"',
      subtitle: 'Земельний Масив 7.43 Га',
      description: 'Об\'єднаний трьома земельними ділянками: 3,63 Га, 1,9 Га та 1,90 Га. Половина масиву (3,63 Га) повністю залісена територія, інша половина (3,8 Га) – унікальна рельєфна місцевість – ПАГОРБ. Грунти сухі та пісчані. Грунтові води – глибокого залягання.',
      infrastructure: 'Під\'єднання масиву до загальних енергомереж – 3 місяці. Прокладка під\'їздної дороги з твердим покриттям – два тижні за кліматичними умовами.',
      priceTitle: 'Вартість Земельного Масиву',
      priceSubtitle: 'На день підписання інвестиційної угоди',
      priceValue: '$ 550/сотка, або $ 490 000.00',
      capitalizationTitle: 'Загальна Капіталізація Проекту',
      capitalizationValue: '$ 14.415 млн',
      constructionTitle: 'Будівельна Частина',
      lakeTitle: 'Інфраструктурні об\'єкти',
      lakeDescription: 'Змієподібне озеро канального типу шириною 20 м. та довжиною 1 943 м.п. Загальна площа штучного озера – 38 800 м² – 3,88 Га',
      housingTitle: 'Житлова інфраструктура',
      housingDescription: 'Двохрівневі будинки терасного типу – 22 – 7.70 Га',
      termTitle: 'Термін Реалізації Проекту',
      termValue: '30 – 36 місяців',
      cadastralLink: 'Кадастрова Карта',
      location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
      infrastructureList: {
        title: 'Інфраструктурні об\'єкти',
        items: [
          { name: 'Банний комплекс із зовнішнім басейном', area: '0,55 Га' },
          { name: 'Спортивний та дитячий майданчик (Баскетбол, Теніс, Настільний теніс)', area: '0,75 Га' },
          { name: 'Дворівневий будинок / Дитячий садок (на 16 місць)', area: '0,12 Га' },
          { name: 'Магазин, Кав\'ярня, Аптека (єдиним блоком)', area: '0,10 Га' },
          { name: 'Ангар для зберігання спортінвентарю (Квадроцикли, Багі, Велосипеди)', area: '0,12 Га' },
          { name: 'Окремі блоки (холодна/гаряча купель, роздягалка)', area: '0,15 Га', count: '7 блоків' },
          { name: 'Місце для резервної генерації та склад пального', area: '0,03 Га' }
        ]
      },
      housingList: {
        title: 'Житлова інфраструктура',
        items: [
          { name: 'Модульні будинки для здачі в оренду', count: '37 шт.', area: '2,59 Га' },
          { name: 'Будинки новітньої архітектури терасного типу', count: '37 шт.', area: '2,59 Га' }
        ]
      }
    },
    riverCol: {
      badge: 'Новий Проект',
      title: 'Комплекс "RIVER-COL"',
      subtitle: 'Земельний Масив 25.00 Га',
      description: 'Масив об\'єднаний земельними ділянками 12,68 Га, 6,84 Га та меншими ділянками. Центральна частина – зона з високими ґрунтовими водами, що дозволяє створити штучне водоймище канального типу (ширина 30 м, довжина 1132 м). У центрі – острів релаксу та ландшафтного дизайну. Канал – головна концептуальна опція: рибалка та відпочинок влітку, ковзанка взимку. Загальна площа води – 3,88 Га.',
      infrastructure: 'Підключення до електромереж – 3 місяці. Дорога з твердим покриттям – 2 тижні. Раціональне використання – 100% бізнес (відпочинково-розважальний комплекс).',
      priceTitle: 'Вартість Масиву',
      priceSubtitle: 'На момент підписання угоди',
      priceValue: '$ 350/сотка, або $ 875 000.00',
      capitalizationTitle: 'Загальна Капіталізація',
      capitalizationValue: '$ 55,418 млн',
      constructionTitle: 'Будівельна Частина',
      lakeTitle: 'Водна Інфраструктура',
      lakeDescription: 'Канал шириною 30 м та довжиною 1132 м. Острів релаксу в центрі. Загальна площа водойми – 34 000 м². Взимку використовується як льодова арена.',
      termTitle: 'Термін Реалізації',
      termValue: '30 – 36 місяців',
      cadastralLink: 'Кадастрова Карта',
      location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
      infrastructureList: {
        title: 'Інфраструктурні об\'єкти',
        items: [
          { name: 'Банний комплекс "SPA - WORLD" з парковкою', area: '1,85 Га' },
          { name: 'Спорт та дитячий майданчик (Теніс, Баскетбол)', area: '0,75 Га' },
          { name: 'Ангар для квадроциклів, багі, велосипедів', area: '0,15 Га' },
          { name: 'Окремі блоки (купелі, роздягальні)', area: '0,20 Га', count: '10 блоків' },
          { name: 'Резервна генерація та склад пального', area: '0,05 Га' }
        ]
      },
      housingList: {
        title: 'Житлова інфраструктура',
        items: [
          { name: 'Капсульні будинки біля каналу (42 м²)', count: '52 шт.', area: '1,56 Га' },
          { name: 'Модульні будинки (48 м²)', count: '48 шт.', area: '2,88 Га' },
          { name: 'Дворівневі будинки терасного типу', count: '66 шт.', area: '5,28 Га' },
          { name: 'Будинки під єдиним геліо-куполом', count: '38 шт.', area: '3,80 Га' }
        ]
      }
    },
    countryResidence: {
      badge: 'Клубна Резиденція',
      title: 'Комплекс "COUNTRY RESIDENCE"',
      subtitle: 'Земельний Масив 13.73 Га',
      description: 'Найпівденніша частина комплексу «ELEPHANT PARK». Одна земельна ділянка з колишньою природною водоймою (потребує меліорації). Унікальна можливість створення заміської резиденції з власним водоймищем – змієподібним каналом шириною 20 м. На берегах – 22 ділянки. ФІЛОСОФІЯ: Клубний інвестор отримує ділянку 35 соток, будинок з оздобленням, власне озеро (частину каналу) та сад екзотичних рослин.',
      infrastructure: 'Підключення до електромереж – 3 місяці. Дорога з твердим покриттям – 2 тижні. Канал влітку – рибалка, взимку – ковзанка.',
      priceTitle: 'Вартість Масиву',
      priceSubtitle: 'На момент підписання угоди',
      priceValue: '$ 350/сотка, або $ 481 000.00',
      capitalizationTitle: 'Загальна Капіталізація',
      capitalizationValue: '$ 14.415 млн',
      constructionTitle: 'Будівельна Частина',
      lakeTitle: 'Водна Інфраструктура',
      lakeDescription: 'Змієподібне озеро канального типу: ширина 20 м, довжина 1943 м. Загальна площа води – 3.88 Га (38 800 м²).',
      termTitle: 'Термін Реалізації',
      termValue: '30 – 36 місяців',
      cadastralLink: 'Кадастрова Карта', // Link not provided, will keep generic or omit
      location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
      // No specific infrastructure list provided other than lake, so adapting
      housingList: {
        title: 'Житлова інфраструктура',
        items: [
          { name: 'Дворівневі будинки терасного типу', count: '22 шт.', area: '7.70 Га' }
        ]
      }
    },
    cascadeLakes: {
      badge: 'Масштабний Проект',
      title: 'Комплекс "CASCADE of LAKES"',
      subtitle: 'Земельний Масив 28.65 Га',
      description: 'Найпівнічніша частина комплексу «ELEPHANT PARK». Цільний масив, що межує з багатолітнім ДержЛісГосподом (16 000 Га). На території три плями висохших озер, які стануть основою каскаду штучних водойм (8.15 Га). Унікальні умови для драйвового відпочинку: квадроцикли, багі, снігоходи. 100% Бізнес-концепція (відпочинково-розважальний комплекс).',
      infrastructure: 'Підключення до електромереж – 3 місяці. Дороги з півночі та півдня – 1 місяць. Фасад дороги з твердим покриттям.',
      priceTitle: 'Вартість Масиву',
      priceSubtitle: 'На момент підписання угоди',
      priceValue: '$ 350/сотка, або $ 1 002 750.00',
      capitalizationTitle: 'Загальна Капіталізація',
      capitalizationValue: '$ 71.625 млн',
      constructionTitle: 'Будівельна Частина',
      lakeTitle: 'Водна Інфраструктура',
      lakeDescription: 'Новоутворені озера та берегові лінії займають 28.45% території – 8.15 Га. Влітку – рибалка та катамарани, взимку – ковзанки.',
      termTitle: 'Термін Реалізації',
      termValue: '30 – 36 місяців',
      cadastralLink: null,
      location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
      infrastructureList: {
        title: 'Інфраструктурні об\'єкти',
        items: [
          { name: 'Готельно-ресторанний комплекс з басейном', area: '1,25 Га' },
          { name: 'Об\'єднані спорт. та дитячий майданчик (Теніс, Баскетбол)', area: '0,75 Га' },
          { name: 'Банний комплекс загального користування', area: '0,35 Га' },
          { name: 'Окремі блоки (купелі, роздягальні)', area: '0,20 Га', count: '10 блоків' },
          { name: 'Ангар для квадроциклів, багі, снігоходів', area: '0,15 Га' },
          { name: 'Резервна генерація та склад пального', area: '0,05 Га' }
        ]
      },
      housingList: {
        title: 'Житлова інфраструктура',
        items: [
          { name: 'Капсульні будинки біля озер (42/28 м²)', count: '62 шт.', area: '1,82 Га' },
          { name: 'Модульні будинки (26, 48, 62 м²)', count: '58 шт.', area: '3,48 Га' },
          { name: 'Дворівневі будинки терасного типу', count: '46 шт.', area: '2,76 Га' },
          { name: 'Будинки під єдиним геліо-куполом', count: '10 шт.', area: '1,00 Га' }
        ]
      }
    },
    elephantPark: {
      badge: 'Готельно-Рекреаційний',
      title: 'Комплекс "ELEPHANT PARK"',
      subtitle: 'Земельний Масив 19.00 Га',
      description: 'Масив об\'єднаний ділянками 9.99 Га та 8.99 Га. Центр – зона з високими ґрунтовими водами, де буде створено штучне озеро (4.48 Га) з островом релаксу. Справа – розважальний сегмент (74 будинки), зліва – унікальне житло (74 будинки). Цінність: примикання до асфальту, ліс, географія. Змішана форма: Розваги + Інноваційне житло.',
      infrastructure: 'Підключення до електромереж – 3 місяці. Гаражі, Офіси, Прачечна, Кухня, Склади, Автостоянка, Трансформаторна підстанція, Будинок охорони.',
      priceTitle: 'Вартість Масиву',
      priceSubtitle: 'На момент підписання угоди',
      priceValue: '$ 650/сотка, або $ 1 235 000.00',
      capitalizationTitle: 'Загальна Капіталізація',
      capitalizationValue: '$ 47.50 млн',
      constructionTitle: 'Будівельна Частина',
      lakeTitle: 'Водна Інфраструктура',
      lakeDescription: 'Штучне озеро специфічної форми площею 4.48 Га. Острів релаксу та ландшафтного дизайну. Влітку – рибалка, взимку – ковзанка.',
      termTitle: 'Термін Реалізації',
      termValue: '36 – 48 місяців',
      cadastralLink: 'Кадастрова Карта',
      location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
      financials: {
        title: 'Фінансова Характеристика',
        items: [
          { label: 'Обсяг Вкладень', value: '$ 1 735 000.00' },
          { label: 'Загальний Обсяг Продаж (на рік)', value: '$ 10 764 000.00' },
          { label: 'Операційні Витрати', value: '$ 6 997 000.00' },
          { label: 'Дохідність Інвестора (60%)', value: '$ 3 767 000.00' }
        ]
      },
      infrastructureList: {
        title: 'Специфікація Об\'єкту',
        items: [
          { name: 'Банно-оздоровчий комплекс, SPA' },
          { name: 'Тенісний корт, Волейбол, Дитячий майданчик' },
          { name: '6 комплексів «холодна – гаряча купель»' },
          { name: 'Гаражі, Склади, Офіси, Прачечна' },
          { name: 'Ресторанна зона (Кухня та замовлення)' },
          { name: 'Автостоянка, Будинок охорони' }
        ]
      },
      housingList: {
        title: 'Житловий Фонд (148 будинків)',
        items: [
          { name: 'Відпочинкові будинки (справа від озера)', count: '74 шт.' },
          { name: 'Будинки унікальної архітектури (зліва)', count: '74 шт.', area: '4 типи' }
        ]
      }
    },
    legal: {
      return: 'Повернутися',
      effectiveDate: 'Дата набрання чинності:',
      agreementStatus: 'Статус угоди: Стандартна редакція (v1.0)',
      lastUpdated: 'Останнє оновлення:',
      privacy: {
        title: 'Політика',
        subtitle: 'Конфіденційності',
        sections: [
          {
            title: '1. Архітектура Даних',
            content: 'ZEMRESURS ставиться до вашої особистої інформації з тією ж точністю та ексклюзивністю, що й до нашої житлової архітектури. Ми збираємо дані виключно для надання послуг консьєржа, продажу та управління нерухомістю. Це включає імена, професійні контактні дані та інвестиційні переваги, надані через наш портал.'
          },
          {
            title: '2. Протокол Безпеки',
            content: 'Ваші дані захищені стандартними протоколами шифрування. Як і «Ворота Києва», мы підтримуємо суворий периметр безпеки. Ми не продаємо, не орендуємо та не розповсюджуємо вашу особу третім сторонам без явної згоди, за винятком випадків, передбачених законодавством.'
          },
          {
            title: '3. Права Доступу',
            content: 'Ви маєте право запитувати доступ, виправлення або видалення ваших персональних даних з нашої бази. Для особливих випадків, що потребують спеціалізованих протоколів обробки, звертайтеся до нашого офіцера з питань конфіденційності: PARTNERS@ZEMRESURS.COM.'
          },
          {
            title: '4. Зберігання Даних',
            content: 'Ми зберігаємо вашу особисту інформацію лише стільки, скільки необхідно для досягнення цілей, для яких вона була зібрана, включаючи виконання будь-яких юридичних, бухгалтерських або звітних вимог. Після закінчення цього періоду ваші дані будуть надійно видалені.'
          },
          {
            title: '5. Передача Даних',
            content: 'Ваша інформація, включаючи Персональні Дані, може бути передана і зберігатися на комп\'ютерах, розташованих за межами вашої області, провінції, країни або іншої юрисдикції, де закони про захист даних можуть відрізнятися від законів вашої юрисдикції.'
          }
        ]
      },
      terms: {
        title: 'Умови та',
        subtitle: 'Положення',
        sections: [
          {
            title: '1. Золотий Стандарт',
            content: 'Користуючись цим порталом, ви погоджуєтеся на найвищі стандарти професійної поведінки. ZEMRESURS надає інформацію щодо житлових забудов на стадії будівництва та інвестиційних можливостей. Усі візуалізації та концептуальні начерки є ілюстративними та залишаються інтелектуальною власністю забудовника.'
          },
          {
            title: '2. Відмова від Відповідальності',
            content: 'Участь у житлових інвестиціях вимагає стратегічного аналізу. Хоча наша команда експертів надає ринкові дані щодо Київського регіону, цей портал не є фінансовою чи юридичною консультацією. Повна інвестиційна документація надається під час приватних консультацій.'
          },
          {
            title: '3. Власна Концепція',
            content: 'Усі архітектурні концепції, філософії зон та технічні характеристики, розкриті тут, є власністю компанії. Несанкціоноване відтворення або використання цих концепцій без двосторонньої угоди суворо заборонено та охороняється міжнародним правом.'
          },
          {
            title: '4. Зобов\'язання Користувача',
            content: 'Ви погоджуєтесь використовувати наш портал лише в законних цілях і таким чином, щоб не порушувати права, не обмежувати та не перешкоджати використанню порталу будь-ким іншим. Заборонена поведінка включає переслідування або заподіяння незручностей іншому користувачеві, передачу непристойного або образливого контенту.'
          },
          {
            title: '5. Обмеження Відповідальності',
            content: 'ZEMRESURS не несе відповідальності за будь-які непрямі, випадкові, спеціальні або побічні збитки, або будь-яку втрату прибутку чи доходу, незалежно від того, чи були вони понесені прямо чи опосередковано, або будь-яку втрату даних, використання, гудвілу чи інших нематеріальних втрат.'
          }
        ]
      },
      cookies: {
        title: 'Політика',
        subtitle: 'Cookie',
        sections: [
          {
            title: '1. Використання Cookie',
            content: 'Щоб покращити ваш досвід на сайті ZEMRESURS, ми використовуємо файли cookie — невеликі файли даних, що розміщуються на вашому пристрої. Вони допомагають нам зрозуміти ваші вподобання та забезпечити безперебійну роботу інтерактивних карт та відео-фонів.'
          },
          {
            title: '2. Аналітична Досконалість',
            content: 'Ми використовуємо аналітичні інструменти для вимірювання патернів трафіку нашої глобальної інвесторської спільноти. Ці файли cookie надають анонімні метрики, які дозволяють нам оптимізувати час відгуку сервера та візуальну чіткість.'
          },
          {
            title: '3. Контроль Переваг',
            content: 'Ви можете змінити налаштування браузера, щоб відмовитися від файлів cookie. Зверніть увагу, що вимкнення основних файлів cookie може вплинути на ефект паралакса та функції онлайн-валідації нашого порталу.'
          },
          {
            title: '4. Типи Файлів Cookie',
            content: 'Ми використовуємо як сесійні, так і постійні файли cookie на порталі: необхідні файли cookie, файли cookie уподобань, аналітичні файли cookie та рекламні файли cookie.'
          },
          {
            title: '5. Cookie Сторонніх Сервісів',
            content: 'Крім наших власних файлів cookie, ми також можемо використовувати різні файли cookie третіх сторін для звітування статистики використання порталу, показу реклами на порталі та через нього тощо.'
          }
        ]
      }
    },
    widget: {
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      callUs: 'Подзвонити',
      contactUs: 'Зв\'язатися'
    },
    about: {
      return: 'Повернутися',
      badge: 'Філософія бренду',
      title1: 'ЕКСПЕРТИЗА',
      title2: 'У КОЖНІЙ СОТЦІ.',
      description: 'ZEMRESURS не просто продає землю. Ми створюємо екосистему для примноження капіталу.',
      longDescription: 'Наша команда аналізує сотні гектарів, вивчає плани розвитку громад та інфраструктурні проекти, щоб запропонувати вам лише ті активи, які гарантовано зростуть у ціні. Ми перетворюємо хаотичний ринок землі на зрозумілий фінансовий інструмент.',
      heroImage: elephantParkImg,
      stats: [
        { label: 'Річна дохідність', value: '40%' },
        { label: 'Юридична чистота', value: '100%' }
      ],
      vision: {
        title: 'Наша Візія',
        content: 'Створити найексклюзивнішу екосистему в Східній Європі, встановлюючи новий золотий стандарт сталого розкішного життя.'
      },
      mission: {
        title: 'Наша Місія',
        content: 'Інтеграція високотехнологічної безпеки, преміального консьєрж-сервісу та глибокого збереження екології в єдиний бездоганний досвід.'
      },
      history: {
        title: 'Наша Спадщина',
        content: 'Заснований у 2025 році, ZEMRESURS є кульмінацією багаторічних ландшафтних досліджень та архітектурних інновацій біля Воріт Києва.'
      },
      ideology: {
        title: 'Ідеологія проекту',
        subtitle: 'Природна гармонія, де кожен метр дихає свободою',
        image: colTownImg,
        list: [
          '362 гектари заповідного лісу – ваш особистий оазис тиші та сили.',
          '144,8 юнітів – від спа до дитячих майданчиків.',
          '47 000 кілометрів екостежок – квадроцикл, велосипед або баггі без пилу та нервів.',
          '54 300 м² дзеркальних озер – ранок на каяку, вечір на заході сонця.',
          '100 місяців повної потужності – дохід, який працює, поки ви відпочиваєте.',
          'Капіталізація 198,9 млн грн – майбутнє, що вже тут, просто в іншому світлі.'
        ]
      },
      lifestyle: {
        gastronomy: {
          title: 'Гастрономіка та душа',
          items: [
            {
              name: 'Ресторани з українською душею',
              count: '1 заклад',
              description: 'Де борщ подають у керамічних мисках, а вареники тримають форму, як твої інвестиції.',
              image: countryResImg
            },
            {
              name: 'Кав’ярні з авторським міксом',
              count: '4 точки',
              description: 'Від флет-вайт з медом з власного вулика до кави на місячному світлі.',
              image: cascadeLakesImg
            }
          ]
        },
        wellness: {
          title: 'Оздоровлення та релакс',
          items: [
            {
              name: 'Релакс-центр SPA-World',
              count: '1 комплекс',
              description: 'Сауна, басейн, масажні крісла, де ти розтоплюєшся, як масло на гарячому баурсаках.',
              image: riverColImg
            },
            {
              name: 'Медитаційний хаб фітотерапії',
              count: '1 дім',
              description: 'Аромати хвої, трав’яні чаї, йога на деревах, без мантри «покупатель не прав».',
              image: elephantParkImg
            }
          ]
        },
        recreation: {
          title: 'Відпочинок та розваги',
          items: [
            {
              name: 'Домівки на озерах',
              count: '4 котеджі',
              description: 'Приватний понтон, каяк в комплекті, ввечері — нічні свічки і тиша.',
              image: colTownImg
            },
            {
              name: 'Фестивальний сезон',
              count: '8–10 подій на рік',
              description: 'Джаз над водою, електроніка в лісі, фолк-блюз на пирсі.',
              image: countryResImg
            }
          ]
        }
      }
    },
    investment: {
      badge: 'Стратегічне зростання',
      title: 'Інвестиційна система в три ешелони',
      description: 'Стратегічний підхід до примноження капіталу в найперспективнішій житловій екосистемі Східної Європи.',
      labels: {
        threshold: 'Поріг входу',
        yield: 'Прогнозована дохідність',
        strategy: 'Стратегія інвестування'
      },
      cta: {
        learn: 'Дізнатися більше',
        book: 'Записатися на зустріч'
      },
      trust: {
        title: 'Захистіть своє майбутнє активами інституційного рівня',
        text: 'ZEMRESURS забезпечує повну юридичну прозорість, переваги стратегічного розташування та експертне управління.',
        p1: '100% юридична чистота',
        p2: 'Гарантована капіталізація',
        p3: 'Готовність до пасивного доходу'
      },
      echelons: [
        {
          tier: 'Ешелон 1: Стратегічний інвестор',
          entry: 'від 200 000 доларів',
          return: '25 % річних',
          details: 'Ранній вихід через перепродаж. Пріоритетне право викупу нових гектарів за стартовою ціною.'
        },
        {
          tier: 'Ешелон 2: Клубний інвестор',
          entry: 'від 100 000 доларів',
          return: '40 % за два роки',
          details: 'Підхоплює активи стратегічного рівня. Доступ до ексклюзивних лотів з уже підготовленою інфраструктурою.'
        },
        {
          tier: 'Ешелон 3: Колективний інвестор',
          entry: 'від 5 000 доларів',
          return: '50 % за три роки',
          details: 'Масштаб. Стабільність. Диверсифікований пул активів з низьким порогом входу та гарантованим викупом.'
        }
      ]
    },
    masterplan: {
      badge: 'План розвитку',
      title: 'Три черги до повної реалізації',
      tagline: 'Унікальна рекреація лісів, озер та ландшафтів. Північно-Кулонщина',
      distance: '25 км від столиці',
      location: 'Північно-Кулонщина',
      kyiv: 'Київ',
      direction: 'Північно-західний напрямок',
      landscape: 'Еко-заповідний ландшафт',
      phaseLabel: 'Черга',
      yearTarget: 'Рік запуску',
      cycles: [
        {
          phase: 'Перша черга ZEMRESURS',
          area: '67 га',
          period: '2026–2028 роки',
          description: 'Запуск рекреаційного сегмента.',
          features: ['Лісові вілли', 'Дзеркальні озера', 'SPA-центр']
        },
        {
          phase: 'Друга черга: Інфраструктура',
          area: '64 га',
          period: '2028–2030 роки',
          description: 'Розширення соціальних та гастрономічних зон.',
          features: ['Гастрономічний хаб', 'Еко-стежки', 'Клубна зона']
        },
        {
          phase: 'Третя черга: Спільнота',
          area: '231 га',
          period: '2029–2035 роки',
          description: 'Повна капіталізація та інновації.',
          features: ['Геліо-куполи', 'Фестивальна зона', 'Техно-хаб']
        }
      ]
    },
    architecture: {
      totalUnits: '1448 юнітів',
      types: [
        {
          title: 'Модульні будинки',
          area: '28–64 м²',
          count: '507 одиниць',
          description: 'Швидке складання, енергоефективні, з власними терасами.'
        },
        {
          title: 'Капсульні будинки на береговій лінії',
          area: '19–43 м²',
          count: '220 одиниць',
          description: 'Мінімалізм, панорамне скло, вихід до озера.'
        },
        {
          title: 'Інноваційна архітектура',
          area: '38–96 м²',
          count: '616 одиниць',
          description: 'Смарт-дом, вентиляція, інтелектуальне освітлення.'
        },
        {
          title: 'Дома під геліокуполом',
          area: 'Для 106 сімей',
          count: '106 юнітів',
          description: 'Прозорий купол, приватний дворик, зелена зона.'
        }
      ]
    },
    objects: {
      badge: 'Інвестиційні Активи',
      title1: 'Стратегічні',
      title2: 'Об\'єкти.',
      back: 'Повернутися',
      details: 'Детальніше',
      map: 'Показати на карті',
      areaLabel: 'Загальна площа',
      priceLabel: 'Ціна за сотку',
      minLotLabel: 'Мін. лот',
      locationLabel: 'ЛОКАЦІЯ',
      descriptionLabel: 'Опис',
      list: [
        {
          id: 'col-town',
          name: 'Комплекс "COL-TOWN"',
          location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
          description: 'Унікальна інвестиційна можливість, що об\'єднує три земельні ділянки (3,63 Га, 1,9 Га та 1,90 Га) загальною площею 7,43 Га. Ландшафт вражає балансом: 3,63 Га густого лісу та 3,8 Га рельєфної місцевості (Пагорб). До складу комплексу входить масштабна інфраструктура: банний комплекс із зовнішнім басейном (0,55 Га), спортивні та дитячі майданчики (0,75 Га), дитячий садок та комерційний блок (магазин, кав\'ярня, аптека). Житлова зона включає 37 модульних будинків для оренди та 37 будинків терасного типу новітньої архітектури. Передбачено ангар для спецтехніки та резервну генерацію. Потенціальна капіталізація проекту: $14,415 млн.',
          area: '7.43 Га',
          price: '$490 000',
          minLot: '7.43 Га',
          image: colTownImg,
          coordinates: [50.471194, 29.92975],
          tags: ['Ліс', 'Пагорб', 'Інвестиції', 'Рекреація']
        },
        {
          id: 'river-col',
          name: 'Комплекс "RIVER-COL"',
          location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
          description: 'Масштабний проект площею 25.00 Га з унікальною водною концепцією. Центральним елементом є канал довжиною 1132 м та "Острів Релаксу". Інфраструктура включає SPA-комплекс "SPA-WORLD", спортивні зони, та різноманітні формати житла: від капсульних будинків біля води до геліо-куполів. Проект орієнтований на 100% бізнес-використання (розважальний комплекс). Потенційна капіталізація $55.4 млн.',
          area: '25.00 Га',
          price: '$875 000',
          minLot: '25.00 Га',
          image: riverColImg,
          coordinates: [50.475778, 29.943806],
          tags: ['Вода', 'SPA', 'Канал', 'Інвестиції']
        },
        {
          id: 'country-residence',
          name: 'Комплекс "COUNTRY RESIDENCE"',
          location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
          description: 'Найпівденніша частина комплексу. Клубний формат: 22 елітних домоволодіння з власним виходом до каналу. Земельна ділянка 13.73 Га з відродженою природною водоймою. Кожен інвестор отримує 35 соток землі, будинок та приватну частину озера. Ідеальне місце для заміської резиденції з садом екзотичних рослин. Капіталізація $14.4 млн.',
          area: '13.73 Га',
          price: '$490 000',
          minLot: '13.73 Га',
          image: countryResImg,
          coordinates: [50.468446, 29.933377],
          tags: ['Клубний', 'Вода', 'Сад', 'Резиденція']
        },
        {
          id: 'cascade-lakes',
          name: 'Комплекс "CASCADE of LAKES"',
          location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
          description: 'Найпівнічніша частина комплексу. Земельний масив 28.65 Га (однією ділянкою). Межує з ДержЛісГосподом (16 000 Га). Родзинка – три плями висохших природніх озер з високими грунтовими водами, що дозволяє створити каскад штучних водойм. Концепція 100% бізнес: відпочинково-розважальний комплекс. Влітку – рибалка та катамарани, взимку – ковзанки. Ідеальні умови для покатушок на квадроциклах та снігоходах завдяки сусідству з лісом.',
          area: '28.65 Га',
          price: '$1 002 750',
          minLot: '28.65 Га',
          image: cascadeLakesImg,
          coordinates: [50.485000, 29.950000],
          tags: ['Озера', 'Ліс', 'Бізнес', 'Розваги']
        },
        {
          id: 'elephant-park',
          name: 'Комплекс "ELEPHANT PARK"',
          location: 'Бучанський район, Макарівська громада, Колонщинська сільська рада',
          description: 'Земельний масив 19.00 Га (9.99 Га + 8.99 Га). Центральна частина – зона з високими грунтовими водами для створення унікального штучного озера (4.48 Га) з островом релаксу. Справа – 74 відпочинкові будинки, зліва – 74 будинки унікальної архітектури. Змішана форма використання: 50% розваги, 50% інноваційне житло. Примикає до асфальтованої дороги, переважно заліснений.',
          area: '19.00 Га',
          price: '$1 235 000',
          minLot: '19.00 Га',
          image: elephantParkImg,
          coordinates: [50.462721, 29.953006],
          tags: ['Готель', 'SPA', 'Острів', 'Бізнес']
        }
      ]
    },
    map: {
      widgetTitle: 'Інвестиційна Карта',
      widgetSubtitle: 'Експертиза Київщини',
      widgetDescription: 'Наша інтерактивна карта дозволяє досліджувати найбільш перспективні земельні активи навколо Києва. Кожна точка представляє перевірену можливість для зростання капіталу.',
      legendLand: 'Об\'єкти Землі',
      legendPlanned: 'Планові Зони',
      viewDetails: 'Детальніше',
      modalBadge: 'Інвестиційна Можливість',
      modalDescription: 'Опис',
      bookConsultation: 'Консультація',
    },
    faq: {
      badge: 'База Знань',
      title: 'Поширені Запитання',
      items: [
        {
          question: 'Які основні ризики пов’язані з інвестуванням у земельні активи ЗЕМРЕСУРС?',
          answer: 'Усі наші земельні активи проходять суворий юридичний та екологічний аудит. Основний ризик у будь-якій нерухомості — це коливання ринку, але, купуючи реальну землю з чітким планом розвитку біля воріт Києва, ми мінімізуємо спекулятивні ризики. Наші моделі прогнозують стабільну капіталізацію незалежно від короткострокових економічних змін.'
        },
        {
          question: 'Як юридично оформлюється інвестиційна угода?',
          answer: 'Інвестиції оформлюються через пряме право власності або частки у спеціалізованій юридичній особі, що володіє активом, залежно від вашого статусу та ешелону. Усі угоди супроводжуються нашою юридичною командою з гарантією 100% відповідності законодавству України.'
        },
        {
          question: 'Чи можу я відстежувати прогрес моєї інвестиції та розбудову інфраструктури?',
          answer: 'Абсолютно. Інвестори Клубного та Стратегічного рівнів отримують щоквартальні звіти, що включають відео з дронів, оновлення щодо розбудови інфраструктури та переглянуті моделі капіталізації на основі поточних ринкових даних.'
        },
        {
          question: 'Чи можливо вийти з інвестиції до закінчення мінімального терміну у 3 роки?',
          answer: 'Хоча наші моделі розраховані мінімум на 3 роки для оптимальної прибутковості, інвестори 1 і 2 ешелонів мають опції вторинного ринку. ZEMRESURS веде лист очікування покупців і може сприяти достроковому виходу, хоч і з потенційно меншою прибутковістю.'
        }
      ]
    }
  }
};
