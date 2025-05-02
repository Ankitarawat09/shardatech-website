import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Products from "@/components/Products";
import ExploreMore from "./ExploreMore";

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

const ProductDesc = () => {
  const { productslug } = useParams<{ productslug: string }>();
  const [activeTab, setActiveTab] = useState("Description");

  const products: Product[] = [
    {
      id: 1,
      name: "Coconut Vinegar",
      slug: "coconut-vinegar",
      category: "Coconut",
      image: "assets/coconut-vinegar.jpg",
      overview:
        "Our Coconut Vinegar, naturally fermented from coconut water, is a versatile preservative and flavoring agent rich in minerals and vitamins.",
      description:
        "UG Enterprises Coconut Vinegar is made from naturally fermented coconut water, delivering a rich, nutrient-dense flavoring and preservative option for food manufacturers. This vinegar is abundant in essential minerals like potassium, calcium, and magnesium, making it a healthier and more natural alternative to synthetic vinegar. Ideal for use in pickles, sauces, condiments, and marinades, Coconut Vinegar enhances the flavor and extends the shelf life of various food products.",
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

  const product = products.find((p) => p.slug === productslug);

  if (!product) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </section>
    );
  }

  const tabOptions = ["Description", "Features", "Sizing", "Sourcing"];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="max-w-md lg:max-w-xl mx-auto">
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="w-full h-auto rounded-xl shadow"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700">{product.overview}</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-2 flex-wrap">
            {tabOptions.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variant={activeTab === tab ? "default" : "outline"}
                className={`rounded-3xl px-6 hover:bg-[#749274] hover:text-white transition duration-300 ${
                  activeTab === tab
                    ? "bg-[#5D835D] text-white"
                    : "text-gray-700"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="">
            {activeTab === "Description" && (
              <div>
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}

            {activeTab === "Features" && (
              <div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "Sizing" && (
              <div className="space-y-4">
                {product.sizing.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg">{item.heading}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Sourcing" && (
              <div>
                <p className="text-gray-700">{product.sourcing}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="w-[780px] h-1 mx-auto my-4 bg-skincare-pastel-green border-0 rounded-sm md:my-10 dark:bg-gray-700" />

      {/* Products Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Explore More
        </h2>
        <ExploreMore />
      </div>
    </section>
  );
};

export default ProductDesc;
