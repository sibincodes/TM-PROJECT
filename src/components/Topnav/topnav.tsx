import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useLocation } from "react-router-dom";
import { Header } from "../../styles/header";
import { Breadcrumbs, Link } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: 1,
  borderColor: "#DDE2E4",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export function TopNav() {
  const path = useLocation();
  console.log("loaction", path);
  const pageName = path.pathname === "/" ? "Teacher Notes" : path.pathname;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const drawerWidth = 240;
  const breadcrumbs = [
    <Link underline="hover" key="1"  href="/" >
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      
      href="/material-ui/getting-started/installation/"
    >
      2021-2022
    </Link>,
    <Typography key="3" >
      Teacher Notes
    </Typography>,
  ];
  return (
    <Header>
      <AppBar className="header" color="inherit">
        <Toolbar>
          <Box className="header__logo">
            <img src="logo.png" />
          </Box>
          <Toolbar className="header__right">
            <Box>
              <Typography className="header__title">{pageName}</Typography>
              <Breadcrumbs
                separator={<object
                  data="/HeaderIcons/next.svg"
                  width="7"
                  height="14"
                />}
                className="header__links"

                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Box>

            <Box className="header__right--flex">
              <form className="header__search">
                <IconButton type="submit" aria-label="search">
                  <object
                    data="/HeaderIcons/Search.svg"
                    width="16"
                    height="16"
                  />
                </IconButton>
                <InputBase placeholder="Search" />
              </form>

              <IconButton
                aria-label="notifications"
                sx={{ marginRight: "18px" }}
              >
                <object
                  data="/HeaderIcons/Notification.svg"
                  width="14"
                  height="16"
                />
              </IconButton>
              <IconButton aria-label="questions" sx={{ marginRight: "18px" }}>
                <object
                  data="/HeaderIcons/Question.svg"
                  width="16"
                  height="16"
                />
              </IconButton>
              <IconButton aria-label="settings" sx={{ marginRight: "10px" }}>
                <object
                  data="/HeaderIcons/Settings.svg"
                  width="16"
                  height="16"
                  
                />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className="header__avatar"
              >
                <img src="/HeaderIcons/Avatar.png" />
              </IconButton>
            </Box>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Header>
  );
}
