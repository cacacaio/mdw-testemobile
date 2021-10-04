import React from 'react'
import { InputStyled } from './styles'

interface Props {
  placeholder: string
  onChange: (value: string) => void
}

export default function Input({ placeholder, onChange }: Props) {
  return (
    <InputStyled
      onChangeText={(text) => onChange(text)}
      placeholder={placeholder}
    ></InputStyled>
  )
}
