<template>
  <section>
    <h2>新建记录</h2>
    <form class="form" @submit.prevent="submit">
      <input v-model="title" placeholder="标题" />
      <input v-model="owner" placeholder="负责人" />
      <textarea v-model="note" placeholder="说明"></textarea>
      <button type="submit">提交</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fetchJson } from "../api/client";

const title = ref("");
const owner = ref("");
const note = ref("");
const message = ref("");

async function submit() {
  await fetchJson("/api/records", {
    method: "POST",
    body: JSON.stringify({ title: title.value, owner: owner.value, note: note.value })
  });
  message.value = "已提交";
  title.value = "";
  owner.value = "";
  note.value = "";
}
</script>
