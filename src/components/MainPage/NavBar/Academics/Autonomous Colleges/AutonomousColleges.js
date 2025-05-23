import "./AutonomousColleges.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { rowsEngg} from "./AutonomousCollegesData";
import { Link } from "react-router-dom";

const AutonomousColleges = () => {
  return (
    <div className="autonomousColleges">
      {/* <div className="autonomousColleges-title">autonomous Colleges</div> */}
      <div className="table-container">
        <Accordion elevation={20} className="accordion-autonomous">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ background: "#370A68", color: "white" }}
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Engineering Colleges
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table>
                <TableHead sx={{ background: "#3F6DD13D" }}>
                  <TableRow>
                    <TableCell>S.No</TableCell>
                    <TableCell align="right">College Code</TableCell>
                    <TableCell align="center">College Name</TableCell>
                    <TableCell align="center">District</TableCell>
                    <TableCell align="center">Website URL</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsEngg.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{row.SNo}</TableCell>
                      <TableCell align="center">{row.CollegeCode}</TableCell>
                      <TableCell align="center">{row.CollegeName}</TableCell>
                      <TableCell align="center">{row.District}</TableCell>
                      <TableCell align="center">
                        <Link
                          to={row.wURL}
                          target="_blank"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {row.wURL}
                        </Link>
                      </TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>


      </div>
    </div>
  );
};

export default AutonomousColleges;
