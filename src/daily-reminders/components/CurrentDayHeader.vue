<template>
  <div class="current-day-header">{{ today }}</div>
</template>
<style scoped>
.current-day-header {
  background-color: black;
  color: white;
  padding: 0.5em 1.2em;
  margin-bottom: 0.5em;
  font-size: 1.1em;
}
</style>
<script>
import { DateTime } from 'luxon'
export default {
  computed: {
    today() {
      return DateTime.now().toLocaleString()
    }
  }
}
</script>
