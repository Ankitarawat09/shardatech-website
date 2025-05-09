import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import products from "@/data";

// Utility to slugify category names
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const ExploreMore = () => {
  const { productslug } = useParams<{ productslug: string }>();

  const currentProduct = useMemo(() => {
    return products.find((product) => product.slug === productslug);
  }, [productslug]);

  const filteredProducts = useMemo(() => {
    if (!currentProduct || currentProduct.category === "Herbal Medicine")
      return [];

    return products
      .filter(
        (product) =>
          product.category === currentProduct.category &&
          product.slug !== productslug
      )
      .slice(0, 6); // only fetch up to 5
  }, [currentProduct, productslug]);

  if (!currentProduct || currentProduct.category === "Herbal Medicine")
    return null;

  const categorySlug = slugify(currentProduct.category);
  const showViewAll = filteredProducts.length === 6;
  const productsToShow = filteredProducts.slice(0, 5); // always show only first 4

  return (
    <section className="bg-white py-8 mt-12 border-t">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Explore More {currentProduct.category} Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {productsToShow.map((product) => (
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

        {showViewAll && (
          <div className="mt-10 text-center">
            <Link to={`/product/subproductsection/${categorySlug}`}>
              <Button className="bg-[#5D835D] hover:bg-[#749274]">
                View All {currentProduct.category} Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreMore;
