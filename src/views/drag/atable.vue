<template>
  <a-table :columns="columns" :data-source="dataSource"> </a-table>
</template>
<script>
import Sortable from 'sortablejs';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const dataSource = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  data() {
    return {
      columns,
      dataSource,
    };
  },
  mounted() {
    this.columnDrop();
  },
  methods: {
    // 开启行拖拽
    columnDrop() {
      const wrapperTr = document.querySelectorAll('.ant-table-tbody')[0];
      console.log(wrapperTr);
      Sortable.create(wrapperTr, {
        animation: 100, // 动画时长
        delay: 0, // 在排序拖动开始多少毫秒后元素才开始移动
        // filter: '.dragorderNumber', // 哪个元素不进行拖拽啊
        // chosenClass: 'drag-active', // 选中时追加的类名
        onEnd: (option) => {
          // console.log(option)
          // const oldIndex = option.oldIndex;
          // const newIndex = option.newIndex;
          // console.log('旧位置' + oldIndex, '新位置' + newIndex);
          // var clonedItems = this.columns.filter(item => item);
          // clonedItems.splice(newIndex, 0, clonedItems.splice(oldIndex, 1)[0]);
          // this.columns = [];
          // this.$nextTick(() => {
          //   this.columns = clonedItems;
          // });
        },
        onMove(evt) {
          // 被拖拽的
          const dragged = evt.dragged;
          // 将停靠的
          const related = evt.related;
          if (dragged.classList[1] !== related.classList[1]) {
            return false;
          }
        },
      });
    },
  },
};
</script>
