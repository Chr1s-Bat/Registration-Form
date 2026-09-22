<template>
  <li :class="{ completed: session.completed }" class="session-item">
    <div>
      <strong>{{ session.subject }}</strong> - {{ session.topic }} 
      <span class="badge">({{ session.studyMethod }})</span>
      <br />
      <small>Date: {{ formatDate(session.studyDate) }}</small>
    </div>
    <div class="actions">
      <button @click="$emit('toggle-status')">
        {{ session.completed ? 'Mark Incomplete' : 'Mark as Completed' }}
      </button>
      <button @click="$emit('delete-session')" class="delete-btn">Delete</button>
    </div>
  </li>
</template>

<script setup>
import { useStudySessions } from '../composables/useStudySessions'

defineProps({
  session: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle-status', 'delete-session'])

// Using the composable function for formatting dates uniformly
const { formatDate } = useStudySessions()
</script>

<style scoped>
.session-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px 15px;
  border: 1px solid #e5e7eb;
  margin-bottom: 8px;
  border-radius: 6px;
}
.completed {
  background-color: #d1fae5;
  text-decoration: line-through;
}
.actions button {
  margin-left: 5px;
  padding: 5px 10px;
}
.delete-btn {
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>