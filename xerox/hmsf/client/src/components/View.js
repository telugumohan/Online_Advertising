import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function View() {
  const [result, setResult] = useState(null);


  function handleDelete(event){
    // console.log(event.currentTarget.getAttribute("roomid"));
    axios.delete('http://localhost:8081/delete',{params: {
      "id": event.currentTarget.getAttribute("roomid"),
    }}).then((response) => {
      console.log(response.data);
    })
  }


  useEffect(() => {
    axios.get('http://localhost:8081/room').then((response) => {
      console.log(JSON.stringify(response.data));
      setResult(response.data);
    });
  }, []);

  // Object mapping room types to image URLs
  const roomTypeImages = {
    deluxe: 'https://pmcaonline.org/wp-content/uploads/2019/10/hotel-1068x801.jpg',
    non_deluxe: 'https://th.bing.com/th/id/OIP.I9OBthj87ntToaiqIW9ZigAAAA?rs=1&pid=ImgDetMain',
    suite: 'https://example.com/suite-room-image.jpg',
  };

  return (
    <div>
      {result ? (
        result.map((room) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '15rem',
              marginTop: '5rem',
              padding: '2rem',
            }}
          >
            <div
              className="card text-white bg-info mb-3"
              style={{ maxWidth: '840px', maxHeight: '600px' }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={room.roomType ? roomTypeImages[room.roomType.toLowerCase().replace('-', '_')] : ""}

                    className="card-img"
                    alt=""
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <h5 className="card-title">{room.roomType ? room.roomType.toUpperCase() : ""}</h5>

                    <h5 className="card-title"><b>Room ID: </b>{room.roomId}</h5>
                    <h5 className="card-title"><b>Price:</b> {room.price} INR</h5>
                    <h5 className="card-title"><b>Vacancy: </b>{room.vacancy}</h5>
                    <p className="card-text">
                      The room you are viewing can be accommodated by{' '}
                      {room.size} persons
                    </p>
                  </div>
                  <button type="button" id="" class="btn btn-dark" style={{marginLeft:'7rem', marginBottom:'1rem'}}
                    onClick={handleDelete} roomid={room.roomId}
                  >Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>There is no data to display...</div>
      )}
    </div>
  );
}
