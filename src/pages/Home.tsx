import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";

import Contact from "@/components/Contact";
import Products from "@/components/HomeProduct";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Products />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
