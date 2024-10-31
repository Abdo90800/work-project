"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LocalSwitcher from "./LocalSwitcher";
import Image from "next/image";
import imag from "../../../public/images/PRINT.png";
import Select from "@mui/material/Select";
import { FaRegUserCircle } from "react-icons/fa";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import path from "path";

function NavBar() {
  const t = useTranslations("");
  const pages = [t("home"), t("aboutus"), t("contactus")];
  // const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drink, setDrink] = useState("LOGIN");
  const handleChange = (event) => {
    setDrink(event.target.value);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="bg-white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image width={128} height={44} src={imag} alt="Logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="text-[#000]" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center", color: "#000" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}

              <Select
                value={drink}
                onChange={handleChange}
                className="w-[120px] h-[35px] p-[8px] mx-3 border-[1px  #6C788B] gap-[8px] bg-[#545F71] text-white rounded-[12px]"
              >
                <MenuItem value="LOGIN">
                  <div className="flex items-center justify-center gap-2">
                    <FaRegUserCircle size={22} />{" "}
                    <span className="text-[13px]">{t("login")}</span>
                  </div>
                </MenuItem>
                <MenuItem value="SIGNIN">
                  <div className="flex items-center justify-center gap-2">
                    <FaRegUserCircle size={23} />{" "}
                    <span className="text-[13px]">{t("signin")}</span>
                  </div>
                </MenuItem>
              </Select>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#000", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ flexGrow: 0 }}
            className="flex items-center justify-center"
          >
            <Button>
              <CiSearch className="text-[32px] text-black" />
            </Button>

            <Button>
              <CiHeart className="text-[32px] text-black" />
            </Button>
            <Button>
              <PiShoppingCartSimpleThin className="text-[32px] text-black" />
            </Button>

            <LocalSwitcher />

            <Box className="">
              <Select
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                value={drink}
                onChange={handleChange}
                className="w-[144px] h-[41px] p-[8px]  ml-[8px] border-[1px  #6C788B] gap-[8px] bg-[#545F71] text-white rounded-[12px]"
              >
                <MenuItem value="LOGIN">
                  <div className="flex items-center justify-center gap-2">
                    <FaRegUserCircle size={22} />{" "}
                    <span className="text-[13px]">{t("login")}</span>
                  </div>
                </MenuItem>
                <MenuItem value="SIGNIN">
                  <div className="flex items-center justify-center gap-2">
                    <FaRegUserCircle size={20} />{" "}
                    <span className="text-[15px]">{t("signin")}</span>
                  </div>
                </MenuItem>
              </Select>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
