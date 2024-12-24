import { configureStore } from '@reduxjs/toolkit'

import cellsReducer from './reducers/cells'

export const store = configureStore({
  reducer: {
    cells: cellsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
