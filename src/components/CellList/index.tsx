import Cell from '../Cell'
import { CellListContainer } from './styles'

const CellList = () => (
  <div className="container">
    <CellListContainer>
      <Cell name="Mielócito" ckey="Q" />
      <Cell name="Metamielócito" ckey="W" />
      <Cell name="Linfócito at." ckey="E" />
      <Cell name="Basófilo" ckey="R" />
      <Cell name="Eritroblasto" ckey="T" />

      <Cell name="Eosinófilo" ckey="A" />
      <Cell name="Bastão" ckey="S" />
      <Cell name="Segmentado" ckey="D" />
      <Cell name="Linfócito" ckey="F" />
      <Cell name="Monócito" ckey="G" />
    </CellListContainer>
  </div>
)

export default CellList
