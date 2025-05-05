import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-2 transition-all duration-300">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src="/assets/logo.jpg" className="w-48" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-[#68784C] hover:underline transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-[#68784C] hover:underline  transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about-us"
              className="text-foreground hover:text-[#68784C] hover:underline  transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="text-foreground hover:text-[#68784C] hover:underline  transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/faqs"
              className="text-foreground hover:text-[#68784C] hover:underline  transition-colors"
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-[#68784C] hover:underline  transition-colors"
            >
              Contact
            </Link>
          </div>
          <Link to="/">
            <img
              src="/assets/sharda-corp.png"
              className="w-16 hidden md:block"
            />
          </Link>

          {/* Mobile Menu Button */}
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
                className="text-foreground hover:text-[#68784C]  px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-foreground hover:text-[#68784C] px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/about-us"
                className="text-foreground hover:text-[#68784C] px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-foreground hover:text-[#68784C] px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/faqs"
                className="text-foreground hover:text-[#68784C] px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-[#68784C] px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
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
