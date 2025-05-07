import React from "react";
import HerbalPhotoSlider from "./HerbalPhotoSlider";

const herbalData = [
  {
    sr: 1,
    botanical: "Acorus calamus",
    common: "Vacha",
    uses: "Expectorant, Useful in Dysentery, Wounds & Hysteria",
  },
  {
    sr: 2,
    botanical: "Adhatoda vasica",
    common: "Vasaka, Ardushi",
    uses: "Expectorant, Respiratory support, Cough & Cold aid",
  },
  {
    sr: 3,
    botanical: "Aegle marmelos",
    common: "Bael",
    uses: "Cooling, Nutritive & Useful in Dysentery",
  },
  {
    sr: 4,
    botanical: "Allium sativum",
    common: "Garlic",
    uses: "Useful in Acid Dyspepsia, Infantile convulsions & Cholesterol reduction",
  },
  {
    sr: 5,
    botanical: "Aloe barbedensis",
    common: "Aloe",
    uses: "Anti-inflammatory, Antidysentric laxative, Excellent for Cosmetics",
  },
  {
    sr: 6,
    botanical: "Andrographis paniculata",
    common: "Kalmegh",
    uses: "Liver Support & Digestion",
  },
  {
    sr: 7,
    botanical: "Asparagus adscendens",
    common: "Safed Musli",
    uses: "Nutritive Tonic, Diarrhea, Dysentery",
  },
  {
    sr: 8,
    botanical: "Asparagus racemosus",
    common: "Shatavari",
    uses: "Adaptogen, Diarrhea, Dysentery",
  },
  {
    sr: 9,
    botanical: "Asphaltum Pure",
    common: "Shilajeet",
    uses: "Nutritive Tonic, Diarrhea, Dysentery, Diabetes, Nervous Disease",
  },
  {
    sr: 10,
    botanical: "Azadirachta indica",
    common: "Neem leaf",
    uses: "Antiseptic",
  },
  {
    sr: 11,
    botanical: "Bacopa monnieri",
    common: "Neera Brahmi",
    uses: "Boost memory and improve cognitive function",
  },
  {
    sr: 12,
    botanical: "Bergenia ligulata",
    common: "Pashan Bhed",
    uses: "Urinary Support",
  },
  {
    sr: 13,
    botanical: "Boerhavia diffusa",
    common: "Punemava",
    uses: "Liver Disorder, Heart Disease, Cough, Anemia",
  },
  {
    sr: 14,
    botanical: "Boswellia serrata",
    common: "Salai guggul, Sallaki",
    uses: "Anti-inflammatory, Arthritis",
  },
  {
    sr: 15,
    botanical: "Camellia sinensis",
    common: "Green Tea",
    uses: "Anti-Oxidant",
  },
  {
    sr: 16,
    botanical: "Cannabis sativa (Hemp)",
    common: "CBD oil",
    uses: "Relieve pain",
  },
  {
    sr: 17,
    botanical: "Celastrus paniculatus",
    common: "Malkangani",
    uses: "Nervine Tonic",
  },
  {
    sr: 18,
    botanical: "Gentelia asiatica",
    common: "Mandukapami, brahmi",
    uses: "Memory Support",
  },
  {
    sr: 19,
    botanical: "Cinnamomum zeylanicum",
    common: "Dalchini",
    uses: "Digestive",
  },
  {
    sr: 20,
    botanical: "Cissus quadrangularis",
    common: "Hadjora",
    uses: "Bones",
  },
  {
    sr: 21,
    botanical: "Coleus forskohlii",
    common: "Coleus",
    uses: "Cardiac Support",
  },
  {
    sr: 22,
    botanical: "Commiphora mukul",
    common: "Guggal",
    uses: "Healthy cholesterol",
  },
  {
    sr: 23,
    botanical: "Convolvulus pluriaulis",
    common: "Shankhpushpi",
    uses: "Brain Tonic",
  },
  {
    sr: 24,
    botanical: "Curcuma longa",
    common: "Haldi",
    uses: "Anti-Arthritis, Anti-Cancer, Anti-Oxidant, Antiseptic",
  },
  {
    sr: 25,
    botanical: "Cyperus rotundus",
    common: "Nagarmotha",
    uses: "Intestinal Disorder",
  },
  {
    sr: 26,
    botanical: "Eclipta alba",
    common: "Bhringraj",
    uses: "Liver, Gallbladder",
  },
  {
    sr: 27,
    botanical: "Embelia ribes",
    common: "Vai Vidang",
    uses: "Worms, Piles, Headache, Skin Disease",
  },
  {
    sr: 28,
    botanical: "Emblica officinalis",
    common: "Amla",
    uses: "Rejuvenating agent, Antioxidant",
  },
  {
    sr: 29,
    botanical: "Eugenia jambolana",
    common: "Jamun",
    uses: "Sugar Metabolism",
  },
  {
    sr: 30,
    botanical: "Glycyrrhiza glabra",
    common: "Mulethi",
    uses: "Sore Throats, Cough, Bronchial infection",
  },
  {
    sr: 31,
    botanical: "Gymnema sylvestre",
    common: "Gudmar",
    uses: "Healthy Blood Sugar",
  },
  {
    sr: 32,
    botanical: "Hemidesmus indicus",
    common: "Anantmool, Sariva",
    uses: "Urinary Support, Blood Purifier",
  },
  {
    sr: 33,
    botanical: "Holarrhena antidysenterica",
    common: "Indrajav, Kutaja",
    uses: "Dysentery, Diarrhea, Piles",
  },
  {
    sr: 34,
    botanical: "Inula racemosa",
    common: "Pushkar mool",
    uses: "Cardio protectant",
  },
  {
    sr: 35,
    botanical: "Mimosa pudica",
    common: "Lajwanti Alkaloids",
    uses: "Urinary Support",
  },
  {
    sr: 36,
    botanical: "Mitragyna speciosa",
    common: "Kratom",
    uses: "Energy booster, Pain reliever",
  },
  {
    sr: 37,
    botanical: "Mucuna pruriens",
    common: "Kaunch",
    uses: "Aphrodisiac, Sonic, Energy",
  },
  {
    sr: 38,
    botanical: "Ocimum sanctum",
    common: "Tulsi",
    uses: "Blood Sugar Support, Rejuvenating Agent",
  },
  {
    sr: 39,
    botanical: "Phylanthus niruri",
    common: "Bhui amla",
    uses: "Jaundice, Dysentery, Diabetes",
  },
  {
    sr: 40,
    botanical: "Picrorrhiza kurroa",
    common: "Kutki",
    uses: "Liver Support, Neurosis of the Stomach, Malaria",
  },
  {
    sr: 41,
    botanical: "Piper longum",
    common: "Pipali",
    uses: "Respiratory Support, Thermogenic, Paralysis, Tonic to Stomach",
  },
  {
    sr: 42,
    botanical: "Pterocarpus marsupium",
    common: "Vijaysar",
    uses: "Sugar Metabolism",
  },
  {
    sr: 43,
    botanical: "Pueraria tuberosa",
    common: "Vidari kand",
    uses: "Aphrodisiac",
  },
  {
    sr: 44,
    botanical: "Rauwolfia serpentina",
    common: "Sarpgandha",
    uses: "Calm into the Nervous System",
  },
  {
    sr: 45,
    botanical: "Rubia cordifolia",
    common: "Manjeetha",
    uses: "Blood Purifier",
  },
  {
    sr: 46,
    botanical: "Sapindus trifoliatus",
    common: "Ritha",
    uses: "Natural Detergent, Excellent for Cosmetics",
  },
  {
    sr: 47,
    botanical: "Solanum xanthocarpum",
    common: "Makoi",
    uses: "Digestive",
  },
  {
    sr: 48,
    botanical: "Tephrosia purpuria",
    common: "Sarapankha",
    uses: "Tonic & Laxative",
  },
  {
    sr: 49,
    botanical: "Terminalia arjuna",
    common: "Arjuna",
    uses: "Circulation Support, Heart Support",
  },
  {
    sr: 50,
    botanical: "Terminalia bellirica",
    common: "Baheda",
    uses: "Rejuvenating Agent, Cough, Sore, Piles",
  },
  {
    sr: 51,
    botanical: "Tinospora cordifolia",
    common: "Guduchi",
    uses: "Urinary Health Support",
  },
  {
    sr: 52,
    botanical: "Tribulus terrestris",
    common: "Gokhru",
    uses: "Sports Nutrition, Bloody Urine",
  },
  {
    sr: 53,
    botanical: "Trigonella foenum-graceum",
    common: "Mei",
    uses: "Blood Sugar Support, Cholesterol Management",
  },
  {
    sr: 54,
    botanical: "Triphla",
    common: "Amla+Harad+Baheda",
    uses: "Digestive Aid, Anti-ageing",
  },
  {
    sr: 55,
    botanical: "Vitex negundo",
    common: "Nirgundi",
    uses: "Diarrhea, Liver Disease, Skin Disease",
  },
  {
    sr: 56,
    botanical: "Withania somnifera",
    common: "Ashwagandha",
    uses: "Adaptogen, Loss of Memory, Nervous Exhaustion, Skin Disease, Cough, Asthma",
  },
  {
    sr: 57,
    botanical: "Zingiber officinale",
    common: "Ginger",
    uses: "Digestive Aid, Cough, Asthma, Throat",
  },
];

