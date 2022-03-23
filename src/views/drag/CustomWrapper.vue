<template>
  <Draggable :list="dataSource" animation="500" class="drag" :move="onMove" @change="onChange">
    <slot></slot>
  </Draggable>
</template>
<script>
import Draggable from 'vuedraggable'

export default {
  name: 'CustomWrapper',
  components: {
    Draggable
  },
  // inject: ['data'],
  props: ['dataSource'],
  data () {
    return {}
  },
  methods: {
    onChange (evt) {
      const data = this.dataSource
      const index = evt.moved.newIndex
      // 将你想要的值 传给父组件
      data.handleDrag({
        id: data[index].id,
        before: data[index - 1] ? data[index - 1].id : '',
        after: data[index + 1] ? data[index + 1].id : ''
      })
    },
    onMove (e) {
      // console.log(e)
      // 被拖拽的
      const dragged = e.dragged
      // 将停靠的
      const related = e.related
      if (dragged.classList[1] !== related.classList[1]) {
        console.log(dragged.classList[1])
        console.log(related.classList[1])
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.drag {
  /deep/ tr {
    cursor: move;
  }
}
</style>
