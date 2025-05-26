import React from 'react'
import TeethIcon from '../../assets/Icon/tooth-icon.svg'

const Appointment = ({selectedPill, weekDays}) => {
    const selectedDate = 26;


  const appointments = [
    {
      title: 'Dentist',
      icon: <span role="img">🦷</span>,
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
        </>
    )
}

export default Appointment
