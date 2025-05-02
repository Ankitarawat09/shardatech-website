import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What products does UG Enterprises specialize in?",
      answer:
        "UG Enterprises specializes in coconut-based products, fresh fruits, oil seeds, and organic herbs. Our offerings include Coconut Water Concentrate, Virgin Coconut Oil, Coconut Milk, Desiccated Coconut, Herbal Medicines, APIs, and Orally Disintegrating Strips, among others.",
    },
    {
      question: "How long has UG Enterprises been in the food industry?",
      answer:
        "We have over 10 years of experience delivering high-quality coconut-based and agricultural products to domestic and international clients.",
    },
    {
      question: "Where are your products sourced from?",
      answer:
        "Our products come from carefully selected farms and suppliers known for producing high-quality coconuts and other agricultural goods.",
    },
    {
      question: "Can you handle large-volume orders?",
      answer:
        "Yes, we have the capacity to fulfill large bulk orders, such as 250 tons of Coconut Water Concentrate or 500 tons of Tender Coconut Water monthly, with flexible packaging options.",
    },
    {
      question:
        "Are your products available in different forms or packaging sizes?",
      answer:
        "Yes, our products are available in liquid, powder, and frozen forms with packaging options ranging from small packs to industrial sizes like 50 kg containers and 200 kg drums.",
    },
    {
      question: "Do your products contain preservatives?",
      answer:
        "Most of our coconut products are preservative-free, such as Virgin Coconut Oil and Frozen Coconut Water Concentrate. Options with preservatives are available for extended shelf life.",
    },
    {
      question: "Are your products suitable for organic and vegan products?",
      answer:
        "Yes, our coconut products are naturally plant-based and suitable for organic and vegan applications. Certification details are available upon request.",
    },
    {
      question: "Do your products meet international food safety standards?",
      answer:
        "Yes, all products comply with ISO, HACCP, and other international food safety regulations.",
    },
    {
      question: "Can you provide documentation and certifications?",
      answer:
        "Yes, we provide Certificates of Analysis, organic certifications, and other necessary documentation based on your requirements.",
    },
    {
      question: "What is your minimum order quantity?",
      answer:
        "The minimum order quantity typically ranges from 1 to 5 tons depending on the product. Contact us for specific details.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we deliver worldwide using reliable sea and air freight partners, and provide tracking once orders are dispatched.",
    },
    {
      question: "Do you offer private labeling or custom packaging?",
      answer:
        "Yes, we offer private labeling and custom packaging for businesses. Reach out to discuss customization options.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Please contact us via the 'Contact Us' page or email us at director@ugenterprises.com. Our team is ready to assist you.",
    },
  ];

  return (
    <div className="py-16 bg-skincare-cream">
      <div className="container mx-auto px-6 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Find answers to commonly asked questions about our products and
          services. If you can't find what you're looking for, please contact
          our customer support team.
        </p>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
