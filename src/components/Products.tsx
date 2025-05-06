import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import products from "@/data";
import HerbalTable from "./HerbalMedicineSection";

// Optional separate section for Pharmaceuticals
const PharmaceuticalsSection = () => (
  <div className="text-center text-lg font-semibold text-gray-600">
    Pharmaceutical product details will be available soon.
  </div>
);

const Products = () => {
  const productCategories = [
    "Coconut",
    "Methanol",
    "Pharmaceuticals",
    "Animal Feeds",
    "Herbal Medicine",
  ];
  const [activeCategory, setActiveCategory] = useState("Coconut");

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section className="hidden md:block bg-white">
      <div className="container mx-auto px-6 py-6 md:px-10 md:py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Products
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Discover our range of premium products across industries.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-10 gap-4">
          {productCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-3xl px-6 hover:bg-[#749274] hover:text-white transition duration-300 ${
                activeCategory === category
                  ? "bg-[#5D835D] text-white"
                  : "text-gray-700"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid or Pharmaceuticals Section */}
        {activeCategory === "Herbal Medicine" ? (
          <HerbalTable />
        ) : (
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
                  <h3 className="font-semibold text-lg mb-2 text-center">
                    {product.name}
                  </h3>
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
        )}
      </div>
    </section>
  );
};

export default Products;
