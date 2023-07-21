<template>
  <DlyModal @closeModal="close">
    <template #header>Set reminder for today</template>
    <template #body>
      <MDBInput @blur="updateField('txtTitle', $event.target._value || '')" label="Title" type="text" /><br /><br />
      <div class="textarea-no-resizable">
        <MDBTextarea @blur="updateField('txtDescription', $event.target._value || '')" label="Description (optional)" />
      </div>
      <br /><br />
      <MDBBtn @click="onCreateReminder" class="create-btn" color="dark" rounded> Create </MDBBtn>
    </template>
  </DlyModal>
</template>
<script>
import { MDBInput, MDBTextarea, MDBBtn } from 'mdb-vue-ui-kit'
import DlyModal from '@/_global/components/DlyModal.vue'
import { useRemindersStore } from '@/daily-reminders/stores/reminders'
import { useCreateReminderFormStore } from '@/daily-reminders/stores/forms'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    MDBInput,
    MDBTextarea,
    MDBBtn,
    DlyModal
  },
  methods: {
    ...mapActions(useRemindersStore, ['createReminder']),
    ...mapActions(useCreateReminderFormStore, ['close', 'updateField']),
    onCreateReminder() {
      this.createReminder(this.txtTitle, this.txtDescription)
      this.close()
    }
  },
  computed: {
    ...mapState(useCreateReminderFormStore, ['txtTitle', 'txtDescription'])
  }
}
</script>
<style scoped>
.create-btn {
  width: 50%;
  display: block;
  margin: 1.5em auto 0 auto;
  min-width: 200px;
}
</style>
