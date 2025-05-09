import { useParams } from "react-router-dom";
import products from "@/data";

const PharmaceuticalsSection = () => {
  const { productslug } = useParams<{ productslug: string }>();
  const product = products.find((p) => p.slug === productslug);

  if (!product) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </section>
    );
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        {/* Product Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="max-w-md lg:max-w-xl mx-auto">
            <img
              src={`${product.image}`}
              alt={product.name}
              className="w-full h-auto rounded-xl shadow"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700 mb-4">{product.overview}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>

        {/* Pharmaceutical Categories */}
        {product.pharmaceuticalCategories && (
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Pharmaceutical Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.pharmaceuticalCategories.map((category) => (
                  <div
                    key={category.name}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-[#5D835D]">
                      {category.name}
                    </h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      {category.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Bordered Table */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Ingredient Breakdown Table
              </h2>

              <div className="overflow-x-auto border border-gray-300 rounded-md">
                <table className="min-w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#5D835D] text-white">
                      {product.pharmaceuticalCategories.map((category) => (
                        <th
                          key={category.name}
                          className="p-4 text-left border border-gray-300 font-semibold"
                        >
                          {category.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({
                      length: Math.max(
                        ...product.pharmaceuticalCategories.map(
                          (c) => c.ingredients.length
                        )
                      ),
                    }).map((_, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={
                          rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }
                      >
                        {product.pharmaceuticalCategories.map((category) => (
                          <td
                            key={`${category.name}-${rowIndex}`}
                            className="p-4 border border-gray-300"
                          >
                            {category.ingredients[rowIndex] || "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PharmaceuticalsSection;
