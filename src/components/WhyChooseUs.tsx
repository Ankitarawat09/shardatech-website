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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        Why UG Enterprises
      </h2>
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 mb-3">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{stat.label}</h3>
              <p className="text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
