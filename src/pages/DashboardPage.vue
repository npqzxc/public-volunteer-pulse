<template>
  <section v-if="payload">
    <div class="stats">
      <StatCard v-for="item in payload.totals" :key="item.label" :label="item.label" :value="item.value" />
    </div>
    <TaskTimeline :items="payload.records" />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import StatCard from "../components/StatCard.vue";
import TaskTimeline from "../components/TaskTimeline.vue";
import { fetchJson } from "../api/client";
import type { DashboardPayload } from "../types";

const payload = ref<DashboardPayload | null>(null);
onMounted(async () => {
  payload.value = await fetchJson<DashboardPayload>("/api/dashboard");
});
</script>
