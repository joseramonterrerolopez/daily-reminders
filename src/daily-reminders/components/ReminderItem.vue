<template>
  <div class="reminder-item">
    <MDBCard :bg="cardBg">
      <MDBCardBody :class="cardTextClass">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter v-if="showActions">
        <div class="actions-section">
          <DisableBtn v-if="enabled" class="action-btn" @click="toggleStatus" />
          <EnableBtn v-else class="action-btn" @click="toggleStatus" />
          <EditBtn class="action-btn" />
          <DeleteBtn @click="$emit('deleteReminder')" class="action-btn" />
        </div>
      </MDBCardFooter>
    </MDBCard>
  </div>
</template>
<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from 'mdb-vue-ui-kit'
import EditBtn from './buttons/EditBtn.vue'
import DeleteBtn from './buttons/DeleteBtn.vue'
import DisableBtn from './buttons/DisableBtn.vue'
import EnableBtn from './buttons/EnableBtn.vue'

export default {
  props: {
    showActions: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  data: () =>
    Object.assign({
      enabled: false
    }),
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    EditBtn,
    DeleteBtn,
    DisableBtn,
    EnableBtn
  },
  methods: {
    toggleStatus() {
      this.enabled = !this.enabled
    }
  },
  computed: {
    cardBg() {
      return this.enabled ? '' : 'light'
    },
    cardTextClass() {
      return this.enabled ? '' : 'reminder-item-disabled-text'
    }
  }
}
</script>
<style scoped>
.reminder-item {
  margin-top: 1em;
}
.reminder-item-disabled-text {
  text-decoration: line-through;
}
.actions-section {
  text-align: right;
}
.card-footer {
  padding-right: 1em;
}
.action-btn {
  cursor: pointer;
  margin: 0 0.5em;
  font-size: 1.15em;
}
</style>
