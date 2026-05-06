//fetch events data from api and display in events page
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEventsData = async () => {
        try {
            const response = await fetch("https://api.jntugv.edu.in/api/webadmin/get-event-photos");
            const apiData = await response.json();
            const events = apiData.events || [];
            const acceptedEvents = events.filter(event => event.admin_approval === 'accepted');
            setEvents(acceptedEvents);
        } catch (err) {
            console.error("Failed to fetch events data:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEventsData();
    }, []);

    return (
        <div className="events-main">
            <Link to="/gallery" className="back-to-home">
                <MdOutlineArrowBackIos />
                Back to Gallery
            </Link>
            <h1 className="events-title">Events</h1>
            {loading ? (
                <p>Loading events...</p>
            ) : (
                <div className="events-list">
                    {events.map((event) => (
                        <div key={event.id} className="event-item">
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            <p>Date: {event.date ? new Date(event.date).toLocaleDateString() : ""}</p>
                            {/* Dynamic route hint (kept optional to avoid breaking existing routes) */}
                            {/* <Link to={"/gallery"}>Open in Gallery</Link> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
