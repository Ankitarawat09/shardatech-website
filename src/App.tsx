import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ProductDescription from "./pages/ProductDescription";
import ScrollToTop from "./scrollToTop";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SubProductSection from "./components/SubProductSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/productdescription/:productslug"
              element={<ProductDescription />}
            />
            <Route
              path="/product/subproductsection/:productslug"
              element={<SubProductSection />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
