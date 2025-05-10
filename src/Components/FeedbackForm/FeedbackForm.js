import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = ({ doctorName, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.review) return;

    onSubmit(doctorName, formData);
    onClose(); // close the form
  };

  return (
    <div className="feedback-modal">
      <div className="feedback-form">
        <h3>Give Your Review</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Your Review:
            <textarea name="review" value={formData.review} onChange={handleChange} required />
          </label>
          <div className="form-group">
  <label>Rating:</label>
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= formData.rating ? 'filled' : ''}
        onClick={() => setFormData({ ...formData, rating: star })}
      >
        ★
      </span>
    ))}
  </div>
</div>
          <div className="buttons">
  <button type="submit">Submit</button>
</div>
<div className="buttons">
  <button type="button" onClick={onClose} className="cancel">Cancel</button>
</div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
