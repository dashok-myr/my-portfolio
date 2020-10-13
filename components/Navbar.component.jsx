import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useRouter } from 'next/router'
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab
    },
    carbon: {
        background: theme.palette.background.carbon,
        backgroundColor: theme.palette.common.carbon,
        backgroundSize: "20px 20px",
    },
    image: {
        height: "50px",
        width: "50px",
        borderRadius: "50px"
    }
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
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const router = useRouter()

    const handleChange = (e, value) => {
        setValue((value))
        const hrefMapper = {
            0: '/',
            1: 'experience',
            2: 'projects',
            3: 'contact'
        }
        router.push(hrefMapper[value])
    }
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.carbon}>
                    <Toolbar>
                        <Typography className={classes.tab}>DARIA USATYUK</Typography>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.tabContainer}>
                            <Tab className={classes.tab} label="About Me" />
                            <Tab className={classes.tab} label="Experience" />
                            <Tab className={classes.tab} label="Projects" />
                            <Tab className={classes.tab} label="Contact Me" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}
