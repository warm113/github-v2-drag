<template>
  <div>
    <a-layout>
      <!-- 左侧 -->
      <a-layout-sider>Sider</a-layout-sider>
      <!-- 中间 -->
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <!-- <a-layout-footer>Footer</a-layout-footer> -->
      </a-layout>
      <!-- 右侧 -->
      <a-layout-sider>Sider</a-layout-sider>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.ant-layout {
  height: 100%;
  .ant-layout-sider {
    background: none;
  }
  .ant-layout-header {
    background: none;
  }
}
</style>
