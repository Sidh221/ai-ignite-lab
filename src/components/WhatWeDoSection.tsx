const WhatWeDoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left content */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              What we do
            </h2>
            <p className="text-blue-100 text-xl leading-relaxed">
              Embrace the future of business with our cutting-edge AI solutions that transform customer interactions and automate complex workflows.
            </p>
          </div>

          {/* AI Voice Solution */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-lg rounded-3xl p-10 h-full border border-blue-500/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-10 text-center tracking-wide">
                AI VOICE SOLUTION
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-700/50 border border-blue-400/30 rounded-2xl px-8 py-5 backdrop-blur-sm hover:bg-slate-600/50 transition-all duration-200">
                  <p className="text-white text-center text-lg font-medium">
                    Intelligent Customer Interaction
                  </p>
                </div>
                <div className="bg-slate-700/50 border border-blue-400/30 rounded-2xl px-8 py-5 backdrop-blur-sm hover:bg-slate-600/50 transition-all duration-200">
                  <p className="text-white text-center text-lg font-medium">
                    24/7 Voice Support Systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Automation */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-lg rounded-3xl p-10 h-full border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-10 text-center tracking-wide">
                AI AUTOMATION
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-700/50 border border-purple-400/30 rounded-2xl px-8 py-5 backdrop-blur-sm hover:bg-slate-600/50 transition-all duration-200">
                  <p className="text-white text-center text-lg font-medium">
                    Streamlined Business Processes
                  </p>
                </div>
                <div className="bg-slate-700/50 border border-purple-400/30 rounded-2xl px-8 py-5 backdrop-blur-sm hover:bg-slate-600/50 transition-all duration-200">
                  <p className="text-white text-center text-lg font-medium">
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