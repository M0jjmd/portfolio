import { useState } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
interface Theme {
    background: string
    text: string
}

const lightTheme: Theme = {
    background: "#ffffff",
    text: "#000000"
}

const darkTheme: Theme = {
    background: "#000000",
    text: "#ffffff"
}
interface LanguageTexts {
    welcome: string
    theme: string
    description: string
}

const languageTexts: Record<string, LanguageTexts> = {
    es: { welcome: "Mohamed Amine", theme: "Cambiar Tema", description: "Soy Mohamed, desarrollador full-stack junior con pasión por la tecnología y el aprendizaje continuo. He trabajado en diversos proyectos que me han permitido fortalecer mis habilidades en frontend y backend, así como mejorar mi capacidad para trabajar en equipo y resolver problemas de manera eficiente. Busco constantemente nuevos desafíos que me ayuden a crecer como profesional y aportar soluciones innovadoras." },
    ca: { welcome: "Mohamed Amine", theme: "Canvia el Tema", description: "I'm Mohamed, a junior full-stack developer with a passion for technology and continuous learning. I have worked on various projects that have helped me strengthen my frontend and backend skills, as well as improve my ability to work in a team and solve problems efficiently. I'm constantly looking for new challenges that will help me grow as a professional and contribute innovative solutions." },
    en: { welcome: "Mohamed Amine", theme: "Change Theme", description: "Soc en Mohamed, desenvolupador full-stack junior amb passió per la tecnologia i l'aprenentatge continu. He treballat en diversos projectes que m'han ajudat a millorar les meves habilitats tant en frontend com en backend, així com a reforçar la meva capacitat de treball en equip i resolució de problemes. Estic sempre a la recerca de nous reptes que em permetin créixer com a professional i aportar solucions innovadores." }
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
                <h2>Developer</h2>
                <h3>{languageTexts[language].description}</h3>
                {/* <h3>{languageTexts[language].welcome}</h3> */}
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