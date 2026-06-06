<template>
  <div class="shell">
    <header class="topbar">
      <h1>Volunteer Pulse</h1>
      <nav>
        <RouterLink to="/">仪表盘</RouterLink>
        <RouterLink to="/records">列表</RouterLink>
        <RouterLink to="/create">新建</RouterLink>
      </nav>
    </header>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>
