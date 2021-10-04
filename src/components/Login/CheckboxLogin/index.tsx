import React from 'react'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { CheckBoxText, CheckBoxView } from './styles'
export default function CheckboxLogin() {
  const [checked, setCheck] = useState(false)
  return (
    <CheckBoxView>
      <Checkbox
        color="white"
        value={checked}
        onValueChange={setCheck}
      ></Checkbox>
      <CheckBoxText>Salva dados de login entre automaticamente</CheckBoxText>
    </CheckBoxView>
  )
}
