import {createTheme, PaletteOptions, ThemeOptions} from "@mui/material/styles";

const commonThemeProperties: ThemeOptions = {
    shape: {
        borderRadius: 6,
    }
};

const lightPalette: PaletteOptions = {
    mode: "light",
    primary: {
        main: "#475be8",
        contrastText: "#fcfcfc",
    },
    secondary: {
        main: "#DADEFA",
        contrastText: "#fcfcfc",
    },
    background: {
        default: "#f0f0f0",
        paper: "#fcfcfc",
    },
    success: {
        main: "#2ed480",
        contrastText: "#fcfcfc",
    },
    error: {
        main: "#fa5480",
        contrastText: "#fcfcfc",
    },
    warning: {
        main: "#fa8c80",
        contrastText: "#fcfcfc",
    },
    info: {
        main: "#0b8280",
        contrastText: "#fcfcfc",
    },
    divider: "rgba(0,0,0,0)",
    text: {
        primary: "#11142d",
        secondary: "#9f9f9f",
        disabled: "#c1c1c1",
    },
};

const LightTheme = createTheme({
    ...commonThemeProperties,
    palette: lightPalette,
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: "#fcfcfc",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01))",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h5: {
                    fontWeight: 800,
                    lineHeight: "2rem",
                },
            },
        },
    },
});

const darkPalette: PaletteOptions = {
    mode: "dark",
    primary: {
        main: "#475be8",
        contrastText: "#fcfcfc",
    },
    secondary: {
        main: "#DADEFA",
        contrastText: "#fcfcfc",
    },
    background: {
        default: "#212121",
        paper: "#2B2B2B",
    },
    success: {
        main: "#2ed480",
        contrastText: "#fcfcfc",
    },
    error: {
        main: "#fa5480",
        contrastText: "#fcfcfc",
    },
    warning: {
        main: "#fa8c80",
        contrastText: "#fcfcfc",
    },
    info: {
        main: "#0b8280",
        contrastText: "#fcfcfc",
    },
    divider: "rgba(0,0,0,0)",
    text: {
        primary: "#fcfcfc",
        secondary: "rgba(255,255,255,0.7)",
        disabled: "#d1d1d1",
    },
};

const DarkTheme = createTheme({
    ...commonThemeProperties,
    palette: darkPalette,
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.025))",
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                color: "transparent",
            },
        },
        MuiTypography: {
            styleOverrides: {
                h5: {
                    fontWeight: 800,
                    lineHeight: "2rem",
                },
            },
        },
    },
});

export {LightTheme, DarkTheme};