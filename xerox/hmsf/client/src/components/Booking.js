import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Booking = ({ bType, name, email }) => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    budget: '',
    targetAudience: '',
    approved: '0',
    name: name,
    email: email,
    type: bType
    // Add more fields as needed
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/client/booking', formData)
      .then((response) => {
        console.log(response.data);
        if(response.data === "success") {
            navigate('/client/approvalPending')
        }
        // Handle success, maybe redirect to a success page or display a success message
      })
      .catch((error) => {
        console.error('Error booking ad:', error);
        // Handle error, maybe display an error message to the user
      });
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Book Ad Campaign for {bType}</h2>
        <form onSubmit={handleSubmit} style={{ width: '300px' }}>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget:</label>
            <input
              type="number"
              className="form-control"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="targetAudience">Target Audience:</label>
            <input
              type="text"
              className="form-control"
              id="targetAudience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              required
            />
          </div>
          {/* Add more input fields for other details */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
