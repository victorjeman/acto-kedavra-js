import { useState } from 'react'
import styled from 'styled-components'

import { Button } from 'components/Button/Button'

export const ActorForm = (props) => {
  const {
    image: defaultImage = '',
    name: defaultName = '',
    occupation: defaultOccupation = '',
    hobbies: defaultHobbies = '',
    description: defaultDescription = '',
    id: actorID,
  } = props

  const { onSubmit: handleSubmit, onModalClose: handleModalClose } = props

  const [image, setImage] = useState(defaultImage)
  const [name, setName] = useState(defaultName)
  const [occupation, setOccupation] = useState(defaultOccupation)
  const [hobbies, setHobbies] = useState(defaultHobbies)
  const [description, setDescrition] = useState(defaultDescription)

  const hobbiesToArray = (hobbies) => {
    const hobbiesIsAstring = !window.Array.isArray(hobbies)

    if (hobbiesIsAstring) return hobbies ? hobbies.split(',') : ['no hobbies']

    return hobbies
  }

  const handleSubmitLocal = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const hobbiesArray = hobbiesToArray(hobbies)

    handleSubmit({ name, occupation, description, image, hobbies: hobbiesArray, id: actorID })
    handleModalClose()
  }

  return (
    <Form onSubmit={handleSubmitLocal}>
      <Group>
        <Label>Image {image && <img src={image} alt={name} />}</Label>

        <Input type='text' value={image} onChange={(event) => setImage(event.target.value)} />
      </Group>

      <Group>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      </Group>

      <Group>
        <Label>Occupation besides acting</Label>
        <Input
          type='text'
          value={occupation}
          onChange={(event) => setOccupation(event.target.value)}
        />
      </Group>

      <Group>
        <Label>Hobies</Label>
        <Input type='text' value={hobbies} onChange={(event) => setHobbies(event.target.value)} />
      </Group>

      <Group>
        <Label>Description</Label>
        <TextArea value={description} onChange={(event) => setDescrition(event.target.value)} />
      </Group>

      <Group>
        <ButtonStyled>Add new actor</ButtonStyled>
      </Group>
    </Form>
  )
}

const Form = styled.form``

const Group = styled.div`
  margin-bottom: 24px;
  position: relative;

  img {
    height: 100%;
    width: auto;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
  }
`

const ButtonStyled = styled(Button)`
  width: 100%;
`

const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 15px;
  color: #4e4b66;
  margin-bottom: 16px;
`

const Input = styled.input`
  display: flex;
  width: 100%;
  background: #eff0f7;
  border-radius: 10px;
  padding: 16px;
  height: 50px;
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  background: #eff0f7;
  border-radius: 10px;
  padding: 16px;
  height: 100px;
`
