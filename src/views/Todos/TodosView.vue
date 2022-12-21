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
import { ref } from 'vue'

export default {
    Name: 'Todos',
    setup() {
      const todos = [
        {identify: 1, name: 'tarefa 01', completed: true},
        {identify: 2, name: 'tarefa 02', completed: false},
        {identify: 3, name: 'tarefa 03', completed: true},
      ]
      const name = ref('default value')
      return {
        todos, 
        name
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
