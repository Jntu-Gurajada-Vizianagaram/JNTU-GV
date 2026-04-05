import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import React from "react";
import "./Boschairman.css";
import { columns, rows } from "./Boschairmandata";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#370A68",
    color: theme.palette.common.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "0.9rem",
    letterSpacing: "0.05em",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#444",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fcfaff",
  },
  "&:hover": {
    backgroundColor: "#f5f0ff !important",
    transition: "background-color 0.2s ease",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Boschairman() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const inputHandler = (e) => {
    const searchText = e.target.value.toLowerCase();

    const filtered = rows.filter((row) =>
      columns.some((column) => {
        const value = row[column.id]?.toString().toLowerCase() || "";
        return value.includes(searchText);
      })
    );
    setFilteredRows(filtered);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="tableBoschairman">
      <div className="bos-header-container">
        <h2 className="headBoschairman">Chairpersons - Board of Studies</h2>
        <div className="searchTextBoschairman">
          <TextField
            id="bos-search"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            placeholder="Search by programme or name..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#370A68" }} />
                </InputAdornment>
              ),
              className: "search-field-root"
            }}
          />
        </div>
      </div>

      <div className="searchBoschairman">
        <Paper className="table-paper-root" sx={{ mb: 4 }}>
          <TableContainer>
            <Table aria-label="bos chairpersons table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, rowIndex) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row["s.no"] || rowIndex}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </StyledTableRow>
                    );
                  })}
                {filteredRows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center" sx={{ py: 3, color: "#888" }}>
                      No matching records found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Boschairman;
