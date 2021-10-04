import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  filterCronology,
  filterRelease,
} from '../../../redux/slicers/moviesSlice'
import { PickerWrapper } from './styles'

export function Filter() {
  const [filterValue, setFilter] = useState('Lançamento')
  const dispatch = useDispatch()
  const handleChange = (itemValue: string, _itemIndex: number) => {
    setFilter(itemValue)
    if (itemValue == 'lanc') {
      dispatch(filterRelease())
    }
    if (itemValue == 'cron') {
      dispatch(filterCronology())
    }
  }

  return (
    <PickerWrapper>
      <Picker
        style={{
          color: 'red',
        }}
        selectedValue={filterValue}
        onValueChange={handleChange}
        dropdownIconColor="red"
      >
        <Picker.Item label="Lançamento" value="lanc" />
        <Picker.Item label="Cronologia" value="cron" />
      </Picker>
    </PickerWrapper>
  )
}
