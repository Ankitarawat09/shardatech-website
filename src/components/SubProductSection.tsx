import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import products from "@/data";
import HerbalTable from "./HerbalMedicineSection";

const categoryMap: Record<string, string> = {
  coconut: "Coconut",
  methanol: "Methanol",
  pharmaceuticals: "Pharmaceuticals",
  "animal-feeds": "Animal Feeds",
  "herbal-medicine": "Herbal Medicine",
};

const categorySlugs = Object.keys(categoryMap);

const SubProductSection = () => {
  const { productslug } = useParams();
  const [activeCategory, setActiveCategory] = useState("Coconut");

  useEffect(() => {
    if (productslug && categoryMap[productslug]) {
      setActiveCategory(categoryMap[productslug]);
    }
  }, [productslug]);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const getSlug = (category: string) =>
    category.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-6 md:px-10 md:py-6 ">
        <div className="flex pl-96 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {activeCategory} Products
            </h2>
            <p className="text-black-700 text-center max-w-3xl mx-auto mb-10">
              Discover our range of {activeCategory} products across industries.
            </p>
          </div>
          <Link to="/products">
            <Button
              variant="outline"
              className={`rounded-3xl md:ml-96 px-6 py-2 font-medium transition-all duration-300 bg-[#749274] text-white`}
            >
              Back
            </Button>
          </Link>
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center mb-10 gap-4">
          {Object.values(categoryMap).map((category) => {
            const isActive = activeCategory === category;
            return (
              <Link
                key={category}
                to={`/product/subproductsection/${getSlug(category)}`}
                className={`p-[1px] rounded-3xl transition-transform duration-300 ${
                  isActive
                    ? "border-2 border-[#5D835D] scale-110"
                    : "border border-transparent scale-100"
                }`}
              >
                <Button
                  variant="outline"
                  className={`rounded-3xl px-6 py-2 font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#5D835D] text-white"
                        : "text-gray-700 hover:bg-[#749274] hover:text-white"
                    }`}
                >
                  {category}
                </Button>
              </Link>
            );
          })}
        </div> */}

        {/* Product Grid or Herbal Table */}
        {activeCategory === "Herbal Medicine" ? (
          <HerbalTable />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border border-skincare-pastel-green hover:border-[#404D36] transform transition-transform duration-300 hover:scale-105 shadow-sm hover:shadow-lg p-4"
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
                    to={`/product/subproductsection/productdescription/${product?.slug}`}
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

export default SubProductSection;
