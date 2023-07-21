import { DateTime } from 'luxon'
import { cloneDeep } from 'lodash'

export default class DlyReminderService {
  constructor(dlyReminderRepository) {
    this.dlyReminderRepository = dlyReminderRepository
  }

  create(reminder) {
    const newReminder = {
      id: DateTime.now().toUnixInteger(),
      title: reminder.title,
      description: reminder.description,
      created_at: DateTime.now().toISO(),
      expires_on: DateTime.now().plus({ days: 1 }).toISODate(),
      active: true
    }
    this.dlyReminderRepository.create(newReminder)
    return newReminder
  }

  getAll() {
    return this.dlyReminderRepository.getAll()
  }

  toggleStatus(reminder) {
    const reminderToUpdate = cloneDeep(reminder)
    reminderToUpdate.active = !reminderToUpdate.active
    this.dlyReminderRepository.update(reminderToUpdate)
    return reminderToUpdate
  }

  remove(reminder) {
    this.dlyReminderRepository.delete(reminder.id)
    return reminder
  }
}
