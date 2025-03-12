
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
    <div className="glass-card rounded-2xl p-6 mt-8">
      <div className="flex items-center mb-6">
        <CalendarIcon className="w-6 h-6 mr-2 text-violet" />
        <h3 className="text-xl font-semibold">Book an Appointment</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="text-white/80 mb-4">Select a date for your consultation:</p>
          <div className="bg-navy/30 p-4 rounded-lg">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
              className="bg-black/30 rounded-lg"
            />
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <label className="block text-white/80 mb-2">Your Name</label>
            <input
              type="text"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-violet border border-white/10 bg-navy/20"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-white/80 mb-2">Your Email</label>
            <input
              type="email"
              value={bookingEmail}
              onChange={(e) => setBookingEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-violet border border-white/10 bg-navy/20"
              placeholder="Enter your email"
            />
          </div>
          
          {date && (
            <div>
              <p className="text-white/80 mb-3">Available time slots for {format(date, "MMMM d, yyyy")}:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm flex items-center justify-center border",
                      timeSlot === time
                        ? "bg-violet text-white border-violet"
                        : "bg-navy/20 text-white/80 border-white/10 hover:bg-navy/40"
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
            className="w-full mt-4 bg-gradient-steel-violet hover:bg-gradient-steel-cyclamen text-white"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
