import React from 'react'
import styled from 'styled-components'
import FilterButton from './FilterButton'

const StyledFilter = styled.div` 
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default function Filter() 
{
  return (
    <StyledFilter>
      <FilterButton active={true}>All</FilterButton>
      <FilterButton>Artwork</FilterButton>
      <FilterButton>Collectibles</FilterButton>
      <FilterButton>Utlity</FilterButton>
    </StyledFilter>
  )
}
