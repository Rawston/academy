<template>
  <div class="about">
    <h1>Lista de Tarefas</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.identify">
        {{ todo.name }}
      </li>          
    </ul>
    <input type="text" v-model="name">
  </div>
</template>

<script>
//import Name from '@/components/Name.vue';
import { onMounted, ref } from 'vue'
import TodoService from '@/services/todos.service'

export default {
    Name: 'Todos',
    setup() {
      const todos = ref([])
      onMounted(() => {
        TodoService.getAll()
                .then(response => todos.value = response.data.data)
                .catch(error => console.log(error));    
      })

      return {
        todos,
      }
    }
};

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
