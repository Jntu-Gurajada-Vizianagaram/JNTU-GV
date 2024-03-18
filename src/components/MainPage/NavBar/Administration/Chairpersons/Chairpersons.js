import * as React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ugColumns, ugRows } from "./Ugdata.js"; // Import named exports from Ugdata
import { pgColumns, pgRows } from "./Pgdata.js"; // Import named exports from Pgdata
import ChairPersonTable from "./ChairPersonTable.js";

export default function Chairpersons() {
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#D9D9D9" : "#D9D9D9",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ marginBottom: "16px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CHAIRPERSONS OF BOARDS OF STUDIES(U.G.)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChairPersonTable columns={ugColumns} rows={ugRows} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CHAIRPERSONS OF BOARDS OF STUDIES(P.G.)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChairPersonTable columns={pgColumns} rows={pgRows} />
        </AccordionDetails>
      </Accordion>

      {/* Other Accordions or content here */}
    </div>
  );
}
