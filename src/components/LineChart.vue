<script>
import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  data () {
    return {
      datacollection: {
        labels: [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ],
        datasets: [
          {
            label: 'Product A sales',
            borderColor: '#f87979',
            data: [
              40, 20, 10, 65, 70, 5, 15, 60, 55, 30, 10, 25
            ]
          },
          {
            label: 'Product B sales',
            borderColor: '#36a2eb',
            data: [
              10, 20, 10, 35, 40, 50, 55, 60, 50, 30, 10, 0
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
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              callback: function (value, index, values) {
                return '$' + value
              }
            }
          }]
        }
      }
    )
  }
}
</script>
