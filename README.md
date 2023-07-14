# daily-reminders

DailyReminder is a simple app to save and remove all your needed reminders for a day.
  
This app provides the user with an elegant and beautiful GUI in order to:
  
* Create a reminder.
* Modify a reminder.
* Disable and enable a reminder.
* Fully delete a reminder.
* Visualize all their daily reminders.

The app will store the data into an internal local storage and it will delete the disabled reminders
when the day is over after 12:00 A.M.  
  
The enabled reminders will be moved to the next day.

This app pretends to be very simple and avoid unnecessary management for this particular scenario. So data
in the past will be never persisted nor accessible.

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
