
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { toast } from "sonner";

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleBookMeeting = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select both date and time");
      return;
    }
    
    toast.success("Meeting scheduled successfully!", {
      description: `Your meeting is scheduled for ${format(selectedDate, 'MMMM do, yyyy')} at ${selectedTime}`
    });
  };

  return (
    <section className="py-16 bg-dark glass">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Book a <span className="text-gradient">Free Consultation</span>
        </h2>
        <div className="max-w-4xl mx-auto glass p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Select a Date</h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => 
                  date < new Date() || 
                  date > addDays(new Date(), 30)
                }
                className="glass rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Select a Time</h3>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      selectedTime === time
                        ? "bg-primary text-white"
                        : "glass-card"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <button
                onClick={handleBookMeeting}
                className="w-full mt-8 bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-lg transition-all duration-300"
              >
                Book Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
