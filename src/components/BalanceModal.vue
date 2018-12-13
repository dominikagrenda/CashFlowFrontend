<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

        <header class="modal-header" id="modalTitle">
          <div class="title">Adjustments</div>
            <button type="button" class="btn-close" @click="close">x</button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <table class="adjustment-table">
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
              <tr v-for="adjustment in adjustments" :key="adjustment.id" :class="'style-'+ adjustment.attributes.kind">
                <td class="adjustment-name">{{adjustment.attributes.name}}</td>
                <td class="adjustment-value">{{adjustment.attributes.value}}</td> 
              </tr>
            </table>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="close">Close!</button>
          </slot>
        </footer>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'balancemodal',
  props: ['adjustments'],
  computed: {
    isExpense: function() {
      this.adjustment.attributes.kind === 'expense'
    }
  },
  methods: {
    close() {  
      this.$emit('close');
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
    padding: 20px;
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
    height: 40px;
  }

  .modal-body {
    position: relative;
    padding: 20px 20px 20px 20px;
    max-height: 350px; 
    overflow-y: auto;
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

  table {
    width: 500px;
  }

  th, td {
  border-bottom: 0,5px solid #ddd;
  height: 30px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    height: 35px;
    background-color: #4AAE9B;
    color: white;
  }

  .style-expense{
    background: #DB7F8E;
  }

  .style-income{
    background: #9DD9D2;
  }
</style>
