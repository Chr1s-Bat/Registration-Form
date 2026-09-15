<template>
  <div class="container mt-5">
    <div class="card shadow-sm border-0">
      <div class="card-body p-4">
        <h3 class="card-title mb-4">Registration Form</h3>
        
        <form @submit.prevent="register">
          <!-- Full Name Field -->
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              v-model="fullName" 
              class="form-control" 
              placeholder="Enter your full name" 
              required
            />
          </div>

          <!-- Email Field -->
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="form-control" 
              placeholder="Enter your email" 
              required
            />
          </div>

          <!-- Phone Field -->
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="phone" 
              class="form-control" 
              placeholder="Enter your phone number" 
              required
            />
          </div>

          <!-- Action Buttons -->
          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-primary">Register</button>
            <button type="button" class="btn btn-outline-danger" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Reactive variables initialized from localStorage if available
const fullName = ref(localStorage.getItem('fullName') || '')
const email = ref(localStorage.getItem('email') || '')
const phone = ref(localStorage.getItem('phone') || '')

// Watchers to automatically save changes to localStorage
watch(fullName, (newValue) => {
  localStorage.setItem('fullName', newValue)
})

watch(email, (newValue) => {
  localStorage.setItem('email', newValue)
})

watch(phone, (newValue) => {
  localStorage.setItem('phone', newValue)
})

// Submit the form
function register() {
  alert(`Registration successful! Welcome, ${fullName.value}!`)
}

// Clear the form fields and remove items from localStorage
function clearForm() {
  fullName.value = ''
  email.value = ''
  phone.value = ''

  localStorage.removeItem('fullName')
  localStorage.removeItem('email')
  localStorage.removeItem('phone')
}
</script>

<style scoped>
/* Add any custom component styles here if needed */
</style>