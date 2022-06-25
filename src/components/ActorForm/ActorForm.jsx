import { useState } from 'react'
import styled from 'styled-components'

import { Button } from 'components/Button/Button'

export const ActorForm = (props) => {
  const { handleSubmit } = props

  const [name, setName] = useState(props.name || '')
  const [occupation, setOccupation] = useState(props.occupation || '')
  const [hobbies, setHobbies] = useState(props.hobbies || '')
  const [description, setDescrition] = useState(props.description || '')

  const submit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    handleSubmit({ name, occupation, hobbies, description })
  }

  return (
    <Form onSubmit={submit}>
      <Group>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      </Group>

      <Group>
        <Label>Occupation besides acting</Label>
        <Input type='text' value={occupation} onChange={(event) => setOccupation(event.target.value)} />
      </Group>

      <Group>
        <Label>Hobies</Label>
        <Input type='text' value={hobbies} onChange={(event) => setHobbies(event.target.value)} />
      </Group>

      <Group>
        <Label>Hobies</Label>
        <TextArea description={description} onChange={(event) => setDescrition(event.target.value)} />
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
  height: 150px;
`
