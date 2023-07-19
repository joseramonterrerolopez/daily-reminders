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
      return new Promise((resolve) => {
        this.reminderCollection = dlyReminderService.getAll()
        resolve('ok')
      })
    },
    createReminder(title, description) {
      return new Promise((resolve) => {
        const reminder = dlyReminderService.create(title, description)
        this.reminderCollection[reminder.id] = reminder
        resolve('ok')
      })
    }
  },
  getters: {
    getAllReminders() {
      return this.reminderCollection
    }
  }
})
