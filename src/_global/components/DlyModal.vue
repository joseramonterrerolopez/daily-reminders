<template>
  <div class="full-screen" />
  <div class="dly-modal">
    <div class="dly-modal-header">
      <h2><slot name="header"></slot></h2>
    </div>
    <div class="dly-modal-body">
      <slot name="body"></slot>
    </div>
    <CloseBtn @click="$emit('closeModal')" class="close-btn" />
  </div>
</template>
<script setup>
import CloseBtn from './CloseBtn.vue'
</script>
<style scoped>
.dly-modal {
  max-width: 600px;
  width: 95%;
  background-color: white;
  z-index: 9999;
  position: fixed;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
}
.dly-modal > .dly-modal-body {
  margin: 75px;
}
.dly-modal > .dly-modal-header {
  margin: 75px 75px 2em 75px;
  text-align: center;
}
.dly-modal > .close-btn {
  position: absolute;
  right: 10px;
  top: 8px;
  font-size: 1.2em;
}
</style>
