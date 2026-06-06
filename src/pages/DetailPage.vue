<template>
  <section v-if="item">
    <h2>{{ item.title }}</h2>
    <p>{{ item.note }}</p>
    <p>{{ item.owner }} / {{ item.priority }} / {{ item.status }}</p>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchJson } from "../api/client";
import type { RecordItem } from "../types";

const props = defineProps<{ id: string }>();
const item = ref<RecordItem | null>(null);
onMounted(async () => {
  item.value = await fetchJson<RecordItem>(`/api/records/${props.id}`);
});
</script>
