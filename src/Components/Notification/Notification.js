import React, { useState } from 'react';
import './Notification.css';

const Notification = () => {
  // Simulējam pieslēgtu lietotāju un pierakstu
  const [isLoggedIn] = useState(true);
  const [appointmentData] = useState({
    doctor: 'Dr. John Doe',
    speciality: 'Dentist',
    name: 'Dace',
    phone: '1234567891',
    date: '2025-05-15',
    time: '14:30'
  });

  // Ja nav ielogots vai nav pieraksta datu, nerādīt
  if (!isLoggedIn || !appointmentData) return null;

  return (
    <div className="notification-container">
      <div className="notification-card">
        <strong>Appointment Details</strong><br />
        <strong>Doctor:</strong> {appointmentData.doctor}<br />
        <strong>Speciality:</strong> {appointmentData.speciality}<br />
        <strong>Name:</strong> {appointmentData.name}<br />
        <strong>Phone Number:</strong> {appointmentData.phone}<br />
        <strong>Date:</strong> {appointmentData.date}<br />
        <strong>Time Slot:</strong> {appointmentData.time}
      </div>
    </div>
  );
};

export default Notification;
