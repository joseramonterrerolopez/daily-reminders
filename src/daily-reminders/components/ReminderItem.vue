<template>
  <div class="reminder-item">
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>
<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit'
export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
  }
}
</script>
<style scoped>
.reminder-item {
  margin-top: 1em;
}
</style>
