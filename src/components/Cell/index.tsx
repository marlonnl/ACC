import { Key } from '../Kbd/styles'
import { AbsCount, CardCount, CardInfo, CellCard, RelCount } from './styles'

type Props = {
  name: string
  ckey: string
}

const Cell = ({ name, ckey }: Props) => (
  <CellCard>
    <CardInfo>
      <Key>{ckey}</Key>
      <h3>{name}</h3>
    </CardInfo>
    <CardCount>
      <AbsCount>(0)</AbsCount>
      <RelCount>0%</RelCount>
    </CardCount>
  </CellCard>
)

// const Cell = ({ name, ckey }: Props) => (
//   <CellCard>
//     <div>
//       <p>{name}</p>
//     </div>
//     <CardInfo>
//       <Key>{ckey}</Key>
//       <CardCount>
//         <p>(0)</p>
//         <p>0%</p>
//       </CardCount>
//     </CardInfo>
//   </CellCard>
// )

export default Cell
