import React from 'react'
import { MarvelBG, MarvelText, TextWrapper } from './styles'

interface Props {
  size?: number
}

export default function MarvelLogo({ size }: Props) {
  return (
    <MarvelBG size={size}>
      <TextWrapper>
        <MarvelText>MARVEL</MarvelText>
      </TextWrapper>
    </MarvelBG>
  )
}
