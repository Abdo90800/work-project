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
export default function Drower() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(5);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
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
            paddingLeft:"30px",
            backgroundColor: "#f0f0f0",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"flex-start",
            
          },
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">All Filters</FormLabel>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ margin: "15px" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="All Categories"
            />
            <FormControlLabel
              value="Category No.1"
              control={<Radio />}
              label="Category No.1"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Category No."
            />
            <FormControlLabel
              value="Category No.2"
              control={<Radio />}
              label="Category No2."
            />
            <FormControlLabel
              value="Category No.3"
              control={<Radio />}
              label="Category No3."
            />
            <FormControlLabel
              value="Category No.4"
              control={<Radio />}
              label="Category No4."
            />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label"> Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ margin: "15px" }}
          >
            <FormControlLabel value="female" control={<Radio />} label="All" />
            <FormControlLabel
              value="Category No.1"
              control={<Radio />}
              label="Up to 999 EGP"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="1000 to 1999 EGP"
            />
            <FormControlLabel
              value="Category No.2"
              control={<Radio />}
              label="2000 to 2999 EGP"
            />
            <FormControlLabel
              value="Category No.3"
              control={<Radio />}
              label="3000 to 3999 EGP"
            />
            <FormControlLabel
              value="Category No.4"
              control={<Radio />}
              label="4000 to 4999 EGP"
            />
            <FormControlLabel
              value="Category No.4"
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

        <Box sx={{marginBottom:"20px"}}>
          <Button sx={{ color:"black", borderRadius:"10px", width:"164px", height:"40px", border:"1px solid #6C788B", margin:"12px"}}>
            Clear All
          </Button>
          <Button sx={{background:"#6C788B", color:"white", borderRadius:"10px", width:"164px", height:"40px"}}>
            Apply Filter
          </Button>
        </Box>
      </Drawer>
    </div>
  );
}
