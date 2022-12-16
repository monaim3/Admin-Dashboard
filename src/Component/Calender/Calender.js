import React, { useState } from "react";

import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from "@fullcalendar/list";
const Calender = () => {
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
    
        if (title) {
          calendarApi.addEvent({
            id: `${selected.dateStr}-${title}`,
            title,
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay,
          });
        }
      };
    
      const handleEventClick = (selected) => {
        if (
          window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}'`
          )
        ) {
          selected.event.remove();
        }
      };
  return (
    <>
      <h3 className="text-2xl text-indigo-900 py-6">Calender</h3>
      <div className="grid grid-cols-4 gap-5">
        <div>
          <h2 className="text-xl font-semibold ">Events</h2>
          {
            currentEvents.map((events)=>  <div className="bg-indigo-900 p-4 mt-2 text-white">
             
            <h3>{events.title}</h3>
            <h2> {formatDate(events.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}</h2>
          </div>)
          }
        
          
       </div>
      <div className="col-span-3 h-75vh">
      <FullCalendar
        plugins={[dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin, ]}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
      />
      </div>
       
      </div>
    </>
  );
};

export default Calender;
