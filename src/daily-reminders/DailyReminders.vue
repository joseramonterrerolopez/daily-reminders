<template>
  <div>
    <CurrentDayHeader />
    <RemindersList />
  </div>
</template>
<script>
import CurrentDayHeader from './components/CurrentDayHeader.vue'
import RemindersList from './components/RemindersList.vue'
export default {
  components: {
    CurrentDayHeader,
    RemindersList
  }
}
</script>
