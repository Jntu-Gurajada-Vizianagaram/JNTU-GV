import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AutonomousColleges.css";
import { rowsEngg, rowsPharmacy } from "./AutonomousCollegesData";

const AutonomousCollegeTable = ({ rows, categoryName, searchQuery, expanded, onToggle }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((val) =>
      val.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Accordion 
      elevation={0} 
      className="accordion-autonomous" 
      expanded={expanded}
      onChange={onToggle}
      sx={{ mb: 3, border: "1px solid #eee", borderRadius: "12px", overflow: "hidden" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        sx={{ background: "#370A68", color: "white" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{categoryName}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <Paper elevation={0}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label={`${categoryName} table`}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>S.No</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Code</TableCell>
                  <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>College Name</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>District</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Autonomous Year</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.CollegeCode}
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.SNo}</TableCell>
                      <TableCell align="center">{row.CollegeCode}</TableCell>
                      <TableCell sx={{ fontWeight: 500, color: "#333" }}>{row.CollegeName}</TableCell>
                      <TableCell align="center">{row.District}</TableCell>
                      <TableCell align="center">{row.AutonomousYear}</TableCell>
                      <TableCell align="center">
                        <Link
                          to={row.wURL}
                          target="_blank"
                          className="college-web-link"
                        >
                          Visit
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                {filteredRows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 3, color: "#999" }}>
                      No autonomous colleges found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={filteredRows.length}
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
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState({
    engineering: true,
    pharmacy: false
  });

  useEffect(() => {
    if (location.state?.category) {
      const cat = location.state.category;
      setExpanded({
        engineering: cat === "engineering",
        pharmacy: cat === "pharmacy"
      });
    }
  }, [location]);

  const handleToggle = (panel) => (event, isExpanded) => {
    setExpanded(prev => ({ ...prev, [panel]: isExpanded }));
  };

  return (
    <div className="autonomousColleges">
      ...
      <div className="table-container">
        <AutonomousCollegeTable 
          rows={rowsEngg} 
          categoryName="Engineering Colleges (Full List)" 
          searchQuery={searchQuery} 
          expanded={expanded.engineering}
          onToggle={handleToggle("engineering")}
        />
        <AutonomousCollegeTable 
          rows={rowsPharmacy} 
          categoryName="Pharmacy Colleges (Full List)" 
          searchQuery={searchQuery} 
          expanded={expanded.pharmacy}
          onToggle={handleToggle("pharmacy")}
        />
      </div>
      ...
    </div>
  );
};

export default AutonomousColleges;
