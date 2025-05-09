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
    name: "Coconut Water Concentrate with Preservatives",
    slug: "coconut-water-concentrate-with-preservatives",
    category: "Coconut",
    image: "/assets/conc-water.jpg",
    overview:
      "Our Coconut Water Concentrate with Preservatives provides a stable, concentrated source of coconut water for industrial applications. With a high brix content of 60, this concentrate maintains the natural flavor and nutrient profile of coconut water, enhanced with preservatives for extended shelf life and storage ease.",
    description:
      "Our Coconut Water Concentrate with Preservatives is crafted from nutrient-rich coconut water and includes preservatives for enhanced longevity, making it a reliable option for large-scale production. With its high brix content, this concentrate captures the full flavor and electrolyte profile of coconut water, while the added preservatives ensure stability and extended shelf life.\n\nIdeal for manufacturers in the food, beverage, and wellness industries, this product supports consistent quality across production runs and offers greater flexibility in inventory management. With convenient bulk packaging, Coconut Water Concentrate with Preservatives is easy to store and integrate into your production processes, ensuring a robust flavor and enhanced product stability for your end products.",
    packaging: [
      {
        heading: "Packaging",
        description:
          "Available in 50 kg sealed plastic containers or 265 kg drums.",
      },
    ],
    "product specification": [
      "High brix content (60) for intense flavor and nutrient richness",
      "Added preservatives for extended shelf life, ideal for bulk inventory",
      "Reliable source of electrolytes, including potassium and magnesium",
      "Stabilized quality for consistent production in the food and beverage sectors",
      "Quantity: we have capability to deliver up to 250 Tons of Coconut water concentrate per month.",
      "Shelf Life: 12 months from the date of manufacture.",
      "Storage Instructions: Store in a cool, dry place. Refrigerate and consume within 45 days.",
      "Product Form: Thick Concentrate Liquid with Preservatives.",
    ],
    application: ["Food industry", "Beverage industry", "Wellness industry"],
  },
  {
    id: 2,
    name: "Frozen Coconut Water Concentrate without Preservatives",
    slug: "frozen-coconut-water-without-preservatives",
    category: "Coconut",
    image: "/assets/coconut-water.jpg",
    overview:
      "Our Frozen Coconut Water without Preservatives provides a pure and natural source of coconut water, frozen to retain freshness and nutritional integrity. This preservative-free option offers an authentic coconut taste, ideal for manufacturers seeking a clean-label ingredient for their food and beverage products.",
    description:
      "Frozen Coconut Water without Preservatives is derived from fresh coconuts and immediately frozen to lock in the natural flavors, nutrients, and hydration benefits. This product is entirely preservative-free, making it an excellent choice for businesses focused on clean-label production and natural ingredients.\n\nDesigned for large-scale manufacturing, this frozen coconut water delivers consistent quality while maintaining the authentic taste and electrolyte profile of fresh coconut water. It’s an ideal base ingredient for a variety of health-oriented and premium food and beverage products, supporting brands that prioritize natural ingredients and purity. With convenient bulk packaging and stable frozen storage, our preservative-free coconut water integrates seamlessly into your production processes.",
    packaging: [
      {
        heading: "Packaging",
        description: "Available in 20 kg or 200 kg food-grade containers.",
      },
    ],
    "product specification": [
      "100% natural, preservative-free, suitable for clean-label products",
      "Frozen immediately to preserve freshness, taste, and nutritional content",
      "Natural source of electrolytes like potassium and magnesium",
      "Consistent quality for high-volume production in food and beverage industries",
      "Quantity: Capable of supplying up to 200 Tons of Frozen Coconut Water per month.",
      "Shelf Life: 24 months when stored frozen.",
      "Storage Instructions: Keep frozen at -18°C or below. Thaw only the quantity required for immediate use.",
      "Product Form: Frozen Liquid Coconut Water without Preservatives.",
    ],
    application: [
      "Food industry",
      "Beverage industry",
      "Clean-label products",
      "Health-oriented and premium product lines",
    ],
  },
  {
    id: 3,
    name: "Desiccated Coconut",
    slug: "desiccated-coconut",
    category: "Coconut",
    image: "/assets/dessicated-coconut.jpg",
    overview:
      "Our Desiccated Coconut offers a versatile, high-quality ingredient for food production, available in various grades to suit diverse industrial applications, from confectionery to ready-to-eat foods.",
    description:
      "UG Enterprises’ Desiccated Coconut is crafted from dehydrated coconut meat and is available in grated and shredded forms. With a wide range of grades to match different production needs, this product provides a reliable coconut flavor and texture, making it a staple ingredient for the food industry.\n\nDesiccated Coconut is a key component in the production of confectionery, bakery products, and snack foods. It also serves as an ideal substitute for fresh grated coconut, offering consistent quality, ease of storage, and an extended shelf life, perfect for large-scale food manufacturing. Whether you need fine or coarse grades, our Desiccated Coconut supports your product formulations with minimal processing time.",
    packaging: [
      {
        heading: "Packaging Options",
        description: "Available in 25kg and 50kg bags for bulk purchases.",
      },
    ],
    "product specification": [
      "Available in various grades for different applications (fine, medium, and coarse)",
      "Consistent coconut flavor and texture, ideal for bulk production",
      "Long shelf life and easy storage compared to fresh coconut",
      "Suitable for use in confectionery, bakery products, and snacks",
      "Shelf Life: 12 months from the date of manufacture.",
      "Storage Instructions: Store in a cool, dry place to maintain freshness and prevent moisture absorption.",
    ],
    application: [
      "Confectionery",
      "Bakery products",
      "Snack foods",
      "Ready-to-eat foods",
    ],
  },
  {
    id: 4,
    name: "Tender Coconut Water",
    slug: "tender-coconut-water",
    category: "Coconut",
    image: "/assets/coconut-water.jpeg",
    overview:
      "Sterile and nutrient-rich, our Tender Coconut Water offers a natural, refreshing ingredient for health-focused food and beverage production. With therapeutic properties and a low calorific value, it’s an ideal addition to your product lineup.",
    description:
      "Our Tender Coconut Water (TCW) is harvested from young, green coconuts and carefully processed to maintain its natural purity and nutrient profile. Known for its hydrating and therapeutic properties, TCW is a versatile ingredient suited for various applications in the food, beverage, and wellness industries.\n\nThis product is available in bulk for large-scale production, offering a low-calorie profile with only 17.4 calories per 100g. With a naturally light, refreshing taste and packed with essential nutrients, our Tender Coconut Water enhances the nutritional value of end products, meeting the demands of health-conscious consumers. It’s an ideal choice for companies looking to incorporate a natural and healthy beverage base into their offerings.”",
    packaging: [
      {
        heading: "Packaging & Storage",
        description:
          "Non pasteurized Frozen tender coconut water will be packed in 18 kg Pails. Six layers stacking of Pails will be done inside the container. Aseptic pasteurized coconut water will undergo sterilization and hence storage temperature required is +2 deg C only. This will be packed in drums and aluminum bags.",
      },
    ],
    "product specification": [
      "Low-calorie content (17.4 per 100g) suitable for health-focused products",
      "Natural source of hydration with essential nutrients and electrolytes",
      "Sterile and preservative-free, ensuring product purity",
      "Versatile for large-scale production across food, beverage, and wellness sectors",
    ],
    application: [
      "Food industry",
      "Beverage industry",
      "Wellness sector",
      "Health-focused products",
    ],
  },
  {
    id: 5,
    name: "Coconut Milk Powder",
    slug: "coconut-milk-powder",
    category: "Coconut",
    image: "/assets/milk-powder.jpg",
    overview:
      "Our Coconut Milk Powder provides a convenient and versatile ingredient for large-scale production, offering the same rich flavor as fresh coconut milk with an extended shelf life and easy storage.",
    description:
      "Coconut Milk Powder from UG Enterprises offers the rich, creamy taste of coconut milk in a convenient powdered form, making it an ideal ingredient for food and beverage manufacturing. By simply reconstituting with water, this powder delivers the authentic flavor and nutritional benefits of fresh coconut milk, without the need for refrigeration or extensive handling.\n\nThis product is tailored for industrial applications, supporting efficient production with its extended shelf life and bulk packaging options. Suitable for various applications, from processed foods to beverage mixes, our Coconut Milk Powder provides a reliable coconut flavor and texture, meeting the quality standards expected by manufacturers worldwide.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in bulk packaging, including 25kg and 50kg industrial-grade bags.",
      },
    ],
    "product specification": [
      "Extended shelf life and easy storage, ideal for bulk inventory",
      "Consistent coconut flavor, simply reconstitute with water",
      "Versatile for use in processed foods, baked goods, and beverage applications",
      "Reduces logistical challenges with easy handling and no refrigeration required",
      "Shelf Life: 18 months from the date of manufacture.",
      "Storage Instructions: Store in a cool, dry place to maintain freshness and prevent clumping.",
    ],
    application: [
      "Processed foods",
      "Baked goods",
      "Beverage applications",
      "Food and beverage manufacturing",
    ],
  },
  {
    id: 7,
    name: "Coconut Cream",
    slug: "coconut-cream",
    category: "Coconut",
    image: "/assets/coconut-cream.jpg",
    overview:
      "Coconut cream is a thick, rich, and creamy substance extracted from the grated pulp of mature coconuts. It contains a high fat content (typically around 20–28%) and is widely used in both sweet and savory dishes across various cuisines.",
    description:
      "Extracted from mature coconuts, it boasts a sweet and midlly nutty flavor, elevating both sweet and savory creations. Suitable as an ingredient for processing dishes that need a strong aroma and high fat content.",
    packaging: [
      {
        heading: "PACKAGING & STORAGE",
        description:
          "Product should be stored in a cool, clean and dry place, out of direct sunlight, heat and oxidizers. Packed in 1 x 200 kg Aseptic bag/Steel drum. Product shelf life: 18 months under ideal storage condition",
      },
    ],
    "product specification": [
      "High fat content (typically around 20–28%)",
      "Sweet and mildly nutty flavor",
      "Ideal for dishes needing strong aroma and rich texture",
      "Shelf life: 18 months under ideal storage condition",
    ],
    application: [
      "Sweet dishes",
      "Savory dishes",
      "Industrial food processing",
      "Recipes requiring high-fat ingredients",
    ],
  },
  {
    id: 8,
    name: "Frozen Coconut Meat",
    slug: "frozen-coconut-meat",
    category: "Coconut",
    image: "/assets/coconut-meat.jpg",
    overview:
      "Our mature coconut meat is the thick, white flesh scooped from mature coconuts—carefully cleaned, portioned, and flash-frozen with no additives or preservatives. It offers the perfect balance of richness and mild sweetness, making it a versatile superfood ingredient.\n\nWe also offer tender coconut pulp which is the soft flesh inside the Tender Coconut. The Pulp is a thin film of white layer formed on the inside of the shell housing the Tender Coconut Water. Tender Coconut Pulp is available in Medium or Thick grade depending on the age of the Tender Coconut at the time of harvest.\n• Medium tender coconut pulp is sweeter and smoothly solid, 7-8 mm thick\n• Thick tender coconut pulp is sweeter and solid, 8-9 mm thick.\n• Mature coconut meat, 9-11mm thick",
    description:
      "Tender Coconut Pulp is increasingly used as a Dairy alternative and a favorite Vegan ingredient in Ice Cream, Pudding, Frozen Dessert, Smoothies, Mocktails, etc. Tender Coconut Pulp is Gluten Free.\nMature coconut meat is used in plant-based dairy alternatives – in yogurts, ice creams, and milk blends, bakery & snack foods, vegan & Keto foods, desserts and confectioneries.",
    packaging: [
      {
        heading: "PACKING AND STORAGE",
        description:
          "Customized packaging in upto 20Kg bulk bags.\nShelf life: 9 months @ - 20 Deg ‘C’. Shipped Frozen.",
      },
    ],
    "product specification": [
      "Medium tender coconut pulp is sweeter and smoothly solid, 7-8 mm thick",
      "Thick tender coconut pulp is sweeter and solid, 8-9 mm thick",
      "Mature coconut meat, 9-11mm thick",
      "No additives or preservatives",
      "Shelf life: 9 months at -20°C",
    ],
    application: [
      "Ice cream, Frozen dessert, Milk Blends.",
      "Pudding, Smoothies, Mocktails, Yogurts.",
      "Bakery & snack foods",
      "Vegan & Keto foods",
      "Desserts and confectioneries",
    ],
  },
  {
    id: 9,
    name: "Semi Husked Coconut",
    slug: "semi-husked-coconut",
    category: "Coconut",
    image: "/assets/semi-husked-coconut.jpg",
    overview:
      "A semi-husked coconut is a fully-ripened coconut with the husk left intact over the 'eye spot' of the coconut. The 'eye spot' is a sensitive area of the coconut that is protected by the husk, which helps extend the coconut's shelf life.",
    description:
      "Semi-husked coconuts, with their partial husk removal, are versatile and useful in various applications, including culinary uses, religious ceremonies, and as a raw material for products like coconut oil and copra.\n\nSemi-husked coconuts retain the natural freshness and nutritional content and have varied applications, making them highly sought after products the world over.",
    packaging: [
      {
        heading: "PACKAGING AND STORAGE",
        description:
          "Transportation packages contain 35-40 nuts per pack, stored in a container at around 15±1°C. No moisture or any water spray on nuts.\nMax Load per 40ft Container is 25-26 tons.",
      },
    ],
    "product specification": [
      "Fully-ripened coconut with partial husk removal",
      "Retains natural freshness and nutritional content",
      "Suitable for culinary uses, religious ceremonies, and industrial applications",
      "Max load per 40ft container: 25-26 tons",
    ],
    application: [
      "Culinary uses",
      "Religious ceremonies",
      "Coconut oil production",
      "Copra production",
    ],
  },
  {
    id: 10,
    name: "RBD Coconut Oil",
    slug: "coconut-oil",
    category: "Coconut",
    image: "/assets/rbd-coconut-oil.jpg",
    overview:
      "Our RBD Coconut Oil, with its unique fatty acid composition and stable properties, is a versatile and reliable ingredient for large-scale food production. Ideal for use in a wide range of applications, from confectionery to deep frying.",
    description:
      "UG Enterprises’ RBD Coconut Oil is a high-quality ingredient, valued in the food industry for its easy melting behavior, oxidative stability, and pleasant flavor. Rich in medium-chain fatty acids, including lauric acid, this oil offers excellent digestibility and is a preferred choice for manufacturers across various sectors.\n\nWith its resistance to rancidity and high content of Omega-6, our RBD Coconut Oil is suitable for numerous applications, from producing margarine and shortenings to enhancing the quality of infant milk powder, ice cream, and bakery products. Its stable character also makes it ideal for high-heat processes like deep frying, ensuring consistent performance in industrial-scale production.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Bulk containers available in 190kg drums, 1,000kg IBC totes, and custom sizes upon request.",
      },
      {
        heading: "Storage Instructions",
        description:
          "Store in a cool, dry place. Keep away from direct sunlight to maintain quality.",
      },
    ],
    "product specification": [
      "Oxidative stability and resistance to rancidity, extending product shelf life",
      "Rich in lauric acid, supporting health-focused formulations",
      "Versatile for use in dairy alternatives, confectionery, and frying applications",
      "Pleasant flavor profile, enhancing the taste of end products",
      "Shelf life: 24 months from the date of manufacture",
    ],
    application: [
      "Dairy alternatives",
      "Confectionery",
      "Frying applications",
      "Margarine and shortenings production",
      "Infant milk powder and ice cream production",
      "Bakery products",
    ],
  },
  {
    id: 11,
    name: "Coconut Virgin Oil",
    slug: "coconut-veroil",
    category: "Coconut",
    image: "/assets/virgin-c-oil.png",
    overview:
      "Extracted from fresh coconut milk, our Virgin Coconut Oil is a premium-grade oil known for its purity, pleasant aroma, and versatility. Available in bulk, it’s ideal for companies seeking high-quality coconut oil for food, cosmetic, or personal care products.",
    description:
      "Our Virgin Coconut Oil is produced from fresh coconut milk using both traditional and modern extraction methods, resulting in a pure, high-quality oil with a delicate coconut aroma. With its low Free Fatty Acid (FFA) content, this oil boasts an extended shelf life, making it a reliable choice for industrial use.\n\nVirgin Coconut Oil is well-regarded for its applications across various sectors, including food, cosmetics, and personal care. Known for its purity and skin-friendly properties, it serves as an excellent ingredient in edible oils, hair care products, baby oils, and skin-care formulations. Whether used as a natural moisturizer or as a cooking oil, this product offers consistent quality that meets the demands of manufacturers worldwide.",
    packaging: [
      {
        heading: "Packaging Options",
        description: "Bulk packaging available in 20L, 50L, and 200L drums.",
      },
      {
        heading: "Storage Instructions",
        description:
          "Store in a cool, dry place away from direct sunlight to maintain quality.",
      },
    ],
    "product specification": [
      "Low FFA content ensures a longer shelf life, ideal for bulk storage",
      "Pleasant aroma and high purity, suitable for both food and personal care industries",
      "Cold-pressed, retaining natural nutrients and antioxidants",
      "Versatile for use in culinary, cosmetic, and health products",
      "Shelf life: 24 months from the date of manufacture",
    ],
    application: [
      "Edible oils",
      "Hair care products",
      "Baby oils",
      "Skin-care formulations",
      "Culinary use",
      "Cosmetic products",
    ],
  },
  {
    id: 12,
    name: "Coconut Vinegar",
    slug: "coconut-vinegar",
    category: "Coconut",
    image: "/assets/coconut-vinegar.jpg",
    overview:
      "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins. Ideal for use in food production, it offers a natural alternative to synthetic vinegar.",
    description:
      "UG Enterprises’ Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar.\n\nIdeal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products. With its mild acidity and naturally derived nutrients, it is also well-suited for applications where quality and authenticity are essential. Available in bulk, our Coconut Vinegar supports efficient production processes for companies looking to elevate their offerings with a premium, natural ingredient.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 5L, 10L, and 20L containers for bulk purchases.",
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
      "Shelf life: 18 months from the date of manufacture",
    ],
    application: ["Pickles", "Sauces", "Condiments", "Marinades"],
  },
  {
    id: 13,
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
    id: 14,
    name: "Corn DDGS",
    slug: "corn-ddgs",
    category: "Animal Feeds",
    image: "/assets/corn-ddgs.png",
    overview:
      "Nutrient-rich co-product from ethanol distillation, ideal for ruminants, poultry, swine, aquaculture, and pet food, providing high protein, energy, and fiber.",
    description:
      "Corn Distillers Dried Grains with Solubles (DDGS) is a co-product of ethanol distillation, rich in protein, energy, fats, fiber, minerals, and vitamins. After fermentation and drying, DDGS offers a concentrated form of these nutrients, particularly beneficial in ruminant nutrition. It includes Undegradable Intake Protein (UIP) and Digestible Intake Protein (DIP), enhancing growth and performance in livestock.",
    packaging: [
      {
        heading: "Packaging",
        description: "Packed in 50kg PP bags.",
      },
      {
        heading: "Storage",
        description:
          "Store in a cool, dry, and ventilated area away from moisture.",
      },
    ],
    "product specification": [
      "Protein: 27% – 30% Min",
      "Moisture: Less than 12%",
      "Fiber: 2% – 5%",
      "Fat: 7%",
      "Appearance: Yellowish Granular form",
    ],
    application: [
      "Ruminant Feed",
      "Poultry Feed",
      "Swine Feed",
      "Aquaculture Feed",
      "Pet Food & Specialty Feeds",
    ],
  },
  {
    id: 15,
    name: "Rice DDGS",
    slug: "rice-ddgs",
    category: "Animal Feeds",
    image: "/assets/rice-ddgs.png",
    overview:
      "Protein-rich co-product from ethanol production using rice, ideal for cattle, poultry, swine, aquaculture, and pet feed due to its high digestibility and cost-efficiency.",
    description:
      "Rice Distillers Dried Grains with Solubles (Rice DDGS) is a co-product of ethanol production from rice starch fermentation. It provides a protein-rich, digestible feed material containing proteins, fats, fiber, and minerals. As a sustainable and economical alternative to traditional protein sources like soybean and fishmeal, Rice DDGS enhances feed efficiency and supports animal growth across species.",
    packaging: [
      {
        heading: "Packaging",
        description: "Packed in 50kg PP bags.",
      },
      {
        heading: "Storage",
        description:
          "Store in a dry, ventilated area away from heat and moisture.",
      },
    ],
    "product specification": [
      "Protein: 40% – 45% Min",
      "Moisture: Less than 12%",
      "Fiber: 2% – 5%",
      "Fat: 2% – 3%",
      "Appearance: Medium Brown Powder",
    ],
    application: [
      "Ruminant Feed",
      "Poultry Feed",
      "Swine Feed",
      "Aquaculture Feed",
      "Pet Food & Specialty Feeds",
    ],
  },
  {
    id: 16,
    name: "Formaldehyde",
    slug: "formaldehyde",
    category: "Methanol",
    image: "/assets/formaldehyde.png",
    overview:
      "Highly reactive and versatile chemical used in resins, plastics, textiles, and disinfectants. Supplied as a 37–50% aqueous solution.",
    description:
      "Formaldehyde is a reactive chemical widely used as an intermediate in producing resins, plastics, textiles, and disinfectants. Typically available as a 37–50% stabilized aqueous solution, it is known for its strong binding, preserving, and antimicrobial properties. Produced via methanol oxidation, it serves a wide range of high-volume industrial applications across chemical, construction, and healthcare industries.",
    packaging: [
      {
        heading: "Packaging",
        description:
          "Available in 200L HDPE drums, 1,000L IBC tanks, and bulk tanker loads.",
      },
      {
        heading: "Logistics",
        description:
          "Customizable logistics solutions for safe and efficient transport.",
      },
    ],
    "product specification": [
      "Grade: Industrial / Technical",
      "Concentration: 37–50% aqueous solution",
      "Appearance: Clear, colorless liquid with pungent odor",
      "Solubility: Fully miscible with water",
    ],
    application: [
      "Resins & Adhesives",
      "Plastics & Construction",
      "Textiles & Finishing Agents",
      "Disinfection & Preservation",
      "Chemical Manufacturing",
      "Wood & Furniture Industry",
      "Textile & Garment Processing",
      "Construction & Insulation",
      "Pharmaceutical & Medical Sectors",
    ],
  },
  {
    id: 17,
    name: "Methyl Methacrylate",
    slug: "methyl-methacrylate",
    category: "Methanol",
    image: "/assets/methyl-m.png",
    overview:
      "High-purity monomer used in acrylic plastics, adhesives, coatings, and specialty polymers. Known for its clarity, durability, and stability.",
    description:
      "Methyl Methacrylate (MMA) is a high-value monomer essential for producing PMMA (Polymethyl Methacrylate), acrylic sheets, coatings, adhesives, and specialty plastics. With excellent optical clarity, weatherability, and chemical resistance, it is widely used in automotive, construction, signage, and electronics industries. Sourced from certified manufacturers and supplied globally, UG Enterprises ensures consistent quality, secure packaging, and timely delivery for industrial use.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 200L steel drums, 1,000L IBC totes, and ISO tank containers.",
      },
      {
        heading: "Logistics",
        description:
          "Bulk export-ready packaging with technical documentation and international support.",
      },
    ],
    "product specification": [
      "Purity: ≥ 99.5%",
      "Appearance: Clear, colorless liquid",
      "Boiling Point: ~101°C",
      "Flash Point: ~10°C (Closed cup)",
      "Chemical Formula: C₅H₈O₂",
      "Solubility: Slightly soluble in water; miscible with organic solvents",
    ],
    application: [
      "Acrylic Plastics (PMMA)",
      "Adhesives & Sealants",
      "Paints & Coatings",
      "Construction Materials",
      "Automotive Components",
      "Signage & Display",
      "Electronics Industry",
    ],
  },
  {
    id: 18,
    name: "Methyl Tertiary Butyl Ether",
    slug: "methyl-tertiary-butyl-ether",
    category: "Methanol",
    image: "/assets/mtbe.png",
    overview:
      "High-octane fuel additive used to improve combustion efficiency and reduce engine knocking in gasoline blends.",
    description:
      "MTBE (Methyl Tertiary Butyl Ether) is a high-octane, oxygenated hydrocarbon used primarily as a fuel additive. It enhances gasoline performance by increasing oxygen content, improving combustion, and reducing engine knock. With a Research Octane Number (RON) of ~110, MTBE is favored in the fuel, petrochemical, and solvent industries for blending and refining. It is a clear, volatile liquid derived from methanol and is widely distributed in ISO tank containers for bulk supply.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in ISO tank containers with a standard capacity of 20–24 MT.",
      },
    ],
    "product specification": [
      "Purity: ≥ 99% (Refinery Grade)",
      "Appearance: Clear, colourless, and volatile liquid",
      "Boiling Point: ~55°C",
      "Flash Point: −28°C (Highly flammable)",
      "Chemical Formula: C₅H₁₂O",
      "Octane Number: ~110 RON",
      "Oxygen Content: Enhances combustion and reduces emissions",
    ],
    application: [
      "Fuel Blending & Refining",
      "Automotive Fuel Industry",
      "Petrochemical Processing",
      "Solvent Industry",
    ],
  },
  {
    id: 19,
    name: "Acetic Acid",
    slug: "acetic-acid",
    category: "Methanol",
    image: "/assets/acetic.png",
    overview:
      "Versatile industrial chemical used in chemical, textile, plastic, food, and cleaning industries, supplied in glacial form with ≥ 99.8% purity.",
    description:
      "Acetic Acid is a key industrial chemical with a wide range of applications, especially in its glacial (concentrated) form. Manufactured via methanol carbonylation, it is used extensively in chemical synthesis, textile production, polymer manufacturing, food processing, and industrial cleaning. With high reactivity, full miscibility with water and solvents, and sharp odor, it is available in industrial-grade bulk formats supported with full technical documentation.",
    packaging: [
      {
        heading: "Packaging Options",
        description:
          "Available in 30L HDPE jerrycans, 200L HDPE drums, 1,000L IBCs, and bulk tanker deliveries.",
      },
    ],
    "product specification": [
      "Purity: ≥ 99.8% (Glacial Grade)",
      "Appearance: Clear, colorless liquid",
      "Odor: Sharp, vinegar-like smell",
      "Boiling Point: 118°C",
      "Solubility: Fully miscible with water and most solvents",
      "Chemical Formula: CH₃COOH",
      "Grade: Industrial / Technical",
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
    id: 20,
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
    id: 21,
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
