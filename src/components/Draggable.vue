<template>
  <Draggable tag="tbody" :list="data.dataSource" animation="500" class="drag" @change="onChange">
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
  inject: ['data'],
  data () {
    return {}
  },
  methods: {
    onChange (evt) {
      const data = this.data.dataSource
      const index = evt.moved.newIndex
      // 将你想要的值 传给父组件
      this.data.handleDrag({
        id: data[index].id,
        before: data[index - 1] ? data[index - 1].id : '',
        after: data[index + 1] ? data[index + 1].id : ''
      })
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
