<template>
  <el-row :gutter="16">
    <el-col v-for="item in cardListData" :key="item.title" :span="6">
      <base-box :loading="loading" class="card-item" hover>
        <div
          class="card-item-title overflow-hidden overflow-ellipsis whitespace-nowrap"
        >
          {{ item.title }}
        </div>
        <div class="mb-5 mt-5 pl-5">
          <span class="card-item-prefix" v-if="item.prefix">
            {{ item.prefix }}
          </span>
          <base-count-to :start-val="0" :end-val="item.value" :size="34" />
          <span class="card-item-suffix" v-if="item.suffix">
            {{ item.suffix }}
          </span>
        </div>
        <div class="card-item-extra flex justify-between">
          <span>{{ item.extraTitle }}</span>
          <span>{{ item.extraValue }}</span>
        </div>
        <base-icon :name="item.icon" size="52" class="card-item-icon" />
      </base-box>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { cardListData } from '../data'
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.card-item {
  position: relative;
  .card-item-title {
    letter-spacing: 1.5px;
    font-size: 18px;
  }

  .card-item-prefix {
    margin-right: 7px;
    font-size: 28px;
  }
  .card-item-suffix {
    margin-left: 7px;
    font-size: 22px;
    color: rgb(140, 150, 167);
  }
  .card-item-extra {
    color: var(--el-text-color-regular);
  }
  .card-item-icon {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
../data
