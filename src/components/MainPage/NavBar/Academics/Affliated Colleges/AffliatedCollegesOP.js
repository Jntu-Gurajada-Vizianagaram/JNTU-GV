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
import { rowsEngg, rowsMba, rowsPharmacy } from "./AffiliatedCollegesData";
import "./AffiliatedCollegesOP.css";

// Reusable Table Component with Pagination
const CollegeTable = ({ rows }) => {
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
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>S.No</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>College Code</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>College Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>District</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>Type</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", background: "#f5f5f5", color: "#370A68" }}>JnanaBhumi Code</TableCell>
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
                  <TableCell align="center">{row.Type}</TableCell>
                  <TableCell align="center">{row.JnanaBhumiCode}</TableCell>
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
  );
};

const AffliatedCollegesOP = () => {
  return (
    <div className="AffiliatedColleges">
      <div className="table-container">

        {/* Engineering Colleges Accordion */}
        <Accordion elevation={10} className="accordion-affiliated" defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
          >
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Engineering Colleges
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <CollegeTable rows={rowsEngg} />
          </AccordionDetails>
        </Accordion>

        {/* Pharmacy Colleges Accordion */}
        <Accordion elevation={10} className="accordion-affiliated" sx={{ marginTop: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
          >
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Pharmacy Colleges
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <CollegeTable rows={rowsPharmacy} />
          </AccordionDetails>
        </Accordion>

        {/* Management Colleges Accordion */}
        <Accordion elevation={10} className="accordion-affiliated" sx={{ marginTop: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
          >
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Management Colleges
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <CollegeTable rows={rowsMba} />
          </AccordionDetails>
        </Accordion>

      </div>

      <p align="right">As per the latest update on 24-01-2026</p>
    </div>

  );
};

export default AffliatedCollegesOP;
