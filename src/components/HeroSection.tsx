
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] py-20 flex items-center justify-center relative overflow-hidden bg-white">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-100 to-white z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="w-full h-[80vh] bg-white/[0.96] relative overflow-hidden border-gray-200">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="black"
          />
          
          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600 leading-tight mb-6">
                Elevate Your Business<br />Beyond Limits
              </h1>
              <a
                href="#booking-calendar"
                className="bg-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors inline-block transform hover:-translate-y-1 duration-300 w-fit"
              >
                Get Started Today
              </a>
            </div>

            {/* Right content */}
            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
