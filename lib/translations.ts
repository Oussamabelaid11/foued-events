import type { Locale } from './i18n';

export type TranslationDict = {
  brandName: string;
  brandTagline: string;
  brandLocation: string;
  nav: { home: string; about: string; services: string; orchestra: string; portfolio: string; contact: string; quote: string };
  hero: { eyebrow: string; title: string; titleAccent: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; scroll: string };
  editorial: { eyebrow: string; title: string; paragraph1: string; paragraph2: string; signature: string };
  services: { eyebrow: string; title: string; subtitle: string; items: { title: string; description: string }[]; cta: string };
  stats: { title: string; items: { value: string; label: string }[] };
  portfolio: { eyebrow: string; title: string; subtitle: string; categories: { all: string; ceremony: string; reception: string; decor: string; music: string; detail: string }; viewAll: string };
  orchestra: { eyebrow: string; title: string; subtitle: string; description: string; features: string[]; cta: string };
  testimonials: { eyebrow: string; title: string; items: { quote: string; author: string; event: string }[] };
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] };
  cta: { title: string; subtitle: string; button: string; whatsapp: string };
  contact: {
    eyebrow: string; title: string; subtitle: string;
    form: { name: string; namePlaceholder: string; email: string; emailPlaceholder: string; phone: string; phonePlaceholder: string; date: string; datePlaceholder: string; service: string; servicePlaceholder: string; services: string[]; message: string; messagePlaceholder: string; submit: string; sending: string; success: string; error: string };
    info: { phoneLabel: string; phone: string; emailLabel: string; email: string; addressLabel: string; address: string; hoursLabel: string; hours: string; whatsapp: string; facebook: string };
    mapTitle: string;
  };
  about: {
    hero: { eyebrow: string; title: string; subtitle: string };
    story: { eyebrow: string; title: string; paragraph1: string; paragraph2: string; paragraph3: string };
    values: { eyebrow: string; title: string; items: { title: string; description: string }[] };
    timeline: { eyebrow: string; title: string; items: { year: string; title: string; description: string }[] };
  };
  servicesPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    detailed: { title: string; description: string; features: string[] }[];
    process: { eyebrow: string; title: string; items: { step: string; title: string; description: string }[] };
  };
  orchestraPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    about: { title: string; paragraph1: string; paragraph2: string };
    repertoire: { eyebrow: string; title: string; categories: { name: string; description: string }[] };
    members: { eyebrow: string; title: string; items: { name: string; role: string }[] };
    booking: { title: string; subtitle: string; cta: string };
  };
  portfolioPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    categories: { all: string; ceremony: string; reception: string; decor: string; music: string; detail: string };
    projects: { title: string; location: string; year: string; category: string }[];
  };
  footer: { tagline: string; quickLinks: string; contactTitle: string; followUs: string; privacy: string; rights: string; madeWith: string };
  common: { loading: string; error: string; close: string; menu: string; back: string; learnMore: string };
};

