<script>
import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['data', 'options'],
  data () {
    return {
      datacollection: {
        labels: [
          'January', 'February', 'March', 'April'
        ],
        datasets: [
          {
            label: 'Product A sales',
            backgroundColor: [
              '#e85a71',
              '#d8e9ef',
              '#4ea1d3',
              '#454552'
            ],
            data: [
              40, 20, 10, 65
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(
      this.datacollection,
      {
        responsive: true,
        maintainAspectRatio: false
      }
    )
  }
}
</script>
