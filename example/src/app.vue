<template>
  <scroll class="app" :probeType="3" @scroll="onScroll">
    <ul class="list">
      <li v-for="item in listData" class="item" :key="item.id">
        <div class="icon">
          <img width="60" height="60" v-lazy="item.imgurl">
        </div>
        <div class="text">
          <h2 class="name">{{item.name}}</h2>
          <p class="desc">{{ item.desc}}</p>
        </div>
      </li>
    </ul>
  </scroll>
</template>

<script lang="ts">
  import { reactive, defineComponent } from 'vue'
  import Scroll from './scroll'
  import data from './data'

  export default defineComponent({
    components: {
      Scroll
    },
    setup () {
      const listData = reactive(data)

      function onScroll (pos) {
        // console.log('scroll to pos: ', pos)
      }

      return {
        listData,
        onScroll
      }
    }
  })
</script>

<style lang="stylus" scoped>
  .app
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    padding: 12px 0
    background: #222

  .list
    .item
      display: flex
      box-sizing: border-box
      align-items: center
      padding: 0 20px 20px 20px
      .icon
        flex: 0 0 60px
        width: 60px
        padding-right: 20px
      .text
        display: flex
        flex-direction: column
        justify-content: center
        flex: 1
        line-height: 20px
        overflow: hidden
        font-size: 14px
        .name
          margin-bottom: 10px
          color: #fff
        .desc
          color: rgba(255, 255, 255, 0.3)
</style>
