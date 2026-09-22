<template>
  <div class="session-list">
    <h3>Scheduled Sessions</h3>
    <p v-if="sessions.length === 0">No study sessions added yet.</p>
    <ul>
      <StudysessionItem 
        v-for="session in sessions" 
        :key="session.id" 
        :session="session"
        @toggle-status="$emit('toggle-status', session.id)"
        @delete-session="$emit('delete-session', session.id)"
      />
    </ul>
  </div>
</template>

<script setup>
import StudysessionItem from './StudysessionItem.vue'

defineProps({
  sessions: {
    type: Array,
    required: true
  }
})

defineEmits(['toggle-status', 'delete-session'])
</script>