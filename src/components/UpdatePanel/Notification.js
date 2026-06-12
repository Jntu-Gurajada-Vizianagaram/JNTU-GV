import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import newGif from "../../assets/new.gif";
import { Button } from "@mui/material";

const Notification = ({ displayData }) => {
  const currentDate = new Date();
  const daysAgo = (notificationDate) => {
    const notificationDateTime = new Date(notificationDate);
    const timeDifference =
      currentDate.getTime() - notificationDateTime.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };


  return (
    <div className="updatesContainer">
      {displayData.map((entry, index) => {
        const entryKey =
          entry.id ||
          `${entry.title}-${entry.month}-${entry.day}-${entry.year}-${index}`;

        return (
          <div key={entryKey} className="notificationEntry">
            <div className="updateBox">
              {entry.update_type === "events" ? (
                <div className="eventBox">
                  <a href={entry.file_link} style={{ textDecoration: "none" }}>
                    <Card
                      sx={{
                        width: "100%",
                        maxWidth: 350,
                        backgroundColor: "#370A68",
                        height: 250,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="194"
                        image={entry.image}
                        alt={entry.title || "Event image"}
                        loading="lazy"
                      />
                      <CardContent>
                        <Typography variant="body1" color="white">
                          {entry.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              ) : (
                <>
                  <div className="dateTimeContainer px-2 py-2">
                    <div className="dateDiv">
                      <span>
                        {Number(entry.day) < 10
                          ? `0${Number(entry.day)}`
                          : entry.day}
                      </span>
                    </div>
                    <div className="monYear">
                      <div className="monthDiv">{entry.month}</div>
                      <div className="yearDiv">{entry.year}</div>
                    </div>
                  </div>
                  <div className="updateDescription">
                    <a
                      href={entry.file_link || "#"}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "rgb(55, 10, 104)",
                      }}
                    >
                      {entry.title}

                      {daysAgo(`${entry.month} ${entry.day}, ${entry.year}`) <=
                        1 && (
                          <img
                            src={newGif}
                            alt="new"
                            height="20"
                            width="50"
                          />
                        )}
                    </a>

                    <div>
                      {entry.external_text && (
                        <Button
                          variant="outlined"
                          color="inherit"
                          size="small"
                          sx={{ mt: 1 }}
                        >
                          <a
                            href={entry.external_link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              textDecoration: "none",
                              color: "rgb(55, 10, 104)",
                            }}
                          >
                            {entry.external_text}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
            {entry.update_type !== "events" && (
              <div className="updateDivSeparator"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
