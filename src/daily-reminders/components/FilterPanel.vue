<template>
  <div class="filter-panel">
    <MDBTabs>
      <MDBTabNav pills justify>
        <MDBTabItem @focus="setFilterByStatus('all')" tabId="filter_all" href="#!">All</MDBTabItem>
        <MDBTabItem @focus="setFilterByStatus('enabled')" tabId="filter_active" href="#!"
          >Active</MDBTabItem
        >
        <MDBTabItem @focus="setFilterByStatus('disabled')" tabId="filter_disabled" href="#!"
          >Disabled</MDBTabItem
        >
      </MDBTabNav>
    </MDBTabs>
  </div>
</template>
<style scoped>
.filter-panel {
  max-width: 767px;
  margin: 1.5em auto 2em auto;
}
</style>
<script>
import { MDBTabs, MDBTabNav, MDBTabItem } from 'mdb-vue-ui-kit'
import { useRemindersStore } from '@/daily-reminders/stores/reminders'
import { mapActions } from 'pinia'

export default {
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabItem
  },
  methods: {
    ...mapActions(useRemindersStore, ['setFilterByStatus'])
  }
}
</script>
