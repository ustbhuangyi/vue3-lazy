<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import BScroll from '@better-scroll/core'
  import { onMounted, ref, defineComponent } from 'vue'

  export default defineComponent({
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: Boolean
    },
    setup (props, {emit}) {
      const {probeType, click} = props
      const wrapper = ref(null)

      onMounted(() => {
        const scroll = new BScroll(wrapper.value, {
          probeType,
          click
        })

        scroll.on('scroll', (pos) => {
          emit('scroll', pos)
        })
      })

      return {
        wrapper
      }
    }
  })
</script>

