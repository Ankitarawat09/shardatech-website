import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "General Information",
    items: [
      {
        question: "What products does UG Enterprises specialize in?",
        answer: `UG Enterprises specializes in the manufacturing, sourcing, and export of high-quality products, including:
• Coconut Products: coconut water concentrate,desiccated coconut,coconut cream,coconut milk powder, coconut oil.
• Methanol and Methanol products
• Herbal Medicines
• Pharmaceuticals
• Animal Feed`,
      },
      {
        question:
          "How long has UG Enterprises been involved in the export business?",
        answer:
          "We have over 10 years of experience in manufacturing and exporting coconut products, ethanol, herbal medicines, pharmaceuticals, and animal feed.",
      },
      {
        question: "Where are UG Enterprises' products sourced from?",
        answer:
          "Our products are sourced from carefully selected farms and suppliers in regions known for high-quality agricultural produce.",
      },
      {
        question: "What industries does UG Enterprises serve?",
        answer:
          "Industries include food & beverage, cosmetics, personal care, chemical manufacturing, and health supplements.",
      },
      {
        question: "Is UG Enterprises able to handle large-volume orders?",
        answer:
          "Yes, we are fully equipped with robust production and supply chain capabilities to handle bulk requirements with flexible packaging.",
      },
    ],
  },
  {
    category: "Quality Assurance and Certifications",
    items: [
      {
        question: "What quality control measures do you have in place?",
        answer:
          "We conduct regular testing and analysis at various production stages to ensure international quality standards.",
      },
      {
        question: "How do you ensure consistent quality?",
        answer:
          "We maintain strong supplier relationships and implement strict quality control from sourcing through processing.",
      },
      {
        question: "Can you provide documentation or certificates?",
        answer:
          "Yes, we provide COAs, product specs, compliance certificates, and other documentation upon request.",
      },
    ],
  },
  {
    category: "Order and Shipping",
    items: [
      {
        question: "What is the minimum order quantity for bulk purchases?",
        answer:
          "The MOQ varies but typically requires a full container load (FCL). Contact us for tailored solutions.",
      },
      {
        question: "What are the lead times for fulfillment?",
        answer:
          "Typically 3 to 6 weeks, depending on availability, size, and custom requirements.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we ship worldwide through trusted logistics partners ensuring timely delivery.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, tracking details will be provided once your shipment is dispatched.",
      },
      {
        question: "What shipping methods do you use and what are the costs?",
        answer:
          "We offer sea and air freight. Costs vary based on location, method, and order volume.",
      },
    ],
  },
  {
    category: "Pricing and Payment",
    items: [
      {
        question: "How can I obtain pricing information?",
        answer:
          "Please contact us via the 'Contact Us' page for a tailored quote.",
      },
      {
        question: "Do you offer volume discounts?",
        answer:
          "Yes, we offer volume discounts based on size, frequency, and agreement terms.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept TT, LC, and other secure methods. Terms are discussed per order.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Typically, advance payment is required with the remaining balance on shipment or delivery.",
      },
      {
        question: "Are there additional fees for export documentation?",
        answer:
          "Standard export docs are covered. Extra fees may apply for special documents or country-specific needs.",
      },
    ],
  },
  {
    category: "Sustainable sourcing",
    items: [
      {
        question: "Do you practice sustainable sourcing?",
        answer:
          "Yes, we work with eco-conscious suppliers for sustainable coconut products, medicines, and animal feed.",
      },
      {
        question: "How do you reduce environmental impact?",
        answer:
          "We use eco-friendly packaging, energy-efficient processes, and aim to reduce our shipping carbon footprint.",
      },
    ],
  },
  {
    category: "Customer Support",
    items: [
      {
        question: "How can I contact your customer support team?",
        answer:
          "Reach us via the Contact Us page or email: director@ugenterprises.com.",
      },
      {
        question: "What after-sales services do you offer?",
        answer:
          "We assist with logistics, documentation, and resolve quality or delivery issues.",
      },
      {
        question: "How can I resolve order/product issues?",
        answer:
          "Contact us immediately. We’re committed to resolving issues quickly and effectively.",
      },
      {
        question: "Do you offer product samples?",
        answer:
          "Yes, samples are available on request before placing a bulk order.",
      },
      {
        question: "Can you assist with customs documentation?",
        answer:
          "Yes, we provide full support for export documentation and customs clearance.",
      },
    ],
  },
  {
    category: "Partnerships and Collaborations",
    items: [
      {
        question: "Do you offer private labeling or custom packaging?",
        answer:
          "Yes, we support branding and packaging customization. Contact us for details.",
      },
      {
        question: "Can UG Enterprises help with product development?",
        answer:
          "Yes, we're open to R&D partnerships and custom formulation projects.",
      },
      {
        question: "Are you open to strategic business partnerships?",
        answer:
          "Absolutely. We welcome collaborations with aligned businesses.",
      },
    ],
  },
];

const FAQs = () => {
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

        <div className="space-y-8 max-w-3xl mx-auto">
          {faqData.map((section, i) => (
            <Accordion
              type="single"
              collapsible
              key={i}
              className="bg-white rounded-lg shadow-md"
            >
              <AccordionItem
                value={`section-${i}`}
                className="border border-gray-200 rounded-md overflow-hidden transition-colors"
              >
                <AccordionTrigger className="text-left text-xl font-semibold p-4 transition-colors data-[state=open]:bg-skincare-light-green">
                  {section.category}
                </AccordionTrigger>

                <AccordionContent className="space-y-6 text-gray-800 px-4 pb-4 pt-2">
                  {section.items.map((faq, index) => (
                    <div key={index}>
                      <p className="font-semibold">{faq.question}</p>
                      <p className="whitespace-pre-line">{faq.answer}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
