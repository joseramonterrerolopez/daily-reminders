<template>
  <div class="daily-reminders">
    <CurrentDayHeader />
    <RemindersList @deleteReminder="deleteReminder" />
    <CreateBtn @click="openCreateReminderForm" class="create-btn" />
    <CreateReminderForm v-if="isCreateReminderFormVisible" />
    <DeleteReminderForm v-if="isDeleteReminderFormVisible" />
  </div>
</template>
<script>
import CurrentDayHeader from './components/CurrentDayHeader.vue'
import RemindersList from './components/RemindersList.vue'
import CreateBtn from './components/buttons/CreateBtn.vue'
import CreateReminderForm from './components/forms/CreateReminderForm.vue'
import DeleteReminderForm from './components/forms/DeleteReminderForm.vue'
import { useRemindersStore } from './stores/reminders'
import { useCreateReminderFormStore, useDeleteReminderFormStore } from './stores/forms'
import { mapActions, mapState } from 'pinia'

export default {
  mounted() {
    this.initReminders()
  },
  methods: {
    ...mapActions(useRemindersStore, ['initReminders']),
    ...mapActions(useCreateReminderFormStore, {
      openCreateReminderForm: 'open'
    }),
    deleteReminder(reminder) {
      this.reminderToDelete = reminder
      this.changeDeleteReminderFormVisibility(true)
    }
  },
  computed: {
    ...mapState(useCreateReminderFormStore, {
      isCreateReminderFormVisible: 'isVisible'
    }),
    ...mapState(useDeleteReminderFormStore, {
      isDeleteReminderFormVisible: 'isVisible'
    })
  },
  components: {
    CurrentDayHeader,
    RemindersList,
    CreateBtn,
    CreateReminderForm,
    DeleteReminderForm
  }
}
</script>
<style scoped>
.daily-reminders {
  padding-bottom: 5em;
}
.create-btn {
  cursor: pointer;
  position: fixed;
  right: 15px;
  bottom: 10px;
  z-index: 2;
}
</style>
