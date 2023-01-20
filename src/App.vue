<template>
  <div id="app">
    <notifications group="foo"  class="mt-3"/>
    <TodoList></TodoList>
  </div>
</template>

<script>

import TodoList from './components/TodoList.vue';
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>

</style>
