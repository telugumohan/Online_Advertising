import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminApprovalP = () => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/client/booking')
      .then((response) => {
        // Filter the bookings based on name and email, and real-time current-day date
        const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
        const filteredBookings = response.data.filter((booking) => (
          booking.approved === "0"
        ));
        setBookings(filteredBookings);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  // Function to handle approval of a booking
  function handleApprove(event) {
    // Send a request to update the database with approved="1" for the given booking ID
    axios.put(`http://localhost:8081/client/booking`, {params: {
        "id": event.currentTarget.getAttribute("id"),
      }})
      .then((response) => {
        // // If the update is successful, fetch the updated bookings from the server
        // axios.get('http://localhost:8081/client/booking')
        //   .then((response) => {
        //     const filteredBookings = response.data.filter((booking) => (
        //       booking.approved === "0"
        //     ));
        //     setBookings(filteredBookings);
        //   })
        //   .catch((error) => {
        //     console.error('Error fetching bookings after approval:', error);
        //   });
      })
      .catch((error) => {
        console.error('Error approving booking:', error);
      });
  };



  return (
    <div className="container">
      <div className="row">
        {bookings ? (
          bookings.map((booking) => (
            <div key={booking._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Type: {booking.type}</h5>
                  <p className="card-text">User Name: {booking.name}</p>
                  <p className="card-text">User Email: {booking.email}</p>
                  <p className="card-text">Start Date: {booking.startDate}</p>
                  <p className="card-text">End Date: {booking.endDate}</p>
                  <p className="card-text">Target Audience: {booking.targetAudience}</p>
                  <p className="card-text">Budget: {booking.budget}</p>
                </div>
                <div className="card-footer ceter">
                  {booking.approved === "0" && (
                    <button className="btn btn-danger" onClick={handleApprove}>Approve</button>
                  )}
                  {booking.approved === "1" && (
                    <button className="btn btn-success">Approved</button>
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

export default AdminApprovalP;
