import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

// Import products from central file
import products from "@/data"; // assuming all products are stored here

const ExploreMore = () => {
  const { productslug } = useParams<{ productslug: string }>();

  const currentProduct = useMemo(() => {
    return products.find((p) => p.slug === productslug);
  }, [productslug]);

  const similarProducts = useMemo(() => {
    if (!currentProduct) return [];
    if (currentProduct.category === "Herbal Medicine") return [];

    return products
      .filter(
        (p) => p.category === currentProduct.category && p.slug !== productslug
      )
      .slice(0, 4);
  }, [currentProduct, productslug]);

  if (!currentProduct || currentProduct.category === "Herbal Medicine")
    return null;

  return (
    <section className="bg-white py-8 mt-12 border-t">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Explore More {currentProduct.category} Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative pt-[100%]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-md text-center mb-2">
                  {product.name}
                </h3>
                <Link
                  to={`/product/subproductsection/productdescription/${product.slug}`}
                >
                  <Button className="w-full bg-[#5D835D] hover:bg-[#749274] mt-2">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
