<template>
  <div style="height: 100%; width: 100%; text-align: left">
    <div id="map" ref="basicMapbox" :style="mapSize"></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl';
export default {
  props: {
    mapWidth: {
      type: String,
      default: '',
    },
    mapHeight: {
      type: String,
      default: '',
    },
  },
  // HTML中先创建一个盒子有宽高 id 还有记得引入下载的mapboxgl
  data() {
    return {
      map: null, // 实例地图
      marker: null, // 实例打点
      point: [0, 0], // 打点经纬度坐标
      address: '', // 点击后获取的名称
    };
  },
  mounted() {
    this.map_box();
  },
  methods: {
    // 实例地图方法
    map_box() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fud3UiLCJhIjoiY2wxZ2QybTduMGIyZzNqcGI3c29ibDlzNSJ9.j7dCUFw49j884YQjav9srQ';
      // 天地图（各个区域的token可以在网上查到）
      var vecUrl = 'http://t0.tianditu.gov.cn/img_c/wmts?tk=2cabf6289e0e90d2903ec5554a07e2c9';
      var cvaUrl = 'http://t6.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=2cabf6289e0e90d2903ec5554a07e2c9';
      // var vecUrl = 'http://t6.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=2cabf6289e0e90d2903ec5554a07e2c9';
      // var cvaUrl = 'http://t6.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=2cabf6289e0e90d2903ec5554a07e2c9';
      // 使用严格模式
      // ('use strict');
      // 实例化source对象
      var tdtVec = {
        // 类型为栅格瓦片
        type: 'raster',
        tiles: [
          // 请求地址
          vecUrl + '&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles',
        ],
        // 分辨率
        tileSize: 256,
      };
      var tdtCva = {
        type: 'raster',
        tiles: [
          cvaUrl + '&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles',
        ],
        tileSize: 256,
      };
      // 实例化Map地图对象
      var map = new mapboxgl.Map({
        // 地图容器div的id
        container: 'map',
        style: {
          // 设置版本号，一定要设置
          version: 8,
          // 添加来源
          sources: {
            tdtVec: tdtVec,
            tdtCva: tdtCva,
          },
          layers: [
            {
              // 图层id，要保证唯一性
              id: 'tdtVec',
              // 图层类型
              type: 'raster',
              // 数据源
              source: 'tdtVec',
              // 图层最小缩放级数
              minzoom: 0,
              // 图层最大缩放级数
              maxzoom: 17,
            },
            {
              id: 'tdtCva',
              type: 'raster',
              source: 'tdtCva',
              minzoom: 0,
              maxzoom: 17,
            },
          ],
        },
        // 地图中心点
        center: [113.679943564, 22.559617265],
        // 地图当前缩放级数
        zoom: 8,
      });
      // 实例化导航控件
      var nav = new mapboxgl.NavigationControl({
        // 是否显示指南针，默认为true
        showCompass: true,
        // 是否显示缩放按钮，默认为true
        showZoom: true,
      });
      // 添加导航控件，控件的位置包括'top-left', 'top-right','bottom-left' ,'bottom-right'四种，默认为'top-right'
      map.addControl(nav, 'top-left');
    },
  },
  computed: {
    mapSize() {
      const styleObj = {
        width: this.mapWidth,
        height: this.mapHeight,
      };
      return styleObj;
    },
  },
};
</script>
<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
</style>
