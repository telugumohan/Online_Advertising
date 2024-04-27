import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewAdTypes() {
  const [adTypes, setAdTypes] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/adTypes')
      .then((response) => {
        setAdTypes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ad types:', error);
      });
  }, []);

  // Function to handle deletion of ad types
  function handleDelete(event){
    axios.delete(`http://localhost:8081/adTypes/delete`,{params: {
        "id": event.currentTarget.getAttribute("id"),
      }})
      .then((response) => {
        if (response.status === "deleted") {
          // If deletion was successful, remove the deleted ad type from the UI
          setAdTypes(adTypes.filter((adType) => adType._id !== event.currentTarget.getAttribute("id")));
          console.log(`Ad type with ID x deleted successfully`);
        } else {
          console.error(`Failed to delete ad type with ID x`);
        }
      })
      .catch((error) => {
        console.error('Error deleting ad type:', error);
      });
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
                  <button className="btn btn-danger" onClick={handleDelete}>Delete</button> {/* Add delete button */}
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
