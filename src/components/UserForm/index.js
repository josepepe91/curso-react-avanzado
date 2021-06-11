import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
