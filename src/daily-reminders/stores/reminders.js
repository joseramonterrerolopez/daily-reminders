import { defineStore } from 'pinia'
import DlyReminderService from '../services/DlyReminderService'
import DlyLocalStorage from '../repository/DlyLocalStorage'

const dlyReminderService = new DlyReminderService(new DlyLocalStorage())

export const useRemindersStore = defineStore('reminders', {
  state: () => ({
    reminderCollection: {},
    filterByStatus: 'all'
  }),
  actions: {
    autoClearReminders() {
      dlyReminderService.autoClearReminders()
    },
    initReminders() {
      this.reminderCollection = dlyReminderService.getAll()
    },
    createReminder(title, description) {
      let newReminder = { title, description }
      newReminder = dlyReminderService.create(newReminder)
      this.reminderCollection[newReminder.id] = newReminder
    },
    modifyReminder(reminder, newFields) {
      const updatedReminder = dlyReminderService.modify(reminder, newFields)
      this.reminderCollection[updatedReminder.id] = updatedReminder
    },
    toggleReminderStatus(reminder) {
      const updatedReminder = dlyReminderService.toggleStatus(reminder)
      this.reminderCollection[updatedReminder.id] = updatedReminder
    },
    removeReminder(reminder) {
      const reminderToDelete = dlyReminderService.remove(reminder)
      delete this.reminderCollection[reminderToDelete.id]
    },
    setFilterByStatus(status) {
      this.filterByStatus = status
    }
  },
  getters: {
    filteredReminders() {
      switch (this.filterByStatus) {
        case 'all':
          return this.reminderCollection
        case 'enabled':
          return this.enabledReminders
        case 'disabled':
          return this.disabledReminders
        default:
          console.error(`${this.filterByStatus} is not a valid`)
          return {}
      }
    },
    enabledReminders() {
      const filtered = {}
      for (const reminder of Object.values(this.reminderCollection)) {
        if (reminder.active) {
          filtered[reminder.id] = reminder
        }
      }
      return filtered
    },
    disabledReminders() {
      const filtered = {}
      for (const reminder of Object.values(this.reminderCollection)) {
        if (!reminder.active) {
          filtered[reminder.id] = reminder
        }
      }
      return filtered
    }
  }
})
