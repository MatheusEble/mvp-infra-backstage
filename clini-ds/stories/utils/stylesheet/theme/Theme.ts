import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiStepButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          // color: "#7f7f80", // essa é a cor atual dos ícones, não será criado um design token para ela e talvez mude para totalmente preta, mas é necessário alinhar com designers antes
        },
      },
    },
  },
  palette: {
    secondary: {
      light: "#f2996e",
      main: "#ec6726",
      dark: "#a8491b",
      contrastText: "#fff",
    },
    error: {
      light: "#e27474",
      main: "#d32f2f",
      dark: "#962121",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffd559",
      main: "#ffc107",
      dark: "#b58905",
      contrastText: "#fff",
    },
    info: {
      light: "#6ab9f7",
      main: "#2196f3",
      dark: "#176bad",
      contrastText: "#fff",
    },
    success: {
      light: "#87c98a",
      main: "#4caf50",
      dark: "#367c39",
      contrastText: "#fff",
    },

    primary: {
      light: "#f2996e",
      main: "#ec6726",
      dark: "#a8491b",
      contrastText: "#fff",
    },

    white: "#ffffff",
    black: "#000000",

    primaryUltraLight: `#fdf0e9`,
    primaryLightest: `#f9d0bc`,
    primaryLighter: `#f6b99b`,
    primaryLight: `#f2996e`,
    primaryPure: "#ec6726",
    primaryDark: `#a8491b`,
    primaryDarker: `#823915`,
    primaryDarkest: `#632b10`,

    cosmosUltraLight: `#f2e7fd`,
    cosmosLightest: `#d6b4f9`,
    cosmosLighter: `#c28ff6`,
    cosmosLight: `#a75cf2`,
    cosmosPure: `#7b0ceb`,
    cosmosDark: `#5709a7`,
    cosmosDarker: `#440781`,
    cosmosDarkest: `#340563`,

    dangerUltraLight: `#fbeaea`,
    dangerLightest: `#f1bfbf`,
    dangerLighter: `#eb9f9f`,
    dangerLight: `#e27474`,
    dangerPure: `#d32f2f`,
    dangerDark: `#962121`,
    dangerDarker: `#741a1a`,
    dangerDarkest: `#591414`,

    warningUltraLight: `#fff9e6`,
    warningLightest: `#ffecb2`,
    warningLighter: `#ffe28d`,
    warningLight: `#ffd559`,
    warningPure: `#ffc107`,
    warningDark: `#b58905`,
    warningDarker: `#8c6a04`,
    warningDarkest: `#6b5103`,

    infoUltraLight: `#e9f5fe`,
    infoLightest: `#badefb`,
    infoLighter: `#99cff9`,
    infoLight: `#6ab9f7`,
    infoPure: `#2196f3`,
    infoDark: `#176bad`,
    infoDarker: `#125386`,
    infoDarkest: `#0e3f66`,

    successUltraLight: `#edf7ee`,
    successLightest: `#c8e6c9`,
    successLighter: `#addaaf`,
    successLight: `#87c98a`,
    successPure: `#4caf50`,
    successDark: `#367c39`,
    successDarker: `#2a602c`,
    successDarkest: `#204a22`,

    supportUltraLight: `#eaeaeb`,
    supportLightest: `#bdbec1`,
    supportLighter: `#9d9ea3`,
    supportLight: `#707278`,
    supportPure: `#292d36`,

    blushUltraLight: `#feecf7`,
    blushLightest: `#fdc4e6`,
    blushLighter: `#fca8da`,
    blushLight: `#fb80c9`,
    blushPure: `#f941af`,
    blushDark: `#b12e7c`,
    blushDarker: `#892460`,
    blushDarkest: `#691b4a`,

    navalUltraLight: `#eff2f3`,
    navalLightest: `#ced7db`,
    navalLighter: `#b6c3ca`,
    navalLight: `#94a8b1`,
    navalPure: `#607d8b`,
    navalDark: `#445963`,
    navalDarker: `#35454c`,
    navalDarkest: `#28353a`,

    profileColor0: `#dce6f2`,
    profileColor1: `#d4c9f1`,
    profileColor2: `#ffccd5`,
    profileColor3: `#ece4d8`,
    profileColor4: `#d0e8de`,
    profileColor5: `#edd0c1`,
    profileColor6: `#f5c1a1`,

    grayLight: `#FAFBFC`,
    grayPure: `#CCC`,

    transparent: `transparent`,

    //FloatingActionButton
    fabBoxShadow: `0px 3px 9px -4px black;`,

    //Hovers
    buttonIconHover: `rgba(153,153,153,0.12)`,

    // button borders
    buttonBorderRadius: {
      rounded_sm: "2px",
      rounded: "4px",
      rounded_full: "50%",
    },
  },
  borderRadius: {
    "rounded-none": "0px",
    "rounded-sm": "0.125rem",
    "rounded": "0.25rem",
    "rounded-md": "0.375rem",
    "rounded-lg": "0.5rem",
    "rounded-xl": "0.75rem",
    "rounded-2xl": "1rem",
    "rounded-3xl": "1.5rem",
    "rounded-full": "9999px",
  }
});

export default theme;
