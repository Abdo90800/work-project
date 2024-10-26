"use client";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import Container from '@mui/material/Container';
import Filter from "./Filter";
import Drower from "./Drower";

export default function Page() {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="md">
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Showing" 
      />
      <Drower/>
      <Filter />
    </Container>
  );
}
