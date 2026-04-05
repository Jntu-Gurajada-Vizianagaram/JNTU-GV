import React from "react";
import "./Programs_Offered.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { rows, columns } from "./ProgramsOfferedData";

const AcademicsOP = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredRows = rows.filter((row) =>
    columns.some((column) =>
      row[column.id]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
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
    <div className="tableProgramOffered">
      <div className="programs-offered-header">
        <div className="title-section">
          <h2 className="headProgramsOffered">Programs Offered</h2>
          <p className="subtitle">Undergraduate and Postgraduate courses available at JNTU-GV</p>
        </div>
        <div className="search-section">
          <TextField
            fullWidth
            placeholder="Search programs..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(0);
            }}
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

      <div className="table-wrapper">
        <Paper elevation={0} sx={{ width: "100%", overflow: "hidden", border: "1px solid #eee", borderRadius: "12px" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="programs table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ 
                        minWidth: column.minWidth,
                        backgroundColor: "#370A68",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code || index} sx={{ "&:nth-child(even)": { backgroundColor: "#f9f9f9" } }}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} sx={{ color: "#333", fontWeight: 500 }}>
                            {column.format && typeof value === "number" ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                {filteredRows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center" sx={{ py: 3, color: "#999" }}>
                      No programs found matching your search.
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
            sx={{
              backgroundColor: "#f8f9fa",
              borderTop: "1px solid #eee",
              color: "#370A68",
              "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "0.75rem"
              }
            }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AcademicsOP;
