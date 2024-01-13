import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function ChairPersonTable({ columns, rows }) {
  return (
    <Box sx={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8, 25, 100]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