export const translations = {
  fr: {
    // Brand
    brandName: 'Groupe Foued',
    brandTagline: 'Mariage & Événements de Luxe',
    brandLocation: 'Tazarka · Nabeul · Tunisie',

    // Nav
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      orchestra: 'Orchestre',
      portfolio: 'Portfolio',
      contact: 'Contact',
      quote: 'Demander un Devis',
    },

    // Hero
    hero: {
      eyebrow: 'L\'Art de Célébrer',
      title: 'Des Mariages',
      titleAccent: 'd\'Exception',
      subtitle: 'De la première note de musique au dernier éclat de rire, nous orchestrons des mariages qui restent gravés dans les mémoires pour l\'éternité.',
      ctaPrimary: 'Demander un Devis',
      ctaSecondary: 'Découvrir notre Univers',
      scroll: 'Découvrir',
    },

    // Editorial
    editorial: {
      eyebrow: 'Notre Philosophie',
      title: 'Chaque détail est une promesse de perfection',
      paragraph1: 'Depuis plus de quinze ans, le Groupe Foued transforme les rêves les plus ambitieux en célébrations inoubliables. De la côte de Tazarka aux palais de Nabeul, nous tissons des histoires d\'amour avec une précision d\'orfèvre.',
      paragraph2: 'Notre approche repose sur une conviction simple : un mariage de luxe n\'est pas une somme de prestations, c\'est une expérience cohérente où chaque élément — musique, décor, gastronomie, émotion — dialogue harmonieusement.',
      signature: 'Foued · Fondateur & Directeur Artistique',
    },

    // Services
    services: {
      eyebrow: 'Nos Prestations',
      title: 'Un savoir-faire complet',
      subtitle: 'De la conception à la réalisation, nous couvrons chaque dimension de votre célébration avec la même exigence.',
      items: [
        {
          title: 'Organisation de Mariages',
          description: 'Planification complète, coordination le jour J, gestion des prestataires et respect du budget.',
        },
        {
          title: 'Orchestre & Musique Live',
          description: 'Lahn Al Khouloud, notre orchestre signature, anime vos cérémonies avec un répertoire arabe et international.',
        },
        {
          title: 'Décoration & Design',
          description: 'Scénographies sur-mesure, floraison, éclairage et mobilier pour des espaces dignes d\'un conte de fées.',
        },
        {
          title: 'Traiteur de Prestige',
          description: 'Cuisine raffinée mêlant traditions tunisiennes et gastronomie internationale, présentée avec art.',
        },
        {
          title: 'Photographie & Vidéo',
          description: 'Captation cinématographique de chaque instant précieux par des artistes de l\'image.',
        },
        {
          title: 'Événements Privés',
          description: 'Cocktails, galas, anniversaires et célébrations familiales avec la même signature d\'excellence.',
        },
      ],
      cta: 'Voir tous les services',
    },

    // Stats
    stats: {
      title: 'Une histoire mesurée en sourires',
      items: [
        { value: '450+', label: 'Mariages Réalisés' },
        { value: '15', label: 'Années d\'Expérience' },
        { value: '12', label: 'Musiciens Professionnels' },
        { value: '98%', label: 'Clients Satisfaits' },
      ],
    },

    // Portfolio
    portfolio: {
      eyebrow: 'Nos Réalisations',
      title: 'Des moments figés pour l\'éternité',
      subtitle: 'Chaque mariage raconte une histoire unique. En voici quelques chapitres.',
      categories: {
        all: 'Tout',
        ceremony: 'Cérémonies',
        reception: 'Réceptions',
        decor: 'Décoration',
        music: 'Musique',
        detail: 'Détails',
      },
      viewAll: 'Voir le portfolio complet',
    },

    // Orchestra / Lahn Al Khouloud
    orchestra: {
      eyebrow: 'Lahn Al Khouloud',
      title: 'La mélodie de vos souvenirs',
      subtitle: 'Notre orchestre résident, composé de douze musiciens professionnels, incarne l\'âme musicale du Groupe Foued.',
      description: 'Du classique oriental aux plus grandes chansons arabes, en passant par les standards internationaux et les sets DJ, Lahn Al Khouloud compose la bande-son de votre soirée, note après note.',
      features: [
        'Répertoire arabe, oriental et international',
        'Cérémonie religieuse et festive',
        'Sonorisation professionnelle incluse',
        'Chanteurs et chanteuses solistes',
      ],
      cta: 'Réserver l\'orchestre',
    },

    // Testimonials
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Ils nous ont confié leur plus beau jour',
      items: [
        {
          quote: 'Le Groupe Foued a transformé notre mariage en un conte de fées. Chaque détail était pensé, chaque note juste. Un souvenir inoubliable.',
          author: 'Sarah & Karim',
          event: 'Mariage à Hammamet, 2024',
        },
        {
          quote: 'L\'orchestre Lahn Al Khouloud a fait vibrer tous nos invités. Le niveau musical est exceptionnel, digne des plus grandes scènes.',
          author: 'Famille Ben Salah',
          event: 'Réception à Nabeul, 2023',
        },
        {
          quote: 'Du premier rendez-vous au dernier verre de la soirée, une équipe d\'une élégance et d\'un professionnalisme rares. Merci infiniment.',
          author: 'Inès & Yassine',
          event: 'Mariage à Sousse, 2024',
        },
      ],
    },

    // FAQ
    faq: {
      eyebrow: 'Questions Fréquentes',
      title: 'Tout ce qu\'il faut savoir',
      items: [
        {
          question: 'Combien de temps à l\'avance dois-je réserver ?',
          answer: 'Pour un mariage en haute saison (mai à septembre), nous recommandons de réserver 8 à 12 mois à l\'avance. Pour les autres périodes, 4 à 6 mois suffisent généralement.',
        },
        {
          question: 'Proposez-vous des forfaits tout compris ?',
          answer: 'Oui. Nous proposons des forfaits modulables qui peuvent inclure l\'organisation, l\'orchestre, la décoration, le traiteur et la captation. Chaque devis est personnalisé selon vos besoins.',
        },
        {
          question: 'L\'orchestre peut-il se déplacer en dehors de Nabeul ?',
          answer: 'Absolument. Lahn Al Khouloud se déplace dans toute la Tunisie et à l\'étranger pour les mariages de la diaspora. Les frais de déplacement sont inclus dans le devis.',
        },
        {
          question: 'Acceptez-vous les mariages de la diaspora tunisienne ?',
          answer: 'C\'est l\'une de nos spécialités. Nous accompagnons de nombreux couples de la diaspora, en présentiel ou à distance via vidéo, pour organiser leur mariage en Tunisie.',
        },
        {
          question: 'Quel est le budget moyen d\'un mariage ?',
          answer: 'Chaque projet est unique. Nous proposons une première consultation gratuite pour comprendre vos attentes et établir un devis sur-mesure adapté à votre budget.',
        },
      ],
    },

    // CTA
    cta: {
      title: 'Commençons à écrire votre histoire',
      subtitle: 'Réservez une consultation gratuite et laissez-nous transformer votre vision en réalité.',
      button: 'Demander un Devis',
      whatsapp: 'WhatsApp Direct',
    },

    // Contact
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre projet',
      subtitle: 'Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous répondons sous 24 heures.',
      form: {
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Adresse e-mail',
        emailPlaceholder: 'votre@email.com',
        phone: 'Téléphone',
        phonePlaceholder: '+216 XX XXX XXX',
        date: 'Date envisagée',
        datePlaceholder: 'JJ/MM/AAAA',
        service: 'Prestation souhaitée',
        servicePlaceholder: 'Sélectionnez une prestation',
        services: [
          'Organisation complète',
          'Orchestre & Musique',
          'Décoration',
          'Traiteur',
          'Photographie & Vidéo',
          'Autre / Plusieurs prestations',
        ],
        message: 'Votre message',
        messagePlaceholder: 'Parlez-nous de votre vision, vos attentes, vos questions...',
        submit: 'Envoyer la demande',
        sending: 'Envoi en cours...',
        success: 'Merci ! Votre demande a été envoyée. Nous vous répondrons sous 24 heures.',
        error: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp.',
      },
      info: {
        phoneLabel: 'Téléphone',
        phone: '+216 98 123 456',
        emailLabel: 'E-mail',
        email: 'contact@groupefoued.tn',
        addressLabel: 'Adresse',
        address: 'Avenue Habib Bourguiba, Tazarka 8011, Nabeul, Tunisie',
        hoursLabel: 'Horaires',
        hours: 'Lun – Sam : 9h00 – 19h00',
        whatsapp: 'Discuter sur WhatsApp',
        facebook: 'Suivez-nous sur Facebook',
      },
      mapTitle: 'Retrouvez-nous',
    },

    // About page
    about: {
      hero: {
        eyebrow: 'Notre Histoire',
        title: 'L\'élégance née de la passion',
        subtitle: 'De Tazarka à toute la Tunisie, le Groupe Foued écrit depuis quinze ans des histoires d\'amour inoubliables.',
      },
      story: {
        eyebrow: 'Genèse',
        title: 'Tout a commencé par une mélodie',
        paragraph1: 'Foued grandit bercé par les rythmes de la côte de Tazarka. Fils de musicien, il apprend très tôt que la musique n\'est pas seulement un art — c\'est un langage qui relie les cœurs. En 2009, il fonde Lahn Al Khouloud, un petit ensemble qui deviendra l\'un des orchestres de mariage les plus prisés du pays.',
        paragraph2: 'Face à la demande croissante de couples qui voulaient « le même niveau d\'excellence pour tout le mariage », Foued réunit autour de lui une équipe de décorateurs, traiteurs et coordinateurs partageant sa vision. Le Groupe Foued naît de cette conviction : un mariage de luxe se vit comme une œuvre d\'art, où chaque détail compte.',
        paragraph3: 'Aujourd\'hui, le Groupe Foued accompagne plus de 60 mariages par an, de la côte tunisienne jusqu\'aux destinations internationales de la diaspora, avec la même obsession : faire de chaque célébration un moment suspendu dans le temps.',
      },
      values: {
        eyebrow: 'Nos Valeurs',
        title: 'Ce qui nous guide',
        items: [
          {
            title: 'Excellence',
            description: 'Nous ne transigeons jamais sur la qualité. Chaque fleur, chaque note, chaque plat doit être parfait.',
          },
          {
            title: 'Authenticité',
            description: 'Nous célébrons la richesse de la culture tunisienne tout en l\'enrichissant d\'influences contemporaines.',
          },
          {
            title: 'Bienveillance',
            description: 'Vos émotions sont notre priorité. Nous créons un espace de confiance où votre histoire s\'écrit sereinement.',
          },
          {
            title: 'Engagement',
            description: 'De la première rencontre au lendemain de la fête, nous sommes présents à chaque étape de votre parcours.',
          },
        ],
      },
      timeline: {
        eyebrow: 'Notre Parcours',
        title: 'Quinze ans d\'histoires d\'amour',
        items: [
          { year: '2009', title: 'La première note', description: 'Fondation de Lahn Al Khouloud, orchestre de cinq musiciens à Tazarka.' },
          { year: '2012', title: 'L\'expansion', description: 'Premiers mariages complets : organisation, décoration et musique réunies.' },
          { year: '2016', title: 'Le Groupe Foued', description: 'Structuration officielle du groupe avec une équipe pluridisciplinaire de 20 personnes.' },
          { year: '2019', title: 'Au-delà des frontières', description: 'Premiers mariages de la diaspora tunisienne en France, en Italie et au Moyen-Orient.' },
          { year: '2024', title: 'Une référence', description: 'Plus de 450 mariages réalisés, une réputation d\'excellence dans tout le pays.' },
        ],
      },
    },

    // Services page
    servicesPage: {
      hero: {
        eyebrow: 'Nos Prestations',
        title: 'Une signature d\'excellence',
        subtitle: "Six pôles d'expertise au service d'un seul objectif : votre satisfaction.",
      },
      detailed: [
        {
          title: 'Organisation & Coordination',
          description: 'De la première esquisse au lendemain de la fête, nous orchestrons chaque étape de votre mariage avec une précision d\'horloger.',
          features: ['Planification complète du projet', 'Sélection et gestion des prestataires', 'Coordination le jour J', 'Respect du budget et des délais', 'Conciergerie pour les invités'],
        },
        {
          title: 'Orchestre Lahn Al Khouloud',
          description: 'Douze musiciens professionnels, un répertoire sans limite et une énergie qui transforme chaque soirée en légende.',
          features: ['Répertoire arabe & oriental', 'Standards internationaux', 'Cérémonie religieuse', 'Sonorisation professionnelle', 'Chanteurs et solistes'],
        },
        {
          title: 'Décoration & Scénographie',
          description: 'Des espaces pensés comme des œuvres d\'art éphémères, où la lumière, la fleur et la matière dialoguent.',
          features: ['Scénographie sur-mesure', 'Floraison fraîche et artificielle', 'Éclairage architectural', 'Mobilier et accessoires', 'Espaces photo et réception'],
        },
        {
          title: 'Traiteur de Prestige',
          description: 'Une cuisine qui célèbre le terroir tunisien tout en s\'ouvrant au monde, servie avec une élégance irréprochable.',
          features: ['Cuisine tunisienne raffinée', 'Cuisine internationale', 'Buffets et menus assis', 'Pâtisseries et pièces montées', 'Service en salle soigné'],
        },
        {
          title: 'Photographie & Cinéma',
          description: 'Des artistes de l\'image qui capturent non pas des images, mais des émotions, pour un souvenir vivant.',
          features: ['Reportage photo complet', 'Film de mariage cinématographique', 'Drone et vues aériennes', 'Albums premium', 'Livraison rapide'],
        },
        {
          title: 'Événements Privés',
          description: 'Cocktails, galas, anniversaires et célébrations familiales : la même signature d\'excellence pour chaque occasion.',
          features: ['Cocktails et vin d\'honneur', 'Galas et soirées d\'entreprise', 'Anniversaires et célébrations', 'Événements sur-mesure', 'Location de matériel'],
        },
      ],
      process: {
        eyebrow: 'Notre Processus',
        title: 'Une méthode éprouvée',
        items: [
          { step: '01', title: 'Consultation', description: 'Nous écoutons votre vision, vos envies et vos contraintes lors d\'un premier rendez-vous gratuit.' },
          { step: '02', title: 'Conception', description: 'Nous proposons une scénographie, un budget détaillé et un planning complet de votre mariage.' },
          { step: '03', title: 'Préparation', description: 'Nous coordonnons les prestataires, validons chaque détail et affinons jusqu\'à la perfection.' },
          { step: '04', title: 'Le Jour J', description: 'Nous orchestrons tout dans l\'ombre pour que vous n\'ayez qu\'une seule mission : profiter.' },
        ],
      },
    },

    // Orchestra page
    orchestraPage: {
      hero: {
        eyebrow: 'Lahn Al Khouloud',
        title: 'La musique qui fait vivre les âmes',
        subtitle: 'Douze musiciens, un répertoire infini, une énergie qui transforme chaque célébration en légende.',
      },
      about: {
        title: 'Un orchestre, mille émotions',
        paragraph1: 'Lahn Al Khouloud — « la mélodie de l\'éternité » — est né en 2009 d\'une conviction simple : un mariage sans grande musique est un mariage incomplet. Foued réunit d\'abord cinq musiciens passionnés, puis grandit année après année pour devenir l\'un des orchestres les plus respectés de Tunisie.',
        paragraph2: 'Aujourd\'hui, l\'orchestre compte douze musiciens professionnels : violonistes, percussionnistes, claviéristes, guitaristes, chanteurs et chanteuses solistes. Ensemble, ils naviguent entre le classique oriental, les grandes chansons arabes, les standards internationaux et les sets DJ modernes.',
      },
      repertoire: {
        eyebrow: 'Répertoire',
        title: 'Du classique oriental au hit international',
        categories: [
          { name: 'Classique Oriental', description: 'Les grandes œuvres de la musique arabe classique et andalouse.' },
          { name: 'Chanson Arabe', description: 'Les plus belles chansons d\'amour de la Tunisie, du Machrek et du Maghreb.' },
          { name: 'Standards Internationaux', description: 'Jazz, soul, pop et variété internationale pour tous les goûts.' },
          { name: 'Sets DJ & Moderne', description: 'Ambiances festives et sets DJ pour faire danser jusqu\'au bout de la nuit.' },
        ],
      },
      members: {
        eyebrow: 'L\'Équipe',
        title: 'Les artistes de Lahn Al Khouloud',
        items: [
          { name: 'Foued', role: 'Directeur Musical & Claviers' },
          { name: 'Leïla', role: 'Chanteuse Soprane' },
          { name: 'Yassine', role: 'Violoniste' },
          { name: 'Marwa', role: 'Chanteuse & Percussions' },
          { name: 'Sami', role: 'Guitare & Oud' },
          { name: 'Riadh', role: 'Percussions & Darbouka' },
        ],
      },
      booking: {
        title: 'Réserver l\'orchestre',
        subtitle: 'Disponibilités limitées en haute saison. Contactez-nous dès maintenant pour vérifier la date de votre mariage.',
        cta: 'Demander un devis',
      },
    },

    // Portfolio page
    portfolioPage: {
      hero: {
        eyebrow: 'Portfolio',
        title: 'Des moments qui restent',
        subtitle: 'Une sélection de mariages et d\'événements que nous avons eu le privilège d\'orchestrer.',
      },
      categories: {
        all: 'Toutes les réalisations',
        ceremony: 'Cérémonies',
        reception: 'Réceptions',
        decor: 'Décoration',
        music: 'Musique',
        detail: 'Détails',
      },
      projects: [
        { title: 'Mariage Sarah & Karim', location: 'Hammamet', year: '2024', category: 'ceremony' },
        { title: 'Réception Famille Ben Salah', location: 'Nabeul', year: '2023', category: 'reception' },
        { title: 'Décoration Florale Royale', location: 'Sousse', year: '2024', category: 'decor' },
        { title: 'Lahn Al Khouloud Live', location: 'Tunis', year: '2023', category: 'music' },
        { title: 'Table de Mariage Art Déco', location: 'Hammamet', year: '2024', category: 'detail' },
        { title: 'Cérémonie Inès & Yassine', location: 'Sousse', year: '2024', category: 'ceremony' },
        { title: 'Soirée Blanche & Or', location: 'Nabeul', year: '2023', category: 'reception' },
        { title: 'Arche Florale Bohème', location: 'Tazarka', year: '2024', category: 'decor' },
        { title: 'Set DJ Fin de Soirée', location: 'Tunis', year: '2024', category: 'music' },
        { title: 'Pièce Montée Signature', location: 'Hammamet', year: '2023', category: 'detail' },
        { title: 'Mariage Doré à Sidi Bou Saïd', location: 'Tunis', year: '2024', category: 'ceremony' },
        { title: 'Gala de Prestige', location: 'Nabeul', year: '2023', category: 'reception' },
      ],
    },

    // Footer
    footer: {
      tagline: 'L\'art de célébrer les plus beaux moments de votre vie.',
      quickLinks: 'Navigation',
      contactTitle: 'Contact',
      followUs: 'Suivez-nous',
      privacy: 'Politique de confidentialité',
      rights: 'Tous droits réservés.',
      madeWith: 'Conçu avec passion en Tunisie',
    },

    // Common
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      close: 'Fermer',
      menu: 'Menu',
      back: 'Retour',
      learnMore: 'En savoir plus',
    },
  },

  ar: {
    // Brand
    brandName: 'مجموعة فؤاد',
    brandTagline: 'أعراس ومناسبات فاخرة',
    brandLocation: 'تازركة · نابل · تونس',

    // Nav
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      orchestra: 'الأوركسترا',
      portfolio: 'أعمالنا',
      contact: 'اتصل بنا',
      quote: 'اطلب عرض سعر',
    },

    // Hero
    hero: {
      eyebrow: 'فن الاحتفال',
      title: 'أعراس',
      titleAccent: 'استثنائية',
      subtitle: 'من النغمة الموسيقية الأولى إلى آخر ابتسامة، نحن ننسّق أعراساً تبقى محفورة في الذاكرة إلى الأبد.',
      ctaPrimary: 'اطلب عرض سعر',
      ctaSecondary: 'اكتشف عالمنا',
      scroll: 'اكتشف',
    },

    // Editorial
    editorial: {
      eyebrow: 'فلسفتنا',
      title: 'كل تفصيل هو وعد بالكمال',
      paragraph1: 'منذ أكثر من خمسة عشر عاماً، تحوّل مجموعة فؤاد أحلام الأزواج الأكثر طموحاً إلى احتفالات لا تُنسى. من ساحل تازركة إلى قصور نابل، ننسج قصص الحب بدقة الصائغ.',
      paragraph2: 'يعتمد نهجنا على قناعة بسيطة: العرس الفاخر ليس مجموعة خدمات، بل تجربة متناسقة حيث كل عنصر — الموسيقى، الديكور، المطبخ، العاطفة — يتحدث بانسجام.',
      signature: 'فؤاد · المؤسس والمدير الفني',
    },

    // Services
    services: {
      eyebrow: 'خدماتنا',
      title: 'خبرة متكاملة',
      subtitle: 'من التصور إلى الإنجاز، نغطي كل جوانب احتفالك بنفس المعايير العالية.',
      items: [
        {
          title: 'تنظيم الأعراس',
          description: 'تخطيط كامل، تنسيق يوم العرس، إدارة مقدمي الخدمات واحترام الميزانية.',
        },
        {
          title: 'الأوركسترا والموسيقى الحية',
          description: 'لحن الخلود، أوركسترا المميزة، تنشّط حفلاتك بمقام عربي ودولي.',
        },
        {
          title: 'الديكور والتصميم',
          description: 'ديكورات مصممة خصيصاً، تنسيق الزهور، إضاءة وأثاث لمساحات تليق بحكاية خرافية.',
        },
        {
          title: 'تموين راقٍ',
          description: 'مطبخ راقٍ يجمع بين التقاليد التونسية والمأكولات العالمية، يُقدّم بفن.',
        },
        {
          title: 'التصوير والفيديو',
          description: 'التقاط سينمائي لكل لحظة ثمينة بواسطة فناني الصورة.',
        },
        {
          title: 'المناسبات الخاصة',
          description: 'كوكتيلات، حفلات، أعياد ميلاد واحتفالات عائلية بنفس توقيع التميز.',
        },
      ],
      cta: 'عرض جميع الخدمات',
    },

    // Stats
    stats: {
      title: 'حكاية تُقاس بالابتسامات',
      items: [
        { value: '+450', label: 'عرس منجز' },
        { value: '15', label: 'سنة خبرة' },
        { value: '12', label: 'موسيقي محترف' },
        { value: '98%', label: 'عملاء راضون' },
      ],
    },

    // Portfolio
    portfolio: {
      eyebrow: 'إنجازاتنا',
      title: 'لحظات خالدة للأبد',
      subtitle: 'كل عرس يحكي قصة فريدة. هذه بعض فصولها.',
      categories: {
        all: 'الكل',
        ceremony: 'الحفلات',
        reception: 'الاستقبالات',
        decor: 'الديكور',
        music: 'الموسيقى',
        detail: 'التفاصيل',
      },
      viewAll: 'عرض الأعمال الكاملة',
    },

    // Orchestra / Lahn Al Khouloud
    orchestra: {
      eyebrow: 'لحن الخلود',
      title: 'لحن ذكرياتكم',
      subtitle: 'أوركسترا المقيمة، المكوّنة من اثني عشر موسيقياً محترفاً، تجسّد الروح الموسيقية لمجموعة فؤاد.',
      description: 'من الموسيقى الشرقية الكلاسيكية إلى أجمل الأغاني العربية، مروراً بالأغاني العالمية ومجموعات الـDJ، ينسّج لحن الخلود الموسيقى التصويرية لحفلتك، نغمة بعد نغمة.',
      features: [
        'مقام عربي، شرقي ودولي',
        'حفل ديني وترفيهي',
        'تجهيزات صوتية احترافية مشمولة',
        'مطربون ومطربات منفردين',
      ],
      cta: 'احجز الأوركسترا',
    },

    // Testimonials
    testimonials: {
      eyebrow: 'شهادات',
      title: 'ائتمنونا على أجمل أيامهم',
      items: [
        {
          quote: 'حوّلت مجموعة فؤاد عرسنا إلى حكاية خرافية. كل تفصيل كان مدروساً، كل نغمة دقيقة. ذكرى لا تُنسى.',
          author: 'سارة و كريم',
          event: 'عرس بالحمامات، 2024',
        },
        {
          quote: 'أوركسترا لحن الخلود جعلت جميع ضيوفنا ينبضون. المستوى الموسيقي استثنائي، يضاهي أكبر المسارح.',
          author: 'عائلة بن صالح',
          event: 'حفل بنابل، 2023',
        },
        {
          quote: 'من أول لقاء إلى آخر كأس في الليلة، فريق نادر الأناقة والاحتراف. شكراً جزيلاً.',
          author: 'إيناس و ياسين',
          event: 'عرس بسوسة، 2024',
        },
      ],
    },

    // FAQ
    faq: {
      eyebrow: 'الأسئلة المتكررة',
      title: 'كل ما تحتاج معرفته',
      items: [
        {
          question: 'كم من الوقت مسبقاً يجب أن أحجز؟',
          answer: 'للأعراس في الموسم العالي (مايو إلى سبتمبر)، نوصي بالحجز قبل 8 إلى 12 شهراً. للفترات الأخرى، 4 إلى 6 أشهر تكفي عادةً.',
        },
        {
          question: 'هل تقدمون باقات شاملة؟',
          answer: 'نعم. نقدم باقات قابلة للتعديل قد تشمل التنظيم، الأوركسترا، الديكور، التموين والتصوير. كل عرض سعر مخصص حسب احتياجاتكم.',
        },
        {
          question: 'هل يمكن للأوركسترا التنقل خارج نابل؟',
          answer: 'بالتأكيد. لحن الخلود يتنقل في جميع أنحاء تونس والخارج لأعراس الجالية. مصاريف التنقل مشمولة في عرض السعر.',
        },
        {
          question: 'هل تقبلون أعراس الجالية التونسية؟',
          answer: 'إنها إحدى تخصصاتنا. نرافق العديد من الأزواج من الجالية، حضورياً أو عن بعد عبر الفيديو، لتنظيم عرسهم في تونس.',
        },
        {
          question: 'ما هو متوسط ميزانية العرس؟',
          answer: 'كل مشروع فريد. نقدم استشارة أولى مجانية لفهم توقعاتكم وإنشاء عرض سعر مخصص يتناسب مع ميزانيتكم.',
        },
      ],
    },

    // CTA
    cta: {
      title: 'لنبدأ بكتابة حكايتكم',
      subtitle: 'احجزوا استشارة مجانية ودعونا نحوّل رؤيتكم إلى واقع.',
      button: 'اطلب عرض سعر',
      whatsapp: 'واتساب مباشر',
    },

    // Contact
    contact: {
      eyebrow: 'اتصل بنا',
      title: 'لنتحدث عن مشروعكم',
      subtitle: 'املأوا النموذج أدناه أو تواصلوا معنا مباشرة. نرد خلال 24 ساعة.',
      form: {
        name: 'الاسم الكامل',
        namePlaceholder: 'اسمكم',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'your@email.com',
        phone: 'الهاتف',
        phonePlaceholder: '+216 XX XXX XXX',
        date: 'التاريخ المرتقب',
        datePlaceholder: 'يوم/شهر/سنة',
        service: 'الخدمة المطلوبة',
        servicePlaceholder: 'اختر خدمة',
        services: [
          'تنظيم كامل',
          'الأوركسترا والموسيقى',
          'الديكور',
          'التموين',
          'التصوير والفيديو',
          'أخرى / عدة خدمات',
        ],
        message: 'رسالتكم',
        messagePlaceholder: 'حدثونا عن رؤيتكم، توقعاتكم، أسئلتكم...',
        submit: 'إرسال الطلب',
        sending: 'جاري الإرسال...',
        success: 'شكراً! تم إرسال طلبكم. سنرد عليكم خلال 24 ساعة.',
        error: 'حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.',
      },
      info: {
        phoneLabel: 'الهاتف',
        phone: '+216 98 123 456',
        emailLabel: 'البريد الإلكتروني',
        email: 'contact@groupefoued.tn',
        addressLabel: 'العنوان',
        address: 'شارع الحبيب بورقيبة، تازركة 8011، نابل، تونس',
        hoursLabel: 'ساعات العمل',
        hours: 'الإثنين – السبت : 9:00 – 19:00',
        whatsapp: 'تحدث على واتساب',
        facebook: 'تابعنا على فيسبوك',
      },
      mapTitle: 'تجدونا هنا',
    },

    // About page
    about: {
      hero: {
        eyebrow: 'حكايتنا',
        title: 'الأناقة المولودة من الشغف',
        subtitle: 'من تازركة إلى كل تونس، تكتب مجموعة فؤاد منذ خمسة عشر عاماً قصص حب لا تُنسى.',
      },
      story: {
        eyebrow: 'البداية',
        title: 'بدأ كل شيء بلحن',
        paragraph1: 'كبر فؤاد على إيقاعات ساحل تازركة. ابن موسيقي، تعلّم مبكراً أن الموسيقى ليست فقط فناً — بل لغة تربط القلوب. في 2009، أسّس لحن الخلود، فرقة صغيرة ستصبح إحدى أكثر أوركسترات الأعراس طلباً في البلاد.',
        paragraph2: 'أمام الطلب المتزايد من الأزواج الذين أرادوا «نفس مستوى التميز لكل العرس»، جمع فؤاد حوله فريقاً من مصممي الديكور والتموين والمنسّقين يشاركونه رؤيته. وُلدت مجموعة فؤاد من هذه القناعة: العرس الفاخر يُعاش كقطعة فنية، حيث كل تفصيل يهم.',
        paragraph3: 'اليوم، ترافق مجموعة فؤاد أكثر من 60 عرساً سنوياً، من الساحل التونسي إلى الوجهات الدولية للجالية، بنفس الهاجس: جعل كل احتفال لحظة معلّقة في الزمن.',
      },
      values: {
        eyebrow: 'قيمنا',
        title: 'ما يوجّهنا',
        items: [
          {
            title: 'التميز',
            description: 'لا نساوم أبداً على الجودة. كل وردة، كل نغمة، كل طبق يجب أن يكون مثالياً.',
          },
          {
            title: 'الأصالة',
            description: 'نحتفي بثراء الثقافة التونسية مع إثرائها بتأثيرات معاصرة.',
          },
          {
            title: 'اللطف',
            description: 'مشاعركم أولويتنا. نخلق فضاء ثقة حيث تكتب حكايتكم بطمأنينة.',
          },
          {
            title: 'الالتزام',
            description: 'من أول لقاء إلى صباح اليوم التالي، نحن حاضرون في كل مرحلة من مساركم.',
          },
        ],
      },
      timeline: {
        eyebrow: 'مسارنا',
        title: 'خمسة عشر عاماً من قصص الحب',
        items: [
          { year: '2009', title: 'النغمة الأولى', description: 'تأسيس لحن الخلود، أوركسترا من خمسة موسيقيين بتازركة.' },
          { year: '2012', title: 'التوسع', description: 'أول أعراس كاملة: تنظيم وديكور وموسيقى مجتمعة.' },
          { year: '2016', title: 'مجموعة فؤاد', description: 'هيكلة رسمية للمجموعة بفريق متعدد التخصصات من 20 شخصاً.' },
          { year: '2019', title: 'ما بعد الحدود', description: 'أول أعراس الجالية التونسية في فرنسا وإيطاليا والشرق الأوسط.' },
          { year: '2024', title: 'مرجع', description: 'أكثر من 450 عرساً منجزاً، سمعة تميز في كل البلاد.' },
        ],
      },
    },

    // Services page
    servicesPage: {
      hero: {
        eyebrow: 'خدماتنا',
        title: 'توقيع التميز',
        subtitle: 'ستة محاور خبرة في خدمة هدف واحد: رضاؤكم.',
      },
      detailed: [
        {
          title: 'التنظيم والتنسيق',
          description: 'من أول تخطيط إلى صباح اليوم التالي، ننسّق كل مرحلة من عرسكم بدقة صانع الساعات.',
          features: ['تخطيط كامل للمشروع', 'اختيار وإدارة مقدمي الخدمات', 'التنسيق يوم العرس', 'احترام الميزانية والمواعيد', 'خدمة الكونسيرج للضيوف'],
        },
        {
          title: 'أوركسترا لحن الخلود',
          description: 'اثنا عشر موسيقياً محترفاً، مقام بلا حدود وطاقة تحوّل كل سهرة إلى أسطورة.',
          features: ['مقام عربي وشرقي', 'أغاني عالمية', 'حفل ديني', 'تجهيزات صوتية احترافية', 'مطربون ومطربات'],
        },
        {
          title: 'الديكور والتنسيق',
          description: 'مساحات مصممة كقطع فنية مؤقتة، حيث الضوء والزهرة والمادة تتحاور.',
          features: ['تنسيق مصمم خصيصاً', 'زهور طبيعية وصناعية', 'إضاءة معمارية', 'أثاث وملحقات', 'مساحات تصوير واستقبال'],
        },
        {
          title: 'تموين راقٍ',
          description: 'مطبخ يحتفي بالأرض التونسية مع انفتاح على العالم، يُقدّم بأناقة لا تشوبها شائبة.',
          features: ['مطبخ تونسي راقٍ', 'مطبخ عالمي', 'بوفيهات وقوائم جلوس', 'حلويات وقطع مركّبة', 'خدمة في القاعة متقنة'],
        },
        {
          title: 'التصوير والسينما',
          description: 'فنانو صورة يلتقطون لا صوراً، بل مشاعر، لذكرى حيّة.',
          features: ['تقرير تصويري كامل', 'فيلم عرس سينمائي', 'طائرة درون ووجهات جوية', 'ألبومات بريميوم', 'تسليم سريع'],
        },
        {
          title: 'المناسبات الخاصة',
          description: 'كوكتيلات، حفلات، أعياد ميلاد واحتفالات عائلية: نفس توقيع التميز لكل مناسبة.',
          features: ['كوكتيلات وكؤوس شرف', 'حفلات وسهرات شركات', 'أعياد ميلاد واحتفالات', 'مناسبات مصممة خصيصاً', 'كراء معدات'],
        },
      ],
      process: {
        eyebrow: 'منهجيتنا',
        title: 'طريقة مثبتة',
        items: [
          { step: '01', title: 'استشارة', description: 'نستمع لرؤيتكم وأمانيكم وقيودكم في لقاء أول مجاني.' },
          { step: '02', title: 'تصميم', description: 'نقترح تنسيقاً وميزانية مفصّلة وجدولاً كاملاً لعرسكم.' },
          { step: '03', title: 'تحضير', description: 'ننسّق مقدمي الخدمات ونصادق على كل تفصيل وندقّق نحو الكمال.' },
          { step: '04', title: 'يوم العرس', description: 'ننسّق كل شيء في الظل لتكون مهمتكم الوحيدة: الاستمتاع.' },
        ],
      },
    },

    // Orchestra page
    orchestraPage: {
      hero: {
        eyebrow: 'لحن الخلود',
        title: 'الموسيقى التي تحيي الأرواح',
        subtitle: 'اثنا عشر موسيقياً، مقام لا ينتهي، طاقة تحوّل كل احتفال إلى أسطورة.',
      },
      about: {
        title: 'أوركسترا، ألف عاطفة',
        paragraph1: 'لحن الخلود — «موسيقى الأبدية» — وُلد سنة 2009 من قناعة بسيطة: العرس بدون موسيقى كبيرة عرس ناقص. جمع فؤاد أولاً خمسة موسيقيين شغوفين، ثم كبر سنة بعد سنة ليصبح إحدى أكثر الأوركسترات احتراماً في تونس.',
        paragraph2: 'اليوم، تضم الأوركسترا اثني عشر موسيقياً محترفاً: عازفو كمان، إيقاع، كيبورد، غيتار، مطربون ومطربات منفردين. معاً، يتنقلون بين الموسيقى الشرقية الكلاسيكية، أجمل الأغاني العربية، الأغاني العالمية ومجموعات الـDJ الحديثة.',
      },
      repertoire: {
        eyebrow: 'المقام',
        title: 'من الموسيقى الشرقية الكلاسيكية إلى الأغاني العالمية',
        categories: [
          { name: 'الموسيقى الشرقية الكلاسيكية', description: 'أعمال الموسيقى العربية الكلاسيكية والأندلسية.' },
          { name: 'الأغنية العربية', description: 'أجمل أغاني الحب من تونس والمشرق والمغرب.' },
          { name: 'الأغاني العالمية', description: 'جاز، سول، بوب وأغاني عالمية لكل الأذواق.' },
          { name: 'الـDJ والموسيقى الحديثة', description: 'أجواء احتفالية ومجموعات DJ للرقص حتى نهاية الليل.' },
        ],
      },
      members: {
        eyebrow: 'الفريق',
        title: 'فنانو لحن الخلود',
        items: [
          { name: 'فؤاد', role: 'المدير الموسيقي والكيبورد' },
          { name: 'ليلى', role: 'مطربة سوبرانو' },
          { name: 'ياسين', role: 'عازف كمان' },
          { name: 'مروة', role: 'مطربة وإيقاع' },
          { name: 'سامي', role: 'غيتار وعود' },
          { name: 'رياض', role: 'إيقاع ودربوكة' },
        ],
      },
      booking: {
        title: 'احجز الأوركسترا',
        subtitle: 'التوفر محدود في الموسم العالي. تواصلوا معنا الآن للتحقق من تاريخ عرسكم.',
        cta: 'اطلب عرض سعر',
      },
    },

    // Portfolio page
    portfolioPage: {
      hero: {
        eyebrow: 'أعمالنا',
        title: 'لحظات تبقى',
        subtitle: 'مجموعة من الأعراس والمناسبات التي كان لنا شرف تنظيمها.',
      },
      categories: {
        all: 'كل الإنجازات',
        ceremony: 'الحفلات',
        reception: 'الاستقبالات',
        decor: 'الديكور',
        music: 'الموسيقى',
        detail: 'التفاصيل',
      },
      projects: [
        { title: 'عرس سارة و كريم', location: 'الحمامات', year: '2024', category: 'ceremony' },
        { title: 'حفل عائلة بن صالح', location: 'نابل', year: '2023', category: 'reception' },
        { title: 'تنسيق زهري ملكي', location: 'سوسة', year: '2024', category: 'decor' },
        { title: 'لحن الخلود مباشر', location: 'تونس', year: '2023', category: 'music' },
        { title: 'طاولة عرس آرت ديكو', location: 'الحمامات', year: '2024', category: 'detail' },
        { title: 'حفل إيناس و ياسين', location: 'سوسة', year: '2024', category: 'ceremony' },
        { title: 'سهرة بيضاء وذهبية', location: 'نابل', year: '2023', category: 'reception' },
        { title: 'قوس زهري بوهيمي', location: 'تازركة', year: '2024', category: 'decor' },
        { title: 'مجموعة DJ نهاية السهرة', location: 'تونس', year: '2024', category: 'music' },
        { title: 'قطعة مركّبة توقيع', location: 'الحمامات', year: '2023', category: 'detail' },
        { title: 'عرس ذهبي بسيدي بو سعيد', location: 'تونس', year: '2024', category: 'ceremony' },
        { title: 'حفل بريستيج', location: 'نابل', year: '2023', category: 'reception' },
      ],
    },

    // Footer
    footer: {
      tagline: 'فن الاحتفال بأجمل لحظات حياتكم.',
      quickLinks: 'التصفح',
      contactTitle: 'اتصل بنا',
      followUs: 'تابعونا',
      privacy: 'سياسة الخصوصية',
      rights: 'جميع الحقوق محفوظة.',
      madeWith: 'صُمم بشغف في تونس',
    },

    // Common
    common: {
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      close: 'إغلاق',
      menu: 'القائمة',
      back: 'رجوع',
      learnMore: 'اعرف المزيد',
    },
  },
};

export function getTranslations(locale: Locale): TranslationDict {
  return translations[locale];
}
