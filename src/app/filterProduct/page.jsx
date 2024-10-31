"use client";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import Container from "@mui/material/Container";
import Filter from "./Filter";
import Drower from "./Drower";
import Link from "next/link";

import item from "../../data/item";

export default function Page() {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [priceFilter, setPriceFilter] = useState("All");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
        <Link href="/">Home</Link>
        <br />
        <br />
        <br />
        <br />

        <p>Beast Deals</p>
        <hr />
        <div>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={<Drower setPriceFilter={setPriceFilter} priceFilter={priceFilter} />}
          />
        </div>
      </Container>
      <Filter priceFilter={priceFilter} />
    </div>
  );
}