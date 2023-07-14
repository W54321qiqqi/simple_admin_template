<template>
  <div class="base-column-setting">
    <el-dropdown trigger="click">
      <base-icon
        name="el-icon-Setting"
        class="base-icon-setting cursor-pointer"
        size="18"
        hover
      />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleShowColumn(0)" v-if="showTable">
            <base-icon name="local-column" size="14" />
            自定义列表字段
          </el-dropdown-item>
          <el-dropdown-item @click="handleShowColumn(1)" v-if="showFilter">
            <base-icon name="local-filter" size="16" />
            自定义筛选
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <base-dialog
      :title="dialogTitle"
      ref="baseDialogRef"
      width="870px"
      saveText="保 存"
      cancelText="重 置"
      :closeFun="handleReset"
      @save="handleSave"
    >
      <div class="base-column-content flex">
        <div class="base-column-list flex-1">
          <div class="base-column-title pl-4">
            <el-checkbox
              v-model="state.checkAll"
              :indeterminate="state.isIndeterminate"
              @change="handleCheckAllChange"
            >
              全部字段
            </el-checkbox>
          </div>
          <div class="border-box p-4">
            <el-checkbox-group
              v-model="state.checkedList"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox
                v-for="item in columns"
                :key="item.fieldName"
                :label="item.fieldName"
                class="base-column-checkbox"
                :title="item.fieldDesc"
              >
                {{ item.fieldDesc }}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="base-column-choose">
          <div class="base-column-title pl-4">已选字段</div>
          <div class="border-box base-column-choose-content py-1">
            <el-scrollbar>
              <Draggable
                v-model="state.checkColumnList"
                :animation="100"
                item-key="fieldName"
                :forceFallback="true"
                handle=".cursor-move"
              >
                <template #item="{ element }">
                  <div
                    class="base-column-choose-item flex items-center px-2"
                    v-if="element.active"
                  >
                    <base-icon
                      name="el-icon-Rank"
                      size="16"
                      class="mr-1 cursor-move"
                      hover
                      v-if="!element.fixed"
                    />
                    <div
                      class="w-full overflow-hidden text-ellipsis whitespace-nowrap"
                      :title="element.fieldDesc"
                    >
                      {{ element.fieldDesc }}
                    </div>
                    <base-icon
                      name="el-icon-Close"
                      size="14"
                      class="cursor-pointer"
                      hover
                      @click="handleRemoveCheck(element.fieldName)"
                    />
                  </div>
                </template>
              </Draggable>
            </el-scrollbar>
          </div>
        </div>
      </div>
      <div class="base-column-setting-tip">
        注：拖动
        <base-icon name="el-icon-Rank" size="14" class="mx-1" />
        图标可调整顺序
      </div>
    </base-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import Draggable from 'vuedraggable'
import { isUndefined } from '/@/utils/is'
import { deepClone } from '/@/utils/common'
import type { Column, ColumnState } from './types'

const props = defineProps({
  tableColumns: {
    type: Array as PropType<Column[]>,
    default: () => [],
  },
  filterColumns: {
    type: Array as PropType<Column[]>,
    default: () => [],
  },
  showTable: {
    type: Boolean,
    default: true,
  },
  showFilter: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits([
  'update:tableColumns',
  'update:filterColumns',
  'columns-change',
])

const { proxy } = getCurrentInstance() as any

const state = reactive<ColumnState>({
  dialogType: 0,
  isIndeterminate: false,
  checkAll: true,
  checkedList: [],
  checkColumnList: [],
})

const baseDialogRef = ref()

const dialogTitle = computed(() => {
  return state.dialogType === 0 ? '自定义列表字段' : '自定义筛选字段'
})

const columns = computed(() => {
  return state.dialogType === 0 ? props.tableColumns : props.filterColumns
})

/**
 * 打开弹框
 */
const handleShowColumn = (val: number) => {
  state.dialogType = val
  handleReset()
  unref(baseDialogRef).showDialog()
}

/**
 * 全选
 * @param {Boolean} bool
 */
const handleCheckAllChange = (bool: any) => {
  state.checkedList = bool ? unref(columns).map((item) => item.fieldName) : []
  state.isIndeterminate = false
}

/**
 * 勾选列
 * @param {String[]} value
 */
const handleCheckedCitiesChange = (value: any[]) => {
  const checkedCount = value.length
  state.checkAll = checkedCount === unref(columns).length
  state.isIndeterminate =
    checkedCount > 0 && checkedCount < unref(columns).length
}

/**
 * 关闭取消勾选列
 * @param {String} fieldName
 */
const handleRemoveCheck = (fieldName: string) => {
  state.checkedList = state.checkedList.filter((item) => item !== fieldName)
  handleCheckedCitiesChange(state.checkedList)
}

/**
 * 保存
 */
const handleSave = () => {
  if (state.checkedList.length === 0) {
    proxy.$messageWarning('请至少勾选一项再进行该操作')
    return
  }
  if (state.dialogType === 0) {
    emit('update:tableColumns', state.checkColumnList)
  } else {
    emit('update:filterColumns', state.checkColumnList)
  }
  emit(
    'columns-change',
    state.checkColumnList.filter(
      (item) => isUndefined(item.active) || item.active,
    ),
  )
  unref(baseDialogRef).hideDialog()
}

/**
 * 重置
 */
const handleReset = () => {
  state.checkedList = unref(columns)
    .filter((item) => isUndefined(item.active) || item.active)
    .map((item) => item.fieldName)
}

watch(
  () => state.checkedList,
  () => {
    const deepColumns: Column[] = deepClone(unref(columns))
    state.checkColumnList = deepColumns.map((item) => {
      item.active = state.checkedList.includes(item.fieldName)
      return item
    })
  },
)
</script>

<style lang="scss" scoped>
@use './base-column-setting.scss';
</style>
