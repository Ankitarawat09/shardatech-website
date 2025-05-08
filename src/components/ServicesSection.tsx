import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesCard from "./Services";
const Services = () => {
  const services = [
    {
      title: "Coconut",

      description:
        "We offer a wide range of coconut kernel and coconut water-based products, rich in nutritional value and abundant in essential vitamins and minerals.",
      image: "/assets/coconut.jpg",
      isLink: false,
      category: "Coconut",
    },
    {
      title: "Methanol",

      description:
        "Our methanol products are known for their versatility and high quality, making them ideal for applications in fuel, solvents, chemicals, and more.",
      image: "/assets/MTBE.png",
      isLink: false,
      category: "Methanol",
    },
    {
      title: "Pharmaceuticals",

      description:
        "We offer a trusted portfolio of high-quality Active Pharmaceutical Ingredients (APIs) and cutting-edge Orally Disintegrating Strips (ODS), delivering innovative solutions to meet evolving healthcare needs.",
      image: "/assets/pharma.jpg",
      isLink: false,
      category: "Pharmaceuticals",
    },
    {
      title: "Herbal Medicines",

      description:
        "Harness the wisdom of nature with our powerful herbal remedies - crafted to restore balance, boost immunity, and support your journey to lasting wellness.",
      image: "/assets/herbal.png",
      isLink: false,
      category: "Herbal Medicine",
    },
    {
      title: "Animal Feeds",
      description:
        "Bulk supply of Distillers Dried Grains with Solubles (DDGS) and Corn Gluten, offering premium protein and energy to optimize ruminant health and performance, while ensuring a sustainable and cost-effective feed solution.",
      image: "/assets/animal-feeds.png",
      isLink: false,
      category: "Animal Feeds",
    },
    {
      title: "View Our Products",
      icon: "",
      description: "",
      image: "",
      isLink: true,
      category: "Coconut",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Integrated Solutions across Industries.
        </h2>
        <ServicesCard />
      </div>
    </section>
  );
};

export default Services;
