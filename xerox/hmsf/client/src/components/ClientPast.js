import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientPast = ({ name, email }) => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/client/booking')
      .then((response) => {
        // Filter the bookings based on name and email, and real-time current-day date
        const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
        const filteredBookings = response.data.filter((booking) => (
          booking.name === name &&
          booking.email === email &&
          currentDate < booking.startDate
        ));
        setBookings(filteredBookings);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, [name, email]);

  return (
    <div className="container">
      <div className="row">
        {bookings ? (
          bookings.map((booking) => (
            <div key={booking._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Type: {booking.type}</h5>
                  <p className="card-text">Start Date: {booking.startDate}</p>
                  <p className="card-text">End Date: {booking.endDate}</p>
                  <p className="card-text">Target Audience: {booking.targetAudience}</p>
                  <p className="card-text">Budget: {booking.budget}</p>
                </div>
                <div className="card-footer ceter">
                  {booking.approved === "0" && (
                    <button className="btn btn-danger">Denied</button>
                  )}
                  {booking.approved === "1" && (
                    <button className="btn btn-success">Successfully Completed</button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default ClientPast;
