<template>
  <div class="daily-reminders">
    <CurrentDayHeader />
    <RemindersList @deleteReminder="changeDeleteReminderFormVisibility(true)" />
    <CreateBtn @click="changeCreateReminderFormVisibility(true)" class="create-btn" />
    <CreateReminderForm
      v-if="createReminderFormVisible"
      @closeReminderForm="changeCreateReminderFormVisibility(false)"
    />
    <DeleteReminderForm
      v-if="deleteReminderFormVisible"
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

export default {
  data: () =>
    Object.assign({
      createReminderFormVisible: false,
      deleteReminderFormVisible: false
    }),
  methods: {
    changeCreateReminderFormVisibility(visibility) {
      this.createReminderFormVisible = visibility
    },
    changeDeleteReminderFormVisibility(visibility) {
      this.deleteReminderFormVisible = visibility
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
