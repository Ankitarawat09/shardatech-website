import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Products from "@/components/Products";
import ExploreMore from "./ExploreMore";
import products from "@/data";

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

  const productsfinal = products;

  const product = productsfinal.find((p) => p.slug === productslug);

  if (!product) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </section>
    );
  }

  const tabOptions = ["Description", "Features", "Sizing", "Sourcing"];

  return (
    <section className="py-10 bg-white">
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
