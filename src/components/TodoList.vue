<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-11 mt-5">
                <img src="../assets/logo2.png" class="d-block mx-auto logo"/>
                <label>New Task</label>
                <input type="text" class="form-control mt-2" v-model="todo" @keyup.enter="addTask"/>
                <button class="btn btn-dark mt-3" @click="addTask" >Add New Task</button>
            </div>
        </div>
        <transition-group enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class=" animate__animated animate__fadeOutRight">
            <my-todo v-for="todo in todos" :key="todo.id" :todo="todo" @deleteTask="deleteTask($event)"
                @doneTask="doneTask($event)" @editTask="editTask($event)"></my-todo>
        </transition-group>
    </div>
</template>

<script>
import MyTodo from "./MyTodo.vue";

export default {
    components: { MyTodo },
    data: () => {
        return {
            todo: "",
            todos: [],
        };
    },
    methods: {
        // add the task to this 
        addTask() {
            if (this.todo == "") {
                alert("task field is require");
                return;
            } // if the task is nothing 
            let id = Math.floor(Math.random() * 1000) + 1;
            this.todos = [...this.todos, { id: id, title: this.todo, done: false }];
            this.todo = "";
            this.$notify({
                group: "foo",
                title: "New Task Created",
                text: this.todo,
                type: 'success'
            });
        },
        // delete the task
        deleteTask(id) {
            if (!confirm("Are you sure you want to delete")) return;
            this.todos = this.todos.filter((data) => data.id != id);
            this.$notify({
                group: "foo",
                title: "Task Delete Success",
                type: 'warn',
            });
        },
        // check if the task done
        doneTask(id) {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id == id) {
                    if (this.todos[i].done == true) {
                        // if the task is already done
                        // make undo function here
                        this.todos[i].done = false;
                        this.$notify({
                            group: "foo",
                            title: "Set the task as undone",
                            type: 'info'
                        });
                        
                        return;
                    }
                    this.todos[i].done = true;
                    this.$notify({
                        group: "foo",
                        title: "Set the task as done",
                        type: 'info'
                    });
                    return;
                }
            }
        },
         // edit the task 
        editTask({ id, title }) {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id == id) {
                    this.todos[i].title = title;
                    return; // stop the loop 
                }
            }
        },
    },
};
</script>
<style>
label {
    color: #fff;
}
.logo{
    width:150px;
    height:150px;
}
</style>