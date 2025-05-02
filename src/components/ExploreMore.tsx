import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

const ExploreMore = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Coconut Vinegar",
      slug: "coconut-vinegar",
      category: "Coconut",
      image: "/assets/coconut-vinegar.jpg", // ✅ Corrected path
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
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 hover:border-[#5D835D] rounded-lg shadow-sm transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative pt-[100%]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="font-semibold text-lg text-center mb-2">
                  {product.name}
                </h3>

                <Link
                  to={`/productdescription/${product.slug}`}
                  className="w-full"
                >
                  <Button className="w-full bg-[#5D835D] hover:bg-[#749274] text-white mt-2">
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
