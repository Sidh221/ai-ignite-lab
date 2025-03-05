
import { useState } from "react";
import { Bot, MicIcon, SendHorizonal, Sparkles, Loader2 } from "lucide-react";

const DemoSection = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI Voice assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);
    setIsLoading(true);
    setInput("");

    // Simulate AI response after delay
    setTimeout(() => {
      let response;
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("reservation") || lowerInput.includes("book")) {
        response = "I'd be happy to help with your reservation. What date and time would you prefer, and how many people will be in your party?";
      } else if (lowerInput.includes("menu") || lowerInput.includes("food")) {
        response = "Our menu features a variety of options. We have specialties including seafood pasta, wood-fired pizza, and our signature steak. Would you like me to tell you more about any specific dishes?";
      } else if (lowerInput.includes("hours") || lowerInput.includes("open")) {
        response = "We're open Monday to Friday from 11am to 10pm, and on weekends from 10am to 11pm. Is there a specific day you're planning to visit?";
      } else if (lowerInput.includes("location") || lowerInput.includes("address")) {
        response = "We're located at 123 Main Street, Downtown. We have convenient parking available across the street. Would you like directions?";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        response = "Hello! It's nice to meet you. I'm the AI assistant for The Grand Restaurant. How can I assist you today?";
      } else {
        response = "Thank you for your message. I'd be happy to help with that. Can you provide more details so I can assist you better?";
      }

      setMessages(prev => [...prev, { text: response, sender: "bot" }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="demo" className="py-20 relative">
      <div className="blob bg-cyclamen/20 top-0 right-0"></div>
      <div className="blob bg-steel/20 bottom-0 left-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-steel" />
            Interactive Demo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience Our
            <span className="text-gradient-steel-violet block mt-2">
              AI Voice Agent
            </span>
          </h2>
          <p className="text-white/80 mt-6">
            Try our demo below to see how our AI Voice agent handles restaurant inquiries.
            Ask about reservations, menu options, opening hours, or location.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="bg-gradient-steel-violet p-4 flex items-center">
              <Bot className="text-white mr-2" size={24} />
              <div>
                <h3 className="font-medium">Restaurant AI Assistant</h3>
                <p className="text-white/70 text-xs">Online & Ready to Help</p>
              </div>
            </div>
            
            <div className="h-[400px] p-4 overflow-y-auto flex flex-col space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`
                      max-w-[80%] p-3 rounded-2xl
                      ${message.sender === "user" 
                        ? "bg-gradient-steel-cyclamen rounded-tr-none text-white"
                        : "glass rounded-tl-none text-white/90"
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass max-w-[80%] p-3 rounded-2xl rounded-tl-none text-white/90">
                    <Loader2 className="animate-spin h-5 w-5" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent border border-white/20 rounded-lg p-2 focus:outline-none focus:border-violet text-white"
                  rows={1}
                />
                <button className="ml-2 p-2 rounded-full bg-gradient-steel-violet text-white">
                  <MicIcon size={20} />
                </button>
                <button 
                  className="ml-2 p-2 rounded-full bg-gradient-steel-violet text-white"
                  onClick={handleSend}
                >
                  <SendHorizonal size={20} />
                </button>
              </div>
              <p className="text-white/50 text-xs mt-2">
                Try asking about: reservations, menu, hours, or location
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
