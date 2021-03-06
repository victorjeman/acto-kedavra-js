import { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

import { ESCAPE_BTN_CODE, WAIT_FOR_CSS_ANIMATION_TO_END } from 'settings/settings'

import { ReactComponent as IconClose } from 'assets/images/close.svg'

export const Modal = ({ title, children, onClose: handleClose }) => {
  const [cssPropBottom, setCSSPropBottom] = useState('-100%')

  const handleCloseLocal = () => {
    setCSSPropBottom('-100%')
    window.setTimeout(() => handleClose(), WAIT_FOR_CSS_ANIMATION_TO_END)
  }

  const checkIfEscapeIsDown = (event) => event.code === ESCAPE_BTN_CODE

  const handleCloseEscape = (event) => {
    if (checkIfEscapeIsDown(event)) handleCloseLocal()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleCloseEscape)
    setCSSPropBottom('0')

    return () => window.removeEventListener('keydown', handleCloseEscape)
    //eslint-disable-next-line
  }, [])

  return ReactDom.createPortal(
    <>
      <Overlay onClick={handleCloseLocal} />

      <Container bottom={cssPropBottom}>
        <Title>{title}</Title>
        <Content>{children}</Content>

        <Close onClick={handleCloseLocal}>
          <IconClose />
        </Close>
      </Container>
    </>,
    document.querySelector('.app'),
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`

const Container = styled.div`
  filter: drop-shadow(0px -4px 8px rgba(0, 0, 0, 0.1));
  position: fixed;
  z-index: 2;
  padding: 50px 20px 25px 20px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 24px 24px 0px 0px;
  transition: 0.7s ease-in-out;
  ${({ bottom }) => `bottom: ${bottom};`}
`

const Title = styled.h2`
  font-size: 24px;
  color: #14142b;
  line-height: 1.2;
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
`

const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 25px;

  &:hover path {
    stroke: #525570;
  }
`

const Content = styled.div``
