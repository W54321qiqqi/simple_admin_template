import type { Column } from '/@/components/base-table/types'

export interface ColumnState {
  dialogType: number
  checkAll: boolean
  checkedList: string[]
  checkColumnList: Column[]
  isIndeterminate: boolean
}

export * from '/@/components/base-table/types'
