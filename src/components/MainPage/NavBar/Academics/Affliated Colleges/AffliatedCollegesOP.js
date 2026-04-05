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
import { rowsEngg, rowsMba, rowsPharmacy } from "./AffiliatedCollegesData";
import "./AffiliatedCollegesOP.css";

// Reusable Table Component with Pagination and Filtering
const CollegeTable = ({ rows, searchQuery }) => {
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
    <Paper elevation={0} sx={{ width: "100%", overflow: "hidden", border: "1px solid #eee" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="college table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>S.No</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Code</TableCell>
              <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>College Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>District</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Type</TableCell>
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
                  <TableCell align="center">
                    <span className={`status-tag ${row.Type.toLowerCase()}`}>
                      {row.Type}
                    </span>
                  </TableCell>
                  <TableCell align="center">
                    {row.wURL !== "---" ? (
                      <Link
                        to={row.wURL}
                        target="_blank"
                        className="college-web-link"
                      >
                        Visit
                      </Link>
                    ) : (
                      <span style={{ color: "#999" }}>N/A</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            {filteredRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 3, color: "#999" }}>
                  No colleges found matching your search.
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
  );
};

const AffliatedCollegesOP = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState({
    engineering: true,
    pharmacy: false,
    management: false
  });

  useEffect(() => {
    if (location.state?.category) {
      const cat = location.state.category;
      setExpanded({
        engineering: cat === "engineering",
        pharmacy: cat === "pharmacy",
        management: cat === "management"
      });
    }
  }, [location]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(prev => ({ ...prev, [panel]: isExpanded }));
  };

  return (
    <div className="AffiliatedColleges">
      <div className="college-list-header">
        <div className="title-section">
          <h2 className="AffiliatedColleges-title">Affiliated Colleges</h2>
          <p className="subtitle">List of institutions affiliated with JNTU-Gurajada Vizianagaram</p>
        </div>
        <div className="search-section">
          <TextField
            fullWidth
            placeholder="Search by name, code or district..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#370A68" }} />
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 400, background: "white" }}
          />
        </div>
      </div>

      <div className="table-container">
        <Accordion 
          elevation={0} 
          className="accordion-affiliated" 
          expanded={expanded.engineering}
          onChange={handleAccordionChange("engineering")}
          sx={{ mb: 4 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>Engineering Colleges (Full List)</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <CollegeTable rows={rowsEngg} searchQuery={searchQuery} />
          </AccordionDetails>
        </Accordion>

        <Accordion 
          elevation={0} 
          className="accordion-affiliated" 
          expanded={expanded.pharmacy}
          onChange={handleAccordionChange("pharmacy")}
          sx={{ mb: 4 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>Pharmacy Colleges (Full List)</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <CollegeTable rows={rowsPharmacy} searchQuery={searchQuery} />
          </AccordionDetails>
        </Accordion>

        <Accordion 
          elevation={0} 
          className="accordion-affiliated" 
          expanded={expanded.management}
          onChange={handleAccordionChange("management")}
          sx={{ mb: 4 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>Management Colleges (Full List)</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <CollegeTable rows={rowsMba} searchQuery={searchQuery} />
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="footer-note">
        <p>As per the latest update on 24-01-2026</p>
      </div>
    </div>
  );
};

export default AffliatedCollegesOP;
