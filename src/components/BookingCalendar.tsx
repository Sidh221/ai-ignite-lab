import * as React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");

  const handleBookAppointment = () => {
    if (!date || !timeSlot || !bookingName || !bookingEmail) {
      toast.error("Please fill out all fields");
      return;
    }

    toast.success("Appointment booked successfully!", {
      description: `${format(date, "MMMM d, yyyy")} at ${timeSlot}`
    });
    
    // Reset form
    setDate(undefined);
    setTimeSlot(null);
    setBookingName("");
    setBookingEmail("");
  };

  return (
    <div id="booking-calendar" className="bg-black rounded-2xl p-8 mt-8 border border-white/10">
      <div className="flex items-center mb-8">
        <CalendarIcon className="w-6 h-6 mr-3 text-white" />
        <h3 className="text-2xl font-bold text-white">Book an Appointment</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-white mb-6 text-lg">Select a date for your consultation:</p>
          <div className="bg-black/50 p-6 rounded-xl border border-white/10">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
              className="bg-black rounded-xl text-white p-3 pointer-events-auto"
            />
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <label className="block text-white mb-3 text-lg font-medium">Your Name</label>
            <input
              type="text"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white mb-3 text-lg font-medium">Your Email</label>
            <input
              type="email"
              value={bookingEmail}
              onChange={(e) => setBookingEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          {date && (
            <div>
              <p className="text-white mb-4 text-lg">Available time slots for {format(date, "MMMM d, yyyy")}:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm flex items-center justify-center border transition-all duration-200",
                      timeSlot === time
                        ? "bg-white text-black border-white font-medium"
                        : "bg-black/50 text-white border-white/20 hover:bg-white/10 hover:border-white/40"
                    )}
                    onClick={() => setTimeSlot(time)}
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleBookAppointment}
            disabled={!date || !timeSlot || !bookingName || !bookingEmail}
            className="w-full mt-6 bg-white text-black hover:bg-white/90 text-lg font-semibold py-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;