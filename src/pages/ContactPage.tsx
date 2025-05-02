import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div>
      <div className=" py-10">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-black">
            Contact Us
          </h1>
          <p className="text-center text-black max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question about our
            products, need advice, or want to collaborate, our team is ready to
            assist you.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
