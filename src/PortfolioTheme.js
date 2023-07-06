import { createTheme } from "@mui/material";

const portfolioTheme = createTheme({
    palette: {
        background: {
            default: "#FFF4E0",
            paper: "#00ff00",
        },
        primary: {
            main: "#bd542a",
        },
        secondary: {
            main: "#00ff00",
            contrastText: "#ffffff",
        },
        success: {
            main: "#00ff00",
        },
        successAlt: {
            main: "#00ff00"
        },
        error: {
            main: "#00ff00",
        },
        warning: {
            main: "#00ff00",
        },
        info: {
            main: "#00ff00",
        },
        accent: {
            main: "#CC704B",
            secondary: "#bd542a"
        }
    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "#FFF4E0",
                }
            }
        },
    }
});

export default portfolioTheme;