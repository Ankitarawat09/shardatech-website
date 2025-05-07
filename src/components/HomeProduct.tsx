import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
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
  const products: Product[] = [
    {
      id: 1,
      name: "Business Ethics",
      slug: "business-ethics",
      category: "Values",
      image: "assets/business-ethics.jpg",
      overview:
        "We believe in doing business the right way. We are committed to upholding ethical standards in all our operations and strive to maintain integrity in every endeavor.",
      description:
        "We believe in doing business the right way. We are committed to upholding ethical standards in all our operations, and we continually strive to maintain our integrity in every business endeavor.",
      sizing: [],
      sourcing: "",
      features: [],
    },
    {
      id: 2,
      name: "Integrity",
      slug: "integrity",
      category: "Values",
      image: "assets/integrity.jpg",
      overview:
        "We conduct our business with fairness, honesty, and transparency, while maintaining a strong sense of purpose. Fairness is at the core of our actions.",
      description:
        "We conduct our business with fairness, honesty, transparency, and a strong sense of purpose. While we are fierce competitors, we always prioritize fairness in all our actions.",
      sizing: [],
      sourcing: "",
      features: [],
    },
    {
      id: 3,
      name: "Excellence",
      slug: "excellence",
      category: "Values",
      image: "assets/excellence.jpg",
      overview:
        "Dedicated to achieving the highest standards in our work and the quality of our products and services delivered globally.",
      description:
        "We are dedicated to achieving the highest standards in our daily work and in the quality of the products and services we deliver worldwide.",
      sizing: [],
      sourcing: "",
      features: [],
    },
    {
      id: 4,
      name: "Commitment",
      slug: "commitment",
      category: "Values",
      image: "assets/commitment.jpg",
      overview:
        "We seek and develop sustainable solutions that support societal well-being and advancement in every possible way.",
      description:
        "We are dedicated to continuously seeking and developing sustainable solutions that contribute to the well-being and advancement of society in every way possible.",
      sizing: [],
      sourcing: "",
      features: [],
    },
  ];

  return (
    <section className=" hidden md:block bg-white py-7">
      <div className="container mx-auto px-6 py-6 md:px-10 md:py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Core Values
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Learn about the values that drive our commitment to excellence and
          ethical business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col items-center text-center border border-skincare-pastel-green hover:border-[#404D36] transform transition-transform duration-300 hover:scale-105 shadow-sm hover:shadow-lg p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
              />
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-700">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
