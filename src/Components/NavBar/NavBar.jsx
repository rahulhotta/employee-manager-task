import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Popover from "@mui/material/Popover";
import "./NavBar.css";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
const drawerWidth = 540;
const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Cards",
    path: "cards",
  },
  {
    name: "Details",
    path: "details",
  },
  {
    name: "Graph",
    path: "graph",
  },
];

export default function DrawerAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div className="drawer__content">
      <form className="employee-form">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Id" variant="outlined" />
        <TextField id="outlined-basic" label="D.O.J" variant="outlined" />
        <TextField id="outlined-basic" label="Project" variant="outlined" />
        <label className="drawer__form__button drawer__form__image__input"> Employee Photo
        <Input type="file" />
        </label>
        <div className="drawer__buttons__container">
          <button onClick={(e)=>{
            e.preventDefault();
            handleDrawerToggle()
            }}
             className="drawer__form__button">Cancel</button>
          <button type="submit" className="drawer__form__button">Submit</button>
        </div>
      </form>
    </div>
  );

  //   const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div sx={{ display: "flex" }}>
      <div className="navbar__container">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <div className="navbar__links__container">
          {navItems.map((item) => (
            <Button key={item.name} sx={{ color: "#fff" }}>
              <NavLink to={item.path} className="navbar__link">
                {item.name}
              </NavLink>
            </Button>
          ))}
        </div>
        <div>
          <img
            src={props.currentUser.img}
            alt=""
            className="navbar__user__img"
            onClick={handleClick}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div
              className="navbar__logout__btn"
              onClick={() => {
                props.setIsLoggedIn(false);
              }}
            >
              Log Out
            </div>
          </Popover>
        </div>
      </div>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}
