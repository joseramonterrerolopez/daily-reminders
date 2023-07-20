import { defineStore } from 'pinia'

export const useCreateReminderFormStore = defineStore('createReminderForm', {
  state: () => ({
    visible: false
  }),
  actions: {
    open() {
      this.visible = true
    },
    close(title, description) {
      this.visible = false
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
    close(title, description) {
      this.visible = false
    },
    setReminderToDelete(reminder) {
      this.reminderToDelete = reminder
    }
  },
  getters: {
    isVisible() {
      return this.visible
    },
    getReminderToDelete() {
      return this.reminderToDelete
    }
  }
})
