<template>
  <div
    class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center w-full h-screen text-white p-4 flex overflow-hidden"
  >
    <div class="flex-1 mr-4 bg-opacity-50 bg-slate-800 p-4 flex flex-col">
      <!-- 横向柱状图 -->
      <HorizontalBar class="h-1/3 box-border pb-4" :data="data.regionData" />
      <!-- 雷达图 -->
      <RadarBar class="h-1/3 box-border pb-4" :data="data.riskData" />
      <!-- 数据传递关系图 -->
      <Relation class="h-1/3 box-border pb-4" :data="data.relationData" />
    </div>
    <div class="w-1/2 mr-4 flex flex-col">
      <!-- 数据展示图 -->
      <TotalData
        class="bg-opacity-50 bg-slate-800 p-4 border"
        :data="data.totalData"
      />
      <!-- 地图可视化 -->
      <MapChart
        class="bg-opacity-50 bg-slate-800 p-4 mt-4 flex-1"
        :data="data.mapData"
      />
    </div>
    <div class="flex-1 bg-opacity-50 bg-slate-800 p-4 flex flex-col">
      <!-- 竖向柱状图 -->
      <VerticalBar class="h-1/3 box-border pb-4" :data="data.serverData" />
      <!-- 环形资源占比 -->
      <RadiueBar class="h-1/3 box-border pb-4" :data="data.abnormalData" />
      <!-- 文档云图 -->
      <WordCloud class="h-1/3 box-border pb-4" :data="data.wordCloudData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getVisualization } from './api/visualization.js'
import HorizontalBar from './components/HorizontalBar.vue'
import RadarBar from './components/RadarBar.vue'
import Relation from './components/Relation.vue'
import TotalData from './components/TotalData.vue'
import MapChart from './components/MapChart.vue'
import VerticalBar from './components/VerticalBar.vue'
import RadiueBar from './components/RadiueBar.vue'
import WordCloud from './components/WordCloud.vue'

const data = ref(null)
const loadData = async () => {
  data.value = await getVisualization()
  console.log(data.value)
}
loadData()
setInterval(() => {
  loadData()
}, 3000)
</script>

<style scoped></style>
