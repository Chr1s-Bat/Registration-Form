<template>
  <form @submit.prevent="submitForm" class="session-form">
    <h3>Add New Study Session</h3>
    
    <div class="form-group">
      <label>Subject:</label>
      <input type="text" v-model="subject" placeholder="e.g., Data Structures" />
    </div>

    <div class="form-group">
      <label>Topic:</label>
      <input type="text" v-model="topic" placeholder="e.g., Binary Trees" />
    </div>

    <div class="form-group">
      <label>Study Method:</label>
      <select v-model="studyMethod">
        <option disabled value="">Please select one</option>
        <option>Reading</option>
        <option>Practice</option>
        <option>Review</option>
        <option>Group Study</option>
      </select>
    </div>

    <div class="form-group">
      <label>Study Date:</label>
      <input type="date" v-model="studyDate" />
    </div>

    <p v-if="error" class="error">{{ error }}</p>

    <button type="submit">Add Study Session</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-session'])

const subject = ref('')
const topic = ref('')
const studyMethod = ref('')
const studyDate = ref('')
const error = ref('')

function submitForm() {
  // Basic Validation
  if (!subject.value || !topic.value || !studyMethod.value || !studyDate.value) {
    error.value = 'All fields are required!'
    return
  }

  error.value = ''

  emit('add-session', {
    subject: subject.value,
    topic: topic.value,
    studyMethod: studyMethod.value,
    studyDate: studyDate.value
  })

  // Reset Form fields
  subject.value = ''
  topic.value = ''
  studyMethod.value = ''
  studyDate.value = ''
}
</script>

<style scoped>
.session-form {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 400px;
  margin-bottom: 2rem;
}
.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.error {
  color: red;
  font-size: 0.85rem;
}
</style>