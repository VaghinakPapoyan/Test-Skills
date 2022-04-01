import React from 'react'
import styled from 'styled-components'
import { ThisButton } from '../../Components/Global_Components/SideBar/SideBar_Components/SideBarBottom'

export const MyButton = styled(ThisButton)` 
    transform: none;
    left: 0;
    padding: 7px 15px;
    margin: 0;
`

export default function Button({ children }) {
  return (
    <MyButton>{children}</MyButton>
  )
}
