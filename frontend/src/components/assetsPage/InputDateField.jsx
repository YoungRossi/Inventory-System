
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

import "react-day-picker/style.css";

export function InputDateField({
  id,
  desc,
  label,
  required = false,
  value,
  onChange,
}) {
  const [selectedDate, setSelectedDate] = useState(value);

  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(date) {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  }

  return (
    <div className="relative flex w-full flex-col">
      <label
        htmlFor={id}
        className="text-[13px] font-medium -mb-1"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-14/15 h-8 items-center justify-between
                   rounded-md border border-gray-300 bg-white
                   px-3 py-2 text-xs text-gray-700
                   hover:bg-gray-50 focus:outline-none
                   focus:ring-2 focus:ring-blue-500"
      >
        <CalendarDays size={18} className="text-gray-400" />
        <span>
          {selectedDate
            ? format(selectedDate, "PPP")
            : "Select date"}
        </span>

        
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 z-50
                        rounded-lg border border-gray-200
                        bg-white p-3 shadow-lg">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            captionLayout="dropdown"
            startMonth={new Date(1990, 0)}
            endMonth={new Date(2050, 11)}
            styles={{
            root: { 
                fontSize: "12px" 
            },
            month_caption: {
                height: "20px",
                marginBottom: "1px",
            },
            button_previous: {
                width: "26px",
                height: "26px",
                padding: "4px",
            },
            button_next: {
                width: "26px",
                height: "26px",
                padding: "4px",
            },
            day: {
                width: "30px", 
                height: "30px" 
            },
            day_button: { 
                width: "30px", 
                height: "30px" 
            },
            month_caption: {
                height: "36px" 
            },
            weekday: { 
                fontSize: "9px" 
            },
             }}
          />
        </div>
      )}

      {desc && (
        <p className="text-[11px] italic text-gray-500">
          {desc}
        </p>
      )}
    </div>
  );
}
