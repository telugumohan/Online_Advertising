import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ClientViewTypes = ({bType, setBType}) => {
  const [adTypes, setAdTypes] = useState(null);

  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:8081/adTypes')
      .then((response) => {
        setAdTypes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ad types:', error);
      });
  }, []);

  //Function to handle deletion of ad types
  function handleBook(adTypeNam){
    setBType(adTypeNam)
    navigate('/client/booking');
  };


  

  return (
    <div className="container">
      <div className="row">
        {adTypes ? (
          adTypes.map((adType) => (
            <div key={adType._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{adType.adTypeName}</h5>
                  <p className="card-text">{adType.description}</p> {/* Display description */}
                </div>
                <div className="card-footer ceter">
                  <button className="btn btn-danger" onClick={() => handleBook(adType.adTypeName)}>Book Now</button> {/* Add delete button */}
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


export default ClientViewTypes;