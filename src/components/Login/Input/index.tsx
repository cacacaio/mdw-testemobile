import React from 'react'
import {InputStyled} from './styles'

interface Props {
  placeholder: string
}

export default function Input({placeholder}: Props) {
  return <InputStyled placeholder={placeholder}></InputStyled>
}
