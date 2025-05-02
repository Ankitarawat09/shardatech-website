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
          <div>
            <h3 className="text-4xl font-semibold mb-8 text-center">
              Our values
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-8 gap-4 md:h-[480px] px-2 md:px-0 pb-4">
              {Values.map((value) => (
                <Card
                  key={value.id}
                  className="overflow-hidden border border-gray-100 hover:border-skincare-pastel-green transition-all duration-300"
                >
                  <div className="hidden md:block relative pt-[100%]">
                    <img
                      src={value.image}
                      alt={value.name}
                      className="absolute top-0 left-0 w-full h-full px-5 pt-5 object-cover rounded-2xl"
                    />
                  </div>
                  <CardContent className="py-3 px-6">
                    <div className="flex justify-between items-center mb-2">
                      {/* <span className="text-sm text-gray-500">{value.category}</span> */}
                      <div className="flex items-center">
                        {/* <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg> */}
                        {/* <span className="text-sm ml-1">{value.rating}</span> */}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-center">
                      {value.name}
                    </h3>
                    <p className="md:text-[14px] text-[12px">${value.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
