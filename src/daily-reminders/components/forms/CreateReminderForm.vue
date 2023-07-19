<template>
  <DlyModal @closeModal="$emit('closeReminderForm')">
    <template #header>Set reminder for today</template>
    <template #body>
      <MDBInput v-model="title" label="Title" type="text" /><br /><br />
      <div class="textarea-no-resizable">
        <MDBTextarea v-model="description" label="Description (optional)" />
      </div>
      <br /><br />
      <MDBBtn @click="createReminder(title, description)" class="create-btn" color="dark" rounded>
        Create
      </MDBBtn>
    </template>
  </DlyModal>
</template>
<script>
import { MDBInput, MDBTextarea, MDBBtn } from 'mdb-vue-ui-kit'
import DlyModal from '@/_global/components/DlyModal.vue'
import { useRemindersStore } from '@/daily-reminders/stores/reminders'
import { mapActions } from 'pinia'

export default {
  components: {
    MDBInput,
    MDBTextarea,
    MDBBtn,
    DlyModal
  },
  data: () =>
    Object.assign({
      title: '',
      description: ''
    }),
  methods: {
    ...mapActions(useRemindersStore, ['createReminder'])
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
