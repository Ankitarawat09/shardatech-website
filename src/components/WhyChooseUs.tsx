import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    "Manufacturing excellence",
    "Reputed Brand Presence",
    "Sourcing excellence",
    "Global Connections",
    "Streamlined Shipping",
  ];

  return (
    <section className="py-16 bg-skincare-cream">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="bg-skincare-pastel-green rounded-full absolute -z-10 w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="hidden md:block">
              <img
                src="assets/dummy.jpg"
                alt="Natural skincare ingredients"
                className="rounded-lg shadow-lg mx-auto relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose Us
            </h2>

            <Card className="border-none shadow-lg bg-white mb-8">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  With over a decade of industry experience, we have established
                  ourselves as a trusted name in the global trade of organic
                  herbs, premium coconut products, fresh fruits, and
                  high-quality oil seeds. Our long-standing commitment to
                  quality, sustainability, and customer satisfaction sets us
                  apart in a competitive market.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-skincare-pastel-green rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
