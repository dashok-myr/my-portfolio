import React from "react";
import Navbar from "../components/Navbar.component";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { defaultTheme } from "../ui/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import FooterComponent from "../components/Footer.component"


function MyApp({ Component, pageProps }) {
    return (
        <>
            <MuiThemeProvider theme={defaultTheme}>
                <CssBaseline/>
                <Navbar/>
                <Component {...pageProps} />
                <FooterComponent/>
            </MuiThemeProvider>
        </>
    )
}

export default MyApp
