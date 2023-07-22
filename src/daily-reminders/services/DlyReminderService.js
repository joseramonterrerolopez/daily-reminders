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
