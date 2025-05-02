import ProductDesc from "@/components/Productdes";
import Products from "@/components/Products";
import { Button } from "@/components/ui/button";

const ProductDescription = () => {
  return (
    <div className="py-16 bg-skincare-cream">
      <div className="container mx-auto px-6 md:px-10">
        <ProductDesc />
      </div>
    </div>
  );
};

export default ProductDescription;
