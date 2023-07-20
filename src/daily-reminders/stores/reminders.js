import { defineStore } from 'pinia'
import DlyReminderService from '../services/DlyReminderService'
import DlyLocalStorage from '../repository/DlyLocalStorage'

const dlyReminderService = new DlyReminderService(new DlyLocalStorage())

export const useRemindersStore = defineStore('reminders', {
  state: () => ({
    reminderCollection: {}
  }),
  actions: {
    initReminders() {
      this.reminderCollection = dlyReminderService.getAll()
    },
    createReminder(title, description) {
      const reminder = dlyReminderService.create(title, description)
      this.reminderCollection[reminder.id] = reminder
    },
    toggleReminderStatus(reminder) {
      const updatedReminder = dlyReminderService.toggleStatus(reminder)
      this.reminderCollection[updatedReminder.id] = updatedReminder
    },
    removeReminder(reminder) {
      const reminderToDelete = dlyReminderService.remove(reminder)
      delete this.reminderCollection[reminderToDelete.id]
    }
  },
  getters: {
    getAllReminders() {
      return this.reminderCollection
    }
  }
})
