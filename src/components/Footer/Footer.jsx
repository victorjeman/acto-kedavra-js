import styled from 'styled-components'

export const Footer = () => {
  return <FooterStyled>I am a footer</FooterStyled>
}

const FooterStyled = styled.footer`
  height: 50px;
  background-color: #ddd;
  text-align: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
