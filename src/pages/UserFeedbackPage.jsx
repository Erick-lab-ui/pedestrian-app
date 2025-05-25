import React, { useEffect, useState } from 'react';
import './UserFeedbackPage.css';



function UserFeedbackPage() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedbackList')) || [];
    setFeedbackData(storedFeedback);
  }, []);

  return (
    <div className="user-feedback-container">
      <h2>User Feedback Dashboard</h2>
      {feedbackData.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <table className="user-feedback-table">
          <thead>
            <tr>
              <th>Sign</th>
              <th>Feedback</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((item, index) => (
              <tr key={index}>
                <td>{item.sign}</td>
                <td>{item.comment}</td>
                <td>{item.date || item.created_at || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserFeedbackPage;
