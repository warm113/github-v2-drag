<template>
  <div>
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"
      style="display: inline-block; width: 25%"
    ></pdf>
    <button @click="$refs.myPdfComponent.print()" style="font-size:40px;">print</button>
    <pdf ref="myPdfComponent" src="/static/2020072309212937167.pdf"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
var loadingTask = pdf.createLoadingTask('/static/2020072309212937167.pdf');
export default {
  name: '',
  props: {
  },
  computed: {

  },
  mounted () {
    this.src.promise.then(pdf => {
      this.numPages = pdf.numPages
    });
  },
  data() {
    return {
      src: loadingTask,
      numPages: undefined,
    }
  },
  methods: {
  },
  components: {
    pdf
  },
}
</script>

<style scoped lang="less">
</style>
