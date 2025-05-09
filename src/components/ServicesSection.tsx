import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesCard from "./Services";
const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          End-to-End Industry Solutions: From Sourcing to Global Delivery
        </h2>
        <ServicesCard />
      </div>
    </section>
  );
};

export default Services;
