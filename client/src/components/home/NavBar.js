import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Redux/user";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles } from "@material-ui/core/styles";
import BuildIcon from "@material-ui/icons/Build";
import Box from "@material-ui/core/Box";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icon: {
    color: "white",
  },
}));

export default function Home() {
  const usuario = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* crear funcion op.ternario para rol admin = true --> show admin features */}
      {!usuario.id && (
        
        <Link to="/login">
          {" "}
          <MenuItem onClick={handleMenuClose}>Login</MenuItem>{" "}
        </Link>
      )}
      
      {!usuario.id && (
        <Link to="/NuevaCuenta">
          {" "}
          <MenuItem onClick={handleMenuClose}>Register</MenuItem>{" "}
        </Link>
      )}
      {usuario.id ? (
        <div>
          <h6 className="logueado">Hi {usuario.name}</h6>
        </div>
      ) : null}

      {/* verifica si el usuario registrado es admin */}
      {usuario.isAdmin && (
        <Link to="/admin">
          {" "}
          <MenuItem onClick={handleMenuClose}>Admin Panel</MenuItem>{" "}
        </Link>
      )}
      {!usuario.isAdmin && usuario.id ? (
        <Link to="/userActivity">
          {" "}
          <MenuItem onClick={handleMenuClose}>User Activity</MenuItem>{" "}
        </Link>
      ) : null}
      {usuario.id && (
        <Link to="/">
          {" "}
          <MenuItem onClick={() => dispatch(logoutUser())}>
            Logout
          </MenuItem>{" "}
        </Link>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <header id="home" className="header">
            <nav className="navbar fixed-top navbar-dark bg-dark">
              <div className="nav-center container">
                <Link to="/" className="logo">
                  <h1>
                    CHALLENGE <span> FULLSTACK</span>
                  </h1>
                </Link>

                <div className="nav-menu">
                  <ul className="nav-list">
                    <li className="nav-item">
                      <a href="/" className="nav-link scroll-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/catalogo" className="nav-link scroll-link">
                        Products
                      </a>
                    </li>
                  </ul>
                </div>

                <Box display="flex" justifyContent="flex-end">
                  {/* transforma el icono de usuario a admin */}
                  
                  {usuario.isAdmin && usuario.isAdmin ? (
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                    >
                      <BuildIcon fontSize="large" className={classes.icon} />
                    </IconButton>
                  ) : (
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                    >
                      <AccountCircle
                        fontSize="large"
                        className={classes.icon}
                      />
                    </IconButton>
                  )}
                  <div>
                    <Search />
                  </div>
                  <div className="hamburger">
                    <i className="fas fa-bars"></i>
                  </div>
                </Box>
              </div>
            </nav>
          </header>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
