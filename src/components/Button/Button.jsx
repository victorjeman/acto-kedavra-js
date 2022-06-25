import styled from 'styled-components'

export const Button = ({ children, type = 'primary', size = 'medium', ...rest }) => {
  return (
    <ButtonStyled typeProp={type} size={size} {...rest}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  color: #fff;
  text-align: center;
  font-weight: 600;

  ${({ size }) => {
    let style = ``

    switch (size) {
      case 'small':
        style = `
          font-size: 10px;
          padding: 8px;
          border-radius: 8px;
        `
        break
      case 'medium':
        style = `
          font-size: 16px;
          padding: 16px;
          border-radius: 12px;
        `
        break

      default:
        break
    }

    return style
  }}

  ${({ typeProp }) => {
    let style = ``

    switch (typeProp) {
      case 'primary':
        style = `
          background-color: #6308f7;

          &:hover {
            background-color: #7b30f3;
          }
        `
        break
      case 'secondary':
        style = `
          background-color: transparent;
          border: 1px solid #6308f7;
          color: #6308f7;

          &:hover {
            color: #220552;
            border: 1px solid #220552;
          }
        `
        break

      default:
        break
    }

    return style
  }}
`
