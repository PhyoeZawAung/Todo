<template>
  <div class="row justify-content-center">
    <div class="col-11">
      <div class="card mt-3 ">
        <div class="row  p-3 align-items-center" @dblclick="toggle">
          <div class="col-8 ">
            <input v-if="toggleEdit" v-model="title" class="form-control" @keyup.enter="editTask" />
            <span v-else :class="{ done: todo.done }">{{ todo.title }}</span>


          </div>
          <div class="col text-right">
            <button :disabled="toggleEdit" class="btn btn-success align-items-center" @click="$emit('doneTask', todo.id)">

              <span class="material-icons md-18">check</span>

            </button>
            <button :disabled="toggleEdit" class="btn btn-danger align-items-center" @click="$emit('deleteTask', todo.id)">

              <span class="material-icons md-18">delete</span>

            </button>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  props: {

    todo: Object,
  },
  data: () => {
    return ({
      toggleEdit: false,
      title: ""
    })
  },
  methods: {
    toggle() {
      if (!this.todo.done == false) {
        this.$notify({
          group: "foo",
          title: "This task is already done",
          type: 'error'
        });
        return
      }
      this.toggleEdit = !this.toggleEdit

    },
    editTask() {

      this.toggle();
      this.$emit('editTask', { id: this.todo.id, title: this.title });
    }
  },
  mounted() {
    this.title = this.todo.title;
  }
}

</script>

<style>
.card {
  border-radius: 1rem !important;
}

.done {
  text-decoration: line-through;
}

.btn-success {
  margin-right: 28px !important;
}
</style>