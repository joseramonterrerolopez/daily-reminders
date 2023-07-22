<template>
  <DlyModal @closeModal="close">
    <template #header>Modify reminder</template>
    <template #body>
      <MDBInput v-model="formEdit.title" label="Title" type="text" /><br /><br />
      <div class="textarea-no-resizable">
        <MDBTextarea v-model="formEdit.description" label="Description (optional)" />
      </div>
      <br /><br />
      <MDBBtn @click="onModidyReminder" class="edit-btn" color="dark" rounded> Modify </MDBBtn>
    </template>
  </DlyModal>
</template>
<script>
import { MDBInput, MDBTextarea, MDBBtn } from 'mdb-vue-ui-kit'
import DlyModal from '@/_global/components/DlyModal.vue'
import { useRemindersStore } from '@/daily-reminders/stores/reminders'
import { useEditReminderFormStore } from '@/daily-reminders/stores/forms'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    MDBInput,
    MDBTextarea,
    MDBBtn,
    DlyModal
  },
  methods: {
    ...mapActions(useRemindersStore, ['modifyReminder']),
    ...mapActions(useEditReminderFormStore, ['close']),
    onModidyReminder() {
      this.modifyReminder(this.reminderToEdit, this.formEdit)
      this.close()
    }
  },
  computed: {
    ...mapState(useEditReminderFormStore, ['formEdit', 'reminderToEdit'])
  }
}
</script>
<style scoped>
.edit-btn {
  width: 50%;
  display: block;
  margin: 1.5em auto 0 auto;
  min-width: 200px;
}
</style>
