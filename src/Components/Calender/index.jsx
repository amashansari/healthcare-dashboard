import { useState } from 'react';
import TeethIcon from '../../assets/Icon/tooth-icon.svg'

const Calender = () => {
  const [selectedPill, setSelectedPill] = useState({ date: null, timeIndex: null });

  const weekDays = [
    { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, times: ['08:00', '09:00', '11:00'] },
    { day: 'Wed', date: 27, times: ['12:00', '', '13:00'] },
    { day: 'Thurs', date: 28, times: ['11:00', '14:00', ''] },
    { day: 'Fri', date: 29, times: ['14:00', '', '16:00'] },
    { day: 'Sat', date: 30, times: ['12:00', '14:00', '16:00'] },
    { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'], isDimmed: true },
  ];
  const selectedDate = 26;


  const appointments = [
    {
      title: 'Dentist',
      icon: <img src={TeethIcon} alt="Dentist Icon" />,
      time: '09:00',
      endTime: '10:30',
      doctor: 'Dr.Cameron Williams',
      date: 26,
      size: 'small'
    },
    {
      title: 'Physiotherapy Appointment',
      icon: <span role="img">💪</span>,
      time: '11:00',
      endTime: '12:00',
      doctor: 'Dr.Kevin Djones',
      date: 26,
      size: 'big'
    },
    {
      title: 'Health Checkup Complete',
      icon: <span role="img">💉</span>,
      time: '11:00',
      endTime: '',
      doctor: '',
      date: 28,
      size: 'big'
    },
    {
      title: 'Opthalmologist',
      icon: <span role="img">👁️</span>,
      time: '14:00',
      endTime: '',
      doctor: '',
      date: 28,
      size: 'small'
    },
    {
      title: 'Cardiologist',
      icon: <span role="img">❤️</span>,
      time: '12:00',
      endTime: '',
      doctor: '',
      date: 30,
      size: 'small'
    },
    {
      title: 'Neurologist',
      icon: <span role="img">👨🏻‍⚕️</span>,
      time: '16:00',
      endTime: '',
      doctor: '',
      date: 30,
      size: 'small'
    }
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
                className={`calendar-day ${day.isDimmed ? 'dimmed' : ''}`}
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
        <div className="appointments">
          {appointments
            .filter(app => app.date === 26)
            .map((app, index) => {
              const isActive =
                selectedPill.date === app.date &&
                (selectedPill.timeIndex !== null && app.time.startsWith(weekDays.find(d => d.date === app.date)?.times[selectedPill.timeIndex]));

              return (
                <div
                  key={index}
                  className={`appointment-${app.size} ${isActive ? 'active-appointment' : ''}`}
                >
                  <div className="appointment-name">
                    <div className="appointment-name-text">{app.title}</div>
                    <div className="dentist">{app.icon}</div>
                  </div>
                  <div className="appointment-time">
                    {app.time}
                    {app.endTime && `-${app.endTime}`}
                    {!app.endTime && (app.time.includes('A.M') || app.time.includes('P.M') ? '' : ' A.M')}
                  </div>
                  {app.doctor && <div className="appointment-by">{app.doctor}</div>}
                </div>
              );
            })}
        </div>

        <div className="upcoming-schedule-text">The Upcoming Schedules</div>

        {['Thursday', 'Saturday'].map((dayLabel, idx) => {
          const date = idx === 0 ? 28 : 30;
          return (
            <div key={date}>
              <div className="upcoming-next">On {dayLabel}</div>
              <div className="appointments">
                {appointments
                  .filter(app => app.date === date)
                  .map((app, index) => {
                    const isActive =
                      selectedPill.date === app.date &&
                      (selectedPill.timeIndex !== null && app.time.startsWith(weekDays.find(d => d.date === app.date)?.times[selectedPill.timeIndex]));

                    return (
                      <div
                        key={index}
                        className={`appointment-${app.size} ${isActive ? 'active-appointment' : ''}`}
                      >
                        <div className="appointment-name">
                          <div className="appointment-name-text">{app.title}</div>
                          <div className="dentist">{app.icon}</div>
                        </div>
                        <div className="appointment-time">
                          {app.time}
                          {app.endTime && `-${app.endTime}`}
                          {!app.endTime && (app.time.includes('A.M') || app.time.includes('P.M') ? '' : ' A.M')}
                        </div>
                        {app.doctor && <div className="appointment-by">{app.doctor}</div>}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>

    </>
  )
}

export default Calender
