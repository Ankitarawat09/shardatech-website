import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowBigRight,
  ArrowRightFromLine,
  ArrowRightIcon,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Coconut",
      icon: "🥥",
      description:
        "We offer a wide range of coconut kernel and coconut water-based products, rich in nutritional value and abundant in essential vitamins and minerals.",
      isLink: false,
    },
    {
      title: "Methanol",
      icon: "🧪",
      description:
        "Our methanol products are known for their versatility and high quality, making them ideal for applications in fuel, solvents, chemicals, and more.",
      isLink: false,
    },
    {
      title: "Pharmaceuticals",
      icon: "💊",
      description:
        "We offer a trusted portfolio of high-quality Active Pharmaceutical Ingredients (APIs) and cutting-edge Orally Disintegrating Strips (ODS), delivering innovative solutions to meet evolving healthcare needs.",
      isLink: false,
    },
    {
      title: "Herbal Medicines",
      icon: "🌿",
      description:
        "Harness the wisdom of nature with our powerful herbal remedies - crafted to restore balance, boost immunity, and support your journey to lasting wellness.",
      isLink: false,
    },
    {
      title: "Animal Feeds",
      icon: "🐄",
      description:
        "Bulk supply of Distillers Dried Grains with Solubles (DDGS) and Corn Gluten, offering premium protein and energy to optimize ruminant health and performance, while ensuring a sustainable and cost-effective feed solution.",
      isLink: false,
    },
    {
      title: "View Our Products",
      icon: "",
      description: "",
      isLink: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          From the Lap of Mother Nature
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) =>
            !service.isLink ? (
              <Card
                key={index}
                className="border border-gray-100 hover:border-skincare-pastel-green transition-all duration-300"
              >
                <CardContent className="md:p-8 p-2 text-center">
                  <div className="flex md:flex-col">
                    <div className="text-4xl mb-4 text-skincare-pastel-green">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold pt-2 pl-4 md:pl-0">
                      {service.title}
                    </h3>
                    <p className="hidden md:block text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card
                key={index}
                className="border bg-[#5D835D] border-gray-100 hover:border-skincare-pastel-green transition-all duration-300"
              >
                <Link to="/products">
                  <div className="flex flex-col justify-center items-center md:pt-16">
                    <ArrowRightIcon size={70} className="text-white" />
                    <h3 className="text-white text-[20px] md:text-[32px]">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
