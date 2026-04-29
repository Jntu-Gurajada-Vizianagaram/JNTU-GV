import { useCallback, useEffect, useMemo, useState } from "react";
import { Data } from "./Data";
import Notification from "./Notification";
import "./UpdatePanel.css";

const departmentPrefixMap = {
  CE: "CE",
  DE: "DE",
  DAAP: "DAAP",
  DAP: "DAAP",
  DAA: "DAA",
  DRD: "DRD",
  BCDE: "BCDE",
  RRM: "DRD",
  DRC: "DRD",
};

// import CircularProgress from "@mui/material/CircularProgress";

function UpdatePanel() {
  const [activeButton, setActiveButton] = useState("All");
  const [apiData, setApiData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const buttonStyles = {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    border: "1px solid #370A68",
    borderRadius: "7px",
  };

  const normalizeString = (value) =>
    value?.toString().trim().toLowerCase() ?? "";

  const extractPrefix = (title) => {
    const raw = title?.toString().trim();
    if (!raw) return "";
    return raw.split(/[-:\s]+/)[0].replace(/\./g, "").toUpperCase();
  };

  const getDepartment = useCallback((entry) => {
    const title = normalizeString(entry.title);
    const updateType = normalizeString(entry.update_type);
    const prefix = extractPrefix(entry.title);

    if (departmentPrefixMap[prefix]) {
      return departmentPrefixMap[prefix];
    }

    if (
      updateType === "bcde" ||
      title.includes("bcde") ||
      title.includes("backward") ||
      title.includes("classes development")
    ) {
      return "BCDE";
    }

    if (
      title.includes("result") ||
      title.includes("results") ||
      title.includes("marks") ||
      title.includes("grade") ||
      title.includes("score") ||
      title.includes("revaluation") ||
      title.includes("reval") ||
      title.includes("answer sheet") ||
      title.includes("answer key")
    ) {
      return "Results";
    }

    if (
      updateType === "examination" ||
      updateType === "exams" ||
      title.includes("examination") ||
      title.includes("exam") ||
      title.includes("time table") ||
      title.includes("timetable") ||
      title.includes("schedule") ||
      title.includes("supplementary") ||
      title.includes("regular")
    ) {
      return "Examinations";
    }

    if (
      updateType === "syllabus" ||
      updateType === "calendar" ||
      title.includes("syllabus") ||
      title.includes("academic calendar") ||
      title.includes("curriculum") ||
      title.includes("academic") ||
      title.includes("regulation") ||
      title.includes("regulations")
    ) {
      return "Academic";
    }

    if (
      updateType === "notification" ||
      updateType === "circular" ||
      title.includes("affiliation") ||
      title.includes("certificate") ||
      title.includes("verification") ||
      title.includes("dues") ||
      title.includes("fee")
    ) {
      return "Administration";
    }

    if (
      updateType === "events" ||
      updateType === "workshop" ||
      updateType === "conference" ||
      updateType === "seminar"
    ) {
      return "Events";
    }

    if (updateType === "sports" || title.includes("sports") || title.includes("athletics")) {
      return "Sports";
    }

    if (
      updateType === "recruitment" ||
      title.includes("recruitment") ||
      title.includes("vacancy") ||
      title.includes("job")
    ) {
      return "Recruitment";
    }

    if (updateType === "tender" || title.includes("tender") || title.includes("procurement")) {
      return "Tenders";
    }

    return "Other";
  }, []);

  const dedupeNotifications = useCallback((items) => {
    const seen = new Map();
    return items.filter((entry) => {
      const idKey = entry.id != null ? String(entry.id) : null;
      const titleKey = normalizeString(entry.title);
      const dateKey = normalizeString(entry.date || `${entry.day}-${entry.month}-${entry.year}`);
      const key = idKey || `${titleKey}|${dateKey}`;

      if (seen.has(key)) {
        return false;
      }

      seen.set(key, true);
      return true;
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jntugv.edu.in/api/updates/allnotifications"
        );
        const fetchedData = await response.json();
        const mergedData = [...fetchedData, ...Data];
        setApiData(dedupeNotifications(mergedData));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dedupeNotifications]);

  const categorizedData = useMemo(() => {
    const categories = {
      All: [],
      CE: [],
      DE: [],
      DAAP: [],
      DAA: [],
      DRD: [],
      DAP: [],
      BCDE: [],
      Examinations: [],
      Results: [],
      Academic: [],
      Administration: [],
      Events: [],
      Sports: [],
      Recruitment: [],
      Tenders: [],
      Other: [],
    };

    apiData.forEach((entry) => {
      const department = getDepartment(entry);
      if (!categories[department]) {
        categories.Other.push(entry);
      } else {
        categories[department].push(entry);
      }
    });

    categories.All = [...apiData];
    return categories;
  }, [apiData, getDepartment]);

  useEffect(() => {
    setDisplayData(categorizedData[activeButton] || []);
  }, [categorizedData, activeButton]);

  const buttons = [
    "All",
    "Administration",
    "Examinations",
    "Results",
    "Academic",
    "CE",
    "DE",
    "DAAP",
    "DAA",
    "DRD",
    "DAP",
    "Recruitment",
    "Tenders",
    "Events",
    "Sports",
    "BCDE",
    "Other",
  ];

  return (
    <div id="events">
      <div className="notifications-title">Notifications</div>
     
      <div className="updateComponent">
        <div className="updateButtons">
          {buttons.map((buttonKey) => (
            <button
              key={buttonKey}
              style={{
                ...buttonStyles,
                backgroundColor: activeButton === buttonKey ? "#370a68" : "white",
                color: activeButton === buttonKey ? "white" : "black",
              }}
              onClick={() => setActiveButton(buttonKey)}
            >
              {buttonKey}
            </button>
          ))}
        </div>
        <Notification displayData={displayData} />
      </div>
    </div>
  );
}

export default UpdatePanel;