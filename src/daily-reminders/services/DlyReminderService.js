import { DateTime } from 'luxon'

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

  filterByStatus(reminderCollection, sStatus) {
    if (sStatus === 'all') {
      return reminderCollection
    }
    if (sStatus === 'enabled') {
      return this._filterByStatus(reminderCollection, true)
    }
    if (sStatus === 'disabled') {
      return this._filterByStatus(reminderCollection, false)
    }
  }

  _filterByStatus(reminderCollection, bStatus) {
    const filtered = {}
    for (const reminder of Object.values(reminderCollection)) {
      if (reminder.active === bStatus) {
        filtered[reminder.id] = reminder
      }
    }
    return filtered
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
