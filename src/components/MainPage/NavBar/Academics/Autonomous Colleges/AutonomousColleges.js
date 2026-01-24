import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AutonomousColleges.css";
import { rowsEngg, rowsPharmacy } from "./AutonomousCollegesData";

const AutonomousCollegeTable = ({ rows, categoryName }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Accordion elevation={10} className="accordion-autonomous" defaultExpanded sx={{ marginBottom: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
        aria-controls={`panel-${categoryName}-content`}
        id={`panel-${categoryName}-header`}
        sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
      >
        <Typography sx={{ width: "100%", flexShrink: 0, fontSize: "1.2rem", fontWeight: "bold" }}>
          {categoryName}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label={`${categoryName} table`}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>S.No</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>College Code</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>College Name</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>District</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>Address</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>Autonomous Year</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>Website URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.CollegeCode}
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.SNo}</TableCell>
                      <TableCell align="center">{row.CollegeCode}</TableCell>
                      <TableCell>{row.CollegeName}</TableCell>
                      <TableCell align="center">{row.District}</TableCell>
                      <TableCell>{row.Address}</TableCell>
                      <TableCell align="center">{row.AutonomousYear}</TableCell>
                      <TableCell align="center">
                        <Link
                          to={row.wURL}
                          target="_blank"
                          style={{ textDecoration: "none", color: "black", fontWeight: 500 }}
                        >
                          {row.wURL}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
};

const AutonomousColleges = () => {
  return (
    <div className="autonomousColleges">
      <div className="table-container">
        <AutonomousCollegeTable rows={rowsEngg} categoryName="Engineering Colleges" />
        <AutonomousCollegeTable rows={rowsPharmacy} categoryName="Pharmacy Colleges" />
      </div>
    </div>
  );
};

export default AutonomousColleges;
