<template>
  <div class="app-container">
    <my-contents>
      <template slot="title">
        イベント情報
      </template>
      <div slot="contents">
        <div class="event-detail__event-contents">
          <div class="event-detail__event-contents__item">
            <div class="event-detail__event-contents__item__col1">
              イベント名
            </div>
            <div class="event-detail__event-contents__item__col2">
              {{ eventInfo.eveneName }}
            </div>
          </div>
          <div class="event-detail__event-contents__item">
            <div class="event-detail__event-contents__item__col1">
              項目だよ
            </div>
            <div class="event-detail__event-contents__item__col2">
              {{ eventInfo.item1 }}
            </div>
          </div>
          <div class="event-detail__event-contents__item">
            <div class="event-detail__event-contents__item__col1">
              項目だよーーーーーーーーーーーーーーーーーーーーーーーー
            </div>
            <div class="event-detail__event-contents__item__col2">
              {{ eventInfo.item2 }}
            </div>
          </div>
        </div>
      </div>
    </my-contents>
    <my-contents>
      <div slot="title">
        プロモーション一覧
      </div>
      <div slot="contents">
        <div class="event-detail__promotion-list__contents">
          <el-table
            :key="1"
            :data="promotionList"
            stripe
            fit
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column
              prop="id"
              label="ID"
              width="100"
            />
            <el-table-column
              prop="name"
              label="プロモーション名"
            />
            <el-table-column
              prop="item1"
              label="項目１"
            />
            <el-table-column
              prop="item2"
              label="項目２"
            />
          </el-table>
        </div>
      </div>
    </my-contents>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, toRefs } from '@vue/composition-api'
import { getEventInfo } from '@/api/events'
import MyContents from '@/components/MyContents/index.vue'

export default createComponent({
  components: {
    MyContents
  },
  setup(_, context) {
    const state = reactive({
      eventInfo: {},
      promotionList: []
    })

    const fetchEventInfo = async() => {
      const { data } = await getEventInfo(context.root.$route.params.id)
      state.eventInfo = data.eventInfo
      state.promotionList = data.promotionList
    }
    fetchEventInfo()

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.event-detail__event-contents {
  display: flex;
  flex-direction: column;
}

.event-detail__event-contents__item {
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
}

.event-detail__event-contents__item__col1 {
  width: 160px;
  position: relative;
  &::after {
    content: ':';
    white-space: pre-wrap;
    position: absolute;
    top: -2px;
    left: 165px;
  }
}

.event-detail__event-contents__item__col2 {
  flex: 1;
  padding-left: 1em;
}
</style>
