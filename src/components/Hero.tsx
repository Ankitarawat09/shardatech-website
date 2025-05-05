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
    title: "Nature's Gift,",
    highlightText: "Perfectly Packaged.",
    description:
      "Discover the pure essence of coconut with our premium organic products, sustainably harvested and crafted with care.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    bgColor: "bg-skincare-cream",
  },
  {
    title: "Pure Coconut Oil,",
    highlightText: "Superior Quality.",
    description:
      "Our cold-pressed coconut oil preserves all the natural nutrients and aroma that makes our products stand out from the rest.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    bgColor: "bg-skincare-cream",
  },
  {
    title: "Sustainably Sourced,",
    highlightText: "Ethically Produced.",
    description:
      "We work directly with local farmers to ensure fair wages and environmentally friendly harvesting practices.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    bgColor: "bg-skincare-cream",
  },
  {
    title: "From Farm to Home,",
    highlightText: "With Love.",
    description:
      "Every product is handled with care from harvest to packaging, ensuring the highest quality reaches your doorstep.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    bgColor: "bg-skincare-cream",
  },
  {
    title: "Coconut",
    highlightText: "For Healthy Living.",
    description:
      "We offer a wide range of coconut kernel and coconut water-based products, rich in nutritional value and abundant in essential vitamins and minerals.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
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
    }, 6000);

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
            <img
              src={slideContents[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full max-w-[480px] h-auto object-cover rounded-lg shadow-lg z-10 relative hidden md:block transition-opacity duration-500 ease-in-out"
            />
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
