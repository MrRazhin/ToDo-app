import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    progress: JSON.parse(localStorage.getItem('progress') || '[]'),
    complete: JSON.parse(localStorage.getItem('complete') || '[]'),

  },
  mutations: {
    createTask(state, task) {
      state.tasks.unshift(task);

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }, 

    deleteTask(state, payload) {
      console.log(payload.list)
      let list;

      if (payload.list == 1) {
        list = state.tasks;
      }
      else if (payload.list == 2) {
        list = state.progress;
      }
      else if (payload.list == 3) {
        list = state.complete;
      }

      console.log(list);

      const idx = list.findIndex(t => t.id == payload.id);
      const myIndex = list.indexOf(list[idx]);

      if (myIndex !== -1 ) {
        list.splice(myIndex,1);
      }

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      localStorage.setItem('progress', JSON.stringify(state.progress));
      localStorage.setItem('complete', JSON.stringify(state.complete));
    },

    updateList(state, payload) {
      console.log(payload);

      if (payload.list == 'tasks') {
        state.tasks = payload.value;
      } 
      else if (payload.list == 'progress') {
        state.progress = payload.value;
      } 
      else if (payload.list == 'complete') {
        state.complete = payload.value;
      } 

      
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      localStorage.setItem('progress', JSON.stringify(state.progress));
      localStorage.setItem('complete', JSON.stringify(state.complete));
    },


  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },

    deleteTask({commit}, task) {
      commit('deleteTask', task)
    },

    updateList({commit}, payload) {
      commit('updateList', payload)
    },

  },

  getters: {
    todoList: state => {
      return state.tasks
    },
    progressList: state => {
      return state.progress
    },
    completeList: state => {
      return state.complete
    }
  },

  modules: {
  }
})
