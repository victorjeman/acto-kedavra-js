import ReactDom from 'react-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

import { ReactComponent as IconClose } from 'assets/images/close.svg'

const CODE_ESCAPE = 'Escape'

export const Modal = ({ title, children, onClose }) => {
  const [bottom, setBottom] = useState('-100%')

  const handleClose = () => {
    setBottom('-100%')

    window.setTimeout(() => {
      onClose()
    }, 400)
  }

  const closeOnEscape = (event) => {
    if (event.code === CODE_ESCAPE) handleClose()
  }

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscape)
    setBottom('0')

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
    }
    //eslint-disable-next-line
  }, [])

  return ReactDom.createPortal(
    <>
      <Overlay onClick={handleClose} />

      <Container bottom={bottom}>
        <Title>{title}</Title>
        <Content>{children}</Content>

        <Close onClick={handleClose}>
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
