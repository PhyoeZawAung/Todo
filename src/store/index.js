import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    todos: [],
  },
  getters: {
    // return all of the todos list 
    getAllTodos(state) {
      return state.todos;
    }
  },
  mutations: {
    // add todo to the todos state 
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },

    // update todo that already exist on todos state
    UPDATE_TODO(state, { id, title }) {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id == id) {
          state.todos[i].title = title;
          return;
        }
      }
    },
    // set the todo to done in todos state
    DONE_TODO(state, id) {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id == id) {
          // If the state is already set as done the undo the done 
          if (state.todos[i].done == true) {
            state.todos[i].done = false;
          }
          else {
            state.todos[i].done = true;
          }
        }
      }
    },
    // delete todo from the todos
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((data) => data.id != id)
    }
  },

  // action can be unasyncnous
  actions: {
    // add action to commit add mutation
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },

    // update todo action to commit update mutation
    updateTodo({ commit }, { id, title }) {
      commit('UPDATE_TODO', { id, title })
    },

    //delete action to commit delect mutation
    deleteTodo({ commit }, id) {
      commit('DELETE_TODO', id)
    },

    // set the task done action to commit doneTodo mutation
    doneTodo({ commit }, id) {
      commit("DONE_TODO", id)
    }
  },

})
