<template>
  <div class="study-sessions-view">
    <h2>Manage Study Sessions</h2>
    <StudysessionForm @add-session="handleAddNewSession" />
    <StudysessionList 
      :sessions="studysessions" 
      @toggle-status="toggleStatus" 
      @delete-session="removeStudysession" 
    />
  </div>
</template>

<script setup>
import { useStudySessions } from '../composables/useStudySessions'
import StudysessionForm from '../components/StudysessionForm.vue'
import StudysessionList from '../components/StudysessionList.vue'

const { studysessions, addStudysession, removeStudysession, toggleStatus } = useStudySessions()

function handleAddNewSession(sessionData) {
  addStudysession({
    id: Date.now(),
    ...sessionData,
    completed: false
  })
}
</script>