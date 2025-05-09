import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCard = () => {
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
      image: "/assets/methanol.png",
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
    // {
    //   title: "View Our Products",
    //   icon: "",
    //   description: "",
    //   image: "",
    //   isLink: true,
    //   category: "Coconut",
    // },
  ];

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <section>
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) =>
            !service.isLink ? (
              <Link
                to={`/product/subproductsection/${slugify(service.category)}`}
                key={index}
                className="h-[280px]"
              >
                <Card className="border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group h-full">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 bg-[#5D835D]/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <h3 className="text-2xl font-semibold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-white">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ) : (
              <Card
                key={index}
                className="border bg-[#5D835D] border-gray-100 hover:bg-[#4A694A] transition-all duration-300 h-[280px] flex items-center justify-center"
              >
                <Link
                  to="/products"
                  className="w-full h-full flex flex-col justify-center items-center p-6"
                >
                  <ArrowRight size={70} className="text-white mb-4" />
                  <h3 className="text-white text-[20px] md:text-[32px]">
                    {service.title}
                  </h3>
                </Link>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
