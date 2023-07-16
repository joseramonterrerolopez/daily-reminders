<template>
  <div class="daily-reminders">
    <CurrentDayHeader />
    <RemindersList />
    <CreateBtn class="create-btn" />
  </div>
</template>
<script>
import CurrentDayHeader from './components/CurrentDayHeader.vue'
import RemindersList from './components/RemindersList.vue'
import CreateBtn from './components/buttons/CreateBtn.vue'

export default {
  components: {
    CurrentDayHeader,
    RemindersList,
    CreateBtn
  }
}
</script>
<style scoped>
.daily-reminders {
  padding-bottom: 5em;
}
.create-btn {
  cursor: pointer;
  font-size: 3.5em;
  position: fixed;
  right: 15px;
  bottom: 10px;
  background-color: white;
  z-index: 2;
}
</style>
