<template>
  <DlyModal @closeModal="$emit('closeDeleteForm')">
    <template #header>Do you want to delete this reminder?</template>
    <template #body>
      <ReminderItem :show-actions="false" />
      <br /><br />
      <MDBBtn class="confirm-btn" color="dark" rounded> Confirm </MDBBtn>
      <MDBBtn @click="$emit('cancelDeleteForm')" class="cancel-btn" outline="dark" rounded> Cancel </MDBBtn>
    </template>
  </DlyModal>
</template>
<script>
import { MDBBtn } from 'mdb-vue-ui-kit'
import DlyModal from '@/_global/components/DlyModal.vue'
import ReminderItem from '@/daily-reminders/components/ReminderItem.vue'
export default {
  components: {
    MDBBtn,
    DlyModal,
    ReminderItem
  }
}
</script>
<style scoped>
.confirm-btn,
.cancel-btn {
  width: 50%;
  display: block;
  margin: 1.5em auto 0 auto;
  min-width: 200px;
}
</style>
