
import { ArrowRight, Calendar, Clock, Sparkles, User } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Customer Service: AI Voice Agents",
    excerpt: "Explore how AI voice technology is revolutionizing customer service across industries, providing 24/7 support and personalized experiences.",
    author: "Dr. Sarah Chen",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Technology",
    gradient: "from-steel to-violet"
  },
  {
    title: "How Restaurants Are Leveraging AI to Boost Revenue",
    excerpt: "Discover how leading restaurants are implementing AI voice agents to handle reservations, takeout orders, and customer inquiries efficiently.",
    author: "Michael Rodriguez",
    date: "June 3, 2023",
    readTime: "6 min read",
    category: "Restaurant",
    gradient: "from-cyclamen to-steel"
  },
  {
    title: "AI in Healthcare: Improving Patient Experience",
    excerpt: "Learn how medical facilities are using AI voice agents to streamline appointments, provide information, and offer better patient support.",
    author: "Dr. James Wilson",
    date: "April 22, 2023",
    readTime: "10 min read",
    category: "Healthcare",
    gradient: "from-violet to-cyclamen"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-cyclamen" />
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI Industry
            <span className="text-gradient-steel-cyclamen block mt-2">
              Insights & Trends
            </span>
          </h2>
          <p className="text-white/80 mt-6">
            Stay updated with the latest AI technology trends, implementation strategies, 
            and success stories in our blog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${post.gradient}`}></div>
              <div className="p-6 flex flex-col h-full">
                <div className="mb-3 flex items-center">
                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white`}>
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-white/70 mb-4 text-sm flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center text-white/60 text-xs mb-4">
                  <User size={14} className="mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <a href="#" className="inline-flex items-center text-white hover:text-cyclamen transition-colors text-sm mt-auto">
                  Read Article 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-outline inline-flex items-center">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
