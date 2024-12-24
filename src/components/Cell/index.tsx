import { Key } from '../Kbd/styles'
import { CardCount, CardInfo, CellCard } from './styles'

type Props = {
  name: string
  ckey: string
}

const Cell = ({ name, ckey }: Props) => (
  <CellCard>
    <div>
      <p>{name}</p>
    </div>
    <CardInfo>
      <Key>{ckey}</Key>
      <CardCount>
        <p>(0)</p>
        <p>0%</p>
      </CardCount>
    </CardInfo>
  </CellCard>
)

export default Cell
