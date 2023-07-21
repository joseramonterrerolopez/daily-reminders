import { defineStore } from 'pinia'

export const useCreateReminderFormStore = defineStore('createReminderForm', {
  state: () => ({
    visible: false,
    txtTitle: '',
    txtDescription: ''
  }),
  actions: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    updateField(fieldName, value) {
      if (fieldName === 'txtTitle') {
        this.txtTitle = value
      }
      if (fieldName === 'txtDescription') {
        this.txtDescription = value
      }
    }
  },
  getters: {
    isVisible() {
      return this.visible
    }
  }
})

export const useDeleteReminderFormStore = defineStore('deleteReminderForm', {
  state: () => ({
    visible: false,
    reminderToDelete: null
  }),
  actions: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    setReminderToDelete(reminder) {
      this.reminderToDelete = reminder
    }
  },
  getters: {
    isVisible() {
      return this.visible
    }
  }
})