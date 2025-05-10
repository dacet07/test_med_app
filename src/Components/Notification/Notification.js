import React, { useEffect, useState } from 'react';

import './Notification.css';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = {
      name: sessionStorage.getItem('appointment-name'),
      phoneNumber: sessionStorage.getItem('appointment-phoneNumber'),
      appointmentDate: sessionStorage.getItem('appointment-date'),
      selectedSlot: sessionStorage.getItem('appointment-selectedSlot')
    };

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData.name) {
      setAppointmentData(storedAppointmentData);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Display appointment details if user is logged in and appointmentData is available && doctorData*/}
      {isLoggedIn && appointmentData && (
        <>
          
          <div className="notification-container">
            <div className="notification-card">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                {/* Display user's name */}
                <strong>Username:</strong> {username}
              </p>
              <p className="appointment-card__message">
                {/* Display doctor's name from doctorData */}
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message">
                {/* Display doctor's speciality */}
                <strong>Speciality:</strong> {doctorData?.speciality}
              </p>
              <p className="appointment-card__message">
                {/* Display appointment date */}
                <strong>Appointment Date:</strong> {appointmentData?.appointmentDate}
              </p>
              <p className="appointment-card__message">
                {/* Display selected time slot */}
                <strong>Time Slot:</strong> {appointmentData?.selectedSlot}
              </p>
              <p className="appointment-card__message">
                {/* Display user's phone number */}
                <strong>Phone Number:</strong> {appointmentData?.phoneNumber}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;
