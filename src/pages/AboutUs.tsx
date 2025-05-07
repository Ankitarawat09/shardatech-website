import Products from "@/components/HomeProduct";
import { Card, CardContent } from "@/components/ui/card";

type Value = {
  id: number;
  name: string;
  image: string;
  detail: string;
};

const AboutUs = () => {
  const Values: Value[] = [
    {
      id: 1,
      name: "Business Ethics",
      image: "assets/dummy.jpg",
      detail:
        "We believe in doing business the right way?” We are committed to upholding ethical standards in all our operations, and we continually strive to maintain our integrity in every business endeavor.",
    },
    {
      id: 2,
      name: "Business Ethics",
      image: "assets/dummy.jpg",
      detail:
        "We believe in doing business the right way?” We are committed to upholding ethical standards in all our operations, and we continually strive to maintain our integrity in every business endeavor.",
    },
    {
      id: 3,
      name: "Business Ethics",
      image: "assets/dummy.jpg",
      detail:
        "We believe in doing business the right way?” We are committed to upholding ethical standards in all our operations, and we continually strive to maintain our integrity in every business endeavor.",
    },
    {
      id: 4,
      name: "Business Ethics",
      image: "assets/dummy.jpg",
      detail:
        "We believe in doing business the right way?” We are committed to upholding ethical standards in all our operations, and we continually strive to maintain our integrity in every business endeavor.",
    },
  ];
  return (
    <div className="py-12 bg-skincare-cream">
      <div className="container mx-auto px-6 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          About Us
        </h1>
        <div className="max-w-8xl mx-auto bg-white md:p-8 pt-3 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 px-8 mb-4">
            {/* Left section with heading and paragraph */}
            <div className="flex flex-col flex-1">
              {/* Heading and image in flex row on small screens, stack on md+ */}
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold">
                  The Sharda Corporation
                </h2>
                <img
                  src="assets/sharda-corp.png"
                  alt="Our team"
                  className="w-16 h-16 md:w-[300px] md:h-[300px] rounded-lg md:hidden"
                />
              </div>

              {/* Paragraph - shown only on md and above */}
              <p className="mt-4 text-justify md:text-left md:text-[16px] text-[12px]">
                Led by CEO Mr. Prashant Gupta, a Nottingham Business School
                alumnus, The Sharda Corporation is a dynamic business
                conglomerate founded in 1996. With expertise spanning market
                research, strategy, and public relations, Mr. Gupta is
                recognized as a young leader in various industries. The Sharda
                Corporation encompasses over 10 companies across sectors such as
                education, IT, engineering, construction, healthcare, and
                biotechnology, with operations in India and Uzbekistan. Esteemed
                brands within the corporation include Sharda University, Sharda
                Care Healthcity, Sharda Tech, Sharda Hospital, Rishav Shelters
                Pvt Ltd, Sharda World School, and Nandal Finance & Leasing Pvt
                Ltd. Rooted in Indian values, the Corporation is dedicated to
                building multinational businesses worldwide.
              </p>
            </div>

            {/* Image shown only on md and above */}
            <img
              src="assets/sharda-corp.png"
              alt="Our team"
              className="hidden md:block md:w-[200px] md:h-[200px] rounded-lg"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16 px-8 py-9">
            {/* Left section with text */}
            {/* Image - shown only on desktop */}
            <img
              src="assets/Mini-logo.png"
              alt="Our team"
              className="hidden md:block w-[250px] h-[250px] rounded-lg"
            />
            <div className="flex flex-col flex-1">
              {/* Heading + image row on small screens */}
              <div className="flex items-center gap-16">
                <img
                  src="assets/Mini-logo.png"
                  alt="Our team"
                  className="w-16 h-16 rounded-lg md:hidden"
                />
                <h2 className="text-2xl font-semibold">UG Enterprises</h2>
              </div>

              {/* Paragraph - hidden on mobile */}
              <p className="mt-4 text-justify md:text-left md:text-[16px] text-[12px]">
                As a proud subsidiary of Sharda Corporation, UG Enterprises
                brings over a decade of expertise in the export and import of
                organic herbs, coconut products, fresh fruits, and oil seeds.
                Operating with the same commitment to excellence and ethical
                practices that defines Sharda Corporation, UG Enterprises
                provides seamless global trade solutions. From customs clearance
                to after-sales support, our dedicated team ensures efficient and
                worry-free service, helping businesses source premium-quality
                raw materials with confidence.
              </p>
            </div>
          </div>

          <hr className="md:w-[780px] w-[200px] h-1 mx-auto my-4 bg-skincare-pastel-green border-0 rounded-sm md:my-10 dark:bg-gray-700" />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
