<template>
  <div class="my-title">
    <div class="my-title__text">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
export default createComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.my-title {
  display: flex;
  margin-bottom: 15px;
}
.my-title__text {
  font-weight: 300;
  font-size: 20px;
}
</style>
