<script setup>
import { ref } from "vue";
import useTask from "@/composables/task";

const { storeTask } = useTask();

const body = ref("");

const handleAdd = async () => {
  const payload = { body: body.value };
  storeTask(payload);
};
</script>

<template>
  <input v-model="body" type="text" placeholder="🤔 What's the agenda?" />
  <button @click="handleAdd">Submit</button>
</template>
