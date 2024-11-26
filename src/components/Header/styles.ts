import styled from 'styled-components'
import { colors } from '../../styles/colors'

type Props = {
  color?: 'primary' | 'secondary'
}

export const HeaderElement = styled.header`
  background-color: ${colors.bgPrimary};
  color: ${colors.textPrimary};
  padding: 28px 0;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  h1 {
    display: inline;
  }
`

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 16px;
`

export const HeaderMenuItem = styled.li<Props>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  background-color: ${(props) =>
    props.color === 'secondary' ? colors.bgButton : 'transparent'};
`
