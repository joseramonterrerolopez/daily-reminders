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
      let newReminder = { title, description }
      newReminder = dlyReminderService.create(newReminder)
      this.reminderCollection[newReminder.id] = newReminder
    },
    toggleReminderStatus(reminder) {
      const updatedReminder = dlyReminderService.toggleStatus(reminder)
      this.reminderCollection[updatedReminder.id] = updatedReminder
    },
    removeReminder(reminder) {
      const reminderToDelete = dlyReminderService.remove(reminder)
      delete this.reminderCollection[reminderToDelete.id]
    }
  }
})
