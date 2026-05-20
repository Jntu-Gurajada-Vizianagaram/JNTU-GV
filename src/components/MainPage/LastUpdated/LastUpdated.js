import React, { useMemo } from "react";
import "./LastUpdated.css";

const formatTimestamp = (date) => {
  if (!(date instanceof Date)) date = new Date(date);
  if (Number.isNaN(date.getTime())) return "Unknown";

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const LastUpdated = () => {
  const buildTimestamp = process.env.REACT_APP_BUILD_TIMESTAMP;
  const lastUpdatedText = useMemo(() => {
    if (!buildTimestamp) {
      return "Last Updated: unknown";
    }

    return `Last Updated: ${formatTimestamp(buildTimestamp)}`;
  }, [buildTimestamp]);

  return (
    <div className="last-updated-container">
      <p className="last-updated-text">{lastUpdatedText}</p>
    </div>
  );
};

export default LastUpdated;
