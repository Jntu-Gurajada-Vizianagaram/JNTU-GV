import "./Committee.css";


import Table from "@mui/material/Table";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";




const Committee = () => {
    const committee = {
        "members": [
          {
            "Sno": 1,
            "name": "Dr. G. Jaya Suma",
            "designation": "Registrar",
            "role": "Chairperson",
            "email": "registrar@jntugv.edu.in"
          },
          {
            "Sno": 2,
            "name": "Dr. K.C.B. Rao",
            "designation": "Director of Academic and Planning",
            "role": "Convener",
            "email": "dap@jntugv.edu.in"
          },
          {
            "Sno": 3,
            "name": "Dr. R. Rajeswara Rao",
            "designation": "Director of Academic Audit",
            "role": "Member",
            "email": "daa@jntugv.edu.in"
          },
          {
            "Sno": 4,
            "name": "Dr. G.J. Naga Raju",
            "designation": "Director of IR & P i/c",
            "role": "Member",
            "email": "dirp@jntugv.edu.in"
          },
          {
            "Sno": 5,
            "name": "Dr. B. Nalini",
            "designation": "WEGC Co-Ordinator",
            "role": "Member",
            "email": "wegc.secretary@jntugvcev.edu.in"
          },
          {
            "Sno": 6,
            "name": "Dr. A.V. Papa Rao",
            "designation": "Sports Co-Ordinator",
            "role": "Member",
            "email": " sports.coordinator@jntugv.edu.in "
          }
        ]
      };
      
  return (
    <div className="AffiliatedColleges">
    <TableContainer>
              <Table>
                <TableHead sx={{ background: "#3F6DD13D" }}>
                  <TableRow>
                    <TableCell>S.No</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Designation</TableCell>
                    <TableCell align="center">Role</TableCell>
                    <TableCell align="center">Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {committee.members.map((row) => (
                    <TableRow
                      key={row.Sno}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                       <TableCell align="left">{row.Sno}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.designation}</TableCell>
                      <TableCell align="center">{row.role}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    </div>
  );
};

export default Committee;
