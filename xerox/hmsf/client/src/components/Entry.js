import React, { useState } from "react";
import axios from "axios";
import './style.css';

export default function Entry() {
    const [roomType, setRoomType] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [vacancy, setVacancy] = useState("");
    const [roomId, setRoomId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log({
            roomType,
            size,
            price,
            vacancy,
            roomId
        });
        axios.post('http://localhost:8081/entry', {
            roomType,
            size,
            price,
            vacancy,
            roomId
        }).then((response) => {
            console.log(response.data);
        })
    }

    // Function to render image based on room type
    function renderRoomImage() {
        if (roomType === "deluxe") {
            return <img src="https://pmcaonline.org/wp-content/uploads/2019/10/hotel-1068x801.jpg" alt="Deluxe Room" style={{ maxWidth: '100%', height: 'auto' }} />;
        } else if (roomType === "non-deluxe") {
            return <img src="https://th.bing.com/th/id/OIP.I9OBthj87ntToaiqIW9ZigAAAA?rs=1&pid=ImgDetMain" alt="Non-Deluxe Room" style={{ maxWidth: '100%', height: 'auto' }} />;
        } else {
            return null; // You can return a default image or leave it blank if no room type is selected
        }
    }

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossOrigin="anonymous"
            ></link>
            <script
                src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                crossOrigin="anonymous"
            ></script>

            <div className="container">
                <div className="image" style={{ maxWidth: '100%', height: 'auto' }}>
                    {renderRoomImage()}
                </div>
                <div className="content">
                    <div className="type">
                        <p>Room Type
                            <select
                                className="form-control"
                                name="room"
                                id="room"
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                            >
                                <option value="">Select Room type</option>
                                <option value="deluxe">Deluxe</option>
                                <option value="non-deluxe">Non-deluxe</option>
                            </select>
                        </p>
                    </div>
                    <p>Room Id: <input type="number" className="inputbox" value={roomId} onChange={(e) => setRoomId(e.target.value)} /> </p>
                    <p>Price: <input type="number" className="inputbox" value={price} onChange={(e) => setPrice(e.target.value)} /></p>
                    <p>Size: <input type="number" className="inputbox" value={size} onChange={(e) => setSize(e.target.value)} /></p>
                    <p>Vacancy: <input type="number" className="inputbox" value={vacancy} onChange={(e) => setVacancy(e.target.value)} /></p>
                    <p id="description">You are viewing a room. It can accommodate guests. The price is according per night</p>
                    <button className="book-btn" onClick={handleSubmit}>Add Room</button>
                </div>
            </div>
        </>
    );
}
