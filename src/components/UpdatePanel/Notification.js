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
      {displayData.map((entry, index) => (
        <>
          <div key={index} className="updateBox">
            {entry.update_type === "events" ? (
              <div className="eventBox">
                <a href={entry.file_link} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      width: "350px",
                      backgroundColor: "#370A68",
                      height: "250px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={entry.image}
                      alt="Paella dish"
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
                <div className="dateTimeContainer">
                  <div className="dateDiv">{entry.day}</div>
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
                  </a>
                  {daysAgo(`${entry.month} ${entry.day}, ${entry.year}`) <=
                    5 && (
                      <img
                        src={newGif}
                        alt="newimg"
                        height="20vh"
                        width="50vh"
                      />
                    )}
                  <div>
                    {/* condition for button*/}
                    {entry.external_text && (
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ backgroundColor: "370a68" }}
                      >
                        <a
                          href={entry.external_text}
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
          {entry.update_type === "events" ? (
            <></>
          ) : (
            <div className="updateDivSeparator"></div>
          )}
        </>
      ))}
    </div>

  );
};

export default Notification;
