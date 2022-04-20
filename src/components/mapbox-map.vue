<template>
  <div style="height:100%;width:100%;text-align:left;">
    <div ref="basicMapbox" :style="mapSize"></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl'
export default {
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    }
  },
  data () {
    return {
      nav: undefined
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fud3UiLCJhIjoiY2wxZ2QybTduMGIyZzNqcGI3c29ibDlzNSJ9.j7dCUFw49j884YQjav9srQ'
      const map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: 'mapbox://styles/mapbox/streets-v9'
      })
      console.log(map)
      this.nav = new mapboxgl.NavigationControl()
      map.addControl(this.nav)
      map.addSource('states', {
        type: 'geojson',
        data: {}
      })
      map.addLayer({
        id: 'state-fills',
        type: 'fill',
        source: 'states',
        layout: {},
        paint: {
          'fill-color': '#627BC1',
          'fill-opacity': 0.1
        }
      })
    }
  },
  computed: {
    mapSize () {
      const styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      }
      return styleObj
    }
  }
}
</script>
<style>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css");
</style>
