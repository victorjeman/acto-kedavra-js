import styled from 'styled-components'

export const Header = () => {
  return <HeaderStyled>I am a header</HeaderStyled>
}

const HeaderStyled = styled.header`
  height: 50px;
  background-color: #ddd;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
