import React, { useEffect, useState } from "react";
import "./LastUpdated.css";

const formatTimestamp = (value) => {
  if (!value) return "Unknown";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState("Checking live update status...");

  useEffect(() => {
    const rawLastModified = document?.lastModified;
    const formatted = formatTimestamp(rawLastModified);
    setLastUpdated(`Last Updated: ${formatted}`);
  }, []);

  return (
    <div className="last-updated-container">
      <p className="last-updated-text">{lastUpdated}</p>
    </div>
  );
};

export default LastUpdated;
