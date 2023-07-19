<template>
  <div class="daily-reminders">
    <CurrentDayHeader />
    <RemindersList @deleteReminder="deleteReminder" />
    <CreateBtn @click="changeCreateReminderFormVisibility(true)" class="create-btn" />
    <CreateReminderForm
      v-if="createReminderFormVisible"
      @closeReminderForm="changeCreateReminderFormVisibility(false)"
    />
    <DeleteReminderForm
      v-if="deleteReminderFormVisible"
      :reminder="reminderToDelete"
      @closeDeleteForm="changeDeleteReminderFormVisibility(false)"
      @cancelDeleteForm="changeDeleteReminderFormVisibility(false)"
    />
  </div>
</template>
<script>
import CurrentDayHeader from './components/CurrentDayHeader.vue'
import RemindersList from './components/RemindersList.vue'
import CreateBtn from './components/buttons/CreateBtn.vue'
import CreateReminderForm from './components/forms/CreateReminderForm.vue'
import DeleteReminderForm from './components/forms/DeleteReminderForm.vue'
import { useRemindersStore } from '@/daily-reminders/stores/reminders'
import { mapActions } from 'pinia'

export default {
  data: () =>
    Object.assign({
      createReminderFormVisible: false,
      deleteReminderFormVisible: false,
      reminderToDelete: null
    }),
  mounted() {
    this.initReminders()
  },
  methods: {
    ...mapActions(useRemindersStore, ['initReminders']),
    changeCreateReminderFormVisibility(visibility) {
      this.createReminderFormVisible = visibility
    },
    changeDeleteReminderFormVisibility(visibility) {
      this.deleteReminderFormVisible = visibility
    },
    deleteReminder(reminder) {
      this.reminderToDelete = reminder
      this.changeDeleteReminderFormVisibility(true)
    }
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
