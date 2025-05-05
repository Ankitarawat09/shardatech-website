import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      name: "Coconut Vinegar",
      slug: "coconut-vinegar",
      category: "Coconut",
      image: "assets/coconut-vinegar.jpg",
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
    {
      id: 2,
      name: "Coconut Water",
      slug: "coconut-water",
      category: "Coconut",
      image: "assets/coconut-water.jpeg",
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
    {
      id: 3,
      name: "Coconut Oil",
      slug: "coconut-oil",
      category: "Coconut",
      image: "assets/coconut-oil.jpg",
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
    {
      id: 4,
      name: "Coconut Virgin Oil",
      slug: "coconut-veroil",
      category: "Coconut",
      image: "assets/virgin-c-oil.png",
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
    {
      id: 5,
      name: "Desiccated Coconut",
      slug: "desiccated-coconut",
      category: "Coconut",
      image: "assets/dessicated-coconut.jpeg",
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
    <section className=" hidden md:block bg-white">
      <div className="container mx-auto px-6 py-6 md:px-10 md:py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Products
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Discover our range of premium products aimed to bring the wellness of
          nature to your doorstep.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border border-skincare-pastel-green hover:border-[#404D36]"
            >
              <Link
                to={`/productdescription/${product?.slug}`}
                className="w-full"
              >
                <div className="relative pt-[100%]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="py-3 px-6">
                  <div className="flex justify-between items-center mb-2"></div>
                  <h3 className="font-semibold text-lg mb-2 text-center">
                    {product.name}
                  </h3>
                </CardContent>
              </Link>
              {/* <CardFooter className="px-6 pt-0">
                <Link
                  to={`/productdescription/${product?.slug}`}
                  className="w-full"
                >
                  <Button className="w-full bg-[#5D835D] hover:bg-[#749274]">
                    Read More
                  </Button>
                </Link>
              </CardFooter> */}
            </Card>
          ))}
        </div>
        <Link to="/products">
          <div className="flex justify-center items-center mt-5 w-full ">
            <Button className="w-full max-w-xs bg-[#68784C]">View All</Button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Products;
