import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-[#404D36]">
              About Us
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#68784C]">
              A Decade of Exporting Excellence
            </h3>
            <p className="text-gray-700 mb-2 text-justify">
              With over a decade of experience, UG Enterprises is a trusted
              leader in the manufacturing, sourcing, and export of high-quality
              coconut products, methanol, herbal medicines, pharmaceuticals, and
              animal feed like DDGS. Serving a wide range of clients—from local
              factories to global markets—we ensure a seamless and reliable
              supply of essential raw materials for the food industry.
            </p>
            <div className="flex justify-start">
              <Link to="/about-us">
                <Button className="bg-[#5D835D] text-white">Learn More</Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-skincare-light-green rounded-full absolute -z-10 w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="/assets/About.png"
              alt="Natural skincare ingredients"
              className="rounded-lg mx-auto relative z-10 w-[400px]  object-cover"
            />
          </div>
        </div>

        {/* <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Glow Naturally with Our <br />Coconut-Based Solutions
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our range of coconut products is crafted to deliver both nourishment and versatility — from cooking and wellness to skincare and beyond. Sustainably harvested and minimally processed, they bring the power of nature straight to your home or business.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default About;
