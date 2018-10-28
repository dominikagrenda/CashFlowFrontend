<template>
  <div id="app">
    <el-container>
        <el-col :span="24">
          <div>
            <HeaderNaw />
            <el-main class="el-main">
              <el-button type="info" plain>Balance</el-button>
              <el-button type="primary" plain @click="showModal">New Adjustment</el-button>
              <Modal v-show="isModalVisible" @close="closeModal"/>
            </el-main>
          </div>
        </el-col>
    </el-container>
  </div>
</template>

<script>
  import Modal from './components/Modal.vue';
  import HeaderNaw from './components/HeaderNaw.vue';

  export default {
    name: 'app',
    components: {
      Modal,
      HeaderNaw,
    },
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-main {
  background-color: #C0C4CC;
}

body {
  margin: 0px;
}

</style>
