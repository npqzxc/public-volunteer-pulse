<template>
  <section>
    <h2>记录列表</h2>
    <ul class="record-list">
      <li v-for="item in records" :key="item.id">
        <RouterLink :to="`/records/${item.id}`">{{ item.title }}</RouterLink>
        <span>{{ item.owner }} / {{ item.status }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchJson } from "../api/client";
import type { RecordItem } from "../types";

const records = ref<RecordItem[]>([]);
onMounted(async () => {
  records.value = await fetchJson<RecordItem[]>("/api/records");
});
</script>
