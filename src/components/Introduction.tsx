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
  es: {
    welcome: "Mohamed Amine",
    theme: "Cambiar Tema",
    description: "Soy Mohamed, desarrollador full-stack junior con pasión por la tecnología y el aprendizaje continuo. He trabajado en diversos proyectos que me han permitido fortalecer mis habilidades en frontend y backend, así como mejorar mi capacidad para trabajar en equipo y resolver problemas de manera eficiente. Busco constantemente nuevos desafíos que me ayuden a crecer como profesional y aportar soluciones innovadoras."
  },
  ca: {
    welcome: "Mohamed Amine",
    theme: "Canvia el Tema",
    description: "I'm Mohamed, a junior full-stack developer with a passion for technology and continuous learning. I have worked on various projects that have helped me strengthen my frontend and backend skills, as well as improve my ability to work in a team and solve problems efficiently. I'm constantly looking for new challenges that will help me grow as a professional and contribute innovative solutions."
  },
  en: {
    welcome: "Mohamed Amine",
    theme: "Change Theme",
    description: "Soc en Mohamed, desenvolupador full-stack junior amb passió per la tecnologia i l'aprenentatge continu. He treballat en diversos projectes que m'han ajudat a millorar les meves habilitats tant en frontend com en backend, així com a reforçar la meva capacitat de treball en equip i resolució de problemes. Estic sempre a la recerca de nous reptes que em permetin créixer com a professional i aportar solucions innovadores."
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: Arial, sans-serif;
    transition: 0.3s;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`

const Icon = styled.a`
  font-size: 30px;
  color: ${(props) => props.theme.text};
  transition: 0.3s;
  
  &:hover {
    color: #007bff;
  }
`

const Select = styled.select`
  margin: 0.8rem 0;
  padding: 5px;
  font-size: 16px;
`

// const Button = styled.button`
// margin: 0.8rem;
// padding: 0.8rem 20px;
// border: none;
// cursor: pointer;
// font-size: 1rem;
// background-color: #007bff;
// color: white;
// border-radius: 5px;
// `

const ThemeButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
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
        <Content>
          <h1>{languageTexts[language].welcome}</h1>
          <h2>Developer</h2>
          <Select onChange={changeLanguage} value={language}>
            <option value="es">Español</option>
            <option value="ca">Català</option>
            <option value="en">English</option>
          </Select>
          <h3>{languageTexts[language].description}</h3>
        </Content>

        {/* <Button onClick={toggleTheme}>{languageTexts[language].theme}</Button> */}
        <ThemeButton onClick={toggleTheme}>
          {theme === darkTheme ? "🌞" : "🌙"}
        </ThemeButton>
        {/*  */}
        <ImageContainer>
          <ProfileImage src="https://via.placeholder.com/250" alt="Perfil" />
          <SocialLinks>
            <Icon href="https://linkedin.com" target="_blank">🔗</Icon>
            <Icon href="https://github.com" target="_blank">🐙</Icon>
            <Icon href="/cv.pdf" target="_blank">📄</Icon>
          </SocialLinks>
        </ImageContainer>
      </Container>
    </ThemeProvider>
  )
}

export default Portfolio