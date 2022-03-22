<template>
  <Draggable
    tag="tbody"
    :list="dataSource"
    animation="500"
    class="drag"
    @change="onChange"
    @end="onEnd"
    @sort="onSort"
  >
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
  // inject: ['dataSource'],
  props: ['dataSource'],
  data () {
    return {}
  },
  methods: {
    onChange (evt) {
      const data = this.dataSource
      console.log('this.dataSource')
      const index = evt.moved.newIndex
      console.log('evt', evt)
      // 将你想要的值 传给父组件
      this.dataSource.handleDrag({
        id: data[index].id,
        before: data[index - 1] ? data[index - 1].id : '',
        after: data[index + 1] ? data[index + 1].id : ''
      })
    },
    onEnd (e) {
      // console.log('end', e)
    },
    onSort (e) {
      // console.log('sort', e)
      // const dragItem = this.dataSource.splice(e.oldIndex, 1)
      // this.dataSource.splice(e.newIndex, 1, dragItem)
      console.log(this.$parent.$parent.$parent)
      // const data = this.dataSource
      // const index = evt.newIndex
      // this.$parent.handleDrag({
      //   // id: data[index].id,
      //   // before: data[index - 1] ? data[index - 1].id : '',
      //   // after: data[index + 1] ? data[index + 1].id : ''
      //   newIndex: e.newIndex,
      //   oldIndex: e.oldIndex
      // })
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
