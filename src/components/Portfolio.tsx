import React, { useState } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

// Definir tipos de los temas
interface Theme {
    background: string
    text: string
}

// Definir temas de color
const lightTheme: Theme = {
    background: "#ffffff",
    text: "#000000"
}

const darkTheme: Theme = {
    background: "#000000",
    text: "#ffffff"
}

// Definir los textos para cada idioma
interface LanguageTexts {
    welcome: string
    theme: string
}

// Textos en diferentes idiomas
const languageTexts: Record<string, LanguageTexts> = {
    es: { welcome: "Bienvenido a mi portafolio", theme: "Cambiar Tema" },
    ca: { welcome: "Benvingut al meu portafoli", theme: "Canvia el Tema" },
    en: { welcome: "Welcome to my portfolio", theme: "Change Theme" }
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: 0.3s;
    font-family: Arial, sans-serif;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
`

const Portfolio: React.FC = () => {
    const [theme, setTheme] = useState<Theme>(darkTheme)
    const [language, setLanguage] = useState<string>("es")

    const toggleTheme = () => {
        setTheme(theme === darkTheme ? lightTheme : darkTheme)
    }

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <h1>{languageTexts[language].welcome}</h1>
                <Button onClick={toggleTheme}>{languageTexts[language].theme}</Button>
                <select onChange={changeLanguage} value={language}>
                    <option value="es">Español</option>
                    <option value="ca">Català</option>
                    <option value="en">English</option>
                </select>
            </Container>
        </ThemeProvider>
    )
}

export default Portfolio