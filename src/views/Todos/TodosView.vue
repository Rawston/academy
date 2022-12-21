<template>
  <div class="about">
    <h1>Lista de Tarefas</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.identify">
        {{ todo.name }}
      </li>
          
    </ul>
  </div>
</template>

<script>
//import Name from '@/components/Name.vue';

export default {
    Name: 'Todos',
    setup() {
      const todos = [
        {identify: 1, name: 'tarefa 01', completed: true},
        {identify: 2, name: 'tarefa 02', completed: false},
        {identify: 3, name: 'tarefa 03', completed: true},
      ]
      return {
        todos
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
