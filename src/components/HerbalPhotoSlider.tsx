import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

const slides: SlideImage[] = [
  {
    id: 1,
    url: "/assets/h1.png",
    alt: "Brahmi",
    caption: "Brahmi",
  },
  {
    id: 2,
    url: "/assets/h2.png",
    alt: "Ashwagandha",
    caption: "Ashwagandha",
  },
  {
    id: 3,
    url: "/assets/h3.png",
    alt: "Boswellia serrata",
    caption: "Boswellia serrata",
  },
  {
    id: 4,
    url: "/assets/h4.png",
    alt: "Kratom Extracts",
    caption: "Kratom Extracts",
  },
  {
    id: 5,
    url: "/assets/h5.png",
    alt: "Ginger",
    caption: "Ginger",
  },
  {
    id: 6,
    url: "/assets/h6.png",
    alt: "Amla",
    caption: "Amla",
  },
];

const HerbalPhotoSlider: React.FC = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselApiRef = useRef(null);

  const totalSlides = Math.ceil(slides.length / 3);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isAutoPlaying && carouselApiRef.current) {
      interval = setInterval(() => {
        carouselApiRef.current.scrollNext();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    carouselApiRef.current?.scrollTo(index);
  };

  return (
    <section className="relative w-full mb-3 overflow-hidden bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#5D835D]">
        Featured Herbs
      </h2>

      <div
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-screen-xl mx-auto"
          setApi={(api) => {
            carouselApiRef.current = api;
            if (api) {
              api.scrollTo(activeIndex);
              api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
            }
          }}
        >
          <CarouselContent>
            {Array.from({ length: totalSlides }).map((_, groupIndex) => (
              <CarouselItem
                key={groupIndex}
                className="basis-full md:basis-full lg:basis-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                  {[0, 1, 2].map((offset) => {
                    const slideIndex = groupIndex * 3 + offset;
                    const slide = slides[slideIndex];
                    return slide ? (
                      <div
                        key={slide.id}
                        className="overflow-hidden rounded-lg shadow-md h-full"
                      >
                        <div className="relative h-[200px] overflow-hidden">
                          <img
                            src={slide.url}
                            alt={slide.alt}
                            className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20" />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-medium text-lg">
                              {slide.caption}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>

          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-herb-green-light w-5"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HerbalPhotoSlider;
