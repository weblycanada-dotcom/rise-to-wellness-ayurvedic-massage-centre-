export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  category: 'massage' | 'ayurvedic';
  durations: {
    duration: string;
    price: number;
  }[];
  description: string;
  longDescription: string[];
  benefits: string[];
  recommendedFor: string[];
  protocol: {
    step: number;
    title: string;
    description: string;
  }[];
  imageKey: string;
  ayurvedicHighlight?: boolean;
}

export interface InsuranceProviderGroup {
  network: string;
  providers: string[];
  description?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'massage' | 'ayurvedic' | 'insurance' | 'complimentary';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  image?: string;
}

export const BUSINESS_INFO = {
  name: "Rise to Wellness Ayurvedic Massage Centre",
  shortName: "Rise to Wellness",
  category: "Ayurvedic Massage Centre",
  phone: "(825) 733-6007",
  phoneClean: "+18257336007",
  bookingContact: "Dr. Hargeet Kaur",
  credentials: "B.A.M.S. ; R.H. ; R.M.T.",
  locationArea: "Cornerstone NE, Calgary, Alberta, Canada",
  clientelePolicy: "Ladies and children only. Massage services for men are not offered.",
  shortTagline: "Relax, Restore and Rise to Wellness",
  leadParagraph: "Discover a welcoming space for ladies and children to enjoy massage therapy, relaxation treatments, and traditional Ayurvedic therapies. Every visit is designed to help you unwind, feel refreshed, and make time for your well-being.",
  disclaimerCad: "All prices are in CAD. Applicable taxes are additional.",
  insuranceDisclaimer: "Insurance coverage and direct billing depend on your individual plan, eligibility, the treatment received, and the applicable provider requirements. Coverage is not guaranteed. Please contact the centre and your insurance provider to confirm your benefits before booking."
};

