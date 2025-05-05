import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the slide content type
interface SlideContent {
  title: string;
  highlightText: string;
  description: string;
  image: string;
  bgColor: string;
}

// Slide content data
const slideContents: SlideContent[] = [
  {
    title: "Coconut",
    highlightText: "Products.",
    description:
      "We offer a wide range of coconut kernel and coconut water-based products, rich in nutritional value and abundant in essential vitamins and minerals.",
    image: "/assets/coconuts.png",
    bgColor: "bg-skincare-cream",
  },
  {
    title: "Animal Feeds,",
    highlightText: "Superior Quality.",
    description:
      "Bulk supply of Distillers Dried Grains with Solubles (DDGS) and Corn Gluten, offering premium protein and energy to optimize ruminant health and performance, while ensuring a sustainable and cost-effective feed solution.",
    image: "/assets/animal-feeds.png",
    bgColor: "bg-skincare-cream",
  },
  {
    title: "Herbal",
    highlightText: "Medicines.",
    description:
      "Harness the wisdom of nature with our powerful herbal remedies - crafted to restore balance, boost immunity, and support your journey to lasting wellness.",
    image: "/assets/herbal.png",
    bgColor: "bg-skincare-cream",
  },
  {
    title: "Pharmaceutical,",
    highlightText: "Supplies.",
    description:
      "We offer a trusted portfolio of high-quality Active Pharmaceutical Ingredients (APIs) and cutting-edge Orally Disintegrating Strips (ODS), delivering innovative solutions to meet evolving healthcare needs.",
    image: "/assets/pharma.png",
    bgColor: "bg-skincare-cream",
  },
  {
    title: "Methanol",
    highlightText: "Derivatives.",
    description:
      "Our methanol products are known for their versatility and high quality, making them ideal for applications in fuel, solvents, chemicals, and more.",
    image: "/assets/Acetic-acid.png",
    bgColor: "bg-skincare-cream",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slideContents.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === slideContents.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 200);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === 0 ? slideContents.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 200);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <section
      className={`py-2 md:py-5 relative overflow-hidden lg:h-[550px] md:max-h-[500px] transition-colors duration-500 ${slideContents[currentSlide].bgColor}`}
    >
      <div className="container mx-auto px-6 md:px-10 h-full">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          {/* Content Side */}
          <div className="z-10 transition-opacity duration-500 ease-in-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-[#404D36]">
              {slideContents[currentSlide].title}
              <br />
              <span className="text-[#68784C]">
                {slideContents[currentSlide].highlightText}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              {slideContents[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-5">
              <Link to="/products">
                <Button className="bg-[#5D835D] hover:bg-[#4A694A] text-white">
                  Explore Products
                </Button>
              </Link>
              <Link to="/about-us">
                <Button
                  variant="outline"
                  className="text-[#5D835D] border-[#5D835D]"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-full flex items-center justify-center">
            {slideContents.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`w-full max-w-[480px] h-[300px] object-cover rounded-lg shadow-lg z-10 absolute 
        transition-all duration-700 ease-in-out
        ${
          index === currentSlide
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        } 
        ${index === currentSlide ? "block" : "hidden"} md:block`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-20">
        {/* Dots */}
        <div className="flex gap-2">
          {slideContents.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "bg-[#5D835D] w-6"
                  : "bg-gray-400 hover:bg-gray-600"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="rounded-full border-[#5D835D] text-[#5D835D] hover:bg-[#5D835D] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full border-[#5D835D] text-[#5D835D] hover:bg-[#5D835D] hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
