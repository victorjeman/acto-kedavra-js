import { useState } from 'react'
import styled from 'styled-components'

export const ReadMore = ({ className, text, limit = 40 }) => {
  const [textToShow, setTextToShow] = useState(text.slice(0, limit))

  const toggle = () => {
    if (text.length > textToShow.length) setTextToShow(text)
    else setTextToShow(text.slice(0, limit))
  }

  return (
    <div className={className}>
      <p>{textToShow}</p>
      <Button onClick={toggle}>Read more</Button>
    </div>
  )
}

const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
`
