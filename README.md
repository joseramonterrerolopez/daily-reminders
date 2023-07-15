# DailyReminders

DailyReminders is a simple app to save and remove all your needed reminders for the current day.
  
This app provides the user with a simple and beautiful GUI in order to:
  
* Create a reminder.
* Modify a reminder.
* Disable and enable a reminder.
* Fully delete a reminder.
* Visualize all the current daily reminders.

The app will store the data into your browser's local storage.
  
The enabled reminders will be moved to the next day and the disabled reminders will be deleted
when the day is over after 12:00 A.M and you enter into the application.

This app pretends to be very simple and avoid unnecessary management for this particular scenario. So past data will be never persisted nor accessible.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
