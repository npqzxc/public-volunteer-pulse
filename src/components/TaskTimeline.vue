<template>
  <ul class="timeline">
    <li v-for="item in items" :key="item.id">
      <strong>{{ item.title }}</strong>
      <span>{{ item.status }} / {{ item.owner }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { RecordItem } from "../types";

defineProps<{ items: RecordItem[] }>();
</script>
