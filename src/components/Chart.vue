<script>
import { HorizontalBar } from 'vue-chartjs' 
export default {
  name: 'Chart',
  extends: HorizontalBar,
  props: ['income', 'expenses'],

  watch: {
   income: function() {
      let chart = this.$data._chart;

      chart.data.datasets[0].data = [this.income]

      chart.update()
    },
    expenses: function() {
      let chart = this.$data._chart;

      chart.data.datasets[1].data = [this.expenses]

      chart.update()
    },
  },

  mounted() {
    this.renderChart({
      labels: [],
      datasets: [
        {
          label: 'Income',
          data: [],
          borderColor: '#9DD9D2',
          backgroundColor: '#9DD9D2',
        },
        {
          label: 'Expenses',
          data: [],
          borderColor: '#DB7F8E',
          backgroundColor: '#DB7F8E',
        }
      ],
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>

