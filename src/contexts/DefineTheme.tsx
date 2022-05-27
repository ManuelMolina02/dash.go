/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { themes } from '../styles/themes';

interface DefineThemeProps {
  children: ReactNode
}




export const DefineThemeContext = createContext({} as any);


export function DefineThemeProvider({ children }: DefineThemeProps) {
  const [themeDefined, setThemeDefined] = useState({ ...themes.bg.dark });
  const [colorDefined, setColorDefined] = useState({ ...themes.colors });



  const [newTheme, setNewTheme] = useState({
    bg: {},
    color: {},
  });

  const [colorsMatch, setColorsMatch] = useState([]);

  const [theme, setTheme] = useState('dark');
  const [color, setColor] = useState('purple');

  useEffect(() => {
    if (theme === 'dark') {
      setThemeDefined({ ...themes.bg.dark });

    } else if (theme === 'light') {
      setThemeDefined({ ...themes.bg.light });
    } else if (theme === 'purple') {
      setThemeDefined({ ...themes.bg.purple });
    }

  }, [theme])


  useEffect(() => {

    const selectMatchs = themes.colors.map(data => {
      const validateMatch = Object.values(data.match).map(data => data.includes(theme) ? 1 : 0)
      const validation = validateMatch.some(data => data === 1)


      return {
        ...data,
        playMatch: validation
      }
    })

    const selectMatchsColor = selectMatchs.filter(data => data.playMatch === true)

    setColorsMatch(selectMatchsColor)

  }, [theme])

  useEffect(() => {
    const newColor = colorsMatch.find(data => data.name === color)

    setNewTheme({
      bg: {
        ...themeDefined
      },
      color: {
        ...newColor
      }
    })

  }, [color, theme])




  return (
    <DefineThemeContext.Provider value={{ themeDefined, setTheme, theme, colorsMatch, setColor, color, newTheme }}>
      {children}
    </DefineThemeContext.Provider>
  );

}

export function useTheme() {
  const context = useContext(DefineThemeContext);

  return context
}
/*

export const DefineThemeProvider = ({ children }) => {
  const { theme } = useContext(DefineThemeContext);
  const themeDefined = useDefineTheme({ theme });

  return (
    <DefineThemeContext.Provider value={themeDefined}>
      {children}
    </DefineThemeContext.Provider>
  );
};*/