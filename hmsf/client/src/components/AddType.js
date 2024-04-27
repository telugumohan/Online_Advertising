import React, { useState } from "react";
import axios from "axios";
import './style.css';
import { useNavigate } from "react-router-dom";

export default function AddType() {
    const [adTypeName, setAdTypeName] = useState("");
    const [id, setId] = useState("");
    const [description, setDescription] = useState(""); // New state variable for description
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log({
            adTypeName,
            id,
            description // Include description in the data to send to the server
        });
        axios.post('http://localhost:8081/addType', {
            adTypeName,
            id,
            description // Pass description to the server
        }).then((response) => {
            if(response.data === "Ad type added successfully") {
                navigate('/admin/adTypes');
            }
            console.log(response.data);
        });
    }

    return (
    <>
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div className="content" style={{ textAlign: "center" }}>
                <h2>Add New Ad Type</h2>
                <div className="form-group">
                    <label htmlFor="adTypeName" style={{ display: "block", marginBottom: "0.5rem" }}>Ad Type Name:</label>
                    <input
                        type="text"
                        id="adTypeName"
                        className="form-control"
                        value={adTypeName}
                        onChange={(e) => setAdTypeName(e.target.value)}
                        style={{ marginBottom: "1rem", padding: "0.5rem" }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id" style={{ display: "block", marginBottom: "0.5rem" }}>ID:</label>
                    <input
                        type="text"
                        id="id"
                        className="form-control"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        style={{ marginBottom: "1rem", padding: "0.5rem" }}
                    />
                </div>
                {/* Add input field for description */}
                <div className="form-group">
                    <label htmlFor="description" style={{ display: "block", marginBottom: "0.5rem" }}>Description:</label>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ marginBottom: "1rem", padding: "0.5rem" }}
                    />
                </div>
                <button
                    className="book-btn"
                    onClick={handleSubmit}
                    style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
                >
                    Add Ad Type
                </button>
            </div>
        </div>
    </>
);

    
}
