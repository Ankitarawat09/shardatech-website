
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Natural Skincare",
      excerpt: "Discover why natural ingredients are better for your skin and the environment.",
      image: "https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 15, 2025",
      category: "Skincare Tips"
    },
    {
      id: 2,
      title: "How to Build a Skincare Routine",
      excerpt: "Learn the essential steps for a morning and evening skincare routine.",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4ee07a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 10, 2025",
      category: "Guides"
    },
    {
      id: 3,
      title: "Understanding Skin Types",
      excerpt: "How to identify your skin type and choose the right products.",
      image: "https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 5, 2025",
      category: "Education"
    },
    {
      id: 4,
      title: "Seasonal Skincare Transitions",
      excerpt: "Adjust your skincare routine as the seasons change for optimal results.",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 28, 2025",
      category: "Seasonal Tips"
    },
    {
      id: 5,
      title: "Ingredients to Avoid in Skincare",
      excerpt: "Common ingredients that may be harmful to your skin in the long run.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 20, 2025",
      category: "Ingredients"
    },
    {
      id: 6,
      title: "The Science Behind Anti-Aging",
      excerpt: "Understanding the biological processes and how skincare can help.",
      image: "https://images.unsplash.com/photo-1571267011681-15736f25e86b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2025",
      category: "Science"
    }
  ];

  return (
    <div className="py-16 bg-skincare-cream">
      <div className="container mx-auto px-6 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Blog</h1>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Discover skincare tips, product insights, and expert advice to help you achieve your best skin.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-skincare-pastel-green text-sm font-medium">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="outline" className="text-skincare-pastel-green border-skincare-pastel-green hover:bg-skincare-pastel-green hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
