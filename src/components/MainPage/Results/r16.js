import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
// import { Link } from "react-router-dom";
import "./Results-main.css";

const tableData = [
  { collegeCode: "G6", resultPdf: "G6-College wise Pass Fail List.pdf" },
  { collegeCode: "B6", resultPdf: "B6-College wise Pass Fail List.pdf" },
  { collegeCode: "3J", resultPdf: "3J-College wise Pass Fail List.pdf" },
  { collegeCode: "99", resultPdf: "99-College wise Pass Fail List.pdf" },
  { collegeCode: "52", resultPdf: "52-College wise Pass Fail List.pdf" },
  { collegeCode: "HQ", resultPdf: "HQ-College wise Pass Fail List.pdf" },
  { collegeCode: "KD", resultPdf: "KD-College wise Pass Fail List.pdf" },
  { collegeCode: "U4", resultPdf: "U4-College wise Pass Fail List.pdf" },
  { collegeCode: "NM", resultPdf: "NM-College wise Pass Fail List.pdf" },
  { collegeCode: "98", resultPdf: "98-College wise Pass Fail List.pdf" },
  { collegeCode: "NU", resultPdf: "NU-College wise Pass Fail List.pdf" },
  { collegeCode: "6E", resultPdf: "6E-College wise Pass Fail List.pdf" },
  { collegeCode: "K1", resultPdf: "K1-College wise Pass Fail List.pdf" },
  { collegeCode: "6D", resultPdf: "6D-College wise Pass Fail List.pdf" },
  { collegeCode: "51", resultPdf: "51-College wise Pass Fail List.pdf" },
  { collegeCode: "W6", resultPdf: "W6-College wise Pass Fail List.pdf" },
  { collegeCode: "6H", resultPdf: "6H-College wise Pass Fail List.pdf" },
  { collegeCode: "PC", resultPdf: "PC-College wise Pass Fail List.pdf" },
  { collegeCode: "6B", resultPdf: "6B-College wise Pass Fail List.pdf" },
  { collegeCode: "MP", resultPdf: "MP-College wise Pass Fail List.pdf" },
  { collegeCode: "6J", resultPdf: "6J-College wise Pass Fail List.pdf" },
  { collegeCode: "Q7", resultPdf: "Q7-College wise Pass Fail List.pdf" },
  { collegeCode: "NT", resultPdf: "NT-College wise Pass Fail List.pdf" },
  { collegeCode: "JA", resultPdf: "JA-College wise Pass Fail List.pdf" },
  { collegeCode: "L6", resultPdf: "L6-College wise Pass Fail List.pdf" },
  { collegeCode: "6G", resultPdf: "6G-College wise Pass Fail List.pdf" },
  { collegeCode: "6C", resultPdf: "6C-College wise Pass Fail List.pdf" },
  { collegeCode: "81", resultPdf: "81-College wise Pass Fail List.pdf" },
  { collegeCode: "MT", resultPdf: "MT-College wise Pass Fail List.pdf" },
  { collegeCode: "6F", resultPdf: "6F-College wise Pass Fail List.pdf" },
  { collegeCode: "NR", resultPdf: "NR-College wise Pass Fail List.pdf" },
];

const R16 = () => {
  return (
    <div className="results-main">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} align="center">
                {" "}
                <h4>
                  <b>B.Tech R-16 3-2 Results </b>
                </h4>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">College Code</TableCell>
              <TableCell align="center">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{item.collegeCode}</TableCell>
                <TableCell align="center">
                  <a
                    href={`http://jntugvk.ucev.in/R16/${item.resultPdf}`}
                    download={item.resultPdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.resultPdf}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default R16;
