import React, { useState } from 'react';
import axios from 'axios';
import './EventHosting.css';

function EventHosting() {
    const [event, setEvent] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        Fees:'',
        WhyAttain:'',
        otherdetails:''
    });

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://deib-backend-1.onrender.com/add-event', event);
            alert(res.data.message);
            setEvent({ title: '', description: '', date: '', location: '', Fees:'', WhyAttain:'', otherdetails:'' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="event-container">
            <h5 className="Host-event-heading">Add New Event</h5>
            <form className="event-form" onSubmit={handleSubmit}>
                <input type="text" name="title" className="event-input" placeholder="Title" value={event.title} onChange={handleChange} required />
                <textarea name="description" className="event-textarea" placeholder="Description" value={event.description} onChange={handleChange} required />
                <input type="date" name="date" className="event-input" value={event.date} onChange={handleChange} required />
                <input type="text" name="location" className="event-input" placeholder="Location" value={event.location} onChange={handleChange} required />
                <input type="number" name="Fees" className="event-input" placeholder="Fees" value={event.Fees} onChange={handleChange} required />
                <input type="text" name="WhyAttain" className="event-input" placeholder="Why Should you Atain" value={event.WhyAttain} onChange={handleChange} required />
                <textarea name="otherdetails" className="event-textarea" placeholder="Other details" value={event.otherdetails} onChange={handleChange} required />
                <button type="submit" className="event-button">Add Event</button>
            </form>
        </div>
    );
}

export default EventHosting;
