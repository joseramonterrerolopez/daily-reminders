export default class DlyLocalStorage {
  static dlyStorageKey = '__dly__reminders'
  static version = 'dev'

  constructor() {
    this._initStorageIfNotExists()
  }

  deleteDisabled() {
    const reminders = this.getAll()
    for (const reminder of Object.values(reminders)) {
      if (!reminder.active) {
        this.delete(reminder.id)
      }
    }
  }

  getLastDeletionTimestamp() {
    return this._decode(localStorage.getItem(this._deletionMomentStorageKey())).timestamp
  }

  setLastDeletionTimestamp(timestamp) {
    localStorage.setItem(this._deletionMomentStorageKey(), this._encode({ timestamp }))
  }

  create(reminder) {
    const reminders = this.getAll()
    reminders[reminder.id] = reminder
    localStorage.setItem(this._reminderStorageKey(), this._encode(reminders))
  }

  getAll() {
    return this._decode(localStorage.getItem(this._reminderStorageKey()))
  }

  update(reminder) {
    this.delete(reminder.id)
    this.create(reminder)
  }

  delete(id) {
    const reminders = this.getAll()
    delete reminders[id]
    localStorage.setItem(this._reminderStorageKey(), this._encode(reminders))
  }

  _initStorageIfNotExists() {
    if (!localStorage.getItem(this._reminderStorageKey())) {
      localStorage.setItem(this._reminderStorageKey(), '{}')
    }
    if (!localStorage.getItem(this._deletionMomentStorageKey())) {
      localStorage.setItem(this._deletionMomentStorageKey(), '{"timestamp":null}')
    }
  }

  _baseStorageKey() {
    return `${DlyLocalStorage.dlyStorageKey}__${DlyLocalStorage.version}`
  }

  _reminderStorageKey() {
    return `${this._baseStorageKey()}__reminders`
  }

  _deletionMomentStorageKey() {
    return `${this._baseStorageKey()}__timestamp`
  }

  _encode(objectParam) {
    return JSON.stringify(objectParam)
  }

  _decode(stringParam) {
    return JSON.parse(stringParam)
  }
}
