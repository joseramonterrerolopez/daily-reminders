<template>
  <MDBContainer fluid>
    <FilterPanel />
    <MDBRow>
      <MDBCol v-for="reminder in filteredReminders" :key="reminder.id" md="3">
        <ReminderItem :reminder="reminder" />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>
<script>
import ReminderItem from './ReminderItem.vue'
import { MDBCol, MDBRow, MDBContainer } from 'mdb-vue-ui-kit'
import { useRemindersStore } from '@/daily-reminders/stores/reminders'
import { mapState } from 'pinia'
import FilterPanel from './FilterPanel.vue'

export default {
  components: {
    ReminderItem,
    MDBCol,
    MDBRow,
    MDBContainer,
    FilterPanel
  },
  computed: {
    ...mapState(useRemindersStore, ['filteredReminders'])
  }
}
</script>
