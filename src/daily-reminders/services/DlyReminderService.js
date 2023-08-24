import { DateTime } from 'luxon'

export default class DlyReminderService {
  constructor(dlyReminderRepository) {
    this.dlyReminderRepository = dlyReminderRepository
  }

  autoClearReminders() {
    if (this._isAutoClearNeeded()) {
      this.dlyReminderRepository.deleteDisabled()
      this.dlyReminderRepository.setLastDeletionTimestamp(this._getCurrentTimestamp())
    }
  }

  _isAutoClearNeeded() {
    const lastTimestamp = this.dlyReminderRepository.getLastDeletionTimestamp()
    if (lastTimestamp === null) {
      return true
    }
    const currentTimestamp = this._getCurrentTimestamp()
    if (lastTimestamp < currentTimestamp) {
      return true
    }
    return false
  }

  _getCurrentTimestamp() {
    return Number(DateTime.now().toISODate({ format: 'basic' }))
  }

  create(reminder) {
    const newReminder = {
      id: DateTime.now().toUnixInteger(),
      title: reminder.title,
      description: reminder.description,
      created_at: DateTime.now().toISO(),
      active: true
    }
    this.dlyReminderRepository.create(newReminder)
    return newReminder
  }

  modify(reminder, newFields) {
    if ('title' in newFields) {
      reminder.title = newFields.title
    }
    if ('description' in newFields) {
      reminder.description = newFields.description
    }
    this.dlyReminderRepository.update(reminder)
    return reminder
  }

  getAll() {
    return this.dlyReminderRepository.getAll()
  }

  toggleStatus(reminder) {
    reminder.active = !reminder.active
    this.dlyReminderRepository.update(reminder)
    return reminder
  }

  remove(reminder) {
    this.dlyReminderRepository.delete(reminder.id)
    return reminder
  }
}
