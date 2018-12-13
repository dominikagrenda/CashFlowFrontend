<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

        <header class="modal-header" id="modalTitle">
          <div class="title">Add Adjustment</div>
            <button type="button" class="btn-close" @click="close">x</button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <el-input placeholder="Name" v-model="name" clearable></el-input>
            <el-input placeholder="Value" v-model="value" clearable></el-input>
            <el-radio v-model="radio" label="expense">Expense</el-radio>
            <el-radio v-model="radio" label="income">Income</el-radio>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="createAdjustment">Save!</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'adjustmentmodal',
  data() {
    return {
      radio: 'expense',
      name: '',
      value: '',
    };
  },
  methods: {
    close() {      
      this.$emit('close');
    },
    createAdjustment() {
      this.$http.post('http://localhost:3000/adjustments',
        {
          value: this.value,
          name: this.name,
          kind: this.radio,
        },
      );
      this.close();
    },
  },
};
</script>


<style>
  .title {
    margin-top: 20px;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: center;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 15px;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  input {
    margin-bottom: 4px;
  }

  .el-radio {
    margin-top: 8px;
  }
</style>
