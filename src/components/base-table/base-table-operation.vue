<script lang="tsx">
import { PropType } from 'vue'
import { OperationType } from './types'

export default defineComponent({
  props: {
    operation: {
      type: Array as PropType<OperationType[]>,
    },
    scope: {
      type: Object,
    },
  },
  setup(props) {
    const renderButton = (item: any) => {
      return (
        <base-button
          type="primary"
          link
          onClick={() => !item.confirm && item.callFunction(props.scope)}
        >
          <base-icon name={item.icon} class="mr-1" />
          {item.label}
        </base-button>
      )
    }
    const renderConfirmButton = (item: any) => {
      return (
        <el-popconfirm
          title={`是否确认${item.label}?` || item.tip}
          onConfirm={() => item.callFunction(props.scope)}
        >
          {{
            reference: () => renderButton(item),
          }}
        </el-popconfirm>
      )
    }
    return () => {
      const defaultOperation = props.operation!.map((item) => {
        return item.confirm ? renderConfirmButton(item) : renderButton(item)
      })
      return <el-space>{defaultOperation}</el-space>
    }
  },
})
</script>
<style scoped>
.more-icon {
  color: var(--el-color-primary);
}
</style>
