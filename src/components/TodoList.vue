<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-11 mt-5">
        <img src="../assets/logo2.png" class="d-block mx-auto logo" />
        <label>New Task</label>
        <input
          type="text"
          class="form-control mt-2"
          v-model="todo"
          @keyup.enter="addTask"
        />
        <button class="btn btn-dark mt-3" @click="addTask">Add New Task</button>
      </div>
    </div>
    <transition-group
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class=" animate__animated animate__fadeOutRight"
    >
      <my-todo
        v-for="todo in getAllTodos"
        :key="todo.id"
        :todo="todo"
        @deleteTask="deleteTask($event)"
      ></my-todo>
    </transition-group>
  </div>
</template>

<script>
import MyTodo from "./MyTodo.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { MyTodo },
  data: () => {
    return {
      todo: "",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["getAllTodos"]),
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTask() {
      if (this.todo == "") {
        alert("task field is require");
        return;
      } // if the task is nothing
      const id = Math.floor(Math.random() * 1000) + 1;
      const data = { id: id, title: this.todo, done: false };
      this.addTodo(data); /// using mapAction
      this.todo = "";
      this.$notify({
        group: "foo",
        title: "New Task Created",
        type: "success",
      });
    },
  },
};
</script>
<style>
label {
  color: #fff;
}
.logo {
  width: 150px;
  height: 150px;
}
</style>