import React, { useState, useEffect } from 'react';
import './FeedbackPage.css';

function FeedbackPage() {
  const [selectedSign, setSelectedSign] = useState('');
  const [comment, setComment] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  // Load saved feedbacks from localStorage on mount
  useEffect(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbackList')) || [];
    setFeedbacks(savedFeedbacks);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSign && comment) {
      const newFeedback = {
        sign: selectedSign,
        comment,
        date: new Date().toLocaleString(),
      };

      const updatedFeedbacks = [...feedbacks, newFeedback];

      setFeedbacks(updatedFeedbacks);
      setSelectedSign('');
      setComment('');

      // Save to localStorage
      localStorage.setItem('feedbackList', JSON.stringify(updatedFeedbacks));
    }
  };

  const clearAllFeedback = () => {
    localStorage.removeItem('feedbackList');
    setFeedbacks([]);
    setSelectedSign('');
    setComment('');
  };

  return (
    <div className="feedback-container">
      <h2>Give Us Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>Select a Sign:</label>
        <select
          value={selectedSign}
          onChange={(e) => setSelectedSign(e.target.value)}
          required
        >
          <option value="">-- Choose a Sign --</option>
          <option value="Pedestrian Zone">Pedestrian Zone</option>
          <option value="Crosswalk Sign">Crosswalk Sign</option>
          <option value="Stop Sign">Stop Sign</option>
          <option value="Yield Sign">Yield Sign</option>
          <option value="School Zone">School Zone</option>
          <option value="No Pedestrian Zone">No Pedestrian Zone</option>
        </select>

        <label>Your Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your feedback here..."
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      

      <div className="feedback-list">
        <h3>All Feedback</h3>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          feedbacks.map((fb, index) => (
            <div key={index} className="feedback-item">
              <strong>{fb.sign}:</strong> {fb.comment} <br />
              <small><em>Submitted on: {fb.date}</em></small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FeedbackPage;
