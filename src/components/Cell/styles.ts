import styled from 'styled-components'

// export const CellCard = styled.div`
//   background-color: rgb(189, 189, 189);
//   padding: 16px;
//   border-radius: 4px;
// `

// export const CardInfo = styled.div`
//   display: flex;
//   align-items: end;
//   justify-content: space-between;
//   margin-top: 8px;
// `

// export const CardCount = styled.div`
//   display: flex;
//   gap: 8px;
// `

export const CellCard = styled.div`
  background-color: rgb(189, 189, 189);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;

  h3 {
    font-weight: normal;
  }
`

export const CardCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const AbsCount = styled.span`
  font-size: 12px;
`

export const RelCount = styled.span`
  font-size: 18px;
`
