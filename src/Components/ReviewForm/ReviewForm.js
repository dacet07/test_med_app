import React, { useEffect, useState } from 'react';
import './Reviews.css'; // Pievieno stilus pēc nepieciešamības

const Reviews = () => {
  const [doctors, setDoctors] = useState([]);
  const [reviews, setReviews] = useState({});

  // Funkcija, lai ielādētu atsauksmes no localStorage
  const loadReviewsFromLocalStorage = () => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    setReviews(storedReviews);
  };

  // Ielādē ārstu datus un atsauksmes no localStorage
  useEffect(() => {
    const storedDoctor = JSON.parse(localStorage.getItem('doctorData'));
    if (storedDoctor) {
      // Ja ir tikai viens ārsts, pārveidojam to uz masīvu
      const doctorArray = Array.isArray(storedDoctor) ? storedDoctor : [storedDoctor];
      setDoctors(doctorArray);
    }
    loadReviewsFromLocalStorage(); // Ielādē atsauksmes
  }, []);

  // Funkcija atsauksmes saglabāšanai localStorage
  const saveReviewsToLocalStorage = (newReviews) => {
    localStorage.setItem('reviews', JSON.stringify(newReviews));
  };

  // Funkcija, lai lietotājs varētu pievienot atsauksmi
  const handleFeedback = (doctorName) => {
    const userReview = prompt(`Write your feedback for Dr. ${doctorName}:`);
    if (userReview) {
      // Pievieno atsauksmi uzreiz uz state
      const updatedReviews = { ...reviews, [doctorName]: userReview };
      setReviews(updatedReviews);
      // Saglabā atsauksmes localStorage
      saveReviewsToLocalStorage(updatedReviews);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Doctor Reviews</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{doc.name}</td>
              <td>{doc.speciality}</td>
              <td>
                <button onClick={() => handleFeedback(doc.name)}>Click Here</button>
              </td>
              <td>{reviews[doc.name] || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
