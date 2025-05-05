import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { label: "Years Of Experience", value: "10+" },
    { label: "Satisfied Customers", value: "200+" },
    { label: "Products", value: "50+" },
    { label: "Total Tons produced & exported", value: "10k+" },
  ];

  return (
    <section className="py-12 bg-[#68784C]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-none shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-skincare-pastel-brown mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
