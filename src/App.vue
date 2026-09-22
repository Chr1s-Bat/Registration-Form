<template>
  <div id="app">
    <nav class="navbar">
      <!-- Use router-link instead of plain text -->
      <router-link to="/">Home</router-link> |
      <router-link to="/study-sessions">Study Sessions</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    
    <!-- This is where your page components (Home, StudySessions, About) will render -->
    <router-view />
  </div>
</template>

<style>
.navbar {
  padding: 1rem;
  background-color: #f3f4f6;
  margin-bottom: 1rem;
}
.navbar a {
  margin-right: 1rem;
  text-decoration: none;
  color: #2563eb;
  font-weight: bold;
}
.navbar a.router-link-exact-active {
  color: #1e40af;
  text-decoration: underline;
}
</style>