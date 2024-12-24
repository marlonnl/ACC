import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CellState = {
  cells: Cell[]
}

const initialState: CellState = {
  cells: []
}

const cellSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    inc: (state, action: PayloadAction<Cell>) => {
      const cell = state.cells.find((i) => i.id === action.payload.id)
    }
  }
})

export const { inc } = cellSlice.actions
export default cellSlice.reducer
