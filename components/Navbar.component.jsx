import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useRouter } from "next/router";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
  },
  carbon: {
    background: theme.palette.background.carbon,
    backgroundColor: theme.palette.common.carbon,
    backgroundSize: "20px 20px",
  },
  image: {
    height: "50px",
    width: "50px",
    borderRadius: "50px",
  },
  menuButton: {
    marginLeft: "auto",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar() {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabValue, setTabValue] = useState(null);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleRoute = (e, value) => {
    const hrefMapper = {
      0: "/",
      1: "experience",
      2: "projects",
      3: "contact",
    };
    // updates url
    router.push(hrefMapper[value]);
  };

  useEffect(() => {
    const routerMapper = {
      "/": 0,
      "/experience": 1,
      "/projects": 2,
      "/contact": 3,
    };

    setTabValue(routerMapper[router.pathname]);
    setToggleDrawer(false);
  }, [router.pathname]);

  return tabValue !== null ? (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.carbon}>
          <Toolbar>
            <Typography className={classes.tab}>DARIA USATYUK</Typography>
            {!isMobile ? (
              <Tabs
                value={tabValue}
                onChange={handleRoute}
                className={classes.tabContainer}
              >
                <Tab className={classes.tab} label="About Me" />
                <Tab className={classes.tab} label="Experience" />
                <Tab className={classes.tab} label="Projects" />
                <Tab className={classes.tab} label="Contact Me" />
              </Tabs>
            ) : (
              <>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setToggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="top"
                  open={toggleDrawer}
                  onClose={() => setToggleDrawer(false)}
                >
                  <List>
                    {["About Me", "Experience", "Projects", "Contact Me"].map(
                      (text, index) => (
                        <ListItem
                          button
                          selected={tabValue === index}
                          key={text}
                          onClick={(e) => {
                            handleRoute(e, index);
                          }}
                        >
                          <ListItemText primary={text} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Drawer>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  ) : null;
}
