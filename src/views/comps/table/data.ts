import { Column } from '/@/components/base-table/types'
export const TableColumn: Column[] = [
  {
    fieldName: 'id',
    fieldDesc: '用户id',
  },
  {
    fieldName: 'payName',
    fieldDesc: '付款人',
  },
  {
    fieldName: 'status',
    fieldDesc: '订单状态',
  },
  {
    fieldName: 'time',
    fieldDesc: '下单时间',
  },
  {
    fieldName: 'money',
    fieldDesc: '付款金额',
  },
  {
    fieldName: 'remark',
    fieldDesc: '备注',
  },
]

export const TableColumn2: Column[] = [
  {
    fieldName: 'id',
    fieldDesc: '用户id',
  },
  {
    fieldName: 'payName',
    fieldDesc: '付款人',
    formType: 'input',
  },
  {
    fieldName: 'money',
    fieldDesc: '付款金额',
    formType: 'number',
  },
  {
    fieldName: 'count',
    fieldDesc: '数量',
    formType: 'number',
  },
  {
    fieldName: 'status',
    fieldDesc: '状态',
    formType: 'tag',
  },
  {
    fieldName: 'case',
    fieldDesc: '开关',
    formType: 'switch',
  },
  {
    fieldName: 'img',
    fieldDesc: '自定义列类型',
    formType: 'slot',
  },
  {
    fieldName: '#',
    fieldDesc: '操作',
    formType: 'operation',
    width: 155,
    fixed: 'right',
    operation: [
      {
        icon: 'el-icon-Edit',
        label: '编辑',
        callFunction: () => {},
      },
      {
        icon: 'el-icon-Delete',
        label: '删除',
        confirm: true,
        callFunction: () => {},
      },
    ],
  },
]

export const TableCheckList: any[] = [
  {
    fieldName: 'stripe',
    fieldDesc: '斑马纹',
  },
  {
    fieldName: 'border',
    fieldDesc: '边框',
  },
  {
    fieldName: 'showHeader',
    fieldDesc: '显示头部',
  },
  {
    fieldName: 'highlightCurrentRow',
    fieldDesc: '高亮当前选中行',
  },
  {
    fieldName: 'showSummary',
    fieldDesc: '合计项',
  },
  {
    fieldName: 'showPagination',
    fieldDesc: '分页显示',
  },
  {
    fieldName: 'indexShow',
    fieldDesc: 'index项显示',
  },
  {
    fieldName: 'selectionShow',
    fieldDesc: '勾选项显示',
  },
]
