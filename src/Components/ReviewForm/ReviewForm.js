import React, { useEffect, useState } from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import './ReviewForm.css';

const Reviews = () => {
  const [doctors, setDoctors] = useState([]);
  const [reviews, setReviews] = useState({});
  const [showFormFor, setShowFormFor] = useState(null); // doctorName

  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem('doctorDataList')) || [];
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    setDoctors(storedDoctors);
    setReviews(storedReviews);
  }, []);

  const saveReviewsToLocalStorage = (newReviews) => {
    localStorage.setItem('reviews', JSON.stringify(newReviews));
  };

  const handleSubmitReview = (doctorName, formData) => {
    const updated = {
      ...reviews,
      [doctorName]: `Name: ${formData.name}, Rating: ${formData.rating || 'N/A'}, Review: ${formData.review}`
    };
    setReviews(updated);
    saveReviewsToLocalStorage(updated);
  };

  return (
    <div className='reviewform'>
      <h2>Doctor Reviews</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>Serial No.</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc, index) => {
            const reviewText = reviews[doc.name];
            const isReviewed = !!reviewText;

            // Extract only rating and review from the stored review string
            let displayedReview = '—';
            if (isReviewed) {
              const parts = reviewText.split(', ');
              const ratingPart = parts.find((p) => p.startsWith('Rating:'));
              const reviewPart = parts.find((p) => p.startsWith('Review:'));
              displayedReview = `${ratingPart?.replace('Rating: ', '') || ''} ★ - ${reviewPart?.replace('Review: ', '') || ''}`;
            }

            return (
              <tr key={index} style={{ borderTop: '1px solid #ccc' }}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.speciality}</td>
                <td>
                  <button
                    onClick={() => setShowFormFor(doc.name)}
                    disabled={isReviewed}
                    style={{
                      backgroundColor: isReviewed ? '#ccc' : '',
                      cursor: isReviewed ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Click Here
                  </button>
                </td>
                <td>{displayedReview}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Show feedback form if one doctor is selected */}
      {showFormFor && (
        <FeedbackForm
          doctorName={showFormFor}
          onSubmit={handleSubmitReview}
          onClose={() => setShowFormFor(null)}
        />
      )}
    </div>
  );
};

export default Reviews;
