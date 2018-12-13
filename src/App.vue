<template>
  <div id="app">
    <Nav />
    <el-main class="el-main">
      <el-row>
        <el-col :span="12">
          <el-button type="info" plain @click="showBalance">Balance {{balance}}</el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="info" plain @click="showAdjustment">New Adjustment</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="empty-space"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <BalanceModal v-show="isBalanceVisible" @close="closeBalance" v-bind:adjustments="this.adjustmentList"/>
          <AdjustmentModal v-show="isAdjustmentVisible" @close="closeAdjustment"/>
          <div class="chart-div">
            <h2>Overall Balance</h2>
            <Chart :income="this.income" :expenses="this.expenses"/>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import AdjustmentModal from './components/AdjustmentModal.vue';
import BalanceModal from './components/BalanceModal.vue';
import Nav from './components/Nav.vue';
import Chart from './components/Chart.vue';

export default {
  name: 'app',
  components: {
    AdjustmentModal,
    BalanceModal,
    Nav,
    Chart,
  },

  data() {
    return {
      isAdjustmentVisible: false,
      isBalanceVisible: false,
      balance: null,
      adjustmentList: false,
      income: false,
      expenses: false,
    };
  },
  mounted() {
    this.getBalance();
    this.showAdjustmentsList();
  },
  updated() {
    this.getBalance();
  },
  methods: {
    showAdjustment() {
      this.isAdjustmentVisible = true;
    },
    showBalance() {
      this.isBalanceVisible = true;
    },
    closeAdjustment() {
      this.isAdjustmentVisible = false;
      this.getBalance();
      this.showAdjustmentsList();
    },
    closeBalance() {
      this.isBalanceVisible = false;
    },
    getBalance() {
      this.$http.get('http://localhost:3000/adjustments')
                .then(response => {
                                    this.balance = response.data.balance;
                                    this.income = response.data.income;
                                    this.expenses = response.data.expenses;
                                  });
    },
    showAdjustmentsList() {
      this.$http.get('http://localhost:3000/adjustments')
                .then(response => (this.adjustmentList = response.data.data));
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.el-main {
  background-color: #9DA3A4;
}

body {
  margin: 0px;
}

.el-button--info.is-plain {
  background-color: #4AAE9B;
  color: white;
}

.chart-div {
  background: #FFDBDA;
    text-align: center;
    padding: 20px 0px 20px 0px;
    border-radius: 20px;
}

.chart-div h2 {
  color: grey;
}

.empty-space{
  height: 40px;
}
</style>
