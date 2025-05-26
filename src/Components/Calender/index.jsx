import { useState } from 'react';
import Appointment from '../Appointments';

const Calender = () => {
  const [selectedPill, setSelectedPill] = useState({ date: null, timeIndex: null });

  const weekDays = [
    { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, times: ['08:00', '09:00', '11:00'], apply: true },
    { day: 'Wed', date: 27, times: ['12:00', '', '13:00'] },
    { day: 'Thurs', date: 28, times: ['11:00', '14:00', ''] },
    { day: 'Fri', date: 29, times: ['14:00', '', '16:00'] },
    { day: 'Sat', date: 30, times: ['12:00', '14:00', '16:00'] },
    { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'], isDimmed: true },
  ];


  return (
    <>
      <div className="calendar-container">
        <div className="calender-padding">
          <div className="calendar-header">
            <span>October 2021</span>
            <div className="arrows">
              <span>&lt;</span>
              <span>&gt;</span>
            </div>
          </div>

          <div className="calendar-grid">
            {weekDays.map((day, dayIdx) => (
              <div
                key={dayIdx}
                className={`calendar-day ${day.isDimmed ? 'dimmed' : ''} ${day.apply == true ? 'custom-bg' : ''}`}
              >
                <div className="day-label">{day.day}</div>
                <div className="day-date">{day.date}</div>
                <div className="day-times">
                  {day.times.map((time, timeIdx) =>
                    time ? (
                      <div
                        key={timeIdx}
                        className={`time-pill ${selectedPill.date === day.date && selectedPill.timeIndex === timeIdx
                          ? 'active-pill'
                          : ''
                          }`}
                        onClick={() =>
                          setSelectedPill({ date: day.date, timeIndex: timeIdx })
                        }
                      >
                        {time}
                      </div>
                    ) : (
                      <div key={timeIdx} className="time-dash">—</div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
      <div className="main-appointments">
        <Appointment selectedPill={selectedPill} weekDays={weekDays} />
      </div>

    </>
  )
}

export default Calender
