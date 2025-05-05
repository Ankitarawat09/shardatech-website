import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  overview: string;
  description: string;
  sizing: {
    heading: string;
    description: string;
  }[];
  sourcing: string;
  features: string[];
};
const Products = () => {
  const productCategories = [
    "All",
    "Coconut",
    "Methanol",
    "Pharmaceuticals",
    "Animal Feeds",
    "Herbal Medicine",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const products: Product[] = [
    {
      id: 1,
      name: "Coconut Vinegar",
      slug: "coconut-vinegar",
      category: "Coconut",
      image: "assets/coconut-vinegar.jpg",
      overview:
        "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins. Ideal for use in food production, it offers a natural alternative to synthetic vinegar.",
      description:
        "UG Enterprises Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar. Ideal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products. With its mild acidity and naturally derived nutrients, it is also well-suited for applications where quality and authenticity are essential. Available in bulk, our Coconut Vinegar supports efficient production processes for companies looking to elevate their offerings with a premium, natural ingredient.",
      sizing: [
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
      sourcing:
        "Our Coconut Vinegar is produced from high-quality coconut water, naturally fermented to retain nutrients and flavor. This product adheres to industrial standards, ensuring consistent quality for large-scale production.",
      features: [
        "Naturally fermented, rich in essential minerals and vitamins",
        "Serves as a natural preservative and flavoring agent",
        "Versatile for use in pickles, sauces, and other condiments",
        "A healthier alternative to synthetic vinegar, with mild acidity",
      ],
    },
    {
      id: 2,
      name: "Coconut Water",
      slug: "coconut-water",
      category: "Coconut",
      image: "assets/coconut-water.jpeg",
      overview:
        "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins. Ideal for use in food production, it offers a natural alternative to synthetic vinegar.",
      description:
        "UG Enterprises Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar. Ideal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products. With its mild acidity and naturally derived nutrients, it is also well-suited for applications where quality and authenticity are essential. Available in bulk, our Coconut Vinegar supports efficient production processes for companies looking to elevate their offerings with a premium, natural ingredient.",
      sizing: [
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
      sourcing:
        "Our Coconut Vinegar is produced from high-quality coconut water, naturally fermented to retain nutrients and flavor. This product adheres to industrial standards, ensuring consistent quality for large-scale production.",
      features: [
        "Naturally fermented, rich in essential minerals and vitamins",
        "Serves as a natural preservative and flavoring agent",
        "Versatile for use in pickles, sauces, and other condiments",
        "A healthier alternative to synthetic vinegar, with mild acidity",
      ],
    },
    {
      id: 3,
      name: "Coconut Oil",
      slug: "coconut-oil",
      category: "Coconut",
      image: "assets/coconut-oil.jpg",
      overview:
        "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins. Ideal for use in food production, it offers a natural alternative to synthetic vinegar.",
      description:
        "UG Enterprises Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar. Ideal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products. With its mild acidity and naturally derived nutrients, it is also well-suited for applications where quality and authenticity are essential. Available in bulk, our Coconut Vinegar supports efficient production processes for companies looking to elevate their offerings with a premium, natural ingredient.",
      sizing: [
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
      sourcing:
        "Our Coconut Vinegar is produced from high-quality coconut water, naturally fermented to retain nutrients and flavor. This product adheres to industrial standards, ensuring consistent quality for large-scale production.",
      features: [
        "Naturally fermented, rich in essential minerals and vitamins",
        "Serves as a natural preservative and flavoring agent",
        "Versatile for use in pickles, sauces, and other condiments",
        "A healthier alternative to synthetic vinegar, with mild acidity",
      ],
    },
    {
      id: 4,
      name: "Coconut Virgin Oil",
      slug: "coconut-veroil",
      category: "Coconut",
      image: "assets/virgin-c-oil.png",
      overview:
        "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins. Ideal for use in food production, it offers a natural alternative to synthetic vinegar.",
      description:
        "UG Enterprises Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar. Ideal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products. With its mild acidity and naturally derived nutrients, it is also well-suited for applications where quality and authenticity are essential. Available in bulk, our Coconut Vinegar supports efficient production processes for companies looking to elevate their offerings with a premium, natural ingredient.",
      sizing: [
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
      sourcing:
        "Our Coconut Vinegar is produced from high-quality coconut water, naturally fermented to retain nutrients and flavor. This product adheres to industrial standards, ensuring consistent quality for large-scale production.",
      features: [
        "Naturally fermented, rich in essential minerals and vitamins",
        "Serves as a natural preservative and flavoring agent",
        "Versatile for use in pickles, sauces, and other condiments",
        "A healthier alternative to synthetic vinegar, with mild acidity",
      ],
    },
    {
      id: 5,
      name: "Desiccated Coconut",
      slug: "desiccated-coconut",
      category: "Coconut",
      image: "assets/dessicated-coconut.jpeg",
      overview:
        "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins. Ideal for use in food production, it offers a natural alternative to synthetic vinegar.",
      description:
        "UG Enterprises Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar. Ideal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products. With its mild acidity and naturally derived nutrients, it is also well-suited for applications where quality and authenticity are essential. Available in bulk, our Coconut Vinegar supports efficient production processes for companies looking to elevate their offerings with a premium, natural ingredient.",
      sizing: [
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
      sourcing:
        "Our Coconut Vinegar is produced from high-quality coconut water, naturally fermented to retain nutrients and flavor. This product adheres to industrial standards, ensuring consistent quality for large-scale production.",
      features: [
        "Naturally fermented, rich in essential minerals and vitamins",
        "Serves as a natural preservative and flavoring agent",
        "Versatile for use in pickles, sauces, and other condiments",
        "A healthier alternative to synthetic vinegar, with mild acidity",
      ],
    },
    {
      id: 6,
      name: "Coconut Milk",
      slug: "coconut-milk",
      category: "Coconut",
      image: "assets/coconut-milk.jpg",
      overview:
        "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins. Ideal for use in food production, it offers a natural alternative to synthetic vinegar.",
      description:
        "UG Enterprises Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar. Ideal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products. With its mild acidity and naturally derived nutrients, it is also well-suited for applications where quality and authenticity are essential. Available in bulk, our Coconut Vinegar supports efficient production processes for companies looking to elevate their offerings with a premium, natural ingredient.",
      sizing: [
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
      sourcing:
        "Our Coconut Vinegar is produced from high-quality coconut water, naturally fermented to retain nutrients and flavor. This product adheres to industrial standards, ensuring consistent quality for large-scale production.",
      features: [
        "Naturally fermented, rich in essential minerals and vitamins",
        "Serves as a natural preservative and flavoring agent",
        "Versatile for use in pickles, sauces, and other condiments",
        "A healthier alternative to synthetic vinegar, with mild acidity",
      ],
    },
    {
      id: 7,
      name: "Corn Gluten Meal",
      slug: "corn-gluten-meal",
      category: "Animal Feeds",
      image: "assets/corn-gluten.png",
      overview:
        "High-protein, energy-dense feed ingredient from corn wet milling, ideal for ruminant, poultry, swine, aquaculture, and pet diets.",
      description:
        "Corn Gluten Meal (CGM) is a high-protein, energy-rich by-product from wet milling of corn, containing 60–65% crude protein. Rich in methionine, cysteine, and xanthophylls, it supports muscle development, feather growth, and pigmentation. Low in fiber and starch, CGM enhances feed palatability, nutrient density, and animal performance across livestock and aquaculture.",
      sizing: [
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
      sourcing:
        "Derived during wet milling of corn in advanced facilities. Processed to ensure consistent protein concentration and feed safety.",
      features: [
        "60–65% crude protein",
        "Rich in sulfur amino acids",
        "Supports yolk pigmentation and growth",
        "Highly digestible and palatable",
        "Low in fiber and starch",
      ],
    },
    {
      id: 8,
      name: "Corn DDGS",
      slug: "corn-ddgs",
      category: "Animal Feeds",
      image: "assets/corn-ddgs.png",
      overview:
        "Protein-rich co-product from ethanol production, used in ruminant, poultry, swine, aquaculture, and pet food.",
      description:
        "Corn Distillers Dried Grains with Solubles (DDGS) is a nutrient-dense by-product of ethanol production from corn. Rich in protein, energy, fats, fiber, and yeast-derived micronutrients, it offers high levels of bypass and digestible intake protein. Widely used in sustainable animal feed, DDGS improves growth, performance, and feed efficiency.",
      sizing: [
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
      sourcing:
        "Produced from fermented corn post-ethanol distillation using controlled drying processes to retain nutritional content.",
      features: [
        "27–30% protein",
        "High in digestible and bypass protein",
        "Yeast-enriched for added nutrients",
        "Energy-dense and cost-effective",
        "Widely accepted in sustainable feed programs",
      ],
    },
    {
      id: 9,
      name: "Rice DDGS",
      slug: "rice-ddgs",
      category: "Animal Feeds",
      image: "assets/dummy.jpg",
      overview:
        "High-protein co-product from rice ethanol production, ideal for cattle, poultry, swine, aquaculture, and pet feed.",
      description:
        "Rice DDGS is a protein-rich, digestible feed derived from the ethanol production process from rice. It contains essential nutrients including fats, fiber, and minerals. With a protein content of 40–45%, it's an efficient and sustainable alternative to traditional protein sources in animal diets.",
      sizing: [
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
      sourcing:
        "Derived as a by-product from rice fermentation in ethanol distilleries. Carefully processed to ensure protein concentration and feed hygiene.",
      features: [
        "40–45% protein",
        "Highly digestible",
        "Alternative to soybean/fishmeal",
        "Economical and sustainable",
        "Suited for multiple animal species",
      ],
    },
    {
      id: 10,
      name: "Formaldehyde",
      slug: "formaldehyde",
      category: "Methanol",
      image: "assets/Formaldehyde.png",
      overview:
        "Highly versatile and reactive chemical used as a key intermediate in resins, plastics, textiles, and disinfectants.",
      description:
        "Formaldehyde is a reactive chemical produced via oxidation of methanol, supplied as a stabilized aqueous solution (37–50%). Valued for its strong binding, preserving, and antimicrobial properties, it is widely used in resins, plastics, textiles, construction chemicals, and disinfectants.",
      sizing: [
        {
          heading: "Grade & Concentration",
          description:
            "Industrial / Technical grade, 37–50% aqueous solution (customizable).",
        },
        {
          heading: "Packaging Options",
          description:
            "200L HDPE drums, 1,000L IBC tanks, or bulk tanker loads.",
        },
      ],
      sourcing:
        "Produced through catalytic oxidation of methanol under controlled conditions, ensuring high purity and consistency.",
      features: [
        "Industrial / Technical grade",
        "37–50% concentration",
        "Clear, colorless liquid with pungent odor",
        "Fully miscible with water",
        "Strong binding and antimicrobial properties",
      ],
    },
    {
      id: 11,
      name: "Methyl Methacrylate",
      slug: "methyl-methacrylate",
      category: "Methanol",
      image: "assets/Methyl-methacrylate.png",
      overview:
        "High-value monomer for production of acrylic plastics, coatings, adhesives, and specialty polymers.",
      description:
        "Methyl Methacrylate (MMA) is a clear, colorless liquid monomer known for excellent optical clarity, weather resistance, and chemical stability. It is the key raw material for Polymethyl Methacrylate (PMMA) production and is used across automotive, construction, paints & coatings, signage, and electronics industries.",
      sizing: [
        {
          heading: "Physical Properties",
          description: "Boiling point ~101°C; flash point ~10°C (closed cup).",
        },
        {
          heading: "Packaging Options",
          description:
            "200L steel drums, 1,000L IBC totes, ISO tank containers.",
        },
      ],
      sourcing:
        "Sourced from certified manufacturers and supplied via a robust global logistics network, ensuring ≥99.5% purity.",
      features: [
        "Purity ≥99.5%",
        "Excellent optical clarity",
        "Weather and chemical resistance",
        "Key monomer for PMMA production",
        "Versatile for coatings, adhesives, and polymers",
      ],
    },
    {
      id: 12,
      name: "Methyl Tertiary Butyl Ether (MTBE)",
      slug: "methyl-tertiary-butyl-ether",
      category: "Methanol",
      image: "assets/MTBE.png",
      overview:
        "High-octane oxygenated fuel additive to improve gasoline combustion efficiency and reduce engine knocking.",
      description:
        "MTBE is a clear, volatile ether produced from methanol, prized for its blending properties in gasoline. It increases oxygen content, boosts octane number (~110 RON), and helps refineries meet emission and performance standards.",
      sizing: [
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
      sourcing:
        "Manufactured via etherification of methanol in petrochemical facilities, adhering to refinery-grade specifications (≥99% purity).",
      features: [
        "Purity ≥99% (Refinery Grade)",
        "High octane (~110 RON)",
        "Oxygenated for cleaner combustion",
        "Clear, volatile liquid",
        "Reduces engine knocking and emissions",
      ],
    },
    {
      id: 13,
      name: "Acetic Acid",
      slug: "acetic-acid",
      category: "Methanol",
      image: "assets/Acetic-acid.png",
      overview:
        "Versatile industrial chemical used across chemical, textile, plastic, food, and cleaning industries.",
      description:
        "Acetic Acid (glacial grade) is produced via carbonylation of methanol. In its concentrated form (≥99.8%), it serves as a core raw material for chemical manufacturing, textiles, polymers, food processing, and industrial cleaning.",
      sizing: [
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
      sourcing:
        "Manufactured through methanol carbonylation processes in large-scale plants; all shipments include TDS, COA, and SDS documentation.",
      features: [
        "Purity ≥99.8% (Glacial Grade)",
        "Sharp, vinegar-like odor",
        "Fully miscible with water and most organic solvents",
        "Essential intermediate for diverse industries",
        "Comes with comprehensive technical documentation",
      ],
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className=" hidden md:block bg-white">
      <div className="container mx-auto px-6 py-6 md:px-10 md:py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Products
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Discover our range of premium products aimed to bring the wellness of
          nature to your doorstep.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-10 gap-4">
          {productCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-3xl px-6  hover:bg-[#749274] hover:text-white transition duration-300 ${
                activeCategory === category
                  ? "bg-[#5D835D] text-white"
                  : "text-gray-700 "
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border border-gray-100 hover:border-skincare-pastel-green transition-all duration-300"
            >
              <div className="relative pt-[100%]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-3 px-6">
                <div className="flex justify-between items-center mb-2">
                  {/* <span className="text-sm text-gray-500">{product.category}</span> */}
                  <div className="flex items-center">
                    {/* <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg> */}
                    {/* <span className="text-sm ml-1">{product.rating}</span> */}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">
                  {product.name}
                </h3>
                {/* <p className="text-skincare-pastel-brown font-bold">${product.price}</p> */}
              </CardContent>
              <CardFooter className="px-6 pt-0">
                <Link
                  to={`/productdescription/${product?.slug}`}
                  className="w-full"
                >
                  <Button className="w-full bg-[#5D835D] hover:bg-[#749274]">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
