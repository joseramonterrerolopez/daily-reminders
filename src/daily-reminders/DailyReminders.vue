<template>
  <div class="daily-reminders">
    <CurrentDayHeader />
    <RemindersList />
    <CreateBtn @click="openCreateReminderForm" class="create-btn" />
    <CreateReminderForm v-if="isCreateReminderFormVisible" />
    <DeleteReminderForm v-if="isDeleteReminderFormVisible" />
    <EditReminderForm v-if="isEditReminderFormVisible" />
  </div>
</template>
<script>
import CurrentDayHeader from './components/CurrentDayHeader.vue'
import RemindersList from './components/RemindersList.vue'
import CreateBtn from './components/buttons/CreateBtn.vue'
import CreateReminderForm from './components/forms/CreateReminderForm.vue'
import DeleteReminderForm from './components/forms/DeleteReminderForm.vue'
import EditReminderForm from './components/forms/EditReminderForm.vue'
import { useRemindersStore } from './stores/reminders'
import {
  useCreateReminderFormStore,
  useDeleteReminderFormStore,
  useEditReminderFormStore
} from './stores/forms'
import { mapActions, mapState } from 'pinia'

export default {
  mounted() {
    this.initReminders()
  },
  methods: {
    ...mapActions(useRemindersStore, ['initReminders']),
    ...mapActions(useCreateReminderFormStore, {
      openCreateReminderForm: 'open'
    })
  },
  computed: {
    ...mapState(useCreateReminderFormStore, {
      isCreateReminderFormVisible: 'isVisible'
    }),
    ...mapState(useDeleteReminderFormStore, {
      isDeleteReminderFormVisible: 'isVisible'
    }),
    ...mapState(useEditReminderFormStore, {
      isEditReminderFormVisible: 'isVisible'
    })
  },
  components: {
    CurrentDayHeader,
    RemindersList,
    CreateBtn,
    CreateReminderForm,
    DeleteReminderForm,
    EditReminderForm
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
