<template>
  <div>
    {{arrr}}
  </div>
</template>

<script>
export default {
  name: '',
  props: {
  },
  computed: {
    arrr () {
      return this.arr.reduce((pre, cur) => {
        if (cur.parentid === 0) {
          cur.children = []
          pre[0] = cur
        } else {
          cur.parentid === 1
            ? pre[0].children.push(cur)
            : pre[1] = cur
        }
        return pre
      }, [undefined, undefined])
    },
  },
  data() {
    return {
      arr: [
        { id: 1, name: 'da', parentid: 0 },
        { id: 2, name: 'sda', parentid: 1 },
        { id: 3, name: 'fd', parentid: 1 },
        { id: 4, name: 'fdf', parentid: 2 }
      ]
    }
  },
  methods: {
  },
  components: {
  },
}
</script>

<style scoped lang="less">
</style>
