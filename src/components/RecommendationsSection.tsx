
const RecommendationsSection = () => {
  return (
    <section className="py-16 bg-dark-light/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Future <span className="text-gradient">Enhancements</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              AI Chatbot Integration
            </h3>
            <p className="text-gray-400">
              Coming soon: An intelligent chatbot powered by advanced language models to
              provide 24/7 customer support, answer queries, and guide users through
              your services.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Secure Backend Infrastructure
            </h3>
            <p className="text-gray-400">
              Future update: Robust backend integration with Supabase for secure user
              authentication, real-time data synchronization, and seamless payment
              processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