export const SERVICES: ServiceItem[] = [
  // 1. Full Body Deep Tissue Massage
  {
    id: "deep-tissue",
    name: "Full Body Deep Tissue Massage",
    slug: "deep-tissue-massage",
    category: "massage",
    durations: [
      { duration: "60 minutes", price: 90 },
      { duration: "90 minutes", price: 120 }
    ],
    description: "Deep tissue massage focuses on the deeper layers of muscle tissue and fascia to help alleviate tension, chronic tightness, and physical fatigue.",
    longDescription: [
      "Our Full Body Deep Tissue Massage utilizes firm, deliberate pressure and slow, targeted friction across the grain of deep muscle fibers and connective fascia. It is especially beneficial for chronic muscular aches, postural strain from prolonged sitting, and repetitive tension.",
      "Dr. Hargeet Kaur conducts an initial muscle assessment to pinpoint specific knots and trigger points, safely working within your comfort threshold while promoting structural ease.",
      "Every session is complemented by warm towels and our complimentary 10-minute steam sauna to assist with post-treatment lactic acid dispersion and whole-body lightness."
    ],
    benefits: [
      "Releases deep fascial adhesions & chronic muscle knots",
      "Improves joint range of motion & postural balance",
      "Stimulates deep blood flow & cellular oxygenation",
      "Assists recovery from daily physical & postural stress"
    ],
    recommendedFor: [
      "Chronic lower back tension",
      "Neck & shoulder knotting",
      "Desk & computer posture strain",
      "Post-athletic muscle fatigue",
      "Sciatic nerve discomfort"
    ],
    protocol: [
      { step: 1, title: "Intake & Postural Assessment", description: "Review of medical history, specific tension patterns, and personal pressure preferences." },
      { step: 2, title: "Superficial Warming", description: "Long, flowing effleurage strokes prepare the surface muscles for deeper intervention." },
      { step: 3, title: "Deep Fascial Release", description: "Targeted thumb, forearm, and elbow compression to break down stubborn connective adhesions." },
      { step: 4, title: "Steam Sauna & Hot Towels", description: "10 minutes in our complimentary steam sauna followed by soothing warm towels." }
    ],
    imageKey: "cardMassageTherapy"
  },

  // 2. Swedish Relaxation Massage
  {
    id: "swedish-relaxation",
    name: "Swedish Relaxation Massage",
    slug: "swedish-relaxation-massage",
    category: "massage",
    durations: [
      { duration: "60 minutes", price: 90 },
      { duration: "90 minutes", price: 120 }
    ],
    description: "A calming, restorative massage using long, soothing gliding strokes to gently dissolve stress, improve circulation, and nurture whole-body tranquility.",
    longDescription: [
      "Swedish Relaxation Massage is the gold standard for full-body nervous system restoration. Through rhythmic gliding, kneading, light friction, and gentle tapping, this classic modality encourages the nervous system to shift from sympathetic stress into deep parasympathetic calm.",
      "Nourishing botanical oils warm the skin while fluid transitions encourage lymphatic drainage and healthy peripheral circulation.",
      "An ideal choice for women seeking unhurried rest, relief from mental fatigue, and improved sleep quality."
    ],
    benefits: [
      "Dissolves daily stress, mental fatigue & anxiety",
      "Enhances full-body circulation & lymphatic flow",
      "Eases superficial muscle tightness and joint stiffness",
      "Encourages restorative and restful night sleep"
    ],
    recommendedFor: [
      "High daily stress & exhaustion",
      "Restless sleep & insomnia",
      "Mild muscular tension",
      "First-time massage clients",
      "Full-body pampering & wellness"
    ],
    protocol: [
      { step: 1, title: "Aromatic Calming Welcome", description: "Selection of gentle botanical oils suited to your personal sensory preference." },
      { step: 2, title: "Full-Body Effleurage", description: "Continuous, rhythmic gliding strokes from head to toe to calm the nervous system." },
      { step: 3, title: "Gentle Kneading (Petrissage)", description: "Soft rhythmic squeezing of major muscle groups to oxygenate tissues." },
      { step: 4, title: "Complimentary Steam & Towels", description: "10-minute warm steam sauna and comforting hot towel application." }
    ],
    imageKey: "heroOtiumStyle"
  },

  // 3. Pre-natal Massage
  {
    id: "pre-natal",
    name: "Pre-natal Massage",
    slug: "prenatal-massage",
    category: "massage",
    durations: [
      { duration: "60 minutes", price: 90 },
      { duration: "90 minutes", price: 120 }
    ],
    description: "Carefully tailored specifically for expectant mothers with supportive bolsters and gentle positioning to safely relieve maternal strain.",
    longDescription: [
      "Pregnancy is a transformative journey that introduces new physical strain on the pelvic girdle, sacrum, lower spine, and lower extremities. Our Pre-natal Massage is provided with compassionate care in a tranquil setting strictly for women.",
      "Dr. Hargeet Kaur utilizes specialized supportive cushions and side-lying positioning to ensure zero compression on the abdomen while providing complete comfort.",
      "Gentle strokes reduce swelling in the feet and ankles, relieve sciatic and hip discomfort, and provide a peaceful hour of nurturing relaxation for mother and child."
    ],
    benefits: [
      "Relieves sacroiliac, lower back & pelvic pressure",
      "Reduces edema (swelling) in feet, ankles & hands",
      "Safe, side-lying position with supportive bolsters",
      "Promotes calming hormones beneficial for baby"
    ],
    recommendedFor: [
      "Second & third trimester pregnancy",
      "Lower back and hip soreness",
      "Swollen legs and aching feet",
      "Maternal sleep disturbances",
      "Upper neck and shoulder tightness"
    ],
    protocol: [
      { step: 1, title: "Maternal Health Review", description: "Detailed check of gestation week, specific pressure points to avoid, and comfort preferences." },
      { step: 2, title: "Supportive Cushioning", description: "Side-lying setup with plush bolsters supporting the belly, back, and knees." },
      { step: 3, title: "Gentle Maternal Bodywork", description: "Targeted lymphatic and muscle easing strokes designed safely for pregnancy." },
      { step: 4, title: "Hot Towel Refreshment", description: "Gentle warm towel wipe-down leaving the skin soft, comforted, and hydrated." }
    ],
    imageKey: "servicePrenatalMassage"
  },

  // 4. Post-natal Massage
  {
    id: "post-natal",
    name: "Post-natal Massage",
    slug: "postnatal-massage",
    category: "massage",
    durations: [
      { duration: "60 minutes", price: 90 },
      { duration: "90 minutes", price: 120 }
    ],
    description: "Specialized restorative care designed for new mothers to help relieve nursing strain, soothe shoulder fatigue, and encourage peaceful self-care.",
    longDescription: [
      "The postpartum 'fourth trimester' requires intentional physical and mental restoration. Post-natal massage helps new mothers recover from delivery strain, ease upper thoracic tightness caused by nursing and baby-wearing, and realign pelvic stability.",
      "Gentle abdominal and pelvic balancing supports the body's natural involution and helps calm post-delivery fatigue.",
      "A peaceful sanctuary where mothers can rest knowing their physical comfort and well-being are prioritized."
    ],
    benefits: [
      "Eases nursing neck, shoulder & upper back tightness",
      "Encourages gentle realignment of pelvic structures",
      "Relieves fatigue from broken sleep & newborn care",
      "Supports emotional calm & replenishes physical energy"
    ],
    recommendedFor: [
      "New mothers recovering from birth",
      "Nursing shoulder and neck fatigue",
      "Pelvic & sacral recovery",
      "Postpartum stress & exhaustion",
      "Restoring core & posture balance"
    ],
    protocol: [
      { step: 1, title: "Postpartum Intake", description: "Assessment of recovery timeline, nursing postures, and sensitive recovery zones." },
      { step: 2, title: "Upper Body Strain Release", description: "Focused therapeutic attention on the trapezius, pectorals, and thoracic spine." },
      { step: 3, title: "Hip & Lower Back Realignment", description: "Gentle traction and decompression of the sacrum and lumbar region." },
      { step: 4, title: "Complimentary Steam & Towels", description: "10 minutes of steam sauna (if cleared) and soothing hot towel care." }
    ],
    imageKey: "heroAyurvedicSpa"
  },

  // 5. Head Massage
  {
    id: "head-massage",
    name: "Head Massage",
    slug: "head-massage",
    category: "massage",
    durations: [
      { duration: "30 minutes", price: 50 }
    ],
    description: "A deeply soothing scalp treatment using traditional Ayurvedic pressure points to clear mental fatigue, ease tension, and restore clarity.",
    longDescription: [
      "Our 30-minute Head Massage combines Ayurvedic Shiroabhyanga techniques with cranial pressure point stimulation. It directly targets the cranial fascia, temples, occipital ridge, and upper neck where mental stress accumulates.",
      "Herbalized botanical oils (such as warm brahmi or amla infused oil) are gently massaged into the scalp, nourishing hair follicles while easing mental chatter.",
      "A fast, deeply rejuvenating session that leaves you feeling clear-headed, grounded, and tranquil."
    ],
    benefits: [
      "Relieves tension headaches & eye strain",
      "Stimulates cranial microcirculation & hair roots",
      "Calms racing thoughts and nervous tension",
      "Quick 30-minute restoration for busy schedules"
    ],
    recommendedFor: [
      "Tension headaches & temple pressure",
      "Screen fatigue & eye tiredness",
      "High mental stress & burnout",
      "Scalp tightness & hair nourishment",
      "Midday refresh for ladies & children"
    ],
    protocol: [
      { step: 1, title: "Scalp Assessment & Herbal Oil Selection", description: "Selection of warm botanical oil suited to your scalp and tension needs." },
      { step: 2, title: "Cranial Acupressure (Marma Points)", description: "Gentle circular stimulation of vital points along the forehead, crown, and occiput." },
      { step: 3, title: "Upper Neck & Trapezius Release", description: "Decompressing the base of the skull where tension connects to the spine." },
      { step: 4, title: "Warm Towel Wrap", description: "A hot towel compress wrapping the head to seal in botanical hydration." }
    ],
    imageKey: "serviceHeadMassage"
  },

  // 6. Head, Neck & Shoulder Massage
  {
    id: "head-neck-shoulder",
    name: "Head, Neck & Shoulder Massage",
    slug: "head-neck-shoulder-massage",
    category: "massage",
    durations: [
      { duration: "60 minutes", price: 90 }
    ],
    description: "Focused therapeutic attention on the upper body where tension accumulates from computer work, family care, and stress.",
    longDescription: [
      "The neck and shoulder girdle carry the lion's share of modern stress. This focused 60-minute session delivers targeted relief to the levator scapulae, upper trapezius, rhomboids, scalenes, and cranial base.",
      "Dr. Hargeet Kaur combines neuromuscular trigger point therapy with passive cervical mobilization to lengthen shortened muscles and restore effortless range of motion.",
      "Perfect for office workers, students, mothers carrying toddlers, and anyone experiencing chronic neck stiffness."
    ],
    benefits: [
      "Eliminates chronic shoulder tightness & stiffness",
      "Restores free, pain-free rotation of the cervical spine",
      "Eases stress-induced tension headaches",
      "Improves upper body posture and thoracic breathing"
    ],
    recommendedFor: [
      "Desk & laptop posture stiffness",
      "Chronic shoulder knotting & 'forward head' posture",
      "Tension radiating to temples or behind eyes",
      "Stress-held breathing restrictions",
      "Active women & young students"
    ],
    protocol: [
      { step: 1, title: "Range of Motion Check", description: "Testing neck rotation, flexion, and shoulder elevation to map tightness." },
      { step: 2, title: "Thermal Muscle Softening", description: "Warm botanical compresses placed across the trapezius to soften rigid fibers." },
      { step: 3, title: "Deep Trigger Point Release", description: "Systematic pressure and cross-fiber work on stubborn shoulder and neck knots." },
      { step: 4, title: "Complimentary Steam & Towels", description: "10-minute steam sauna and soothing hot towel care." }
    ],
    imageKey: "cardMassageTherapy"
  },

  // 7. Cupping Massage
  {
    id: "cupping-massage",
    name: "Cupping Massage",
    slug: "cupping-massage",
    category: "massage",
    durations: [
      { duration: "60 minutes", price: 90 },
      { duration: "90 minutes", price: 120 }
    ],
    description: "Combines therapeutic massage techniques with specialized suction cups to stimulate circulation, release rigid fascial adhesion, and support restoration.",
    longDescription: [
      "Cupping massage blends manual registered massage therapy with negative pressure suction cups. Unlike traditional massage which compresses muscles downward, cupping gently lifts muscle layers and connective fascia upward.",
      "This negative pressure creates immediate microvascular expansion, drawing stagnant metabolic debris to the surface while flooding the area with oxygen-rich blood and nutrient fluid.",
      "Both stationary placement and gliding (dynamic) cupping are applied according to your tolerance and specific therapeutic goals."
    ],
    benefits: [
      "Decompresses stubborn, adhered connective fascia",
      "Increases localized blood flow & lymph drainage",
      "Accelerates recovery in tight, hardened muscle bands",
      "Provides rapid physical lightness across the back and hips"
    ],
    recommendedFor: [
      "Deep-seated back tightness that resists normal pressure",
      "Adhered fascia along the spine and shoulder blades",
      "Post-workout stiffness & stagnation",
      "Clients seeking holistic bodywork",
      "Ask about our promotional cupping eligibility!"
    ],
    protocol: [
      { step: 1, title: "Skin & Muscle Preparation", description: "Gliding manual strokes with botanical oil prepare the skin surface." },
      { step: 2, title: "Dynamic Gliding Cupping", description: "Suction cups moved rhythmically along tension channels to loosen fascia." },
      { step: 3, title: "Stationary Placement", description: "Targeted cups placed on primary trigger points for focused decompression." },
      { step: 4, title: "Warm Towels & Sauna", description: "Complimentary hot towels and 10-minute steam sauna to finish." }
    ],
    imageKey: "serviceCuppingTherapy"
  },

  // 8. Hot Stone Massage
  {
    id: "hot-stone-massage",
    name: "Hot Stone Massage",
    slug: "hot-stone-massage",
    category: "massage",
    durations: [
      { duration: "60 minutes", price: 100 }
    ],
    description: "Smooth heated basalt stones are gently positioned and glided along key tension points. Penetrating thermal warmth melts away deep-seated tightness.",
    longDescription: [
      "Smooth volcanic basalt stones, naturally rich in iron and heat retention, are carefully warmed to therapeutic temperatures. The penetrating thermal energy radiates deeply into muscle fibers, allowing tight tissue to melt without uncomfortable force.",
      "In Ayurvedic tradition, heat (Swedana) is revered for softening rigid doshas, easing Vata coldness, and grounding restless energy.",
      "Dr. Hargeet Kaur glides the heated stones along muscle lines and places stationary stones on key chakra and tension centers for profound grounding."
    ],
    benefits: [
      "Penetrating basalt thermal heat melts tight muscles",
      "Calms the sympathetic nervous system and induces peace",
      "Enhances peripheral blood circulation and cellular warmth",
      "Deeply grounding and comforting during Alberta winters"
    ],
    recommendedFor: [
      "Severe muscle stiffness & cold sensations",
      "Chronic stress & physical fatigue",
      "Fibromyalgia or general body aches",
      "Clients who love deep, penetrating heat",
      "Calgary winter wellness"
    ],
    protocol: [
      { step: 1, title: "Basalt Temperature Preparation", description: "Stones heated precisely in our specialized spa heating box to optimal warmth." },
      { step: 2, title: "Gliding Thermal Massage", description: "Warm stones held in therapist's hands to perform deep gliding strokes." },
      { step: 3, title: "Spinal & Energy Center Placement", description: "Heated stones placed along the vertebral column and palms for deep grounding." },
      { step: 4, title: "Complimentary Steam & Towels", description: "Complete the thermal bliss with 10 minutes of steam sauna." }
    ],
    imageKey: "hotStoneTherapy",
    ayurvedicHighlight: true
  },

  // 9. Kid's Massage
  {
    id: "kids-massage",
    name: "Kid's Massage",
    slug: "kids-massage",
    category: "massage",
    durations: [
      { duration: "60 minutes", price: 90 }
    ],
    description: "A gentle, age-appropriate relaxation session designed specifically for children in a safe, reassuring, and family-friendly environment.",
    longDescription: [
      "Children and youth experience growing physical strain from heavy backpacks, school sports, dance, martial arts, and prolonged screen time. Our Kid's Massage is a gentle, supportive treatment tailored for children.",
      "Conducted in our welcoming clinic for ladies and children, every session prioritizes the young client's comfort, modesty, and security, with clear communication at every step.",
      "Helps relieve growing pains, relaxes hyperactive nervous systems, and encourages healthy, restful bedtime habits."
    ],
    benefits: [
      "Soothes growing pains in legs, back & shoulders",
      "Eases sensory overload & supports emotional calm",
      "Encourages restorative and restful night sleep",
      "Safe, caring and family-friendly setting"
    ],
    recommendedFor: [
      "Young athletes & dancers with muscle soreness",
      "Children experiencing restless sleep or hyperactivity",
      "Postural fatigue from backpacks and study desks",
      "Gentle introduction to healthy wellness habits",
      "Children of all ages accompanied by mothers"
    ],
    protocol: [
      { step: 1, title: "Friendly Welcome & Check-In", description: "Child and mother meet Dr. Hargeet Kaur to establish comfort and understanding." },
      { step: 2, title: "Gentle Relaxation Strokes", description: "Light, soothing Swedish strokes suited to young muscle structures." },
      { step: 3, title: "Growing Pain Support", description: "Targeted gentle touch on calf muscles, knees, and back as needed." },
      { step: 4, title: "Warm Towel Comfort", description: "Soothing warm towel application leaving the child feeling cozy and refreshed." }
    ],
    imageKey: "heroOtiumStyle"
  },

  // 10. Third Eye Therapy (Shirodhara)
  {
    id: "shirodhara",
    name: "Third Eye Therapy (Shirodhara)",
    slug: "shirodhara-therapy",
    category: "ayurvedic",
    durations: [
      { duration: "60 minutes", price: 120 }
    ],
    description: "A timeless classical Ayurvedic therapy where a continuous, rhythmic stream of warm herbal oil flows over the forehead (Ajna chakra), harmonizing the mind.",
    longDescription: [
      "Shirodhara is celebrated as one of the most sublime and profound therapies in ancient Ayurvedic medicine. Derived from the Sanskrit words 'Shiro' (head) and 'Dhara' (continuous stream), this treatment involves pouring a rhythmic, warm flow of medicated herbal oil over the forehead and third eye.",
      "The rhythmic flow stimulates the Ajna chakra and pituitary/pineal glands, inducing alpha brain wave patterns associated with deep meditation, mental clarity, and nervous system replenishment.",
      "Clients describe the experience as a gentle river dissolving persistent stress, insomnia, and sensory overload."
    ],
    benefits: [
      "Induces profound alpha-state mental tranquility",
      "Balances Vata dosha & soothes nervous anxiety",
      "Deeply supports restorative sleep & eases insomnia",
      "Nourishes hair, scalp, and mental clarity"
    ],
    recommendedFor: [
      "Chronic stress, anxiety & racing thoughts",
      "Insomnia & broken sleep patterns",
      "Mental burnout & fatigue from overwork",
      "Hormonal transitions & mood fluctuations",
      "Women seeking authentic Ayurvedic restoration"
    ],
    protocol: [
      { step: 1, title: "Ayurvedic Dosha Intake", description: "Assessment of mental energy and selection of medicated botanical oils." },
      { step: 2, title: "Preparatory Head & Face Massage", description: "Gentle acupressure around temples and forehead to open energy channels." },
      { step: 3, title: "The Continuous Shirodhara Stream", description: "A steady, warm herbal oil stream gently oscillates over the forehead for 30–40 minutes." },
      { step: 4, title: "Restorative Awakening & Sauna", description: "Gentle awakening followed by our complimentary 10-minute steam sauna." }
    ],
    imageKey: "shirodharaTherapy",
    ayurvedicHighlight: true
  },

  // 11. Knee Therapy (Janu-vasti)
  {
    id: "janu-vasti",
    name: "Knee Therapy (Janu-vasti)",
    slug: "janu-vasti-knee-therapy",
    category: "ayurvedic",
    durations: [
      { duration: "60 minutes", price: 100 }
    ],
    description: "An authentic Ayurvedic localized treatment where a reservoir of herbal dough is placed over the knee joints and filled with warm, medicated botanical oils.",
    longDescription: [
      "Janu-vasti is a specialized classical Ayurvedic therapy specifically engineered for knee joint health. In Sanskrit, 'Janu' means knee, and 'Vasti' refers to an enclosing reservoir.",
      "A dough ring made from therapeutic black gram flour is sealed over the knee joint and filled with warm, medicated herbal oils (such as Mahanarayan or Dhanwantharam oil). The warm oil is maintained at constant temperature, allowing its botanical properties to penetrate deep into the synovial capsule, cartilage, and tendons.",
      "Provides profound relief for stiff joints, degenerative wear, and clicking knees."
    ],
    benefits: [
      "Deeply lubricates knee synovial joints & cartilage",
      "Relieves joint stiffness, crepitus (clicking) & discomfort",
      "Improves weight-bearing stability & walking comfort",
      "Nourishes surrounding ligaments and tendons"
    ],
    recommendedFor: [
      "Stiff or aching knees from stair climbing or walking",
      "Joint wear and tear or post-strain tightness",
      "Women experiencing age-related joint dryness",
      "Active mothers & grandmothers",
      "Alberta cold-weather knee sensitivity"
    ],
    protocol: [
      { step: 1, title: "Joint Examination", description: "Evaluating range of motion, swelling, and localized joint stiffness." },
      { step: 2, title: "Herbal Dough Ring Placement", description: "A leak-proof dough reservoir is formed and sealed over the knee." },
      { step: 3, title: "Warm Medicated Oil Pooling", description: "Continuous replenishment of warm therapeutic herbal oil for 30–40 minutes." },
      { step: 4, title: "Localized Massage & Steam", description: "Gentle joint manipulation followed by 10-minute steam sauna time." }
    ],
    imageKey: "serviceJanuVasti",
    ayurvedicHighlight: true
  },

  // 12. Herbal Compress Ball Therapy (Potli)
  {
    id: "potli-massage",
    name: "Herbal Compress Ball Therapy (Potli)",
    slug: "potli-herbal-compress-therapy",
    category: "ayurvedic",
    durations: [
      { duration: "60 minutes", price: 100 }
    ],
    description: "Natural linen pouches packed with selected Ayurvedic therapeutic herbs are heated in herbal oils and gently tapped and massaged into the body.",
    longDescription: [
      "Potli therapy is an ancient Ayurvedic healing tradition that combines thermal heat, therapeutic herbal nutrition, and targeted bodywork. Fresh and dried Ayurvedic herbs are bundled into unbleached muslin cloth pouches (potlis), steeped in warm medicated oils, and methodically massaged over the body.",
      "The combination of botanical warmth and rhythmic compression opens energy meridians (srotas), stimulates lymphatic drainage, and softens deeply entrenched muscular fatigue.",
      "Leaves the entire body feeling grounded, nourished, and wonderfully energized."
    ],
    benefits: [
      "Infuses therapeutic botanical heat into tight muscles",
      "Alleviates deep joint soreness & full-body stiffness",
      "Improves microcirculation & clears metabolic blockages",
      "Deeply comforting and warming for cold body constitutions"
    ],
    recommendedFor: [
      "Persistent full-body muscle soreness & fatigue",
      "Shoulder, back, and hip tension",
      "Sluggish circulation & heavy feeling limbs",
      "Clients who adore warm, aromatic herbal experiences",
      "Ladies and children seeking authentic Ayurvedic care"
    ],
    protocol: [
      { step: 1, title: "Herbal Pouch Preparation", description: "Botanical pouches heated in traditional Ayurvedic copper oil vessels." },
      { step: 2, title: "Initial Warm Oil Anointing", description: "The body is coated in warm herbal oils to prepare skin and tissues." },
      { step: 3, title: "Rhythmic Potli Tapping & Massage", description: "Steaming herbal pouches are patted and glided along tension channels." },
      { step: 4, title: "Complimentary Steam Sauna & Towels", description: "10 minutes of steam sauna to allow herbal oils to fully absorb." }
    ],
    imageKey: "potliHerbalCompress",
    ayurvedicHighlight: true
  }
];

