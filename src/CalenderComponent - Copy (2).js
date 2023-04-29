import React, { useState } from "react";
import "./css/Calendar.css";

function CalendarComponent({ startingMonth, endingMonth }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, startingMonth - 1, 1));

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const daysInMonth = monthEnd.getDate();
  const firstDayOfMonth = monthStart.getDay();

  const daysArray = [];
  for (let j = 1; j <= daysInMonth; j++) {
    daysArray.push(j);
  }

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const isCurrentDate = (date) => {
    const today = new Date();
    return (
      today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    );
  };

  const isSelectableDate = (date) => {
    const today = new Date();
    return date >= today;
  };

  const isWithinRange = (date) => {
    const startMonth = new Date(2023, startingMonth - 1, 1);
    const endMonth = new Date(2023, endingMonth, 0);
    return date >= startMonth && date <= endMonth;
  };

  const moveMonth = (direction) => {
    if (direction === "prev") {
      const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
      if (isWithinRange(prevMonth)) {
        setCurrentMonth(prevMonth);
      }
    } else if (direction === "next") {
      const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      if (isWithinRange(nextMonth)) {
        setCurrentMonth(nextMonth);
      }
    }
  };


return (
  <div className="calendar">
    <div className="calendar-header">
      <button onClick={() => moveMonth("prev")}>&lt;</button>
      <h1>
        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
      </h1>
      <button onClick={() => moveMonth("next")}>&gt;</button>
    </div>
    <table>
      <tbody>
        <tr>
          {daysArray.map((day, index) => (
            <td key={day}>
              <div className="day-container">
                <div className="day-header">{days[(index + firstDayOfMonth) % 7]}</div>
                <div
                  className={
                    selectedDate &&
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === currentMonth.getMonth() &&
                    selectedDate.getFullYear() === currentMonth.getFullYear()
                      ? "selected-date"
                      : isCurrentDate(
                          new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                        )
                      ? "current-date"
                      : isSelectableDate(
                          new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                        )
                      ? "selectable-date"
                      : "unselectable-date"
                  }
                  onClick={() =>
                    selectDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
                  }
                >
                  {day}
                </div>
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
    <p>Selected Date: {selectedDate?.toLocaleDateString()}</p>
  </div>
);
}
export default CalendarComponent;