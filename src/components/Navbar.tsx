import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const productCategories = [
  { name: "Coconut", slug: "coconut" },
  { name: "Methanol", slug: "methanol" },
  { name: "Pharmaceuticals", slug: "pharmaceuticals" },
  { name: "Herbal Medicines", slug: "herbal-medicine" },
  { name: "Animal Feeds", slug: "animal-feeds" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-2 transition-all duration-300">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeAllMenus}>
            <img src="/assets/logo.jpg" className="w-48" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-[#68784C] hover:underline transition-colors"
              onClick={closeAllMenus}
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <div className="pb-4 -mb-4">
                <Link
                  to="/products"
                  className="text-foreground hover:text-[#68784C] hover:underline transition-colors"
                  onClick={closeAllMenus}
                >
                  Products
                </Link>
              </div>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute left-0 pt-2">
                  <div className="flex flex-col bg-white shadow-lg rounded-md z-50 min-w-[200px]">
                    {productCategories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/product/subproductsection/${category.slug}`}
                        className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#68784C] whitespace-nowrap"
                        onClick={closeAllMenus}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about-us"
              className="text-foreground hover:text-[#68784C] hover:underline transition-colors"
              onClick={closeAllMenus}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="text-foreground hover:text-[#68784C] hover:underline transition-colors"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            <Link
              to="/faqs"
              className="text-foreground hover:text-[#68784C] hover:underline transition-colors"
              onClick={closeAllMenus}
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-[#68784C] hover:underline transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Sharda Corp Logo */}
          <Link to="https://shardacorporation.net/" onClick={closeAllMenus}>
            <img
              src="/assets/sharda-corp.png"
              className="w-16 hidden md:block"
              alt="Sharda Corp"
            />
          </Link>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-[#68784C] px-4 py-2 rounded transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>

              <details className="group">
                <summary className="cursor-pointer text-foreground hover:text-[#68784C] px-4 py-2 transition-colors">
                  Products
                </summary>
                <div className="pl-6 mt-2 flex flex-col space-y-1">
                  {productCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/product/subproductsection/${category.slug}`}
                      className="text-sm text-foreground px-2 py-1 hover:text-[#68784C]"
                      onClick={closeAllMenus}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                to="/about-us"
                className="text-foreground hover:text-[#68784C] px-4 py-2"
                onClick={closeAllMenus}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-foreground hover:text-[#68784C] px-4 py-2"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/faqs"
                className="text-foreground hover:text-[#68784C] px-4 py-2"
                onClick={closeAllMenus}
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-[#68784C] px-4 py-2"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
