<template>
  <DlyModal @closeModal="close">
    <template #header>Set reminder for today</template>
    <template #body>
      <MDBInput v-model="formCreate.title" label="Title" type="text" /><br /><br />
      <div class="textarea-no-resizable">
        <MDBTextarea v-model="formCreate.description" label="Description (optional)" />
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
  mounted() {
    this.clearReminderForm()
  },
  methods: {
    ...mapActions(useRemindersStore, ['createReminder']),
    ...mapActions(useCreateReminderFormStore, ['close', 'clearReminderForm']),
    onCreateReminder() {
      this.createReminder(this.formCreate.title, this.formCreate.description)
      this.close()
    }
  },
  computed: {
    ...mapState(useCreateReminderFormStore, ['formCreate'])
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
