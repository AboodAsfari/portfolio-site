import { createTheme } from "@mui/material";

const portfolioTheme = createTheme({
    palette: {
        background: {
            default: "#FFF4E0"
        },
        text: {
            main: "#BD542A",
            secondary: "#CC704B",
            accent: "#675D50"
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