<template>
  <DlyModal @closeModal="close">
    <template #header>Do you want to delete this reminder?</template>
    <template #body>
      <ReminderItem :show-actions="false" :reminder="getReminderToDelete" />
      <br /><br />
      <MDBBtn @click="onDeleteReminder" class="confirm-btn" color="dark" rounded> Confirm </MDBBtn>
      <MDBBtn @click="close" class="cancel-btn" outline="dark" rounded> Cancel </MDBBtn>
    </template>
  </DlyModal>
</template>
<script>
import { MDBBtn } from 'mdb-vue-ui-kit'
import DlyModal from '@/_global/components/DlyModal.vue'
import ReminderItem from '@/daily-reminders/components/ReminderItem.vue'
import { useDeleteReminderFormStore } from '@/daily-reminders/stores/forms'
import { useRemindersStore } from '@/daily-reminders/stores/reminders'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    MDBBtn,
    DlyModal,
    ReminderItem
  },
  computed: {
    ...mapState(useDeleteReminderFormStore, ['getReminderToDelete'])
  },
  methods: {
    ...mapActions(useDeleteReminderFormStore, ['close']),
    ...mapActions(useRemindersStore, ['removeReminder']),
    onDeleteReminder() {
      this.removeReminder(this.getReminderToDelete)
      this.close()
    }
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
