<template>
  <MDBContainer fluid>
    <MDBRow>
      <MDBCol v-for="reminder in getAllReminders" :key="reminder.id" md="3">
        <ReminderItem :reminder="reminder" @deleteReminder="$emit('deleteReminder', reminder)" />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>
<script>
import ReminderItem from './ReminderItem.vue'
import { MDBCol, MDBRow, MDBContainer } from 'mdb-vue-ui-kit'
import { useRemindersStore } from '@/daily-reminders/stores/reminders'
import { mapState } from 'pinia'

export default {
  components: {
    ReminderItem,
    MDBCol,
    MDBRow,
    MDBContainer
  },
  computed: {
    ...mapState(useRemindersStore, ['getAllReminders'])
  }
}
</script>