const HerbalTable = () => {
  return (
    <section className=" px-4 md:px-10 bg-white">
      <HerbalPhotoSlider />
      <p className=" text-black-600 mb-3">
        Harness the therapeutic power of nature with our premium herbal
        extracts, expertly formulated for businesses seeking quality,
        consistency, and scale. At UG Enterprises, we transform potent medicinal
        plants into high-performance extracts that meet the rigorous demands of
        global nutraceutical, cosmetic, food, and wellness industries. Whether
        you’re formulating health supplements, clean-label skincare, or
        functional foods, our extracts deliver pure, standardized active
        compounds—backed by modern science and trusted worldwide.
      </p>
      <h2 className="text-3xl font-bold mb-6 text-center text-[#5D835D]">
        Herbal Medicines
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-[#f0f0f0] text-gray-700">
            <tr>
              <th className="border px-4 py-2 text-left">Sr. No.</th>
              <th className="border px-4 py-2 text-left">Botanical Name</th>
              <th className="border px-4 py-2 text-left">Common Name</th>
              <th className="border px-4 py-2 text-left">Uses</th>
            </tr>
          </thead>
          <tbody>
            {herbalData.map(({ sr, botanical, common, uses }) => (
              <tr key={sr} className="even:bg-gray-50">
                <td className="border px-4 py-2">{sr}</td>
                <td className="border px-4 py-2">{botanical}</td>
                <td className="border px-4 py-2">{common}</td>
                <td className="border px-4 py-2">{uses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HerbalTable;
