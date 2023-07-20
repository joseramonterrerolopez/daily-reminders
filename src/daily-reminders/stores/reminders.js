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
    }
  },
  getters: {
    getAllReminders() {
      return this.reminderCollection
    }
  }
})
