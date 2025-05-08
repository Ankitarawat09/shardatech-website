type PharmaceuticalCategory = {
  name: string;
  ingredients: string[];
};

type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  overview: string;
  description: string;
  packaging?: {
    heading: string;
    description: string;
  }[];
  "product specification"?: string[];
  application?: string[];
  pharmaceuticalCategories?: PharmaceuticalCategory[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Coconut Vinegar",
    slug: "coconut-vinegar",
    category: "Coconut",
    image: "/assets/coconut-vinegar.jpg",
    overview:
      "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins. Ideal for use in food production, it offers a natural alternative to synthetic vinegar.",
    description:
      "UG Enterprises Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar. Ideal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products. With its mild acidity and naturally derived nutrients, it is also well-suited for applications where quality and authenticity are essential. Available in bulk, our Coconut Vinegar supports efficient production processes for companies looking to elevate their offerings with a premium, natural ingredient.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 5L, 10L, and 20L containers for bulk purchases.",
      },
      {
        heading: "Shelf Life",
        description: "18 months from the date of manufacture.",
      },
      {
        heading: "Storage Instructions",
        description: "Store in a cool, dry place away from direct sunlight.",
      },
    ],
    "product specification": [
      "Naturally fermented, rich in essential minerals and vitamins",
      "Serves as a natural preservative and flavoring agent",
      "Versatile for use in pickles, sauces, and other condiments",
      "A healthier alternative to synthetic vinegar, with mild acidity",
    ],
    application: ["Food production", "Condiments", "Pickling", "Marinades"],
  },
  {
    id: 2,
    name: "Coconut Water",
    slug: "coconut-water",
    category: "Coconut",
    image: "/assets/coconut-water.jpeg",
    overview:
      "Naturally hydrating coconut water rich in electrolytes, ideal for beverages, health products, and functional foods.",
    description:
      "UG Enterprises Coconut Water is harvested from young, green coconuts and packed at source to preserve its natural electrolytes and nutrients. It supports hydration and wellness applications across the food and beverage industry, particularly in isotonic drinks, smoothies, and clean-label formulations.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 5L, 10L, and 20L containers for bulk purchases.",
      },
      {
        heading: "Shelf Life",
        description: "18 months from the date of manufacture.",
      },
      {
        heading: "Storage Instructions",
        description: "Store in a cool, dry place away from direct sunlight.",
      },
    ],
    "product specification": [
      "Rich in natural electrolytes",
      "Low in calories",
      "No added sugars",
      "Supports hydration and recovery",
    ],
    application: [
      "Beverage industry",
      "Smoothies",
      "Sports drinks",
      "Functional foods",
    ],
  },
  {
    id: 3,
    name: "Coconut Oil",
    slug: "coconut-oil",
    category: "Coconut",
    image: "/assets/coconut-oil.jpg",
    overview:
      "Cold-pressed coconut oil ideal for culinary, cosmetic, and industrial applications with natural aroma and health benefits.",
    description:
      "UG Enterprises Coconut Oil is extracted from dried coconut kernels using mechanical pressing methods to retain its nutrients and natural coconut aroma. It’s used in cooking, skincare, hair care, and industrial formulations due to its stability and purity.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 5L, 10L, and 20L containers for bulk purchases.",
      },
      {
        heading: "Shelf Life",
        description: "18 months from the date of manufacture.",
      },
      {
        heading: "Storage Instructions",
        description: "Store in a cool, dry place away from direct sunlight.",
      },
    ],
    "product specification": [
      "Cold-pressed and unrefined",
      "Natural coconut aroma",
      "Rich in medium-chain triglycerides (MCTs)",
      "Versatile for culinary and cosmetic use",
    ],
    application: ["Cooking", "Skincare", "Haircare", "Soap production"],
  },
  {
    id: 4,
    name: "Coconut Virgin Oil",
    slug: "coconut-veroil",
    category: "Coconut",
    image: "/assets/virgin-c-oil.png",
    overview:
      "Virgin coconut oil extracted from fresh coconut milk, retaining natural nutrients and aroma for health and beauty uses.",
    description:
      "UG Enterprises Virgin Coconut Oil is obtained through cold extraction of fresh coconut milk without the use of chemicals or heat. It is widely valued in dietary supplements, skincare products, and hair treatments.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 5L, 10L, and 20L containers for bulk purchases.",
      },
      {
        heading: "Shelf Life",
        description: "18 months from the date of manufacture.",
      },
      {
        heading: "Storage Instructions",
        description: "Store in a cool, dry place away from direct sunlight.",
      },
    ],
    "product specification": [
      "Cold-extracted from fresh coconut milk",
      "Preserves aroma and natural antioxidants",
      "No chemical processing",
      "Suitable for premium skincare and edible use",
    ],
    application: ["Nutraceuticals", "Beauty care", "Organic food", "Hair oils"],
  },
  {
    id: 5,
    name: "Desiccated Coconut",
    slug: "desiccated-coconut",
    category: "Coconut",
    image: "/assets/dessicated-coconut.jpeg",
    overview:
      "Finely grated, dried coconut flesh used as an ingredient in baked goods, sweets, and ready-to-eat foods.",
    description:
      "UG Enterprises Desiccated Coconut is manufactured from fresh white coconut kernel through a hygienic drying process. It is free from additives and ideal for use in cookies, cakes, snack bars, and confectionery formulations.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 5L, 10L, and 20L containers for bulk purchases.",
      },
      {
        heading: "Shelf Life",
        description: "18 months from the date of manufacture.",
      },
      {
        heading: "Storage Instructions",
        description: "Store in a cool, dry place away from direct sunlight.",
      },
    ],
    "product specification": [
      "Finely shredded and dehydrated",
      "No preservatives or sweeteners",
      "Pure white color and rich coconut flavor",
      "HACCP compliant production",
    ],
    application: [
      "Bakery",
      "Confectionery",
      "Ready-to-eat meals",
      "Health snacks",
    ],
  },
  {
    id: 6,
    name: "Coconut Milk",
    slug: "coconut-milk",
    category: "Coconut",
    image: "/assets/coconut-milk.jpg",
    overview:
      "Rich, creamy coconut milk ideal for culinary use in sauces, soups, desserts, and beverages.",
    description:
      "UG Enterprises Coconut Milk is extracted from fresh coconut kernel and processed to retain natural flavor and creaminess. It is used in culinary preparations and food manufacturing for its smooth texture and nutritional profile.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 5L, 10L, and 20L containers for bulk purchases.",
      },
      {
        heading: "Shelf Life",
        description: "18 months from the date of manufacture.",
      },
      {
        heading: "Storage Instructions",
        description: "Store in a cool, dry place away from direct sunlight.",
      },
    ],
    "product specification": [
      "Extracted from fresh coconut kernel",
      "Creamy and natural flavor",
      "No additives or preservatives",
      "Suitable for vegan and dairy-free products",
    ],
    application: ["Curries", "Soups", "Desserts", "Non-dairy beverages"],
  },
  {
    id: 7,
    name: "Corn Gluten Meal",
    slug: "corn-gluten-meal",
    category: "Animal Feeds",
    image: "/assets/corn-gluten.png",
    overview:
      "High-protein, energy-dense feed ingredient from corn wet milling, ideal for ruminant, poultry, swine, aquaculture, and pet diets.",
    description:
      "Corn Gluten Meal (CGM) is a high-protein, energy-rich by-product from wet milling of corn, containing 60–65% crude protein. Rich in methionine, cysteine, and xanthophylls, it supports muscle development, feather growth, and pigmentation. Low in fiber and starch, CGM enhances feed palatability, nutrient density, and animal performance across livestock and aquaculture.",
    packaging: [
      {
        heading: "Packaging",
        description:
          "Available in 25kg and 50kg bags. Custom packaging on request.",
      },
      {
        heading: "Storage",
        description:
          "Store in dry, ventilated areas away from heat and moisture.",
      },
    ],
    "product specification": [
      "60–65% crude protein",
      "Rich in sulfur amino acids",
      "Supports yolk pigmentation and growth",
      "Highly digestible and palatable",
      "Low in fiber and starch",
    ],
    application: [
      "Ruminant Feed",
      "Poultry Feed",
      "Swine Feed",
      "Aquaculture Feed",
      "Pet Food",
    ],
  },
  {
    id: 8,
    name: "Corn DDGS",
    slug: "corn-ddgs",
    category: "Animal Feeds",
    image: "/assets/corn-ddgs.png",
    overview:
      "Protein-rich co-product from ethanol production, used in ruminant, poultry, swine, aquaculture, and pet food.",
    description:
      "Corn Distillers Dried Grains with Solubles (DDGS) is a nutrient-dense by-product of ethanol production from corn. Rich in protein, energy, fats, fiber, and yeast-derived micronutrients, it offers high levels of bypass and digestible intake protein. Widely used in sustainable animal feed, DDGS improves growth, performance, and feed efficiency.",
    packaging: [
      {
        heading: "Packaging",
        description: "Packed in 50kg polypropylene (PP) bags.",
      },
      {
        heading: "Inclusion Rate",
        description:
          "Can constitute 20–30% of total dry matter in ruminant rations.",
      },
    ],
    "product specification": [
      "27–30% protein",
      "High in digestible and bypass protein",
      "Yeast-enriched for added nutrients",
      "Energy-dense and cost-effective",
      "Widely accepted in sustainable feed programs",
    ],
    application: [
      "Ruminant Feed",
      "Poultry Feed",
      "Swine Feed",
      "Aquaculture Feed",
      "Pet Food",
    ],
  },
  {
    id: 9,
    name: "Rice DDGS",
    slug: "rice-ddgs",
    category: "Animal Feeds",
    image: "/assets/rice-ddgs.png",
    overview:
      "High-protein co-product from rice ethanol production, ideal for cattle, poultry, swine, aquaculture, and pet feed.",
    description:
      "Rice DDGS is a protein-rich, digestible feed derived from the ethanol production process from rice. It contains essential nutrients including fats, fiber, and minerals. With a protein content of 40–45%, it's an efficient and sustainable alternative to traditional protein sources in animal diets.",
    packaging: [
      {
        heading: "Packaging",
        description:
          "Packed in 50kg PP bags for bulk and long-distance transport.",
      },
      {
        heading: "Appearance",
        description:
          "Medium brown powder with good flowability and consistency.",
      },
    ],
    "product specification": [
      "40–45% protein",
      "Highly digestible",
      "Alternative to soybean/fishmeal",
      "Economical and sustainable",
      "Suited for multiple animal species",
    ],
    application: [
      "Ruminant Feed",
      "Poultry Feed",
      "Swine Feed",
      "Aquaculture Feed",
      "Pet Food",
    ],
  },
  {
    id: 10,
    name: "Formaldehyde",
    slug: "formaldehyde",
    category: "Methanol",
    image: "/assets/Formaldehyde.png",
    overview:
      "Highly versatile and reactive chemical used as a key intermediate in resins, plastics, textiles, and disinfectants.",
    description:
      "Formaldehyde is a reactive chemical produced via oxidation of methanol, supplied as a stabilized aqueous solution (37–50%). Valued for its strong binding, preserving, and antimicrobial properties, it is widely used in resins, plastics, textiles, construction chemicals, and disinfectants.",
    packaging: [
      {
        heading: "Grade & Concentration",
        description:
          "Industrial / Technical grade, 37–50% aqueous solution (customizable).",
      },
      {
        heading: "Packaging Options",
        description: "200L HDPE drums, 1,000L IBC tanks, or bulk tanker loads.",
      },
    ],
    "product specification": [
      "Industrial / Technical grade",
      "37–50% concentration",
      "Clear, colorless liquid with pungent odor",
      "Fully miscible with water",
      "Strong binding and antimicrobial properties",
    ],
    application: [
      "Resins & Adhesives",
      "Plastics & Construction",
      "Textiles & Finishing Agents",
      "Disinfection & Preservation",
    ],
  },
  {
    id: 11,
    name: "Methyl Methacrylate",
    slug: "methyl-methacrylate",
    category: "Methanol",
    image: "/assets/Methyl-methacrylate.png",
    overview:
      "High-value monomer for production of acrylic plastics, coatings, adhesives, and specialty polymers.",
    description:
      "Methyl Methacrylate (MMA) is a clear, colorless liquid monomer known for excellent optical clarity, weather resistance, and chemical stability. It is the key raw material for Polymethyl Methacrylate (PMMA) production and is used across automotive, construction, paints & coatings, signage, and electronics industries.",
    packaging: [
      {
        heading: "Physical Properties",
        description: "Boiling point ~101°C; flash point ~10°C (closed cup).",
      },
      {
        heading: "Packaging Options",
        description: "200L steel drums, 1,000L IBC totes, ISO tank containers.",
      },
    ],
    "product specification": [
      "Purity ≥99.5%",
      "Excellent optical clarity",
      "Weather and chemical resistance",
      "Key monomer for PMMA production",
      "Versatile for coatings, adhesives, and polymers",
    ],
    application: [
      "Acrylic Plastics Manufacturing",
      "Coatings & Paints",
      "Adhesives & Sealants",
      "Automotive & Construction",
      "Signage & Electronics",
    ],
  },
  {
    id: 12,
    name: "Methyl Tertiary Butyl Ether (MTBE)",
    slug: "methyl-tertiary-butyl-ether",
    category: "Methanol",
    image: "/assets/MTBE.png",
    overview:
      "High-octane oxygenated fuel additive to improve gasoline combustion efficiency and reduce engine knocking.",
    description:
      "MTBE is a clear, volatile ether produced from methanol, prized for its blending properties in gasoline. It increases oxygen content, boosts octane number (~110 RON), and helps refineries meet emission and performance standards.",
    packaging: [
      {
        heading: "Physical Properties",
        description:
          "Boiling point ~55°C; flash point −28°C; high octane number (~110 RON).",
      },
      {
        heading: "Packaging Options",
        description: "ISO tank containers (20–24 MT capacity).",
      },
    ],
    "product specification": [
      "Purity ≥99% (Refinery Grade)",
      "High octane (~110 RON)",
      "Oxygenated for cleaner combustion",
      "Clear, volatile liquid",
      "Reduces engine knocking and emissions",
    ],
    application: [
      "Fuel Additive for Gasoline",
      "Refinery Blending Component",
      "Emission Control in Combustion Engines",
    ],
  },
  {
    id: 13,
    name: "Acetic Acid",
    slug: "acetic-acid",
    category: "Methanol",
    image: "/assets/Acetic-acid.png",
    overview:
      "Versatile industrial chemical used across chemical, textile, plastic, food, and cleaning industries.",
    description:
      "Acetic Acid is a vital industrial chemical known for its versatility, high reactivity, and widespread applications across various sectors. Best recognized as the key ingredient in vinegar, acetic acid in its concentrated form (glacial acetic acid) serves as a core raw material in the chemical, textile, plastic, and food industries. Produced primarily through the carbonylation of methanol, it offers a cost-effective, scalable solution for large-scale manufacturing operations.",
    packaging: [
      {
        heading: "Purity & Grade",
        description:
          "Glacial Grade ≥99.8%; Industrial / Technical grades available.",
      },
      {
        heading: "Packaging Options",
        description:
          "30L HDPE jerrycans, 200L HDPE drums, 1,000L IBCs, bulk tanker deliveries.",
      },
    ],
    "product specification": [
      "Purity: ≥ 99.8% (Glacial Grade)",
      "Appearance: Clear, colorless liquid",
      "Odor: Sharp, vinegar-like smell",
      "Boiling Point: 118°C",
      "Solubility: Fully miscible with water, alcohol, and most organic solvents",
      "Grade Available: Industrial / Technical",
      "Chemical Formula: CH₃COOH",
      "Supply Format: Bulk quantities for industrial use",
      "Documentation: TDS, COA, SDS provided with every shipment",
    ],
    application: [
      "Chemical Manufacturing",
      "Textile & Fiber Industry",
      "Plastic & Polymer Production",
      "Food Processing (Non-industrial Grade)",
      "Industrial Cleaning & Solvents",
    ],
  },
  {
    id: 14,
    name: "Active Pharmaceutical Ingredients (APIs)",
    slug: "apis",
    category: "Pharmaceuticals",
    image: "/assets/pharm1.jpg",
    overview:
      "Our high-performance Active Pharmaceutical Ingredients (APIs) are at the heart of successful, market-ready pharmaceutical products.",
    description:
      "As the core bioactive components responsible for delivering therapeutic effects, our APIs are engineered to meet the highest international standards—ensuring your formulations are not just effective, but also trusted and compliant.",
    pharmaceuticalCategories: [
      {
        name: "Topical Anesthetic/Scar Cream",
        ingredients: [
          "Baclofen",
          "Capsaicin",
          "Celecoxib",
          "Cyclobenzaprine",
          "Diclofenac Sodium",
          "Doxepin HCL",
          "Duloxetine",
          "Fluocinonide",
          "Fluticasone",
          "Gabapentin",
          "Levocetirizine DI HCL",
          "Lidocaine",
          "Pentoxifylline",
          "Piroxicam",
          "Prilocaine",
          "Topiramate",
        ],
      },
      {
        name: "GERD/Gastric Ulcers",
        ingredients: [
          "Aluminum Hydroxide",
          "Bismuth Salicylate",
          "Calcium Carbonate",
          "Cimetidine",
          "Dimethicone",
          "Esomeprazole",
          "Famotidine",
          "Hyoscine Butylbromide",
          "Lansoprazole",
          "Levosulpiride",
          "Magaldrate",
          "Magnesium Hydroxide",
          "Metoclopramide",
          "Omeprazole",
          "Magnesium Dihydrate",
          "Ranitidine",
          "Simethicone",
          "Vonoprazan",
        ],
      },
      {
        name: "Erectile Dysfunction/Sexual Health",
        ingredients: [
          "Avanafil",
          "Sertraline",
          "Sildenafil",
          "Tadalafil",
          "Vardenafil",
        ],
      },
      {
        name: "Hair Regrowth",
        ingredients: [
          "Biotin",
          "Dutasteride",
          "Finasteride",
          "Minoxidil",
          "Nanoxidil",
        ],
      },
      {
        name: "Peptides",
        ingredients: [
          "BPC-157",
          "Collagen peptides",
          "GHK-Cu",
          "Keratin peptides",
          "Liraglutide",
          "Semaglutide",
        ],
      },
      {
        name: "Anti-Anxiety",
        ingredients: [
          "Alprazolam",
          "Buspirone",
          "Citalopram",
          "Diazepam",
          "Duloxetine",
          "Escitalopram",
          "Fluoxetine",
          "Lorazepam",
          "Propranolol",
          "Sertraline",
          "Venlafaxine",
        ],
      },
      {
        name: "Hormone Therapy",
        ingredients: [
          "Anastrozole",
          "Clomiphene Citrate",
          "Conjugated Estrogens",
          "Estradiol",
          "Glutathione",
          "Medroxyprogesterone",
          "Progesterone",
          "Somatropin",
          "Testosterone Cypionate",
          "Testosterone Enanthate",
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Orally Disintegrating Strips (ODS)",
    slug: "ods",
    category: "Pharmaceuticals",
    image: "/assets/pharm2.jpg",
    overview:
      "Innovative drug delivery system for rapid absorption and improved patient compliance.",
    description:
      "Our Orally Disintegrating Strips (ODS) technology provides a convenient and effective alternative to traditional dosage forms.",
    pharmaceuticalCategories: [
      {
        name: "Prescription Products",
        ingredients: [
          "Betahistine Dihydrochloride 8/16/24 mg ODS/ODF – Anti-vertigo",
          "Paracetamol 60/120 mg ODS/ODF – Antipyretic",
          "Prucalopride 1/2 mg ODS/ODF – Used for symptomatic treatment of chronic constipation",
          "Ondansetron 2 mg / 4 mg / 8 mg ODS/ODF – Anti-emetic",
          "Sildenafil 25/50 mg ODS/ODF – For treatment of erectile dysfunction",
          "Tadalafil 2.5/5/10/20 mg ODS/ODF – For treatment of erectile dysfunction",
          "Pregabalin 25/50/75 mg ODS/ODF – Anticonvulsant",
          "Bilastine 10/20 mg ODS/ODF – For treatment of allergic disorder",
          "Bilastine 20 mg + Montelukast 10/20 mg ODS/ODF – Anti-allergic",
          "Clobazam 5/10/20 mg ODS/ODF – Anticonvulsant",
        ],
      },
      {
        name: "OTC / Nutraceutical Products",
        ingredients: [
          "Vitamin D3 400/600/800/1000/2000/4000/7000 IU ODS/ODF – For treatment of Vitamin D3 Deficiency",
          "Vitamin D3 10000/20000/25000/50000/60000 IU ODS/ODF – For treatment of Vitamin D3 Deficiency",
          "Methylcobalamin 500/1000/1500 mcg ODS/ODF – Vitamin B12 deficiency",
          "Simethicone 62.5 mg ODS/ODF – Anti-Flatulent",
          "Melatonin 3 mg ODS/ODF – Sleep Inducer",
          "Green T Film – Instant Green Tea",
          "Co Enzyme Q 10 100 mg ODS/ODF – Energy booster",
          "Vitamin K2 70 mcg + Vitamin D3 1000 IU ODS/ODF – Helps to fully utilize and benefit from calcium",
          "Bacillus Coagulans 5 Billion CFU ODS/ODF (Probiotics) – Promotes overall gut health",
          "Zinc 11/20 mg ODS/ODF – Supports immune system and metabolism function",
          "Biotin 5000 IU ODS/ODF – For biotin deficiency with related symptoms of hair and skin",
          "Caffeine 50 mg + L Theanine 15 mg – Energy booster",
          "Methylcobalamin 1000 mcg ODS/ODF – Vitamin B12 supplement",
          "Iron 14 mg ODS/ODF – Iron Deficiency",
          "Multivitamin ODS/ODF: Vitamin A 5000 IU + Vitamin B5 10 mg + Vitamin B6 2 mg + Vitamin B7 300 mcg + Vitamin B9 1000 mcg + Vitamin C 30 mg + Vitamin B12 1000 mcg + Vitamin D3 400 IU + Vitamin K2 80 mcg + Iodine 150 mcg – To treat or prevent vitamin deficiency",
        ],
      },
    ],
  },
];

export default products;
