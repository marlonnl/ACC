declare type Cell = {
  id: number
  name: string
  nameAbr: string
  desc: string
  key: string
  count: {
    abs: number
    // rel: number
    count: boolean
  }
}
