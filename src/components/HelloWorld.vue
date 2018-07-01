<template>
  <div id="container">
    <bar-chart></bar-chart>
    <line-chart></line-chart>
    <doughnut-chart></doughnut-chart>
  </div>
</template>

<script>
import BarChart from './BarChart'
import LineChart from './LineChart'
import DoughnutChart from './DoughnutChart'

export default {
  name: 'HelloWorld',
  components: {
    BarChart, LineChart, DoughnutChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
