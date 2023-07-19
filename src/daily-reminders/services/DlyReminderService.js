import { DateTime } from 'luxon'

export default class DlyReminderService {
  constructor(dlyReminderRepository) {
    this.dlyReminderRepository = dlyReminderRepository
  }

  create(title, description) {
    const reminder = {
      id: DateTime.now().toUnixInteger(),
      title: title,
      description: description,
      created_at: DateTime.now().toISO(),
      expires_on: DateTime.now().plus({ days: 1 }).toISODate(),
      active: true
    }
    this.dlyReminderRepository.create(reminder)
    return reminder
  }

  getAll() {
    return this.dlyReminderRepository.getAll()
  }
}
