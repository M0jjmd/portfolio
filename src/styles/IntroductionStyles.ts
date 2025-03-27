import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 3rem;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${({ theme }) => theme.background === "#000000" ? "#f0f0f0" : "#f0f0f0"};
  padding: 10px;
  border-radius: 10px;
`

export const Icon = styled.a`
  font-size: 30px;
  color: ${(props) => props.theme.text};
  transition: 0.3s;
  
  &:hover {
    color: #007bff;
  }
`

export const ThemeButton = styled.button`
  padding: 0 3rem;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

export const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
`

export const FlagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
`

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`