<template>
  <!-- move 事件 -->
  <!--使用draggable组件-->
  <div class="itxst">
    <div>自定义控制拖拽和停靠</div>
    <div class="col">
      <draggable filter=".forbid" v-model="arr1" animation="300" :move="onMove">
        <transition-group>
          <div
            :class="item.id === 1 ? 'item forbid' : 'item'"
            v-for="item in arr1"
            :key="item.id"
          >
            {{ item.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  name: '',
  components: {
    draggable,
  },
  data() {
    return {
      // 定义要被拖拽对象的数组
      arr1: [
        { id: 1, name: 'www.itxst.com（不允许停靠）' },
        { id: 2, name: 'www.jd.com' },
        { id: 3, name: 'www.baidu.com' },
        { id: 5, name: 'www.google.com' },
        { id: 4, name: 'www.taobao.com（不允许拖拽）' },
      ],
    };
  },
  methods: {
    // move回调方法
    onMove(e) {
      console.log('move', e);
      // // 不允许停靠
      // if (e.relatedContext.element.id === 1) return false;
      // // 不允许拖拽
      // if (e.draggedContext.element.id === 4) return false;
      // return true;
    },
  },
};
</script>

<style scoped lang="less">
/*定义要拖拽元素的样式*/
.itxst {
  margin: 10px;
}

.col {
  width: 80%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}

.col + .col {
  margin-left: 10px;
}

.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
}

.item + .item {
  border-top: none;
  margin-top: 6px;
}

.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
</style>
