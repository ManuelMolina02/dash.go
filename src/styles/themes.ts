export const themes = {
  bg: [
    {
      name: "dark",
      matchColors: ["purple", "green", "orange", "cyan", "teal", "pink"],

      primary: "#181B23",
      secondary: "#1F2029",
      tertiary: "#9F7AEA",

      contrastColor: "#9F7AEA",
      contrastLight: "#EDF2F7",
      contrastDark: "#E2E8F0",
    },
    {
      name: "light",
      matchColors: ["purple", "orange", "cyan"],

      primary: "#e5e5e5",
      secondary: "#f7f7f7",
      tertiary: "purple.500",

      contrastColor: "#f7f7f7",
      contrastLight: "#8287a9",
      contrastDark: "#f7f7f7",
    },
    {
      name: "purple",
      defaultColor: "",
      matchColors: ["green", "orange", "cyan", "teal"],

      primary: "#44337A",
      secondary: "#322659",
      tertiary: "purple.500",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastTertiary: "#E2E8F0",
    },
  ],
  colors: [
    {
      name: "purple",
      match: ["dark", "light"],

      primary: "#b794f4",
      secondary: "#9F7AEA",
      tertiary: "#805AD5",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastTertiary: "#E2E8F0",
    },
    {
      name: "green",
      match: ["dark"],

      primary: "#48BB78",
      secondary: "#38A169",
      tertiary: "#2F855A",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastTertiary: "#E2E8F0",
    },
    {
      name: "orange",
      match: ["dark", "light", "purple"],

      primary: "#ED8936",
      secondary: "#DD6B20",
      tertiary: "#C05621",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastTertiary: "#E2E8F0",
    },
    {
      name: "cyan",
      match: ["dark", "light", "purple"],

      primary: "#00B5D8",
      secondary: "#0987A0",
      tertiary: "#086F83",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastTertiary: "#E2E8F0",
    },
    {
      name: "teal",
      match: ["dark", "purple"],

      primary: "#4FD1C5",
      secondary: "#38B2AC",
      tertiary: "#285E61",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastTertiary: "#E2E8F0",
    },
    {
      name: "pink",
      match: ["dark"],

      primary: "#ED64A6",
      secondary: "#D53F8C",
      tertiary: "#B83280",

      contrastColor: "#F7FAFC",
      contrastLight: "#EDF2F7",
      contrastTertiary: "#E2E8F0",
    },
  ],
};
