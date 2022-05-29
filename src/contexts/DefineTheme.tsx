/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { themes } from '../styles/themes';

//definindo uma interface para o contexto
interface DefineThemeProps {
  children: ReactNode
}

//criando um contexto
export const DefineThemeContext = createContext({} as any);

//criando um provider
export function DefineThemeProvider({ children }: DefineThemeProps) {
  //definindo o tema e color default
  const [background, setBackground] = useState('dark');
  const [color, setColor] = useState('purple');

  //cores que dão match com o tema
  const [colorsMatch, setColorsMatch] = useState([]);

  //tema definido
  const [theme, setTheme] = useState({
    bg: themes.bg[0],
    color: themes.colors[0],
  });


  //função que define o tema
  const newTheme = themes.bg.find((item) => item.name === background);

  //função que define a cor
  const newColor = colorsMatch.find(data => data.name === color)

  //retornando todas as cores que tem match com o tema definido
  const selectMatchs = themes.colors.map(data => {
    const validateMatch = Object.values(data.match).map(data => data.includes(background) ? 1 : 0)
    const validation = validateMatch.some(data => data === 1)

    return {
      ...data,
      playMatch: validation,
    }
  })

  const selectMatchsColor = selectMatchs.filter(data => data.playMatch === true)

  //definindo o tema
  useEffect(() => {
    if (newTheme.name !== 'purple') {
      setTheme({
        bg: newTheme ? newTheme : themes.bg[0],
        color: themes.colors[0],
      })
    } else {
      setTheme({
        bg: newTheme ? newTheme : themes.bg[0],
        color: themes.colors[2],
      })
    }
    setColor('')

  }, [background])



  //definindo as cores no click
  useEffect(() => {
    setTheme({
      bg: newTheme ? newTheme : themes.bg[0],
      color: newColor ? newColor : themes.colors[0],
    })

  }, [color])

  //definindo as cores que tem match com o tema
  useEffect(() => {

    setColorsMatch(selectMatchsColor)

  }, [background])

  //preparando constantes para envio
  const variablesTheme = {
    state: {
      background,
      color,
    },
    setState: {
      setBackground,
      setColor
    },
    colorsMatch
  }

  return (
    <DefineThemeContext.Provider value={{ variablesTheme, theme }
    }>
      {children}
    </DefineThemeContext.Provider >
  );
}

export function useTheme() {
  const context = useContext(DefineThemeContext);
  return context
}