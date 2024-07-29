<script setup>
import { onMounted } from "vue";
import useTask from "@/composables/task";

const { tasks, getTasks, updateTask, deleteTask } = useTask();

const handleEdit = (task) => {
  const new_status = !task.completed;
  updateTask(task.$id, { completed: new_status });
};

const handleDestroy = (id) => {
  deleteTask(id);
};

onMounted(() => {
  getTasks();
});
</script>

<template>
  <div v-for="item in tasks" :key="item.$id">
    <ul>
      <s v-if="item.completed">
        <li>{{ item.$id }}</li>
        <li>{{ item.body }}</li>
        <li>{{ item.completed }}</li>
        <li>
          <input
            type="checkbox"
            id="uncomplete"
            @change="handleEdit(item)"
            checked
          />
        </li>
        <li>
          <button @click="handleDestroy(item.$id)">delete</button>
        </li>
      </s>
      <div v-else>
        <li>{{ item.$id }}</li>
        <li>{{ item.body }}</li>
        <li>{{ item.completed }}</li>
        <li>
          <input type="checkbox" id="complete" @change="handleEdit(item)" />
        </li>
        <li>
          <button @click="handleDestroy(item.$id)">delete</button>
        </li>
      </div>
    </ul>
  </div>
</template>
