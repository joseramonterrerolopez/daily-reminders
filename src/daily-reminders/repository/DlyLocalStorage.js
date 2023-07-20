import { cloneDeep } from 'lodash'

export default class DlyLocalStorage {
  static dlyStorageKey = '__dly__reminders'
  static version = 'dev'

  constructor() {
    this._initStorageIfNotExists()
  }

  create(reminder) {
    const reminders = this.getAll()
    reminders[reminder.id] = reminder
    localStorage.setItem(this._fullDlyStorageKey(), this._encode(reminders))
  }

  getAll() {
    return this._decode(localStorage.getItem(this._fullDlyStorageKey()))
  }

  toggleStatus(reminder) {
    const reminderToUpdate = cloneDeep(reminder)
    reminderToUpdate.active = !reminderToUpdate.active
    this._overwrite(reminderToUpdate)
    return reminderToUpdate
  }

  delete(id) {
    const reminders = this.getAll()
    delete reminders[id]
    localStorage.setItem(this._fullDlyStorageKey(), this._encode(reminders))
  }

  _overwrite(reminder) {
    this.delete(reminder.id)
    this.create(reminder)
  }

  _initStorageIfNotExists() {
    if (!localStorage.getItem(this._fullDlyStorageKey())) {
      localStorage.setItem(this._fullDlyStorageKey(), '{}')
    }
  }

  _fullDlyStorageKey() {
    return `${DlyLocalStorage.dlyStorageKey}__${DlyLocalStorage.version}`
  }

  _encode(objectParam) {
    return JSON.stringify(objectParam)
  }

  _decode(stringParam) {
    return JSON.parse(stringParam)
  }
}
