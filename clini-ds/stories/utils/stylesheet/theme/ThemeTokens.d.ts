import { PaletteColorOptions } from "@mui/material";

interface ClinicorpPalette {
  primaryUltraLight?: string,
  primaryLightest?: string,
  primaryLighter?: string,
  primaryLight?: string,
  primaryPure?: string,
  primaryDark?: string,
  primaryDarker?: string,
  primaryDarkest?: string,

  cosmosUltraLight?: string,
  cosmosLightest?: string,
  cosmosLighter?: string,
  cosmosLight?: string,
  cosmosPure?: string,
  cosmosDark?: string,
  cosmosDarker?: string,
  cosmosDarkest?: string,

  dangerUltraLight?: string,
  dangerLightest?: string,
  dangerLighter?: string,
  dangerLight?: string,
  dangerPure?: string,
  dangerDark?: string,
  dangerDarker?: string,
  dangerDarkest?: string,

  warningUltraLight?: string,
  warningLightest?: string,
  warningLighter?: string,
  warningLight?: string,
  warningPure?: string,
  warningDark?: string,
  warningDarker?: string,
  warningDarkest?: string,

  infoUltraLight?: string,
  infoLightest?: string,
  infoLighter?: string,
  infoLight?: string,
  infoPure?: string,
  infoDark?: string,
  infoDarker?: string,
  infoDarkest?: string,

  successUltraLight?: string,
  successLightest?: string,
  successLighter?: string,
  successLight?: string,
  successPure?: string,
  successDark?: string,
  successDarker?: string,
  successDarkest?: string,

  supportUltraLight?: string,
  supportLightest?: string,
  supportLighter?: string,
  supportLight?: string,
  supportPure?: string,
  
  white?: string,
  black?: string,

  blushUltraLight?: string,
  blushLightest?: string,
  blushLighter?: string,
  blushLight?: string,
  blushPure?: string,
  blushDark?: string,
  blushDarker?: string,
  blushDarkest?: string,

  navalUltraLight?: string,
  navalLightest?: string,
  navalLighter?: string,
  navalLight?: string,
  navalPure?: string,
  navalDark?: string,
  navalDarker?: string,
  navalDarkest?: string,

  profileColor0?: string,
  profileColor1?: string,
  profileColor2?: string,
  profileColor3?: string,
  profileColor4?: string,
  profileColor5?: string,
  profileColor6?: string,

  grayLight?: string;
  grayPure?: string;

  transparent?: string;

  fabBoxShadow?: string;

  buttonIconHover?: string;

  buttonBorderRadius?: {
    rounded_sm?: string,
    rounded?: string,
    rounded_full?: string,
  };
}

interface borderRadius {
  borderRadius: {
    "rounded-none": string;
    "rounded-sm": string;
    "rounded": string;
    "rounded-md": string;
    "rounded-lg": string;
    "rounded-xl": string;
    "rounded-2xl": string;
    "rounded-3xl": string;
    "rounded-full": "9999px",
  }
}

declare module "@mui/material/styles" {
  interface Theme extends borderRadius { }

  interface ThemeOptions extends borderRadius { }

  interface PaletteColorOptions { }

  interface Palette extends ClinicorpPalette { }

  interface PaletteOptions extends ClinicorpPalette { }

  interface SimplePaletteColorOptions extends ClinicorpPalette { }
}