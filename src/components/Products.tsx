import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import products from "@/data";

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

  const product = products;

  const filteredProducts =
    activeCategory === "All"
      ? product
      : product.filter((product) => product.category === activeCategory);

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
