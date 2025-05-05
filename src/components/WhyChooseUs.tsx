import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      label: "Manufacturing excellence",
      description: "Innovative Production, Uncompromising Quality",
      image: "/assets/excellence.avif",
    },
    {
      label: "Reputed Brand Presence",
      description:
        "A Legacy of Trust and Excellence Across Our Group Companies",
      image: "/assets/Reputedbrand.avif",
    },
    {
      label: "Sourcing excellence",
      description:
        "We Source the Best from Trusted Origins to Deliver the Finest to the World",
      image: "/assets/sourcing.avif",
    },
    {
      label: "Global Connections",
      description:
        "Connecting You to a World of Possibilities Through Our Global Network",
      image: "/assets/Globalconnections.avif",
    },
    {
      label: "Streamlined Shipping",
      description:
        "Connecting You to a World of Possibilities Through Our Global Network",
      image: "/assets/Streamlinedshipping.avif",
    },
  ];

  return (
    <section className="py-12 bg-[#68784C]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
        Why UG Enterprises
      </h2>
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <Card className="overflow-hidden border border-gray-100 hover:border-skincare-pastel-green transition-all duration-300">
              <div className="relative pt-[100%]">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-3 px-6">
                <h3 className="font-semibold text-lg mb-2 ">{stat.label}</h3>
                <p className="text-[14px]">{stat.description}</p>
              </CardContent>
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
      </div>
    </section>
  );
};

export default Stats;
