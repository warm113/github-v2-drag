<template>
  <div>
    <draggable :list="list">
      <div
        style="cursor:pointer"
        v-for="item in list"
        :key="item.id"
        :title="item.title"
        :name="item.id"
      >{{ item.title }}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: '',
  computed: {

  },
  data () {
    return {
      list: [
        { title: 'aaa', id: 1 },
        { title: 'bbb', id: 2 }
      ]
    }
  },
  methods: {},
  components: { draggable },
  mounted () { }
}
</script>
<style scoped></style>
