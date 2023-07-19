<template>
  <div class="reminder-item">
    <MDBCard :bg="cardBg">
      <MDBCardBody :class="cardTextClass">
        <MDBCardTitle>{{ reminder.title }}</MDBCardTitle>
        <MDBCardText>
          {{ reminder.description }}
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter v-if="showActions">
        <div class="actions-section">
          <DisableBtn v-if="reminder.active" class="action-btn" @click="toggleStatus" />
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
    },
    reminder: {
      required: true,
      type: Object
    }
  },
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
      // do something
    }
  },
  computed: {
    cardBg() {
      return this.reminder.active ? '' : 'light'
    },
    cardTextClass() {
      return this.reminder.active ? '' : 'reminder-item-disabled-text'
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
