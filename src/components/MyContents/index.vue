<template>
  <div class="my-contents">
    <my-title>
      <slot name="title" />
    </my-title>
    <el-card>
      <slot name="contents" />
    </el-card>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import MyTitle from '@/components/MyTitle/index.vue'
import MyContents from '@/components/MyContents/index.vue'

export default createComponent({
  components: {
    MyTitle
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.my-contents {
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    padding-bottom: 40px;
  }
}
</style>
