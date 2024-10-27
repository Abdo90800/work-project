"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import { useState } from "react";
import Box from "@mui/material/Box";

export default function Drower({ setPriceFilter, priceFilter }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(5);
  const [selectedPrice, setSelectedPrice] = useState(priceFilter);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleApplyFilter = () => {
    setPriceFilter(selectedPrice);
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          border: "1px solid #545F71",
          borderRadius: "10px",
          width: "120px",
          height: "40px",
        }}
      >
        <svg
          width="20"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 12.9993H9.63622M3.50724 12.9993H1M3.50724 12.9993C3.50724 12.2098 3.83003 11.4526 4.4046 10.8943C4.97918 10.336 5.75846 10.0224 6.57103 10.0224C7.38359 10.0224 8.16288 10.336 8.73745 10.8943C9.31202 11.4526 9.63481 12.2098 9.63481 12.9993C9.63481 13.7889 9.31202 14.5461 8.73745 15.1043C8.16288 15.6626 7.38359 15.9763 6.57103 15.9763C5.75846 15.9763 4.97918 15.6626 4.4046 15.1043C3.83003 14.5461 3.50724 13.7889 3.50724 12.9993ZM27 22.0217H18.9217M18.9217 22.0217C18.9217 22.8114 18.5982 23.5695 18.0235 24.1279C17.4488 24.6863 16.6693 25 15.8565 25C15.044 25 14.2647 24.685 13.6901 24.1267C13.1155 23.5684 12.7928 22.8112 12.7928 22.0217M18.9217 22.0217C18.9217 21.232 18.5982 20.4753 18.0235 19.9169C17.4488 19.3584 16.6693 19.0447 15.8565 19.0447C15.044 19.0447 14.2647 19.3584 13.6901 19.9167C13.1155 20.4749 12.7928 21.2321 12.7928 22.0217M12.7928 22.0217H1M27 3.97696H22.6362M16.5072 3.97696H1M16.5072 3.97696C16.5072 3.18742 16.83 2.43022 17.4046 1.87193C17.9792 1.31364 18.7585 1 19.571 1C19.9734 1 20.3718 1.077 20.7435 1.22661C21.1152 1.37621 21.453 1.59549 21.7374 1.87193C22.0219 2.14837 22.2476 2.47654 22.4016 2.83772C22.5556 3.1989 22.6348 3.58602 22.6348 3.97696C22.6348 4.3679 22.5556 4.75501 22.4016 5.11619C22.2476 5.47737 22.0219 5.80555 21.7374 6.08198C21.453 6.35842 21.1152 6.5777 20.7435 6.7273C20.3718 6.87691 19.9734 6.95391 19.571 6.95391C18.7585 6.95391 17.9792 6.64027 17.4046 6.08198C16.83 5.52369 16.5072 4.76649 16.5072 3.97696Z"
            stroke="#545F71"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
        <span style={{ fontSize: "14px", color: "#545F71", marginLeft: "5px" }}>
          Filter
        </span>
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          ".MuiPaper-root": {
            width: 388,
            position: "fixed",
            left: 0,
            height: "100vh ",
            overflow: "auto",
            padding: "8px",
            paddingLeft: "30px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          },
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">All Filters</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{ margin: "15px" }}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel
              value="     Category No.1    "
              control={<Radio />}
              label="    Category No.1     "
            />
            <FormControlLabel
              value="     Category No.1   "
              control={<Radio />}
              label="    Category No.1    "
            />
            <FormControlLabel
              value="    Category No.1    "
              control={<Radio />}
              label="    Category No.1    "
            />
            <FormControlLabel
              value="    Category No.1    "
              control={<Radio />}
              label="     Category No.1   "
            />
            <FormControlLabel
              value="    Category No.1    "
              control={<Radio />}
              label="    Category No.1    "
            />
            <FormControlLabel
              value="   Category No.1     "
              control={<Radio />}
              label="    Category No.1   "
            />
          </RadioGroup>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={selectedPrice}
            name="radio-buttons-group"
            sx={{ margin: "15px" }}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel
              value="Up to 999 EGP"
              control={<Radio />}
              label="Up to 999 EGP"
            />
            <FormControlLabel
              value="1000 to 1999 EGP"
              control={<Radio />}
              label="1000 to 1999 EGP"
            />
            <FormControlLabel
              value="2000 to 2999 EGP"
              control={<Radio />}
              label="2000 to 2999 EGP"
            />
            <FormControlLabel
              value="3000 to 3999 EGP"
              control={<Radio />}
              label="3000 to 3999 EGP"
            />
            <FormControlLabel
              value="4000 to 4999 EGP"
              control={<Radio />}
              label="4000 to 4999 EGP"
            />
            <FormControlLabel
              value="5000 & above EGP"
              control={<Radio />}
              label="5000 & above EGP"
            />
          </RadioGroup>

          <FormLabel className="mb-[10px]" id="demo-radio-buttons-group-label">
            Rating
          </FormLabel>

          <FormControlLabel
            value="Category No.4"
            control={<Radio />}
            label={<Rating name="read-only" value={value} readOnly />}
            sx={{ margin: "8px" }}
          />
        </FormControl>

        <Box
          sx={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              color: "black",
              borderRadius: "10px",
              width: "164px",
              height: "40px",
              border: "1px solid #6C788B",
              marginLeft: "12px",
            }}
            onClick={() => setSelectedPrice("All")}
          >
            Clear All
          </Button>
          <Button
            sx={{
              background: "#6C788B",
              color: "white",
              borderRadius: "10px",
              width: "164px",
              height: "40px",
            }}
            onClick={handleApplyFilter}
          >
            Apply Filter
          </Button>
        </Box>
      </Drawer>
    </div>
  );
}
