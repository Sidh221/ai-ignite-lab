import { useState } from "react";
import { CalendarIcon, Clock, Users, Zap } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const TransformBusinessSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <section id="booking" className="py-32 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#8B5FBF]/20 to-[#C147E9]/20 rounded-full filter blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#00D4FF]/20 to-[#39FF14]/20 rounded-full filter blur-[120px] animate-float"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-40 left-10 w-6 h-6 border-2 border-[#00D4FF]/30 rotate-45 animate-geometric-spin"></div>
        <div className="absolute top-60 right-20 w-8 h-8 border border-[#39FF14]/40 animate-geometric-spin" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-[#C147E9]/50 animate-particle-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black leading-tight tracking-tight font-inter mb-8">
            <span className="gradient-text-animate">Transform Your Business</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            Ready to revolutionize your operations with AI? Book a personalized consultation and discover how NextSynnThai can automate your workflows and scale your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="glass-card card-float rounded-3xl p-8 border-2 border-[#00D4FF]/30 hover:border-[#00D4FF]/50 transition-all duration-500 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-inter">30-Minute Strategy Session</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Get personalized insights on how AI automation can streamline your specific business processes and boost efficiency by up to 300%.
              </p>
            </div>

            <div className="glass-card card-float rounded-3xl p-8 border-2 border-[#C147E9]/30 hover:border-[#C147E9]/50 transition-all duration-500 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-inter">Custom AI Solutions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Discover tailored automation strategies designed specifically for your industry, workflow, and growth objectives.
              </p>
            </div>

            <div className="glass-card card-float rounded-3xl p-8 border-2 border-[#39FF14]/30 hover:border-[#39FF14]/50 transition-all duration-500 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-inter">ROI Assessment</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Get a detailed analysis of potential cost savings and revenue increases from implementing our AI automation systems.
              </p>
            </div>
          </div>

          {/* Right side - Booking Calendar */}
          <div className="flex flex-col items-center">
            <div className="glass-card card-float rounded-3xl p-10 border-2 border-[#8B5FBF]/30 hover:border-[#8B5FBF]/50 transition-all duration-500 backdrop-blur-xl bg-gray-900/40 w-full max-w-md">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-white mb-4 font-inter">Book Your Call</h3>
                <p className="text-gray-300">Select a date for your personalized AI consultation</p>
              </div>

              <div className="space-y-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className={cn(
                        "w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-semibold rounded-xl px-6 py-4 hover:shadow-2xl hover:shadow-[#00D4FF]/60 transition-all duration-300 hover:-translate-y-1 text-base shadow-lg shadow-[#00D4FF]/30",
                        !selectedDate && "text-white"
                      )}
                    >
                      <CalendarIcon className="mr-3 h-5 w-5" />
                      {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : "Choose Your Date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-900/95 backdrop-blur-lg border border-[#8B5FBF]/40" align="center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className={cn("p-4 pointer-events-auto text-white")}
                    />
                  </PopoverContent>
                </Popover>

                {selectedDate && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="glass border-2 border-[#39FF14]/40 rounded-xl p-4">
                      <p className="text-sm text-gray-300 mb-2">Selected Date:</p>
                      <p className="text-lg font-semibold text-[#39FF14]">
                        {format(selectedDate, "EEEE, MMMM do, yyyy")}
                      </p>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] hover:opacity-90 font-bold text-white rounded-xl py-4 text-base hover:shadow-2xl hover:shadow-[#00D4FF]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#00D4FF]/30"
                      onClick={() => {
                        // Here you would typically integrate with a booking system
                        alert(`🚀 Consultation booked for ${format(selectedDate, "EEEE, MMMM do, yyyy")}!\n\nWe'll send you a confirmation email with the meeting details shortly.`);
                      }}
                    >
                      Confirm Your Consultation
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-8 text-center">
                <p className="text-xs text-gray-400">
                  Free consultation • No commitment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformBusinessSection;