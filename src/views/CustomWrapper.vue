<template>
  <Draggable
    tag="tbody"
    :list="dataSource"
    animation="500"
    class="drag"
    @change="onChange"
    @start="onStart"
    @end="onEnd"
    @sort="onSort"
    filter=".undraggable"
    ><!-- -->
    <slot></slot>
  </Draggable>
</template>
<script>
import Draggable from 'vuedraggable';

export default {
  name: 'CustomWrapper',
  components: {
    Draggable,
  },
  // inject: ['dataSource'],
  props: ['dataSource'],
  data() {
    return {};
  },
  methods: {
    onChange(evt) {
      const data = this.dataSource;
      console.log('this.dataSource');
      const index = evt.moved.newIndex;
      console.log('evt', evt);
      // 将你想要的值 传给父组件
      this.dataSource.handleDrag({
        id: data[index].id,
        before: data[index - 1] ? data[index - 1].id : '',
        after: data[index + 1] ? data[index + 1].id : '',
      });
    },
    onEnd(e) {
      const row = document.querySelectorAll('.ant-table-row');
      console.log('end', e.item.classList[1]);
      row.forEach((item) => {
        if (item.classList[1] !== e.item.classList[1]) {
          console.log('end 返回 false');
          // item.classList.value = item.classList.value + ' undraggable';
          return false;
        }
      });
    },
    onSort(e) {},
    onStart(e) {
      console.log('start', e);
    },
  },
};
</script>

<style lang="less" scoped>
.drag {
  /deep/ tr {
    cursor: move;
  }
}
</style>
