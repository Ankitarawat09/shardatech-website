import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-skincare-cream py-10 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-[#404D36]">
              Nature's Gift,
              <br />
              <span className="text-[#68784C] ">Perfectly Packaged</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Discover the pure essence of coconut with our premium organic
              products, sustainably harvested and crafted with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-5">
              <Link to="/products">
                <Button className="bg-[#5D835D] text-white">
                  Explore Products
                </Button>
              </Link>
              <Link to="/about-us">
                <Button variant="outline" className="text-[5D835D]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          {/* <div className="relative">
            <img 
              src="/public/lovable-uploads/6dc98c8a-973b-4488-8a1d-088f632bbdbb.png" 
              alt="Skincare Products" 
              className="w-full h-auto object-contain z-10 relative"
            />
           
            <div className="absolute -top-10 -right-20 w-40 h-40 opacity-50">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#9BCC93" d="M41.3,-66.4C54.4,-58.8,66.7,-49.5,73,-36.6C79.3,-23.8,79.6,-7.4,76.2,7.4C72.7,22.1,65.5,35.4,56.3,47.1C47.1,58.9,35.8,69.1,22.1,75.2C8.5,81.3,-7.5,83.2,-21.7,78.5C-36,73.8,-48.6,62.4,-58.9,49.4C-69.2,36.5,-77.4,22,-80.4,5.9C-83.5,-10.3,-81.5,-28,-71.8,-39.3C-62.1,-50.6,-44.8,-55.5,-30.3,-62.5C-15.9,-69.5,-4,-78.7,7.9,-79.6C19.8,-80.6,28.2,-74.1,41.3,-66.4Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div> */}
        </div>

        <div className="flex items-center gap-4 pt-6">
          <div className="flex -space-x-2">
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Customer"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Customer"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Customer"
            />
          </div>
          <p className="text-[16px] text-gray-600">
            <span className="font-semibold ">500+ happy customers</span> trust
            our products
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
