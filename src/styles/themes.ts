export const themes = {
  bg: [
    {
      name: "dark",
      defaultColor: "purple",

      primary: "#181B23",
      secondary: "#1F2029",
      tertiary: "#9F7AEA",

      contrastColor: "#9F7AEA",
      contrastLight: "#EDF2F7",
      contrastDark: "#E2E8F0",
    },
    {
      name: "light",
      defaultColor: "purple",

      primary: "#e5e5e5",
      secondary: "#f7f7f7",
      tertiary: "purple.500",

      contrastColor: "#f7f7f7",
      contrastLight: "#8287a9",
      contrastDark: "#f7f7f7",
    },
    {
      name: "purple",
      defaultColor: "orange",

      primary: "#44337A",
      secondary: "#322659",
      tertiary: "purple.500",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastDark: "#E2E8F0",
    },
  ],
  colors: [
    {
      name: "purple",
      match: ["dark", "light"],

      primary: "#b794f4",
      secondary: "#9F7AEA",
      tertiary: "#6B46C1",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastDark: "#718096",
    },
    {
      name: "green",
      match: ["dark"],

      primary: "#48BB78",
      secondary: "#38A169",
      tertiary: "#2F855A",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastDark: "#718096",
    },
    {
      name: "orange",
      match: ["dark", "light", "purple"],

      primary: "#ED8936",
      secondary: "#ef8641",
      tertiary: "#e37b36",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastDark: "#718096",
    },
    {
      name: "cyan",
      match: ["dark", "light", "purple"],

      primary: "#00B5D8",
      secondary: "#0987A0",
      tertiary: "#0987A0",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastDark: "#718096",
    },
    {
      name: "teal",
      match: ["dark", "purple"],

      primary: "#4FD1C5",
      secondary: "#38B2AC",
      tertiary: "#285E61",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastDark: "#718096",
    },
    {
      name: "pink",
      match: ["dark", "light"],

      primary: "#ED64A6",
      secondary: "#D53F8C",
      tertiary: "#B83280",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastDark: "#718096",
    },
  ],
};
