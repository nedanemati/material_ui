import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9 !important";
const arcOrange = "#FFBA60 !important";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    Primery: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    typography: {
      tab: {
        fontFamily: "Raleway !important",
        textTransform: "none !important",
        fontWeight: 700,
        fontSize: "1rem !important",
        color: "white !important",
      },
      estimate: {
        fontFamily: "pacifico !important",
        textTransform: "none !important",
        fontSize: "1rem !important",
        color: "white !important",
      },
      h2: {
        fontFamily: "Raleway",
        fontSize: "2.5rem",
        fontWeight: 700,
        color: `${arcBlue} !important `,
        lineHeight: 1.5,
      },
    },
  },
});