export const COMPLIMENTARY_SERVICES = [
  {
    title: "Complimentary 10-Minute Steam Sauna",
    highlight: "Included with every session",
    description: "Enjoy 10 minutes of complimentary steam sauna time with every booked session. Warm, enveloping steam prepares your body, opens pores, and gently relaxes muscles before or after treatment."
  },
  {
    title: "Complimentary Hot Towel Service",
    highlight: "Included with every session",
    description: "A soothing hot towel service is provided free with every massage or Ayurvedic session to wrap your muscles in gentle, calming warmth and remove excess botanical oils with care."
  },
  {
    title: "Cupping Therapy Promotion",
    highlight: "Inquire upon booking",
    description: "Ask us about complimentary cupping therapy and current eligibility. Conditions and eligibility requirements apply; please inquire when booking your appointment."
  }
];

export const INSURANCE_NETWORKS: InsuranceProviderGroup[] = [
  {
    network: "TELUS Health",
    providers: [
      "Quikcard",
      "RWAM Insurance Administrators",
      "Simply Benefits",
      "TELUS Adjudicare",
      "Union Benefits",
      "UV Insurance"
    ],
    description: "Direct electronic billing for members under TELUS Health partner plans."
  },
  {
    network: "Sun Life",
    providers: ["Sun Life"],
    description: "Direct billing and insurance claim options for Sun Life policyholders."
  },
  {
    network: "Medavie Blue Cross",
    providers: ["Medavie Blue Cross"],
    description: "Direct claim processing for eligible Medavie Blue Cross members."
  },
  {
    network: "Alberta Blue Cross",
    providers: ["Alberta Blue Cross"],
    description: "Direct billing support for Alberta Blue Cross employer and individual plans."
  },
  {
    network: "The ClaimsXchange",
    providers: [
      "NXG (The NXG Group of Companies)",
      "NexgenRx",
      "Co-operators",
      "Global Benefits"
    ],
    description: "Claims adjudication network providing direct billing across member organizations."
  },
  {
    network: "ProviderConnect",
    providers: [
      "GreenShield Insurance",
      "SSQ Insurance",
      "MÉDIC Construction (GreenShield Insurance)",
      "Empire Life"
    ],
    description: "Leading multi-carrier claims platform supporting direct submission."
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "general",
    question: "Who can book a massage?",
    answer: "The centre provides massage services for ladies and children only. Massage services for men are not offered to ensure a comfortable, private, and peaceful space for our clientele."
  },
  {
    category: "general",
    question: "How can I book an appointment?",
    answer: "Call (825) 733-6007 and ask for Dr. Hargeet Kaur (B.A.M.S. ; R.H. ; R.M.T.). You can also submit an online booking enquiry through this website, and our team will contact you to confirm the date and time."
  },
  {
    category: "general",
    question: "Where is your centre located?",
    answer: "We are located in Cornerstone NE, Calgary, Alberta, Canada. Please contact us prior to your visit for specific arrival directions."
  },
  {
    category: "general",
    question: "What are your working hours?",
    answer: "Appointment scheduling is arranged by phone. Please call (825) 733-6007 with Dr. Hargeet Kaur to discuss available appointment slots."
  },
  {
    category: "general",
    question: "Do I need to bring anything for my appointment?",
    answer: "Please bring your provincial health care number, your extended health insurance card/policy information if requesting direct billing, and wear comfortable clothing."
  },
  {
    category: "massage",
    question: "What massage services are available?",
    answer: "The centre offers Full Body Deep Tissue, Swedish Relaxation, Pre-natal, Post-natal, Head Massage, Head Neck & Shoulder, Cupping Massage, Hot Stone Massage, and Kid's Massage, alongside traditional Ayurvedic therapies."
  },
  {
    category: "massage",
    question: "How do I know which massage is right for me?",
    answer: "If you have muscular tension or knotting, Full Body Deep Tissue or Head, Neck & Shoulder is ideal. If you want stress relief and full-body relaxation, choose Swedish Relaxation or Hot Stone. For expectant or new mothers, our Pre-natal and Post-natal massages provide gentle, tailored support."
  },
  {
    category: "massage",
    question: "Can children receive massage therapy?",
    answer: "Yes, we offer a specialized 60-minute Kid's Massage ($90). It is gentle, soothing, and conducted in a safe, reassuring environment suitable for youth."
  },
  {
    category: "ayurvedic",
    question: "What Ayurvedic treatments are available?",
    answer: "The listed Ayurvedic treatments include Third Eye Therapy (Shirodhara), Knee Therapy (Janu-vasti), and Herbal Compress Ball Therapy (Potli). Hot Stone Therapy is also featured in our traditional therapies."
  },
  {
    category: "ayurvedic",
    question: "What is Shirodhara (Third Eye Therapy)?",
    answer: "Shirodhara is a classical Ayurvedic treatment where warm, herb-infused oil flows in a gentle, steady stream over the forehead (third eye). It is renowned for quieting mental chatter, promoting deep meditation, and soothing sleep issues."
  },
  {
    category: "ayurvedic",
    question: "What is Janu-vasti (Knee Therapy)?",
    answer: "Janu-vasti involves creating a dough ring over the knee joint, which is then filled with warm therapeutic herbal oils. It provides deep lubrication, warmth, and relief to tired knee joints."
  },
  {
    category: "ayurvedic",
    question: "What is Potli (Herbal Compress Ball Therapy)?",
    answer: "Potli therapy uses herbal pouches steeped in warm botanical oils, massaged and patted onto the body to soothe inflammation, open channels, and relieve deep muscular stiffness."
  },
  {
    category: "insurance",
    question: "Can I use insurance or direct billing?",
    answer: "The business advertises options through selected insurance providers including TELUS Health, Sun Life, Medavie Blue Cross, Alberta Blue Cross, The ClaimsXchange, and ProviderConnect. Coverage and direct billing depend on your individual plan and eligibility. Please contact the centre and your insurer to confirm."
  },
  {
    category: "insurance",
    question: "Are taxes included in the listed prices?",
    answer: "No. All prices are in CAD and applicable taxes are additional."
  },
  {
    category: "complimentary",
    question: "Is the steam sauna included?",
    answer: "The business lists 10 minutes of complimentary steam sauna time with every session."
  },
  {
    category: "complimentary",
    question: "Is the hot towel service complimentary?",
    answer: "Yes. The business lists a complimentary hot towel service with every session."
  },
  {
    category: "complimentary",
    question: "Is cupping therapy complimentary?",
    answer: "The promotional material mentions complimentary cupping therapy, but the eligibility and conditions need to be confirmed. Ask the centre before your appointment."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "art-of-letting-life-be",
    title: "The Art of Letting Life Be: Embracing Rest in a Busy World",
    slug: "art-of-letting-life-be",
    category: "Mindfulness & Rest",
    readTime: "4 min read",
    excerpt: "There is nothing inherently distressing about this moment; it is often our resistance to it. Discover the gentle art of pausing and allowing your body to unwind.",
    content: [
      "In a world that demands continuous availability, setting aside time for stillness is not an indulgence—it is essential maintenance for your physical and mental equilibrium.",
      "When we surrender to intentional relaxation, our parasympathetic nervous system engages. Breathing slows, elevated pulse rates settle, and blood vessels gently dilate to nourish vital organs.",
      "Taking an hour for a soothing Swedish massage or a quiet warm steam sauna allows ladies to step away from daily responsibilities and return to family and life with replenished energy."
    ]
  },
  {
    id: "understanding-shirodhara",
    title: "Ancient Wisdom: The Calming Rhythms of Ayurvedic Shirodhara",
    slug: "understanding-shirodhara",
    category: "Ayurvedic Insights",
    readTime: "5 min read",
    excerpt: "Shirodhara is revered in classical Ayurveda as one of the most soothing treatments for a restless mind and weary nervous system.",
    content: [
      "The Sanskrit term 'Shirodhara' arises from two words: 'Shiro' meaning head, and 'Dhara' meaning a continuous flow. During this treatment, warm herbalized botanical oil is poured with rhythmic precision over the center of the forehead.",
      "According to Ayurvedic tradition, this area corresponds with the Ajna chakra (the third eye), a focal point of sensory perception and mental clarity.",
      "Clients often describe the sensation as a gentle wave dissolving persistent worry. It is particularly valued by women experiencing disrupted sleep patterns or mental fatigue."
    ]
  },
  {
    id: "herbal-compress-potli",
    title: "Herbal Compress Ball Therapy: How Potli Rejuvenates Tired Muscles",
    slug: "herbal-compress-potli",
    category: "Therapeutic Bodywork",
    readTime: "4 min read",
    excerpt: "Carefully blended therapeutic botanicals wrapped in natural muslin pouches deliver penetrating herbal warmth to stiff joints and fatigued muscles.",
    content: [
      "Potli therapy is rooted in the time-tested tradition of fomentation (swedana). Specially selected herbs are gathered in natural linen pouches, heated in medicated oil, and rhythmically applied to the body.",
      "The combination of thermal energy and botanical nutrients helps soften stubborn muscle knots, increases local blood flow, and leaves the body feeling deeply warmed and grounded.",
      "It is particularly comforting during cooler Alberta seasons when joint stiffness and muscle soreness tend to peak."
    ]
  },
  {
    id: "prenatal-postnatal-care",
    title: "Nurturing Mothers: The Benefits of Pre-natal and Post-natal Massage",
    slug: "prenatal-postnatal-care",
    category: "Maternal Wellness",
    readTime: "5 min read",
    excerpt: "Supporting women through pregnancy and the postpartum fourth trimester with specialized, compassionate bodywork.",
    content: [
      "Pregnancy places unique physical demands on a mother's spine, pelvis, and circulatory system. Specialized pre-natal massage provides comfortable, side-lying support that reduces pressure on sensitive joints.",
      "Following childbirth, post-natal massage offers focused care for the upper back and neck muscles strained by newborn feedings, baby wearing, and broken sleep.",
      "At Rise to Wellness, our ladies-and-kids-only environment provides a serene, respectful sanctuary where mothers can relax knowing they are cared for with dignity."
    ]
  },
  {
    id: "swedish-vs-deep-tissue",
    title: "Swedish Relaxation vs. Deep Tissue: Choosing What Your Body Needs",
    slug: "swedish-vs-deep-tissue",
    category: "Treatment Guide",
    readTime: "3 min read",
    excerpt: "A simple guide to deciding whether your body is craving rhythmic, gentle unwinding or targeted fascial release.",
    content: [
      "Swedish relaxation massage uses long, fluid strokes, kneading, and gentle percussion. Its primary goal is whole-body peace, circulation enhancement, and mental calm.",
      "Deep tissue massage, on the other hand, utilizes deliberate, focused pressure across muscle grains to release chronic adhesions, posture fatigue, and stubborn tightness.",
      "Neither is superior; rather, they serve different stages of your wellness journey. Dr. Hargeet Kaur can help you decide which approach best suits your current comfort level."
    ]
  },
  {
    id: "kids-massage-wellness",
    title: "Supporting Young Wellness: Why Kid's Massage Promotes Rest and Calm",
    slug: "kids-massage-wellness",
    category: "Family Health",
    readTime: "4 min read",
    excerpt: "Gentle massage tailored for children helps soothe growing aches, ease sensory overload, and encourage peaceful sleep habits.",
    content: [
      "Children face growing physical demands from sports activities, heavy backpacks, and modern screen postures. A gentle, reassuring massage helps soothe muscle fatigue.",
      "Beyond physical ease, therapeutic touch teaches children positive body awareness and healthy relaxation techniques they can carry into adulthood.",
      "Our 60-minute session is conducted in a warm, welcoming setting with parental comfort and clear communication at every step."
    ]
  }
];

