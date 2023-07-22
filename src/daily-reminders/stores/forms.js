import { defineStore } from 'pinia'

export const useCreateReminderFormStore = defineStore('createReminderForm', {
  state: () => ({
    visible: false,
    formCreate: {
      title: '',
      description: ''
    }
  }),
  actions: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    clearReminderForm() {
      this.formCreate.title = ''
      this.formCreate.description = ''
    }
  },
  getters: {
    isVisible() {
      return this.visible
    }
  }
})

export const useEditReminderFormStore = defineStore('editReminderForm', {
  state: () => ({
    visible: false,
    formEdit: {
      title: '',
      description: ''
    },
    reminderToEdit: null
  }),
  actions: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    setReminderToEdit(reminder) {
      this.reminderToEdit = reminder
      this.formEdit.title = reminder.title
      this.formEdit.description = reminder.description
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
