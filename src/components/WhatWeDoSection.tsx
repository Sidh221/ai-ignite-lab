const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What we do
            </h2>
            <p className="text-white/80 text-lg">
              Embrace the future of business with our cutting-edge AI solutions
            </p>
          </div>

          {/* AI Voice Solution */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                AI VOICE SOLUTION
              </h3>
              <div className="space-y-4">
                <div className="border border-white/30 rounded-full px-6 py-3">
                  <p className="text-white text-center">
                    Intelligent Customer Interaction
                  </p>
                </div>
                <div className="border border-white/30 rounded-full px-6 py-3">
                  <p className="text-white text-center">
                    24/7 Voice Support Systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Automation */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                AI AUTOMATION
              </h3>
              <div className="space-y-4">
                <div className="border border-white/30 rounded-full px-6 py-3">
                  <p className="text-white text-center">
                    Streamlined Business Processes
                  </p>
                </div>
                <div className="border border-white/30 rounded-full px-6 py-3">
                  <p className="text-white text-center">
                    Smart Workflow Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;