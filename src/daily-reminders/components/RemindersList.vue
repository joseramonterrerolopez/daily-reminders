<template>
  <MDBContainer fluid>
    <MDBRow>
      <MDBCol md="3">
        <ReminderItem @deleteReminder="$emit('deleteReminder')" />
      </MDBCol>
      <MDBCol md="3">
        <ReminderItem />
      </MDBCol>
      <MDBCol md="3">
        <ReminderItem />
      </MDBCol>
      <MDBCol md="3">
        <ReminderItem />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>
<script>
import ReminderItem from './ReminderItem.vue'
import { MDBCol, MDBRow, MDBContainer } from 'mdb-vue-ui-kit'
export default {
  components: {
    ReminderItem,
    MDBCol,
    MDBRow,
    MDBContainer
  }
}
</script>
