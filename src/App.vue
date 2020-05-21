<template>
  <div id="app" style="display: flex; align-items: center; justify-content: center">
    <div>
      <mindmap 
        v-model="data"
        :height="900"
        :width="700"
        :draggable="draggable"
        :xSpacing="xSpacing"
        :ySpacing="ySpacing"
        :gps="gps"
      ></mindmap>
      
    </div>
  </div>
</template>

<script>
// import dataLearn from '../public/learn.json'
import mindmap from './components/MindMap'

export default {
  components: {
    mindmap
  },
  data: () => ({
    tdata: [{ name: '空白节点',uuid:'0', children: [] }],
    data: [{  }],
    draggable: true,
    xSpacing: 80,
    ySpacing: 20,
    gps: true,
  }),
  created() {
    this.getList()
    setTimeout(() => {
      
    }, 2000)
  },
  methods: {
    getList() {
      const json = [{name: '根节点',uuid:'0', children: []}]
      this.data = json
      console.log(this.data)
    }
  }
}
</script>

<style>

</style>