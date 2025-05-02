import Products from "@/components/Products";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  return (
    <div className="py-16 bg-skincare-cream">
      <div className="container mx-auto px-6 md:px-10">
        <Products />
      </div>
    </div>
  );
};

export default ProductsPage;
