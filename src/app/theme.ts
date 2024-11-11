"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    h1: { fontSize: "74px" },
    h2: { fontSize: "56px" },
    h3: { fontSize: "44px" },
    h4: { fontSize: "34px" },
    h5: { fontSize: "30px" },
    h6: { fontSize: "28px" },
    subtitle1: { fontSize: "20px" },
    subtitle2: { fontSize: "16px" },
    body1: { fontSize: "14px" },
    body2: { fontSize: "12px" },
    caption: { fontSize: "10px" },
  },
});

export default theme;