export const OWNER_CHECKLIST_ITEMS = [
  {
    id: 1,
    title: "Exact business street address & postal code",
    currentStatus: "Cornerstone NE, Calgary, AB (General Area)",
    actionNeeded: "Confirm specific suite / building unit number and postal code before placing on map markers."
  },
  {
    id: 2,
    title: "Official operating hours",
    currentStatus: "By Phone Appointment (825) 733-6007",
    actionNeeded: "Confirm opening and closing hours for weekdays and weekends if public walk-in or fixed hours apply."
  },
  {
    id: 3,
    title: "Practitioner credentials formatting",
    currentStatus: "Dr. Hargeet Kaur (B.A.M.S. ; R.H. ; R.M.T.)",
    actionNeeded: "Confirm preferred credential display and registration jurisdiction."
  },
  {
    id: 4,
    title: "Approved photograph & biography",
    currentStatus: "Typographic profile & neutral wellness photography",
    actionNeeded: "Provide an approved portrait photo and biography text for Dr. Hargeet Kaur when available."
  },
  {
    id: 5,
    title: "Complimentary cupping promotion terms",
    currentStatus: "Displayed as 'Ask us about complimentary cupping and current eligibility'",
    actionNeeded: "Confirm whether free cupping applies to all bookings, specific packages, or introductory clients only."
  },
  {
    id: 6,
    title: "Insurance networks & active provider billing agreements",
    currentStatus: "6 network groups displayed (TELUS Health, Sun Life, Medavie, AB Blue Cross, ClaimsXchange, ProviderConnect)",
    actionNeeded: "Verify which provider portals are actively enrolled for online direct billing at launch."
  },
  {
    id: 7,
    title: "Direct billing treatment applicability",
    currentStatus: "Disclaimer shown specifying coverage depends on plan & treatment type",
    actionNeeded: "Verify whether direct billing applies to all massage treatments or RMT receipts only."
  },
  {
    id: 8,
    title: "Steam sauna & hot towel conditions",
    currentStatus: "10-minute steam sauna & hot towels listed complimentary with every session",
    actionNeeded: "Confirm any client medical contraindications or exceptions for the steam sauna."
  },
  {
    id: 9,
    title: "Booking contact workflow & notifications",
    currentStatus: "Phone (825) 733-6007 & online enquiry form with instant review confirmation",
    actionNeeded: "Specify email address or phone SMS destination for digital enquiry alerts."
  },
  {
    id: 10,
    title: "Secondary contact channels (Email / WhatsApp)",
    currentStatus: "Phone only to avoid inventing unconfirmed contact details",
    actionNeeded: "Confirm if an official clinic email address or WhatsApp line should be published."
  },
  {
    id: 11,
    title: "Blog publication & article review",
    currentStatus: "6 informative wellness articles drafted with clear health disclaimers",
    actionNeeded: "Review and approve individual articles or keep in draft status."
  },
  {
    id: 12,
    title: "Custom domain & social media links",
    currentStatus: "Ready for custom domain binding",
    actionNeeded: "Confirm final domain URL and official Facebook / Instagram handle links."
  }
];

export const CALGARY_COMMUNITIES = [
  "Cornerstone NE",
  "Skyview Ranch",
  "Redstone",
  "Cityscape",
  "Savanna",
  "Saddleridge",
  "Country Hills",
  "Taradale"
];
